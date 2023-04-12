export function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function validatePassword(password) {
  return password.length >= 6;
}

export function validateName(name) {
  const re = /^[a-zA-Z\s]*$/;
  return re.test(name);
}

export function validateForm(form) {
  const errors = {};

  if (!form.correo || !validateEmail(form.correo)) {
    errors.correo = "Por favor ingresa un correo electrónico válido.";
  }

  if (!form.contra || !validatePassword(form.contra)) {
    errors.contra = "La contraseña debe tener al menos 6 caracteres.";
  }

  if (form.isRegistering) {
    if (!form.name || !validateName(form.name)) {
      errors.name = "Por favor ingresa un nombre válido.";
    }

    if (!form.lname || !validateName(form.lname)) {
      errors.lname = "Por favor ingresa un apellido válido.";
    }

    if (form.contra !== form.contraDos) {
      errors.contraDos = "Las contraseñas no coinciden.";
    }
  }

  return errors;
}

export function validateRegister(
  name,
  lname,
  email,
  password,
  confirmPassword
) {
  const errors = {};

  if (!name.trim()) {
    errors.name = "El nombre es requerido";
  }

  if (!lname.trim()) {
    errors.lname = "El apellido es requerido";
  }

  if (!email.trim()) {
    errors.email = "El correo es requerido";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Ingresa un correo válido";
  }

  if (!password) {
    errors.password = "La contraseña es requerida";
  } else if (password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "La confirmación de contraseña es requerida";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  return errors;
}
