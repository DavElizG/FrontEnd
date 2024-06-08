import React, { useState } from 'react';
import Navbar from '../components/navbar';
import useAppointments from '../hooks/useAppointments';
import RemoveAppointment from '../hooks/deleteAppointment';




const AdminDashboard = () => {
  const { appointments, loading, error } = useAppointments();
  const { handleDelete } = RemoveAppointment();
  
  

  if (loading) {
    return <div className="p-4">Cargando...</div>;
  }

  if (error) {
    return <div className="p-4">Error: {error.message}</div>;
  }

  

  return (
    <>
      <Navbar />
      <div className="min-h-screen  justify-center bg-gradient-to-r from-sky-100 via-teal-300 to-sky-600">
        <div className="container mx-auto pt-12 pb-20">
          <h2 className="text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] borderfont-bold text-white text-center mb-8">Administración de citas de hoy</h2>
          <div className="bg-white p-4 shadow rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID de Usuario</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo de Cita</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha y Hora</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ubicación</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.userId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.typeOfAppointment}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(appointment.appointmentDate).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.location}</td>
                    <td>
                      <button className="bg-white hover:bg-gray-100 w-30 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4" onClick={() => {
                        handleDelete(appointment.id);
}}>Eliminar
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AdminDashboard;