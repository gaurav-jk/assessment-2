const express = require("express");
const userController = require("../controller/user-controller");
const route = express.Router();

route.get("/posts", userController.getPost);

route.get("/posts/[postId]/comments" , userController.getComments)


module.exports = route