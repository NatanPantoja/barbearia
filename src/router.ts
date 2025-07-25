import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailuserController } from "./controllers/user/DetailUserController";

import { CreateProdutoController } from "./controllers/produto/CreateProdutoController";
import { DeleteProdutoController } from "./controllers/produto/DeleteProdutoController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/login", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailuserController().handle);

//-- ROTAS PRODUTO --
router.post(
  "/produto",
  isAuthenticated,
  upload.single("file"),
  new CreateProdutoController().handle
);
router.delete(
  "/produto",
  isAuthenticated,
  new DeleteProdutoController().handle
);

export { router };
