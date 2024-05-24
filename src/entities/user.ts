export interface User {
    firstName: string;
    lastName: string;
    email: string;
    aboutMe?: string;
}

export interface UserSignup extends User {
    password: string;
    confirmPassword: string;
}