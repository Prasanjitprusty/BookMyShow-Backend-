import userModel from "../models/user.js";

class userController {
  static getAllUsers = async (req, res) => {
    try {
      const allUsers = await userModel.find({});
      if (allUsers) {
        return res.status(200).json(allUsers);
      } else {
        return res.status(404).json({ message: "No users found" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static createUser = async (req, res) => {
    try {
      const { movie, time, seats } = req.body;
      if (movie && time && seats) {
        const newUser = new userModel({ movie, time , seats });
        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
      const getSingleData = await userModel.findById(id);
      if (getSingleData) {
        return res.status(202).json(getSingleData);
      } else {
        return res.status(400).json({ message: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      const getUpdateData = await userModel.findByIdAndUpdate(id, req.body, { new: true });
      if (getUpdateData) {
        return res.status(200).json(getUpdateData);
      } else {
        return res.status(400).json({ message: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const getDeleteData = await userModel.findByIdAndDelete(id);
      if (getDeleteData) {
        return res.status(200).json({ message: "User deleted successfully" });
      } else {
        return res.status(400).json({ message: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
}

export default userController;
