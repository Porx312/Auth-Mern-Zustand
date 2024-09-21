import { useState } from "react";
import { useAuthStore } from "../store/Auth/auth.store";
import { Link } from "react-router-dom";

const RegisterAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const registerUser = useAuthStore(state => state.registerUser);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await registerUser(name, email, password);
      // Aquí puedes agregar lógica adicional después de un registro exitoso
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
        <input 
          type="text" 
          id="name"
          placeholder="Nombre" 
          onChange={(e) => setName(e.target.value)} 
          value={name}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>

        <input 
          type="email" 
          id="email"
          placeholder="Correo electrónico" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
        <input 
          type="password" 
          id="password"
          placeholder="Contraseña" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <button 
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Registrarse
      </button>
      <Link to="/login">¿Ya tienes una cuenta? Inicia sesión</Link>
    </form>
  );

};

export default RegisterAuth;
