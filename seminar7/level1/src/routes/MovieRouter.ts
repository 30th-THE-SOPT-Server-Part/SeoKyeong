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

export default router;
