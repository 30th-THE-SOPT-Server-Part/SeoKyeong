//router index file
import { Router } from "express";
import MovieRouter from "./MovieRouter";
import ReviewRouter from "./ReviewRouter";
import UserRouter from "./UserRouter";

const router: Router = Router();

router.use("/user", UserRouter);
router.use("/review", ReviewRouter);
router.use("/movies", MovieRouter);

export default router;
