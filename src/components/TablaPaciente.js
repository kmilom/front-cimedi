import React, { useState } from 'react';

const AppointmentsTable = ({ appointments, onReschedule, onCancel, onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [showRescheduleForm, setShowRescheduleForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    specialty: '',
    doctor: ''
  });
  const [appointmentToReschedule, setAppointmentToReschedule] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleAddAppointment = () => {
    onAdd(newAppointment);
    setShowForm(false);
    setNewAppointment({ date: '', time: '', specialty: '', doctor: '' });
  };

  const handleRescheduleAppointment = () => {
    onReschedule(appointmentToReschedule.id, newAppointment);
    setShowRescheduleForm(false);
    setAppointmentToReschedule(null);
    setNewAppointment({ date: '', time: '', specialty: '', doctor: '' });
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Citas Pendientes</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Fecha</th>
            <th className="py-2 px-4 border-b">Hora</th>
            <th className="py-2 px-4 border-b">Especialidad</th>
            <th className="py-2 px-4 border-b">Nombre del Médico</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{appointment.date}</td>
              <td className="py-2 px-4 border-b">{appointment.time}</td>
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
                  className="text-red-500 hover:underline mr-4" 
                  onClick={() => onCancel(appointment.id)}
                >
                  Cancelar
                </button>
                <button 
                  className="text-green-500 hover:underline" 
                  onClick={() => {
                    setShowRescheduleForm(true);
                    setAppointmentToReschedule(appointment);
                  }}
                >
                  Re Agendar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showRescheduleForm && (
        <div className="mt-4 p-4 border rounded-md">
          <h3 className="text-xl font-bold mb-4">Reprogramar Cita</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Fecha</label>
            <input
              type="date"
              name="date"
              value={newAppointment.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Hora</label>
            <input
              type="time"
              name="time"
              value={newAppointment.time}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Especialidad</label>
            <input
              type="text"
              name="specialty"
              value={newAppointment.specialty}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre del Médico</label>
            <input
              type="text"
              name="doctor"
              value={newAppointment.doctor}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Motivo</label>
            <input
              type="text"
              name="doctor"
              value={newAppointment.doctor}
              onChange={handleInputChange}
              className="w-full px-3 py-3 border rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md"
              onClick={handleRescheduleAppointment}
            >
              Reprogramar Cita
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsTable;
