import { Router } from "express";
import { body } from "express-validator/check";
import MovieController from "../controllers/MovieController";
import auth from "../middleware/auth";

const router: Router = Router();

router.post(
  "/",
  [body("title").notEmpty(), body("director").notEmpty()],
  MovieController.createMovie
);

router.post(
  "/:movieId/comment",
  [body("writer").notEmpty(), body("comment").notEmpty()],
  MovieController.createMovieComment
);

router.get("/:movieId", MovieController.getMovie);
router.get("/", MovieController.getMoviesBySearch);

// 영화 수정
router.put(
  "/:movieId",
  [body("title").notEmpty(), body("director").notEmpty()],
  MovieController.updateMovie
);

// 영화 댓글 수정
router.put(
  "/:movieId/comments/:commentId",
  [body("comment").notEmpty()],
  auth,
  MovieController.updateMovieComment
);

// 영화 삭제
router.delete("/:movieId", MovieController.deleteMovie);

export default router;
