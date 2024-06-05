
import { useForm } from 'react-hook-form';
import Navbar from '../components/navbar';
import createAppointments from '../hooks/createAppointments';
import { useAuth } from '../context/AuthProvider';

const AppointmentDashboard = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { AddAppointment, isLoading, error } = createAppointments();
  const { user, token } = useAuth(); // Obtener el usuario autenticado y el token JWT

  const onSubmit = async (data: any) => {
    if (!user || !token) {
      alert('No está autenticado.');
      return;
    }


    const userId = user["NameIdentifier"];


    // Separar el valor del clinic en clinicId
    const clinicId = Number(data.clinic);

    const appointmentData = {
      appointmentDate: new Date(`${data.date}T${data.time}`).toISOString(), // Combinar fecha y hora y convertir a ISO string
      typeOfAppointment: data.typeOfAppointment, // Asegúrate de que este campo esté correcto
      clinicId: clinicId, // Asegúrate de que este campo esté correcto
      location: data.location, // Agregar el campo de ubicación
      userId: userId // Aquí estamos usando el id del usuario obtenido del formulario
    };

    // Pasar el token JWT a la función AddAppointment
    try {
      await AddAppointment(appointmentData, token);
      reset(); // Limpiar el formulario después de una cita exitosa
    } catch (error) {
      console.error(error); // Mostrar el error en la consola
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
          <label htmlFor="clinic" className="mb-1 block text-base font-medium text-[#07074D]">
            Sucursal de la Clínica
          </label>
          <select
            id="clinic"
            {...register('clinic', { required: true })}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          >
          <option value="">Selecciona una sucursal</option>
            <option value="1">Clinica San Juan</option>
            <option value="2">Clinica Montoya</option>
            <option value="3">Clinica Marcox</option>
          
          </select>
          {errors.clinic && <span className="text-red-500">Este campo es requerido</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="mb-1 block text-base font-medium text-[#07074D]">
            Ubicación
          </label>
          <input
            id="location"
            type="text"
            {...register('location', { required: true })}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
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
