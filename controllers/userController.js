const UserSchema = require('../models/userSchema')
const bcrypt = require('bcrypt')

exports.addUser = async (req, res) => {
  try {
    const user = new UserSchema({ ...req.body });
    await user.save();
    res.status(200).send({ msg: "add user successfully" });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "error" }] });
  }
};


exports.getUsers = async (_, res) => {
  try {
    const users = await UserSchema.find()
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const users = await UserSchema.findById(req.params.userId)
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    let updatedUser = req.body 
    if (req.body.password) {
       updatedUser = {
        ...req.body,
        password: await bcrypt.hash(req.body.password, 10)
      }
    } 
    const user = await UserSchema.findByIdAndUpdate(
      req.params.userId,
      updatedUser,
      { new: true }
    )
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await UserSchema.findByIdAndRemove(req.params.userId)
    res.status(200).send({ msg: 'deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};

