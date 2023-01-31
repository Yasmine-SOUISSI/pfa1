const express = require("express");
const router = express.Router();
const { getSessions, getSessionById, addSession, updateSession, deleteSession } = require("../controllers/sessionController");
const isAuth = require("../middlewares/isAuth");

/*
@method: GET
@ path:http://localhost:5000/sessions
private
*/
router.get("/",  getSessions);

/*
@method: POST
@ path:http://localhost:5000/sessions/addSession
@ parameter: req.body  
private
*/
router.post("/addSession",  addSession);

/*
@method: GET
@ path:http://localhost:5000/sessions/:sessionId
private
*/
router.get("/:sessionId",  getSessionById);

/*
@method: PUT
@ path:http://localhost:5000/sessions/updateSession/:sessionId
private
*/
router.put("/updateSession/:sessionId",  updateSession);

/*
@method: DELETE
@ path:http://localhost:5000/sessions/deleteSession/:sessionId
private
*/
router.delete("/deleteSession/:sessionId",  deleteSession);


// default export
module.exports = router;