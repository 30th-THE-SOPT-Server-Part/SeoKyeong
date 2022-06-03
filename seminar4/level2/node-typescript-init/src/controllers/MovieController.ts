import express, { Request, Response } from "express";
import { MovieCreateDto } from "../interfaces/movie/MovieCreateDto";
import { MovieResponseDto } from "../interfaces/movie/MovieResponseDto";
import { MovieUpdateDto } from "../interfaces/movie/MovieUpdateDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import MovieService from "../services/MovieService";
const { validationResult } = require("express-validator");

/**
 * @router POST /movie
 * @desc Create Movie
 * @access Public
 */
const createMovie = async (req: Request, res: Response) => {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  const movieCreateDto: MovieCreateDto = req.body;

  try {
    const data = await MovieService.createMovie(movieCreateDto);

    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_MOVIE_SUCCESS, data)
      );
  } catch (err) {
    console.log(err);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 * @route GET /movie/:movieId
 * @desc GET Movie
 * @access Public
 */
const getMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  try {
    const data = await MovieService.getMovie(movieId);

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_MOVIE_SUCCESS, data));
  } catch (err) {
    console.log(err);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 * @route PUT /movie/:movieId
 * @desc Update Movie
 * @access Public
 */
const updateMovie = async (req: Request, res: Response) => {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  const movieUpdateDto: MovieUpdateDto = req.body;
  const { movieId } = req.params;

  try {
    await MovieService.updateMovie(movieId, movieUpdateDto);

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.UPDATE_MOVIE_SUCCESS));
  } catch (err) {
    console.log(err);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 * @route DELETE /movie/:movieId
 * @desc DELETE Movie
 * @access Public
 */
const deleteMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  try {
    await MovieService.deleteMovie(movieId);

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.DELETE_MOVIE_SUCCESS));
  } catch (err) {
    console.log(err);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default {
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
};
