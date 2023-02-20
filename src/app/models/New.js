import mongoose from "mongoose";

const Schema = mongoose.Schema;

const New = new Schema(
  {
    title: { type: String, default: "no title" },
    description: { type: String },
    image: { type: String, default: "https://picsum.photos/200/300" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("New", New);
