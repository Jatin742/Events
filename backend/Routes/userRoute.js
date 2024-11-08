const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
} = require("../Controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../Middlewares/auth");
const { getUserEvents } = require("../Controllers/registerationController");

const Router = express.Router();

Router.route("/register").post(registerUser);

Router.route("/login").post(loginUser);

Router.route("/logout").get(logout);

Router.route("/me").get(isAuthenticatedUser, getUserDetails);

Router.route("/user/events").get(isAuthenticatedUser, getUserEvents)

module.exports = Router;