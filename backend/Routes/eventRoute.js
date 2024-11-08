const express = require("express");
const {
    createEvent,
    getAllEvents,
    getAdminEvents,
    getEventDetails
} = require("../Controllers/eventController");
const { isAuthenticatedUser, authorizeRoles } = require("../Middlewares/auth");
const { registerForEvent } = require("../Controllers/registerationController");

const Router = express.Router();

Router.route("/events").get(getAllEvents);

Router
    .route("/admin/events").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminEvents);

Router
    .route("/admin/event/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createEvent);

Router.route("/event/:id")
    .get(getEventDetails)
    .put(isAuthenticatedUser, registerForEvent);

module.exports = Router;