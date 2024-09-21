/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
import { Router } from 'express';
import { check } from 'express-validator';
import { crearUsuario, loginUsuario, revalidarToken } from '../controller/auth';
import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validarjwt';

const router = Router();

router.post(
    '/new', 
    [ // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario 
);

router.post(
    '/login',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario 
);

router.get('/check-status', validarJWT, revalidarToken);

export default router;