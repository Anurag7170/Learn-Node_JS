import { User } from "../model/user.model.js";
import { uploadCloudinary } from "../utils/Cloudinary.js";

export const registerUser = async (req, res) => {
  //get user details from frontend
  const { username, fullName, password, email } = req.body;
  //validation
  //check if user exist
  const existUser = await User.findOne({email});
  if (existUser) {
    return res.json(400).json({
      sucess: false,
      message: "User Already Exist",
    });
  }
  //check for image and avatar
  // console.log(req.files);



  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  console.log("hii",avatarLocalPath); 

  if (!avatarLocalPath) {
    return res.status(400).json({
      sucess: false,
      message: "Avatar files is required",
    });
  }

  const avatar = await uploadCloudinary(avatarLocalPath);
  const coverImage = await uploadCloudinary(coverImageLocalPath);
  console.log(avatar)
  if (!avatar) {
    res.json({
      message: "Avatar is required",
    });
  }

  const user = await User.create({
    fullName,
    avatar: avatar?.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  return res
    .status(201)
    .json({
        sucess:true,
        message:"User is created"
    });
  //upload to cloudinary
  //create user object
  // remove password
  //return res
};
