import { WriterInfo } from "../writer/WriterInfo";

export interface UserInfo {
    writer: WriterInfo;
    phone: string;
    email: string;
    date: number;
}