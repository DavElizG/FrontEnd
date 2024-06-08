// Importar los componentes necesarios
import React, { useState } from 'react';
import useGetAppointment from '../hooks/getAppointments';
import RemoveAppointment from '../hooks/deleteAppointment';
import useCancelAppointment from '../hooks/cancelAppointment';
import ErrorModal from './ErrorModal';
import ErrorHoras from './ErrorHoras';
import UpdateAppointmentForm from './Update';
import { Appointment } from '../types/Types';

// Definir el componente AppointmentCard
const AppointmentCard = ({ token }: { token: string }) => {
  // Obtener los datos de la cita y los métodos necesarios
  const { data, isLoading, error, refetch } = useGetAppointment(token);
  const { handleDelete, showModal, setShowModal } = RemoveAppointment();
  const { handleCancel, isErrorModalOpen, handleCloseErrorModal } = useCancelAppointment();
  const [isErrorHorasOpen, setIsErrorHorasOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);

  // Función para manejar la edición de la cita
  const handleEdit = (appointment: any) => {
    setIsEditing(true);
    setEditingAppointment(appointment);
  };

  // Función para cancelar la edición de la cita
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingAppointment(null);
  };

  // Si se están cargando los datos, mostrar un mensaje de carga
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Si hay un error, mostrar un mensaje de error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Renderizar las citas
  return (
    <div className="flex flex-wrap -m-4">
      {data && data.map((appointment: { id: string | number; appointmentDate: Date; status: any; location: string | number; Name: string }, index: React.Key) => (
        <div key={index} className="p-4 md:w-1/2 lg:w-1/3">
          <div className="h-full border-3 border-gray-500 border-opacity-60 rounded-lg overflow-hidden bg-gray-700 bg-opacity-50">
            <div className="p-6">
              {isEditing && editingAppointment?.id === appointment.id ? (
                <UpdateAppointmentForm
                  appointment={editingAppointment}
                  onCancel={handleCancelEdit}
                  refetch={refetch}
                />
              ) : (
                <>
                  <h2 className="text-white font-medium text-indigo-600 mb-1">Cita {appointment.id}</h2>
                  <h1 className="text-white text-2xl font-semibold mb-3">Fecha y Hora: {new Date(appointment.appointmentDate).toLocaleString()}</h1>
                  <p className="text-white leading-relaxed mb-3">Estado: {appointment.status ? 'Activa' : 'Inactiva'}</p>
                  <p className="text-white leading-relaxed mb-3">Clínica: {appointment.location}</p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4" onClick={() => handleEdit(appointment)}>Editar
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12l5 5L20 7"></path>
                        <path d="M12 12l9-9"></path>
                      </svg>
                    </button>
                    <button className="bg-white hover:bg-gray-100 w-30 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4" onClick={() => handleDelete(appointment.id, refetch)}>Eliminar
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-4" viewBox="0 0 24 24">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                    <button className="text-left bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow " onClick={() => {
                      handleCancel(String(appointment.id));
                      setIsErrorHorasOpen(true);
                    }}>Cancelar
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className=" w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
      {/* Mostrar el modal de error si está abierto */}
      {isErrorModalOpen && <ErrorModal show={showModal} handleClose={() => setShowModal(false)} />}
      {/* Mostrar el modal de ErrorHoras si está abierto */}
      {isErrorHorasOpen && <ErrorHoras isOpen={isErrorHorasOpen} handleClose={() => setIsErrorHorasOpen(false)} />}
    </div>
  );  
};

export default AppointmentCard;
