import { WriterInfo } from "../writer/WriterInfo";

export interface BlogCreateDto {
    writer: WriterInfo;
    phone?: string;
    email: string;
    date: number;
}