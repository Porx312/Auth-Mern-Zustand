import { Request, Response } from 'express';
import { User } from '../model/userModel';
import { generarJWT } from '../helpers/jwt';
import * as bcrypt from 'bcrypt';

const crearUsuario = async (req: Request, res: Response) => {
    const { email, password, name } = req.body;

    try {
        let usuario = await User.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }

        usuario = new User({ email, password, name });

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(password, salt);

        await usuario.save();

        // Generar JWT
        const token = await generarJWT(usuario.id, name);

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const loginUsuario = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const usuario = await User.findOne({ email })

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

        // Confirmar los passwords
        const validPassword = await bcrypt.compare(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);

        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const revalidarToken = async (req: Request, res: Response) => {
    const { uid, name } = req as any;

    // Generar JWT
    const token = await generarJWT(uid, name);

    res.json({
        ok: true,
        uid,
        name,
        token
    });
}

export {
    crearUsuario,
    loginUsuario,
    revalidarToken
};