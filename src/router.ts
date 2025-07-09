import { Router } from "express";

const router = Router();

//-- ROTAS USER --
router.post('/users', new AuthUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated,  new DetailuserController().handle )


export { router };
