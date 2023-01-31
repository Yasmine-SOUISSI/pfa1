const express = require("express");
const router = express.Router();
const { getUsers, getUserById, updateUser, deleteUser } = require("../controllers/userController");
const isAuth = require("../middlewares/isAuth");

/*
@method: GET
@ path:http://localhost:8080/
private
*/
router.get("/",  getUsers);

/*
@method: GET
@ path:http://localhost:8080/user/:userId
private
*/
router.get("/:userId",  getUserById);

/*
@method: PUT
@ path:http://localhost:8080/user/updateUser/:userId
private
*/
router.put("/updateUser/:userId",  updateUser);

/*
@method: DELETE
@ path:http://localhost:8080/user/deleteUser/:userId
private
*/
router.delete("/deleteUser/:userId",  deleteUser);


// default export
module.exports = router;