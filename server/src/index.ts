import express from 'express';
import dotenv from 'dotenv';
import auth from '../routes/authroutes';
import cors from 'cors';
import dbConnection from '../database/database'; 
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json()); // Añadido para parsear JSON en el cuerpo de las solicitudes

app.use("/auth", auth);

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  try {
    await dbConnection();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
}

iniciarServidor();
