import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import useGetAppointment from '../hooks/getAppointments';
import RemoveAppointment from '../hooks/deleteAppointment';
import useCancelAppointment from '../hooks/cancelAppointment';


const AppointmentCard = ({ token }: { token: string }) => {
  const { data, isLoading, error } = useGetAppointment(token);
  const { handleDelete } = RemoveAppointment(); // Utiliza el hook
  const { handleCancel } = useCancelAppointment();
 








  

  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-wrap -m-4">
      {data && data.map((appointment: { id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; appointmentDate: string | number | Date; status: any; clinicId: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
        <div key={index} className="p-4 md:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-base font-medium text-indigo-600 mb-1">Cita {appointment.id}</h2>
              <h1 className="text-2xl font-semibold mb-3">Fecha y Hora: {new Date(appointment.appointmentDate).toLocaleString()}</h1>
              <p className="leading-relaxed mb-3">Estado: {appointment.status ? 'Activa' : 'Inactiva'}</p>
              <p className="leading-relaxed mb-3">Clínica: {appointment.clinicId}</p>
              <div className="flex items-center flex-wrap ">
                <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" onClick={() => handleEdit(appointment.id)}>Editar
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12l5 5L20 7"></path>
                    <path d="M12 12l9-9"></path>
                  </svg>
                </button>
                <button className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0 ml-4" onClick={() => handleDelete(appointment.id, () => { /* Aquí puedes agregar código para actualizar la lista de citas */ })}>Eliminar
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                </button>
                <button className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 ml-4" onClick={() => handleCancel(String(appointment.id))}>Cancelar
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentCard;