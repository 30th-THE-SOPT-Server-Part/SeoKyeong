//router index file
import { Router } from 'express';
import UserRouter from "./UserRouter";

const router = Router();

router.use('/blog', UserRouter);

export default router;