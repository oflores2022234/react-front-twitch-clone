
export const validateUsername = (username) => {
    const regex = /^\S{3,8}$/

    return regex.test(username)
}

export const usernameValidateMessage = 'El usuario debe de tener minimo 3 y maximo 8 caracteres'