const Event = require("../Models/eventModel");
const ErrorHander = require("../utils/errorHandler");
const catchAsyncErrors = require("../Middlewares/catchAsyncErrors");
const Registeration= require("../Models/registerationModel");

exports.registerForEvent = catchAsyncErrors(async (req, res) => {
    const eventId  = req.params.id;

    const registration = {
        user: req.user._id,
        event: eventId,
    };

    const event = await Event.findById(eventId);

    const existingRegistration = await Registeration.findOne(registration);
    if(!existingRegistration){
        await Registeration.create(registration);
    }
    const registrationCount = await Registeration.countDocuments({ event: eventId });

    await Event.findByIdAndUpdate(
        eventId, 
        { numberOfRegistrations: registrationCount },
        { new: true }
    );
    res.status(200).json({
        success: true,
        message: "Registered For the Event!"
    });
});

exports.getUserEvents = catchAsyncErrors(async (req,res, next)=>{
    const registrations = await Registeration.find({ user: req.user._id }).populate("event");
    const events = registrations.map(registration => registration.event);

    res.status(200).json({
        success: true,
        events,
    });
});