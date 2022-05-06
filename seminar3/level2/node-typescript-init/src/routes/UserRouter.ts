import { Router } from "express";
import { UserController } from "../controllers";

const router: Router = Router();

router.post('/', UserController.createBlog);
router.put('/:postId', UserController.updateBlog);
router.get('/:postId', UserController.findBlogById);
router.delete('/:postId', UserController.deleteBlog);

export default router;