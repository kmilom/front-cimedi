import React from 'react';
import HeaderPaciente from '../components/HeaderPaciente';
import PerfilPaciente from '../components/PerfilPaciente';
import TablaPaciente from '../components/TablaPaciente';

const PacienteView = () => {
  const user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '123-456-7890',
    address: '123 Calle Principal, Ciudad, País'
  };

  const appointments = [
    { id: 1, date: '2024-07-20', specialty: 'Cardiología', doctor: 'Dr. López' },
    { id: 2, date: '2024-07-25', specialty: 'Dermatología', doctor: 'Dr. Martínez' },
    // ... otras citas
  ];

  const handleReschedule = (id) => {
    console.log(`Solicitud de cambio para cita con id ${id}`);
    // Aquí puedes agregar la lógica para solicitar un cambio de fecha
  };

  const handleCancel = (id) => {
    console.log(`Cancelar cita con id ${id}`);
    // Aquí puedes agregar la lógica para cancelar la cita
  };

  return (
    <div className="container mx-auto p-4">
      <HeaderPaciente userName={user.name} />
      <div className="mt-8">
        <PerfilPaciente user={user} />
        <TablaPaciente 
          appointments={appointments} 
          onReschedule={handleReschedule} 
          onCancel={handleCancel} 
        />
      </div>
    </div>
  );
};

export default PacienteView;
