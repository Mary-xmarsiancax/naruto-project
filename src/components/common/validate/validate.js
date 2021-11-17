export function validatePost(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length > 30) {
        error = 'Value length 30 symbols';
    }
    return error;
}

export function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length > 30) {
        error = 'Value length 30 symbols';
    }
    return error;
}

export function validatePassword(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length > 30) {
        error = 'Value length 30 symbols';
    }
    return error;
}
export function validateAnswer(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length > 30) {
        error = 'Value length 30 symbols';
    }
    return error;
}

export function validateMessage(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length > 30) {
        error = 'Value length 30 symbols';
    }
    return error;
}