import Navbar from '../components/navbar';

const AppointmentDashboard = () => {
  return (
    
    <div className="flex items-center justify-center p-12">
        <Navbar />
      <div className="mx-auto w-full max-w-[1100px] bg-white p-8">
        <form>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label htmlFor="appointment-type" className="mb-1 block text-base font-medium text-[#07074D]">
                Tipo de Cita
              </label>
              <select
                name="appointment-type"
                id="appointment-type"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="">Selecciona un tipo de cita</option>
                <option value="general">General</option>
                <option value="consulta">Consulta</option>
                <option value="follow-up">Seguimiento</option>
              </select>
            </div>

            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label htmlFor="branch" className="mb-2 block text-base font-medium text-[#07074D]">
                Sucursal de la Clínica
              </label>
              <select
                name="branch"
                id="branch"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="">Selecciona una sucursal</option>
                <option value="branch1">Sucursal 1</option>
                <option value="branch2">Sucursal 2</option>
                <option value="branch3">Sucursal 3</option>
              </select>
            </div>
          </div>

          <div className="mb-1 flex flex-wrap">
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label htmlFor="date" className="mb-2 block text-base font-medium text-[#07074D]">
                Fecha
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label htmlFor="time" className="mb-2 block text-base font-medium text-[#07074D]">
                Hora
              </label>
              <input
                type="time"
                name="time"
                id="time"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-sky-400 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Reservar Cita
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentDashboard;
