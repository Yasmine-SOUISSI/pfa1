
const SessionSchema = require("../models/sessionSchema");

// Create and Save a new Message
exports.addSession = async (req, res) => {
  try {
    const session = new SessionSchema({ ...req.body });
    await session.save();

    res.status(200).send({ msg: "add session successfully" });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "error" }] });
  }
};

// Retrieve all messages from the database.

exports.getSessions = async (_, res) => {
  try {
    const sessions = await SessionSchema.find()
    res.status(200).send({ data: sessions });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Find a single session with a sessionId
exports.getSessionById = async (req, res) => {
  try {
    const sessions = await SessionSchema.findById(req.params.sessionId)
    res.status(200).send({ data: sessions });
  } catch (error) {
    res.status(500).send(error);
  }
};


// Update a session identified by the sessionId in the request
exports.updateSession = async (req, res) => {
  try {
    const session = await SessionSchema.findByIdAndUpdate(
      req.params.sessionId,
      req.body,
      { new: true }
    )
    res.status(200).send({ data: session });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete a session with the specified sessionId in the request

exports.deleteSession = async (req, res) => {
  try {
    const session = await SessionSchema.findByIdAndRemove(req.params.sessionId)
    res.status(200).send({ msg: 'deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};
