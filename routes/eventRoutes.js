const express = require("express");
const router = express.Router();
const { getEvents, getEventById, addEvent, updateEvent, deleteEvent } = require("../controllers/eventController");
const isAuth = require("../middlewares/isAuth");

/*
@method: GET
@ path:http://localhost:5000/
private
*/
router.get("/",  getEvents);

/*
@method: POST
@ path:http://localhost:5000/event/addEvent
@ parameter: req.body  
private
*/
router.post("/addEvent", addEvent);

/*
@method: GET
@ path:http://localhost:5000/event/:eventId
private
*/
router.get("/:eventId",  getEventById);

/*
@method: PUT
@ path:http://localhost:5000/event/updateEvent/:eventId
private
*/
router.put("/updateEvent/:eventId", updateEvent);

/*
@method: DELETE
@ path:http://localhost:5000/event/deleteEvent/:eventId
private
*/
router.delete("/deleteEvent/:eventId",  deleteEvent);


// default export
module.exports = router;