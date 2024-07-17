import React from 'react';

const AppointmentsTable = ({ appointments, onReschedule, onCancel }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Citas Pendientes</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Fecha</th>
            <th className="py-2 px-4 border-b">Especialidad</th>
            <th className="py-2 px-4 border-b">Nombre del Médico</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{appointment.date}</td>
              <td className="py-2 px-4 border-b">{appointment.specialty}</td>
              <td className="py-2 px-4 border-b">{appointment.doctor}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  className="text-blue-500 hover:underline mr-4" 
                  onClick={() => onReschedule(appointment.id)}
                >
                  Solicitar Cambio
                </button>
                <button 
                  className="text-red-500 hover:underline" 
                  onClick={() => onCancel(appointment.id)}
                >
                  Cancelar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
