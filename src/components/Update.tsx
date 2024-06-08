import React, { useState, useEffect } from 'react';
import useUpdateAppointment from '../hooks/updateAppointments';

const UpdateAppointmentForm = ({ appointment, onCancel, refetch }: { appointment: any, onCancel: any, refetch: any }) => {
  const { handleSave, loading, error } = useUpdateAppointment(refetch);
  const [updatedAppointment, setUpdatedAppointment] = useState(appointment);

  useEffect(() => {
    const clinicNames: { [key: number]: string } = {
      1: 'Clínica Santa Cruz',
      2: 'Clínica Nicoya',
      3: 'Clínica Liberia',
      4: 'Clínica Filadelfia',
    };

    const clinicId = updatedAppointment.clinicId;
    setUpdatedAppointment((prev) => ({
      ...prev,
      location: clinicNames[clinicId] || '',
    }));
  }, [updatedAppointment.clinicId]);

  const handleInputChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement> = ({ target: { name, value, type, checked } }) => {
    const newValue = type === 'checkbox' ? checked : value;
    setUpdatedAppointment({ ...updatedAppointment, [name]: newValue });
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    await handleSave(appointment.id, updatedAppointment);
    onCancel(); // Llama a la función onCancel después de guardar
    window.location.reload(); // Refresca la página
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-base font-medium text-white mb-1">Editar Cita {updatedAppointment.AppointmentId}</h2>
          <label>
            Fecha y Hora:
            <input
              type="datetime-local"
              name="appointmentDate"
              value={updatedAppointment.appointmentDate}
              onChange={handleInputChange}
              className="w-full mt-2 mb-4 p-2 bg-white border-2 border-gray-300 rounded-md"
            />
          </label>

          <label>
            Tipo de Cita:
            <select
              name="typeOfAppointment"
              value={updatedAppointment.typeOfAppointment}
              onChange={handleInputChange}
              className="w-full mt-2 mb-4 p-2 bg-white border-2 border-gray-300 rounded-md"
            >
              <option value="">Selecciona un tipo de cita</option>
              <option value="Medicina General">Medicina General</option>
              <option value="Odontología">Odontología</option>
              <option value="Pediatría">Pediatría</option>
              <option value="Neurología">Neurología</option>
            </select>
          </label>

          <label>
            Clínica:
            <select
              name="clinicId"
              value={updatedAppointment.clinicId}
              onChange={handleInputChange}
              className="w-full mt-2 mb-4 p-2 bg-white border-2 border-gray-300 rounded-md"
            >
              <option value="">Selecciona una clínica</option>
              <option value="1">Clínica Santa Cruz</option>
              <option value="2">Clínica Nicoya</option>
              <option value="3">Clínica Liberia</option>
              <option value="4">Clínica Filadelfia</option>
            </select>
          </label>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-indigo-600 text-white mr-4 rounded-md"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Cancelar
            </button>
          </div>

          {error && <p className="mt-4 text-red-600">Hubo un error al actualizar la cita: {error}</p>}
        </div>
      </div>
    </form>
  );
};

export default UpdateAppointmentForm;
