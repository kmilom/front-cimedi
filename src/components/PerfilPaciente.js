import React, { useState } from 'react';

const ProfileCard = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Aquí podrías añadir la lógica para guardar los cambios en el servidor
    console.log('Usuario guardado:', editedUser);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser({ ...user });
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Información Personal</h2>
      {isEditing ? (
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre:</label>
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Teléfono:</label>
            <input
              type="text"
              name="phone"
              value={editedUser.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Dirección:</label>
            <input
              type="text"
              name="address"
              value={editedUser.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={handleSave}
              className="w-full bg-green-500 text-white py-2 rounded-md"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full bg-red-500 text-white py-2 rounded-md"
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>
          <p><strong>Dirección:</strong> {user.address}</p><br></br>
          <button
            type="button"
            onClick={handleEdit}
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Editar Información
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;