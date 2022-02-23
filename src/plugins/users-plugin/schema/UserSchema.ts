import mongoose from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
  user_type: string;
  created_at: Date;
  modified_at: Date;
}

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: [true, "Please enter username"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
  },
  password: { type: String, required: [true, "Please enter password name"] },
  user_type: {type: String, default: "user"},
  created_at: { type: Date, default: Date() },
  modified_at: { type: Date, default: Date() },
});

export interface IUserSchema extends IUser, mongoose.Document {}
export default mongoose.model<IUserSchema>("users", userSchema);
