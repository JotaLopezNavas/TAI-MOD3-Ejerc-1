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
module.exports = validarUsuario;
// --- Ejemplos de uso ---

