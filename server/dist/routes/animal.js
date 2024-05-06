import express from "express";
import { singleUpload } from "../middleware/multer.js";
import { createAnimal, deleteAnimal, getAllAnimal, updateAnimal } from "../controllers/animal.js";
const router = express.Router();
router.route("/all").get(getAllAnimal);
router.route("/:id").delete(deleteAnimal).put(singleUpload, updateAnimal);
router.route("/new").post(singleUpload, createAnimal);
export default router;
