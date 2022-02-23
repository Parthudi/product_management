import mongoose, {Types} from "mongoose";

interface IProduct {
  name: string;
  image: Buffer;
  product_code: string;
  price: number;
  category: Types.ObjectId;
  owner: Types.ObjectId;
  manufacture_date: Date;
  expiry_date: Date;
  status: string;
  modified_at: Date;
}

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    require: [true, "Please enter name"],
  },
  image: {
    type: Buffer,
    required: [true, "Please put image"],
  },
  product_code: { type: String, required: [true, "Please enter product code"] },
  price: { type: Number, required: [true, "Please enter price"] },
  category: { type: "ObjectId", ref: "category" },
  owner: {type: "ObjectId", ref: "users"},
  manufacture_date: { type: Date, default: Date() },
  expiry_date: {type: Date, default: Date()},
  status: {type: String, default: "unsold"},
  modified_at: { type: Date, default: Date() },
});

export interface IProductSchema extends IProduct, mongoose.Document {}
export default mongoose.model<IProductSchema>("products", productSchema);
