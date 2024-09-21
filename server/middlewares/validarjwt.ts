import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validarJWT = (req: Request, res: Response, next: NextFunction) => {

    // x-token headers
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid, email } = jwt.verify(token, process.env.SECRET_JWT_SEED!) as { uid: string, email: string };

        (req as any).uid = uid;
        (req as any).email = email;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

    next();
}

export { validarJWT };