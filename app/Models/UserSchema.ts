// import { EmailAddress } from "@clerk/nextjs/server";
// import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkUserId: {type: String, unique: true, required: true},
    EmailAddress: {type: String, required: true},
  },
  {timestamps : true}
);

// if the user model does not exist in the database then we will directly create the user->
const User = mongoose.models.User || mongoose.model("User",userSchema);

export default User;