import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { BlogCreateDto } from "../interfaces/user/BlogCreateDto";
import { BlogUpdateDto } from "../interfaces/user/BlogUpdateDto";
import responseMessage from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import UserService from "../services/UserService";
import express, {Request, Response} from 'express';
import { BlogResponseDto } from "../interfaces/user/BlogResponseDto";

/**
 *  @route POST /blog
 *  @desc Create Blog
 *  @access Public
 */
// Blog 생성
const createBlog = async (req: Request, res: Response): Promise<void> => {
    const blogCreateDto: BlogCreateDto = req.body;

    try {
        const data: PostBaseResponseDto = await UserService.createBlog(blogCreateDto);
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, responseMessage.CREATED_USER_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @router PUT /blog/:postId
 * @desc Update Blog
 * @access Public
 */
// Blog 수정
const updateBlog = async (req: Request, res: Response): Promise<void> => {
    const blogUpdateDto: BlogUpdateDto = req.body;
    const { postId } = req.params;

    try{
        await UserService.updateBlog(postId, blogUpdateDto);
        res.status(statusCode.NO_CONTENT).send();
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @route GET /blog/:postId
 * @desc GET Blog
 * @access Public
 */
// Blog 조회
const findBlogById = async (req: Request, res: Response): Promise<void> => {
    const { postId } = req.params;

    try {
        const data: BlogResponseDto | null = await UserService.findBlogById(postId);
        res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_USER_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @route DELETE /blog/:postId
 * @desc Delete Blog
 * @access Public
 */
// Blog 삭제
const deleteBlog = async (req: Request, res: Response): Promise<void> => {
    const { postId } = req.params;

    try {
        await UserService.deleteBlog(postId);
        res.status(statusCode.NO_CONTENT).send();
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createBlog,
    updateBlog,
    findBlogById,
    deleteBlog
}