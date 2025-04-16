const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

  exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = new User.deleteOne({ _id: id });
      res.status(201).json({ message: "user deleted successfull" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
};
