// Importar los módulos necesarios
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Función para generar un JWT
const generarJWT = (uid: string, name: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        // Crear el payload con uid y name
        const payload = { uid, name };

        // Firmar el token con el payload y el secreto
        jwt.sign(payload, process.env.SECRET_JWT_SEED || '', {
            expiresIn: "2h"
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("No se pudo generar el token");
            } else if (token) {
                resolve(token);
            } else {
                reject("No se generó el token");
            }
        });
    });
}
const verificarJWT = (token: string): Promise<string | jwt.JwtPayload | null> => {
    return new Promise((resolve) => {
        jwt.verify(token, process.env.SECRET_JWT_SEED || '', (err, decoded) => {
            if (err) {
                console.log(err);
                resolve(null);
            } else {
                resolve(decoded as string | jwt.JwtPayload);
            }
        });
    });
}
        
// Exportar la función
export { generarJWT };

