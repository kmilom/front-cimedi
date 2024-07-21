-----------------------------------------------------------------------------
La vista de registro de usuario permite a los usuarios ingresar la información necesaria para registrarse en la plataforma. Los campos requeridos incluyen nombre, apellido, fecha de nacimiento, correo electrónico, celular, tipo y número de documento, género, departamento y ciudad de residencia, así como la EPS a la que están afiliados.


-------------------------------------------------------------------------------------------------------------------
Estructura de la Vista
La vista está diseñada con componentes reutilizables para mejorar la legibilidad y mantenibilidad del código:

Componentes Utilizados:
Navbar: Barra de navegación para la navegación dentro de la aplicación.
Footer: Pie de página para información adicional y enlaces útiles.
Label y Input: Componentes para etiquetas y campos de entrada, respectivamente, para cada campo del formulario de registro.
Funcionalidad del Formulario
Cuando un usuario completa el formulario y lo envía, los datos son recopilados y manejados por una función handleSubmit. Esta función se encarga de preparar los datos para ser enviados al backend, donde se crearán registros correspondientes en la base de datos.


---------------------------------------------------------------------------------------------------------------------------------------------
El controlador de registro (registreController.js) gestiona la lógica de negocio para procesar los datos del formulario de registro:

Clases de Modelo Utilizadas:
Persona: Captura la información básica del usuario, excluyendo la EPS.
Paciente: Asocia la persona registrada con su EPS.
Usuario: Asocia la persona registrada con un usuario único, utilizando su número de documento como nombre de usuario y contraseña.
Funciones del Controlador
registrarPersona(formData): Crea instancias de Persona, Paciente y Usuario utilizando los datos del formulario. Luego, llama a los servicios correspondientes para guardar cada instancia en la base de datos.


--------------------------------------------------------------------------------------------------------------------------------------------------
Servicios de Registro
Los servicios (RegistroService.js) contienen las funciones para interactuar con la capa de persistencia:

guardarPersona(persona): Lógica para guardar la instancia de Persona en la base de datos.
guardarPaciente(paciente): Lógica para guardar la instancia de Paciente en la base de datos.
guardarUsuario(usuario): Lógica para guardar la instancia de Usuario en la base de datos.
