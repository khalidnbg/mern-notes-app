import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Please enter a user ID"],
  },
  title: {
    type: String,
    required: [true, "Please enter a title"],
    maxlength: [40, "Title must be at least 40 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter a title"],
    maxlength: [200, "Description must be at least 40 characters"],
  },
  color: {
    type: String,
    default: "#FFFFFF",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Note", NoteSchema);
