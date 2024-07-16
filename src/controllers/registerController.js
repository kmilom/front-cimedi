// src/controllers/registreController.js
import { Persona } from '../models/personModel';
import { Paciente } from '../models/patientModel';
import { Usuario } from '../models/userModel';
import { guardarPersona, guardarPaciente, guardarUsuario } from '../services/RegistroService';

export const registrarPersona = async (formData) => {
    const persona = new Persona(
        formData.nombre,
        formData.apellido,
        formData.fechaNacimiento,
        formData.correo,
        formData.celular,
        formData.tipoDocumento,
        formData.numeroDocumento,
        formData.genero,
        formData.departamento,
        formData.ciudad
    );

    const personaId = await guardarPersona(persona);

    const paciente = new Paciente(personaId, formData.eps);
    await guardarPaciente(paciente);

    const usuario = new Usuario(personaId, formData.nombre, formData.numeroDocumento);
    await guardarUsuario(usuario);
};
