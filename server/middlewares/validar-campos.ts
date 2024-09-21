import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const validarCampos = (req: Request, res: Response, next: NextFunction): void => {
    // manejo de errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
        return;
    }

    next();
}

export { validarCampos };