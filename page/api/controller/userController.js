import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, name, password, phone,dob } = req.body;

  if (!email || !password || !name || !phone) {
    return res.status(400).json({ message: "Fill alll the details" });
  }

  const isExistedUser = await User.findOne({ email });

  if (isExistedUser) {
    return res.status(400).json("This email is already exist !!");
  }

  const hashPassword = await bcrypt.hash(password, 10);

//   console.log(hashPassword);

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    phone,
    dob
  });

  return res.status(201).json({ message: newUser });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Fill alll the details" });
  }

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return res.status(400).json({ message: "User is not found !!" });
  }

  const hashedPassword = await bcrypt.compare(password, existingUser.password);
  // console.log(hashedPassword)

  if (!hashedPassword) {
    return res.status(400).json("Incorrect Cridentials");
  }

  const userData = existingUser.toObject();
  delete userData.password;
  // console.log(userData);

  const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "2d",
  });
  // console.log(token)

  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 2,
    })
    .json({
      message: "login SuccessFul",
      user: userData,
    });
};

export const getAllUsers = async (req, res) => {
  try {
    const response = await User.find({}).select("-password");

    // console.log(response);

    return res.status(200).json({ message: "All Users fetched", response });
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch Users data !!" });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    // console.log(userId);

    const data = await User.findByIdAndDelete(userId);
    // console.log(data);

    return res.status(200).json({ message: "Deleted successfully" });


  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
