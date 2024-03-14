import express from "express";
import {
  getNotes,
  createNote,
  getSingleNote,
  updateote,
  deleteNote,
} from "../controllers/notes.js";

const router = express.Router();

router.route("/").get(getNotes).post(createNote);

router.route("/:id").get(getSingleNote).put(updateote);

router.delete("/:id", deleteNote);

export default router;
