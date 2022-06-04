import { MovieCreateDto } from "./MovieCreateDto";
import { MovieCommentInfo } from "./MovieInfo";

export interface MovieResponseDto extends MovieCreateDto {
  comments?: MovieCommentInfo[];
}
