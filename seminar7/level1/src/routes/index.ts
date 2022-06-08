//router index file
import { Router } from "express";
import MovieRouter from "./MovieRouter";
import ReviewRouter from "./ReviewRouter";
import UserRouter from "./UserRouter";
import FileRouter from "./FileRouter";

const router: Router = Router();

router.use("/user", UserRouter);
router.use("/review", ReviewRouter);
router.use("/movie", MovieRouter);
router.use("/file", FileRouter);

export default router;
