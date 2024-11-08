const Event = require("../Models/eventModel");
const ErrorHander = require("../utils/errorHandler");
const catchAsyncErrors = require("../Middlewares/catchAsyncErrors");

// Create Event -- Admin
exports.createEvent = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user._id;
    
    const event = await Event.create(req.body);
    res.status(201).json({
        success: true,
        event,
    });
});

// Get All Event
exports.getAllEvents = catchAsyncErrors(async (req, res, next) => {

    const events = await Event.find();

    res.status(200).json({
        success: true,
        events,
    });
});

// Get All Event (Admin)
exports.getAdminEvents = catchAsyncErrors(async (req, res, next) => {
    const events = await Event.find({user: req.user._id});

    res.status(200).json({
        success: true,
        events,
    });
});

// Get Event Details
exports.getEventDetails = catchAsyncErrors(async (req, res, next) => {
    const event = await Event.findById(req.params.id);

    if (!event) {
        return next(new ErrorHander("Event not found", 404));
    }

    res.status(200).json({
        success: true,
        event,
    });
});
