import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider'; // Aj // Ajusta la ruta según sea necesario
import Logo2 from '../assets/Logo2.png';


const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://localhost:7108/api/Users/login', {
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data);

            const token: string = response.data; // Ajusta esto según la estructura de la respuesta
            setToken(token);
            navigate('/Appointments');
        } catch (error) {
            console.error('Error en la autenticación', error);
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 via-teal-300 to-sky-600">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-gray-700 bg-opacity-50 text-center max-w-md p-8 rounded-lg">
                    <img className="mx-auto  h-11 w-auto" src={Logo2}alt="logo" />
                    <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-white">
                        Log in to your account
                    </h2>
                    <form className="space-y-6 " onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                            <div className="mt-1">
                                <input
                                    name="email"
                                    type="text"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-200 px-2 py-3 mt-1 block w-full rounded-md border-3 border-gray-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">Contraseña</label>
                            <div className="mt-1">
                                <input
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-white px-2 py-3 mt-1 block w-full rounded-md border-3 border-gray-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md border  bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                            >
                                Iniciar Sesión
                            </button>
                        </div>
                        <div className="text-center text-sm">
                            <p className="text-white">¿No tienes una cuenta?</p>
                            <Link to="/register" className="text-white hover:underline">Registrate aquí</Link>
                        </div>
                    </form>
                    <div className="text-center mt-4">
                        <Link to="/" className="text-sm text-white hover:underline">Volver al inicio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
