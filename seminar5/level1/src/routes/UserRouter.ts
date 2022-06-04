import { Router } from "express";
import { body } from "express-validator/check";
import { UserController } from "../controllers";

const router: Router = Router();

router.post(
  "/",
  [
    body("name").notEmpty().trim(),
    body("email").notEmpty().isEmail(),
    body("password").isLength({ min: 6 }),
    body("phone").notEmpty().trim(),
    body("age").isNumeric(),
  ],
  UserController.createUser
);
router.post(
  "/signin",
  [
    body("email").notEmpty().isEmail(),
    body("password").isLength({ min: 6 }).notEmpty(),
  ],
  UserController.signInUser
);
router.put("/:userId", UserController.updateUser);
router.get("/:userId", UserController.findUserById);
router.delete("/:userId", UserController.deleteUser);

export default router;
