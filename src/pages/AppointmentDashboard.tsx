import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/navbar';
import createAppointments from '../hooks/createAppointments';
import { useAuth } from '../context/AuthProvider';

const AppointmentDashboard = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { AddAppointment, isLoading, error } = createAppointments();
  const { user } = useAuth(); // Obtener el usuario autenticado

  const onSubmit = async (data:any) => {
    if (!user) {
      alert('No está autenticado.');
      return;
    }

    // Separar el valor del location en clinicId y locationName
    const [clinicId, locationName] = data.location.split('|');

    const appointmentData = {
      appointmentDate: new Date(`${data.date}T${data.time}`).toISOString(), // Combinar fecha y hora y convertir a ISO string
      location: locationName,
      typeOfAppointment: data.typeOfAppointment, // Asegúrate de que este campo esté correcto
      userId: user.UserId, // Utilizar el userId extraído correctamente
      clinicId: parseInt(clinicId) // Convertir a número
    };

    console.log(appointmentData); // Imprimir datos para verificar antes de enviar

    try {
      await AddAppointment(appointmentData);
      if (!error) {
        alert('¡Cita reservada exitosamente!');
        reset(); // Reinicia el formulario después de enviar
      } else {
        alert('Error al reservar la cita');
      }
    } catch (e) {
      console.error('Error al reservar la cita', e);
      alert('Error al reservar la cita');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Navbar />
      <div className="container mx-auto pt-12 pb-20">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Reservar Cita
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-md">
          <div className="mb-4">
            <label htmlFor="typeOfAppointment" className="mb-1 block text-base font-medium text-[#07074D]">
              Tipo de Cita
            </label>
            <select
              id="typeOfAppointment"
              {...register('typeOfAppointment', { required: true })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="">Selecciona un tipo de cita</option>
              <option value="Medicina General">Medicina General</option>
              <option value="Odontología">Odontología</option>
              <option value="Pediatría">Pediatría</option>
              <option value="Neurología">Neurología</option>
            </select>
            {errors.typeOfAppointment && <span className="text-red-500">Este campo es requerido</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="mb-1 block text-base font-medium text-[#07074D]">
              Sucursal de la Clínica
            </label>
            <select
              id="location"
              {...register('location', { required: true })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="">Selecciona una sucursal</option>
              <option value="1|Clinica Santa Cruz">Clinica Santa Cruz</option>
              <option value="2|Clinica Nicoya">Clinica Nicoya</option>
              <option value="3|Clinica Liberia">Clinica Liberia</option>
              <option value="4|Clinica Filadelfia">Clinica Filadelfia</option>
            </select>
            {errors.location && <span className="text-red-500">Este campo es requerido</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="mb-1 block text-base font-medium text-[#07074D]">
              Fecha
            </label>
            <input
              id="date"
              type="date"
              {...register('date', { required: true })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.date && <span className="text-red-500">Este campo es requerido</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="time" className="mb-1 block text-base font-medium text-[#07074D]">
              Hora
            </label>
            <input
              id="time"
              type="time"
              {...register('time', { required: true })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.time && <span className="text-red-500">Este campo es requerido</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-sky-400 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:shadow-form rounded-md"
            disabled={isLoading}
          >
            {isLoading ? 'Reservando...' : 'Reservar'}
          </button>
          {error && <span className="text-red-500 mt-2 block">{error.message}</span>}
        </form>
      </div>
    </div>
  );
};

export default AppointmentDashboard;
