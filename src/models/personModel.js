// src/models/personModel.js
class Persona {
    constructor(nombre, apellido, fechaNacimiento, correo, celular, tipoDocumento, numeroDocumento, genero, departamento, ciudad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.correo = correo;
        this.celular = celular;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.genero = genero;
        this.departamento = departamento;
        this.ciudad = ciudad;
    }
}

export default Persona;
