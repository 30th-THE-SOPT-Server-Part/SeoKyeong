import { Request, Response } from "express";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import statusCode from "../modules/statusCode";
import { UserService } from "../services";
import util from "../modules/util";
import message from "../modules/responseMessage";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
const { validationResult } = require("express-validator");

/**
 *  @route POST /user
 *  @desc Create User
 *  @access Public
 */
const createUser = async (req: Request, res: Response) => {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  const userCreateDto: UserCreateDto = req.body;

  try {
    const data: PostBaseResponseDto = await UserService.createUser(
      userCreateDto
    );

    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATED_USER_SUCCESS, data)
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
 * @route PUT /user/:userId
 * @desc Update User
 * @access Public
 */
const updateUser = async (req: Request, res: Response): Promise<void> => {
  const userUpdateDto: UserUpdateDto = req.body;
  const { userId } = req.params;

  try {
    await UserService.updateUser(userId, userUpdateDto);

    res.status(statusCode.NO_CONTENT).send();
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
 * @route GET /user/:userId
 * @desc Get User
 * @access Public
 */
const findUserById = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;

  try {
    const data: UserResponseDto | null = await UserService.findUserById(userId);

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_USER_SUCCESS, data));
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
 * @route DELETE /user/:userId
 * @desc Delete User
 * @access Public
 */
const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;

  try {
    await UserService.deleteUser(userId);

    res.status(statusCode.NO_CONTENT).send();
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
  createUser,
  updateUser,
  findUserById,
  deleteUser,
};
