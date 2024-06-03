import express from "express";
import { getBook, getBookById } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/:id", getBookById);  // Add this line to handle fetching a book by ID

export default router;