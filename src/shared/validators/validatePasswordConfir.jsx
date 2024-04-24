export const validatePasswordConfir = (pass, confPass) =>  {
    return pass === confPass
}

export const passwordConfirmationMessage = 'Las contraseñas no coinciden'