import React from 'react';
import Navbar from '../components/navbar';
import useAppointments from '../hooks/useAppointments';
import RemoveAppointment from '../hooks/deleteAppointment';


const AdminDashboard = () => {
  const { appointments, loading, error } = useAppointments(); // Usar el hook para obtener las citas del día
  const { handleDelete } = RemoveAppointment();
  if (loading) {
    return <div className="p-4">Cargando...</div>;
  }

  if (error) {
    return <div className="p-4">Error: {error.message}</div>;
  }

  console.log('Appointments:', appointments); // Log de las citas

  return (
    <div className="p-4">
      <Navbar />
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <div className="bg-white p-4 shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tipo de Cita
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha y Hora
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ubicación
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.typeOfAppointment}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(appointment.appointmentDate).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.location}</td>

                <button className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0 ml-4" onClick={() => handleDelete(appointment.id, () => {})}>Eliminar
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>

                
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;