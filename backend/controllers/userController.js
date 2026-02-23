import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await userModel.findById(userId);

    if (!user) {
      res.json({ success: false, message: "User Not Found" });
    }

    res.json({
      success: true,
      userData: {
        _id: user._id, // ✅ ADD THIS
        name: user.name,
        isAccountVerified: user.isAccountVerified,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
