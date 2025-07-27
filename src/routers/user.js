import { Router } from "express";
import { registerSchema } from "../validation/user.js";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../utils/validateBody.js";
import { registerController } from "../controllers/user.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateBody(registerSchema),
  ctrlWrapper(registerController)
);

export default authRouter;