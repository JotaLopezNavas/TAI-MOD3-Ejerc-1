const main = require('./main');
const validarUsuario = main.validarUsuario || main;

const casos = [
  { nombre: 'Ana', edad: 25, correo: 'ana@example.com' },
  { nombre: '', edad: 30, correo: 'carlos@example.com' },
  { nombre: 'Luis', edad: 17, correo: 'luis@example.com' },
  { nombre: 'Marta', edad: 22, correo: 'marta@' },
  { nombre: 'Pedro', edad: 'veinte', correo: 'pedro@example.com' },
];

casos.forEach((usuario, index) => {
  try {
    const resultado = validarUsuario(usuario);
    console.log(`Caso ${index + 1}:`, usuario, '=>', resultado);
  } catch (error) {
    console.log(`Caso ${index + 1}:`, usuario, '=> Error:', error.message);
  }
});
