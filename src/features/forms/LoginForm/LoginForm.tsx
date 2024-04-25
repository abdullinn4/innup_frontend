import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {useState} from "react";
import {Link} from "react-router-dom";
import styles from "../RegistrationForm/registration.module.sass";
import {useLogin} from "../../../service";

export const LoginForm = () => {
    const[showPassword, setShowPassword] = useState(false);
    const {errorMessage, handleSubmitLogin} = useLogin();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const initialValues = {email: '', password: ''};
    const validationSchema = Yup.object({
        email: Yup.string().required('Обязательное поле'),
        password: Yup.string().required('Обязательное поле')
    });

    return(
        <div className={styles.register_body}>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmitLogin}
            >
                <div className={styles.register_info}>
                    <div>
                        <h1>innup</h1>
                    </div>
                    <Form >
                        <div className={styles.register_info_form}>
                            {errorMessage && <p style={{color: 'red'}}>
                                {errorMessage}</p>}
                            <div>
                                <Field type="email" name="email" placeholder="Введите почту"/>
                                <ErrorMessage name="email" component="div" className={styles.error}/>
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
                            </div>
                            <ErrorMessage name="password" component="div" className={styles.error_password} />
                            <button type="submit">Вход</button>
                            <div>Нет аккаунта? <Link to="/registration">Регистрация</Link> </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>

    )
}