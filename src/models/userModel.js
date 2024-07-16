// src/models/userModel.js
class Usuario {
    constructor(personaId, nombre, numeroDocumento) {
        this.personaId = personaId;
        this.nombreUsuario = nombre;
        this.contraseña = numeroDocumento;
        this.rol = 'Paciente';
    }
}

export default Usuario;
