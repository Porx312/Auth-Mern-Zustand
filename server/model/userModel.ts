import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const UsuarioSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export const User = model<IUser>('User', UsuarioSchema);