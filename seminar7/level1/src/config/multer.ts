import config from ".";
import multer from "multer";
import multerS3 from "multer-s3";
import s3 from "./s3Config";

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.bucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: function (req: Express.Request, file: Express.MulterS3.File, cb) {
      cb(null, `${Date.now()}_${file.originalname}`); //originalName: 파일의 처음 이름
    },
  }),
});

export default upload;
