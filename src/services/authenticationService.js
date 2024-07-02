// authenticationService.js

const authenticationService = {
  login: async (credentials) => {
    // Simulación de inicio de sesión aca solo se comprueba si el servicio esta bien aplicado
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email === 'user@example.com' && credentials.password === 'password') {
          resolve({ success: true, token: 'fake-jwt-token' });
        } else {
          reject({ success: false, message: 'Credenciales incorrectas' });
        }
      }, 1000);
    });
  }
};

export default authenticationService;
