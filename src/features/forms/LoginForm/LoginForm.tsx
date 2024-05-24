import { useDispatch } from 'react-redux';
import { loginUser } from '../../user/userSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";
import styles from '../RegistrationForm/registration.module.sass';
import { Link } from "react-router-dom";
import {AppDispatch} from "../../../app/store.ts";

export const LoginForm = () => {
    const dispatch: AppDispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const initialValues = { email: '', password: '' };
    const validationSchema = Yup.object({
        email: Yup.string().required('Обязательное поле'),
        password: Yup.string().required('Обязательное поле')
    });

    const handleSubmitLogin = async (values: { email: string; password: string }) => {
        try {
            const resultAction = await dispatch(loginUser(values));
            if (loginUser.fulfilled.match(resultAction)) {
                console.log('Login successful:', resultAction.payload);
            } else {
                if (resultAction.payload) {
                    setErrorMessage('Неправильный email или пароль');
                } else {
                    setErrorMessage('Произошла ошибка при входе');
                }
            }
        } catch (error: unknown) {
            console.error('Error:', error);
            setErrorMessage('Произошла ошибка при входе');
        }
    };

    return (
        <div className={styles.register_body}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmitLogin}
            >
                <div className={styles.register_info}>
                    <div>
                        <h1>innup</h1>
                    </div>
                    <Form>
                        <div className={styles.register_info_form}>
                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                            <div>
                                <Field type="email" name="email" placeholder="Введите почту" />
                                <ErrorMessage name="email" component="p" className={styles.error} />
                            </div>
                            <div className={styles.passwordField}>
                                <Field
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Введите пароль"
                                />
                                <ErrorMessage name="password" component="p" className={styles.error_password} />
                                <button
                                    type="button"
                                    className={styles.togglePasswordButton}
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <img src="src/assets/icons/clarity_eye-show-line.svg" />
                                    ) : (
                                        <img src="src/assets/icons/clarity_eye-hide-solid.svg" />
                                    )}
                                </button>
                            </div>

                            <button type="submit">Вход</button>
                            <p>
                                Нет аккаунта? <Link to="/registration">Регистрация</Link>{' '}
                            </p>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    );
};
