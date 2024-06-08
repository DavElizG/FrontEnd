import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Navbar from '../components/navbar';
import createAppointments from '../hooks/createAppointments';
import { useAuth } from '../context/AuthProvider';
import AppointmentCard from '../components/AppointmentCard';
import CreationModal from '../components/CreationModal';


const AppointmentDashboard = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { AddAppointment, isLoading, error } = createAppointments();
  const { user, token } = useAuth();
  const [location, setLocation] = useState('');
  const [showModal, setShowModal] = useState(false);
  

  const onSubmit = async (data: any) => {
    if (!user || !token) {
      alert('No está autenticado.');
      return;
    }
    
    const userId = user["NameIdentifier"];
    const clinicId = Number(data.clinic);
    const appointmentDateTime = new Date(`${data.date}T${data.time}`);

    const appointmentData = {
      appointmentDate: appointmentDateTime.toISOString(),
      typeOfAppointment: data.typeOfAppointment,
      clinicId: clinicId,
      location: location,
      userId: userId
    };

    try {
      await AddAppointment(appointmentData, token);
      setShowModal(true);
      reset();
      setLocation('');
      
    } catch (error) {
      
      
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

 

  const handleClinicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const clinicNames = {
      1: 'Clinica Santa Cruz',
      2: 'Clinica Nicoya',
      3: 'Clinica Liberia',
      4: 'Clinica Filadelfia'
    };

    const clinicId = Number(e.target.value);
    setLocation(clinicNames[clinicId] || '');
  };
  return (
    <>
    <Navbar/>
    <div className="min-h-screen  justify-center bg-gradient-to-r from-sky-100 via-teal-300 to-sky-600">
      <div className="container mx-auto pt-12 pb-20">
        <h1 className="text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] borderfont-bold text-white text-center mb-8">
          Reservar Cita
        </h1>
       
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-full flex flex-wrap items-center justify-between">
          <div className="mb-4 flex flex-col mr-4">
            <label htmlFor="typeOfAppointment" className="mb-1 block text-base font-medium text-[#07074D]">
              Tipo de Cita
            </label>
            <select
              id="typeOfAppointment"
              {...register('typeOfAppointment', { required: true })}
              className="rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="">Selecciona un tipo de cita</option>
              <option value="Medicina General">Medicina General</option>
              <option value="Odontología">Odontología</option>
              <option value="Pediatría">Pediatría</option>
              <option value="Neurología">Neurología</option>
            </select>
            {errors.typeOfAppointment && <span className="text-red-500">Este campo es requerido</span>}
          </div>

          <div className="mb-4 flex flex-col mr-4">
            <label htmlFor="clinic" className="mb-1 block text-base font-medium text-[#07074D]">
              Sucursal de la Clínica
            </label>
            <select
              id="clinic"
              {...register('clinic', { required: true })}
              className="rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={handleClinicChange}
            >
              <option value="">Selecciona una sucursal</option>
              <option value="1">Clinica Santa Cruz</option>
              <option value="2">Clinica Nicoya</option>
              <option value="3">Clinica Liberia</option>
              <option value="4">Clinica Filadelfia</option>
            </select>
            {errors.clinic && <span className="text-red-500">Este campo es requerido</span>}
          </div>

          <div className="mb-4 flex flex-col mr-4">
            <label htmlFor="date" className="mb-1 block text-base font-medium text-[#07074D]">
              Fecha
            </label>
            <input
              id="date"
              type="date"
              {...register('date', { required: true })}
              className="rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.date && <span className="text-red-500">Este campo es requerido</span>}
          </div>

          <div className="mb-4 flex flex-col mr-4">
            <label htmlFor="time" className="mb-1 block text-base font-medium text-[#07074D]">
              Hora
            </label>
            <input
              id="time"
              type="time"
              {...register('time', { required: true })}
              className="rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.time && <span className="text-red-500">Este campo es requerido</span>}
          </div>

          <button
            type="submit"
            className="bg-sky-400 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:shadow-form rounded-md"
            disabled={isLoading}
          >
            {isLoading ? 'Reservando...' : 'Reservar'}
          </button>
          {error && <span className="text-red-500 mt-2 block">{error.message}</span>}
        </form>
      </div>
      <AppointmentCard token={'token'} />
      <CreationModal show={showModal} handleClose={handleCloseModal} />
    </div>
    </>
  );
};

export default AppointmentDashboard;
