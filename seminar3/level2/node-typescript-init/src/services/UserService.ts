import { BlogCreateDto } from "../interfaces/user/BlogCreateDto"
import { BlogResponseDto } from "../interfaces/user/BlogResponseDto";
import { BlogUpdateDto } from "../interfaces/user/BlogUpdateDto";
import User from "../models/User"

const createBlog = async (blogCreateDto: BlogCreateDto) => {
    try {
        const blog = new User ({
            writer: blogCreateDto.writer,
            phone: blogCreateDto.phone,
            email: blogCreateDto.email,
            date: blogCreateDto.date
        });

        await blog.save();

        const data = {
            _id: blog._id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateBlog = async (postId: string, blogUpdateDto: BlogUpdateDto) => {
    try {
        const updatedBlog = {
            writer: blogUpdateDto.writer,
            phone: blogUpdateDto.phone,
            email: blogUpdateDto.email,
            date: blogUpdateDto.date
        }

        await User.findByIdAndUpdate(postId, updatedBlog);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const findBlogById = async (postId: string) => {
    try {
        const blog: BlogResponseDto | null = await User.findById(postId);

        return blog;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteBlog = async (postId: string) => {
    try {
        await User.findByIdAndDelete(postId);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    createBlog,
    updateBlog,
    findBlogById,
    deleteBlog
}