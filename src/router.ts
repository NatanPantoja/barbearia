import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailuserController } from "./controllers/user/DetailUserController";

import { CreateServiceController } from "./controllers/service/CreateServiceController";
import { DeleteServiceController } from "./controllers/service/DeleteServiceController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailuserController().handle);

//-- ROTAS SERVICES
router.post(
  "/service",
  isAuthenticated,
  upload.single("file"),
  new CreateServiceController().handle
);
router.delete(
  "/service/:id",
  isAuthenticated,
  new DeleteServiceController().handle
);

export { router };
