import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import ReviewService from "../services/ReviewService";
import { ReviewOptionType } from "../interfaces/review/ReviewOptionType";
const { validationResult } = require("express-validator");

/**
 * @route POST /review/movies/:movieId
 * @desc Create Review   //description
 * @access Public
 */
const createReview = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }
  const reviewCreateDto: ReviewCreateDto = req.body;
  const { movieId } = req.params;

  try {
    const data = await ReviewService.createReview(movieId, reviewCreateDto);
    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_REVIEW_SUCCESS, data)
      );
  } catch (error) {
    console.log(error);
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
 * @route GET /review/movies/:movieId
 * @desc GET Review
 * @access Public
 */
const getReviews = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const { search, option } = req.query;
  const page: number = Number(req.query.page || 1);
  let data;

  try {
    if (search && option) {
      const isOptionType = (option: string): option is ReviewOptionType => {
        return ["title", "content", "title_content"].indexOf(option) !== -1;
      };

      if (!isOptionType(option as string)) {
        return res
          .status(statusCode.BAD_REQUEST)
          .send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
      }
      data = await ReviewService.getReviews(
        movieId,
        search as string,
        option as ReviewOptionType,
        page
      );
    } else if (!search && !option) {
      data = await ReviewService.getAllReviews(movieId, page);
    } else {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
    }
    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.SEARCH_REVIEW_SUCCESS, data));
  } catch (error) {
    console.log(error);
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
  createReview,
  getReviews,
};
