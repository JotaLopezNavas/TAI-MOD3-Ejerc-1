function validarUsuario(usuario) {
  // Desestructuramos el objeto para obtener sus propiedades
  const { nombre, edad, correo } = usuario;

  // 1. Verificar que el nombre exista y no esté vacío
  if (!nombre || nombre.trim() === "") {
    return { 
      valido: false, 
      mensaje: "El nombre no puede estar vacío." 
    };
  }

  // 2. Verificar que la edad sea mayor o igual a 18
  if (typeof edad !== 'number' || edad < 18) {
    return { 
      valido: false, 
      mensaje: "La edad debe ser mayor o igual a 18 años." 
    };
  }

  // 3. Verificar que el correo contenga el símbolo @
  if (!correo || !correo.includes("@")) {
    return { 
      valido: false, 
      mensaje: "El correo electrónico debe ser válido y contener el símbolo '@'." 
    };
  }

  // Si pasa todas las validaciones
  return { 
    valido: true, 
    mensaje: "El usuario es válido." 
  };
}

// --- Ejemplos de uso ---

const usuarioValido = { nombre: "Ana", edad: 25, correo: "ana@email.com" };
console.log(validarUsuario(usuarioValido)); 
// { valido: true, mensaje: 'El usuario es válido.' }

const usuarioSinNombre = { nombre: "   ", edad: 20, correo: "juan@email.com" };
console.log(validarUsuario(usuarioSinNombre)); 
// { valido: false, mensaje: 'El nombre no puede estar vacío.' }

const usuarioMenor = { nombre: "Carlos", edad: 16, correo: "carlos@email.com" };
console.log(validarUsuario(usuarioMenor)); 
// { valido: false, mensaje: 'La edad debe ser mayor o igual a 18 años.' }

const usuarioCorreoInvalido = { nombre: "Laura", edad: 30, correo: "laura_email.com" };
console.log(validarUsuario(usuarioCorreoInvalido)); 
// { valido: false, mensaje: "El correo electrónico debe ser válido y contener el símbolo '@'." }