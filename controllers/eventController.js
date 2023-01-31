const EventSchema = require("../models/eventSchema");

exports.addEvent = async (req, res) => {
  try {
    const event = new EventSchema({ ...req.body });
    await event.save();
    res.status(200).send({ msg: "add event successfully" });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "error" }] });
  }
};

exports.getEvents = async (_, res) => {
  try {
    const events = await EventSchema.find()
    res.status(200).send({ data: events });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getEventById = async (req, res) => {
  try {
    const events = await EventSchema.findById(req.params.eventId)
    res.status(200).send({ data: events });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await EventSchema.findByIdAndUpdate(
      req.params.eventId,
      req.body,
      { new: true }
    )
    res.status(200).send({ data: event });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await EventSchema.findByIdAndRemove(req.params.eventId)
    res.status(200).send({ msg: 'deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};