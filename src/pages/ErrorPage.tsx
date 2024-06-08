
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 via-teal-300 to-sky-600">
    <div className="bg-gray-700 bg-opacity-50 text-center max-w-md p-8 rounded-lg">
    <div className="text-center">
      <p className="text-7xl font-bold text-white">403</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-3xl">No tienes acceso</h1>
      <p className="mt-6 text-base leading-7 text-white">Lo sentimos, no puedes entrar a esta página.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
      <Link to="/appointments" className="px-8 py-3 font-semibold rounded-md bg-sky-400 text-white hover:bg-sky-500 focus:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300">Volver a la página de citas</Link>

      </div>
    </div>
    </div>
  </main>
  );
};

export default ErrorPage;
