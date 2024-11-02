import { Router } from "express";
const router = Router();
import { createUserCtrl, findUserCtrl, findUsersCtrl, updateUserCtrl, delUserCtrl } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createUserSchema, updateUserSchema } from "../schema/user.schema.js";

router.post("/", validate(createUserSchema), createUserCtrl);

router.get("/", findUsersCtrl);
router.get("/:id", findUserCtrl);

router.patch("/:id", validate(updateUserSchema), updateUserCtrl);

router.delete("/:id", delUserCtrl);

export default router;