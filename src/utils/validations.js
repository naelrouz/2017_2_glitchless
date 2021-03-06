/**
 * Validates password.
 *
 * @param password String to validate
 * @returns {Boolean|String} True if ok else message
 */
export function validatePassword(password) {
    if (password.length > 0) {
        return true;
    }
    return `Password can't be empty`;
}

/**
 * Validates email.
 *
 * @param email String to validate
 * @returns {Boolean|String} True if ok else message
 */
export function validateEmail(email) {
    const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if (!re.test(email)) {
        return 'Wrong email format';
    }
    return true;
}
