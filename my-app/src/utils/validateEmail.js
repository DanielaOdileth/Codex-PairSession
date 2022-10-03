const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function validateEmail (email) {
    return regex.test(email)
}