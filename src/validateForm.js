export const validateForm = (formData) => {
  const errors = {};

  // Validación para el campo de nombre (solo letras)
  if (!/^[A-Za-z\s]+$/.test(formData.name)) {
    errors.name = "El nombre debe contener solo letras y espacios.";
  }

  // Validación para el campo de correo electrónico (formato de email)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    errors.email = "Ingrese un correo electrónico válido.";
  }

  // Validación para el campo de mensaje (longitud máxima)
  if (formData.message.length > 1500) {
    errors.message = "El mensaje no puede exceder los 1500 caracteres.";
  }

  return errors;
};
