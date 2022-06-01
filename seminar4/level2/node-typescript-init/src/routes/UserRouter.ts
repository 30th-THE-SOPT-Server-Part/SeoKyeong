import { Router } from "express";
import { body } from "express-validator";
import { UserController } from "../controllers";

const router: Router = Router();

router.post(
  "/",
  [
    body("name").notEmpty().trim(),
    body("email").notEmpty().isEmail(),
    body("phone").notEmpty().trim(),
    body("age").isNumeric(),
  ],
  UserController.createUser
);
router.put("/:userId", UserController.updateUser);
router.get("/:userId", UserController.findUserById);
router.delete("/:userId", UserController.deleteUser);

export default router;
