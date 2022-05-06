import { WriterInfo } from "../writer/WriterInfo";

export interface BlogUpdateDto {
    writer?: WriterInfo;
    phone?: string;
    email?: string;
    date?: number;
}