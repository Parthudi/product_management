import mongoose from "mongoose";

interface ICategory {
  name: string;
}
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    require: [true, "Please enter name"],
    trim: true
  }
}, {timestamps: true});

export interface ICategorySchema extends ICategory, mongoose.Document {}
export default mongoose.model<ICategorySchema>("category", categorySchema);
