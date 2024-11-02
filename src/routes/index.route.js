import Router from "express";
const router = Router();
import userRouter from "./user.route.js";

router.use("/api/v1/users", userRouter);

export default router;