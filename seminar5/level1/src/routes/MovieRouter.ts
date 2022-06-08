import { Router } from "express";
import { body } from "express-validator/check";
import MovieController from "../controllers/MovieController";
import auth from "../middleware/auth";

const router: Router = Router();

// 영화 생성
router.post(
  "/",
  [body("title").notEmpty(), body("director").notEmpty()],
  MovieController.createMovie
);
// 영화 조회
router.get("/:movieId", MovieController.getMovie);
// 영화 수정
router.put(
  "/:movieId",
  [body("title").notEmpty(), body("director").notEmpty()],
  MovieController.updateMovie
);
// 영화 댓글 작성
router.post(
  "/:movieId/comment",
  [body("writer").notEmpty(), body("comment").notEmpty()],
  MovieController.createMovieComment
);
// 영화 삭제
router.delete("/:movieId", MovieController.deleteMovie);
// 영화 댓글 수정
router.put(
  "/:movieId/comments/:commentId",
  [body("comment").notEmpty()],
  auth,
  MovieController.updateMovieComment
);

export default router;
