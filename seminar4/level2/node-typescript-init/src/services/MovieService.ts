import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { MovieCreateDto } from "../interfaces/movie/MovieCreateDto";
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

const getMovie = async (movieId: string) => {
  try {
    const movie: MovieResponseDto | null = await Movie.findById(movieId);

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

export default {
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
};
