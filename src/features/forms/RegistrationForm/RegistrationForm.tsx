import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {Link} from "react-router-dom";
import styles from "./registration.module.sass"
import {useState} from "react";
import {UserSignup} from '../../../entities'
import {useSignup} from "../../../service";


export const RegistrationForm = () => {
    const[showPassword, setShowPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false)

    const{errorMessage, handleSubmitSignup} = useSignup()

    const initialValues: UserSignup = {name: '', email: '', password: '', confirmPassword: ''};
    const validationSchema = Yup.object({
        name: Yup.string().required('Обязательное поле'),
        email: Yup.string().email('Неверный адрес почты').required('Обязательное поле'),
        password: Yup.string().matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            'Пароль должен содержать по крайней мере 8 символов, включая строчные и прописные буквы, и цифры'
        ).required("Обязательное поле"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')],'Пароли не совпадают').nullable().required('Обязательное поле')});

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    return(
            <body className={styles.register_body}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmitSignup}
                >
                    {({isValid,dirty}) => (
                        <div className={styles.register_info}>
                            <div>
                                <h1>innup</h1>
                            </div>
                            <Form>
                                <div className={styles.register_info_form}>
                                    {errorMessage && <div style={{color: 'red'}}>
                                        {errorMessage}</div>}
                                    <div>
                                        <Field type="text" name="name" placeholder="Введите имя"/>
                                        <ErrorMessage name="name" component="p" className={styles.error}/>
                                    </div>
                                    <div>
                                        <Field type="email" name="email" placeholder="Введите почту"/>
                                        <ErrorMessage name="email" component="p" className={styles.error}/>
                                    </div>
                                    <div className={styles.passwordField}>
                                        <Field
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            placeholder="Введите пароль"
                                        />
                                        <button type="button" className={styles.togglePasswordButton} onClick={togglePasswordVisibility}>
                                            {showPassword ? <img src="src/assets/icons/clarity_eye-show-line.svg"/> : <img src="src/assets/icons/clarity_eye-hide-solid.svg"/>}
                                        </button>
                                        <ErrorMessage name="password" component="p" className={styles.error_password} />

                                    </div>

                                    <div className={styles.passwordField}>
                                        <Field type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Повторите пароль"/>
                                        <button type="button" className={styles.togglePasswordButton} onClick={toggleConfirmPasswordVisibility}>
                                            {showConfirmPassword ? <img src="src/assets/icons/clarity_eye-show-line.svg"/> : <img src="src/assets/icons/clarity_eye-hide-solid.svg"/>}
                                        </button>
                                        <ErrorMessage name="confirmPassword" component="p" className={styles.error_password}/>
                                    </div>

                                    <button type="submit" disabled={!isValid || !dirty}>Регистрация</button>
                                    <p>Уже есть аккаунт? <Link to="/login">Войти</Link> </p>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
            </body>
    );
}