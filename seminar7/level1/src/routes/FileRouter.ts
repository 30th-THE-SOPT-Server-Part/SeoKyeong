import { Router } from "express";
import upload from "../config/multer";
import FileController from "../controllers/FileController";

const router: Router = Router();

//router.post("/upload", upload.single("file"), FileController.uploadFileToS3);
router.post("/upload", upload.array("file"), FileController.uploadFilesToS3);

export default router;
