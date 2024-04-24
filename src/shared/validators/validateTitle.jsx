export const validateTitle = (title) => {
    return title.length >= 3 && title.length <= 30
}

export const validateTitleMessage = 'El titulo debe de tener entre 3 y 30 caracteres'