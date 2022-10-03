import validateEmail from '../../utils/validateEmail.js';

describe('utils/validateEmail', () => {
    test('should return true if the email is valid', () => {
        const email = 'test@email.com';
        const isValidEmail = validateEmail(email);
        expect(isValidEmail).toBe(true)
    })

    test('should return false if the email is not valid', () => {
        const email = 'test@com';
        const isValidEmail = validateEmail(email);
        expect(isValidEmail).not.toBe(true)
    })
})