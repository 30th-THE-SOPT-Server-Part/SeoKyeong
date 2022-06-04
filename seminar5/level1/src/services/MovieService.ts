import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { MovieCommentCreateDto } from "../interfaces/movie/MovieCommentCreateDto";
import { MovieCommentUpdateDto } from "../interfaces/movie/MovieCommentUpdateDto";
import { MovieCreateDto } from "../interfaces/movie/MovieCreateDto";
import { MovieCommentInfo, MovieInfo } from "../interfaces/movie/MovieInfo";
import { MovieResponseDto } from "../interfaces/movie/MovieResponseDto";
import { MovieUpdateDto } from "../interfaces/movie/MovieUpdateDto";
import Movie from "../models/Movie";

const createMovie = async (
  movieCreateDto: MovieCreateDto
): Promise<PostBaseResponseDto> => {
  try {
    const movie = new Movie(movieCreateDto);

    await movie.save();

    const data = {
      _id: movie._id,
    };

    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getMovie = async (movieId: string): Promise<MovieResponseDto | null> => {
  try {
    const movie = await Movie.findById(movieId).populate(
      "comments.writer",
      "name"
    );
    if (!movie) return null;

    return movie;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updateMovie = async (movieId: string, movieUpdateDto: MovieUpdateDto) => {
  try {
    const updatedMovie = {
      title: movieUpdateDto.title,
      director: movieUpdateDto.director,
      startDate: movieUpdateDto.startDate,
      thumbnail: movieUpdateDto.thumbnail,
      story: movieUpdateDto.story,
    };

    await Movie.findByIdAndUpdate(movieId, updatedMovie);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const deleteMovie = async (movieId: string) => {
  try {
    await Movie.findByIdAndDelete(movieId);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const createMovieComment = async (
  movieId: string,
  movieCommentCreateDto: MovieCommentCreateDto
): Promise<MovieInfo | null> => {
  try {
    const movie = await Movie.findById(movieId);
    if (!movie) return null;

    const newComments: MovieCommentInfo[] = [
      ...movie.comments,
      movieCommentCreateDto,
    ];

    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: movieId },
      { comments: newComments },
      { new: true }
    );
    if (!updatedMovie) return null;

    return updatedMovie;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateMovieComment = async (
  movieId: string,
  commentId: string,
  userId: string,
  commentUpdateDto: MovieCommentUpdateDto
): Promise<MovieInfo | null> => {
  try {
    const movie = await Movie.findById(movieId);

    if (!movie) return null;

    const data = await Movie.findOneAndUpdate(
      {
        _id: movieId,
        comments: { $elemMatch: { _id: commentId, writer: userId } },
      },
      {
        $set: {
          "comments.$.writer": userId,
          "comments.$.comment": commentUpdateDto.comment,
        },
      },
      { new: true }
    );

    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default {
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
  createMovieComment,
  updateMovieComment,
};
