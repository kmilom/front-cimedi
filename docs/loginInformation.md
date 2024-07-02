respecto a loginviews

// LoginForm onSubmit={handleLogin} 
Carga el formulario y espera a que se presione el botón "Submit" para llamar a la función handleLogin,
que realiza las tareas de validación y gestión del inicio de sesión.

const handleLogin = async (credentials) =>
Esta función flecha es asincrónica (async), indicando que espera la resolución de una operación, como una validación,
antes de continuar con otras tareas, como el inicio de sesión.


respecto a loginforms

// Para entender su funcionamiento, podemos desglosarlo así:

// 1. En LoginView, que es el componente padre y la vista visible para el usuario (formulario), se envía un prop
onSubmit al componente LoginForm, como se ve en el código: LoginForm onSubmit={handleLogin}.
Una vez ejecutada esta línea, el prop onSubmit se espera para recibir los datos del formulario y luego ejecutar
handleLogin en el padre.

// 2. En LoginForm, se recibe el prop del padre y se inicializan los estados para los datos de email y contraseña.
Luego, se define la función handleSubmit, que se encarga de capturar y enviar los datos al prop onSubmit
cuando se activa el evento de enviar el formulario.

// 3. Cuando el usuario completa el formulario y presiona el botón "Submit", se dispara el evento submit del formulario,
lo cual activa la función handleSubmit, especificada en onSubmit del formulario. Esta función toma los datos
capturados de los campos de email y contraseña y los envía de vuelta al componente padre LoginView, que
se encargará de manejar la validación y el inicio de sesión.

