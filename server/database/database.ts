import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('La variable de entorno MONGO_URI no está definida');
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Base de datos conectada');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

export default dbConnection;
