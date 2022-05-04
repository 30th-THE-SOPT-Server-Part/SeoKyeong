import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.send('<h1> 좋아요 누르기 성공!!')
});

module.exports = router;