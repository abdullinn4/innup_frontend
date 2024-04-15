import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";
import styles from "../RegistrationForm/registration.module.sass";

interface FormValues{
    email: string;
    password: string;
}
interface ApiResponse{
    success: boolean;
    error: string;
    data: any;
}


export const LoginForm = () => {
    const initialValues = {email: '', password: ''};
    const validationSchema = Yup.object({
        email: Yup.string().required('Обязательное поле'),
        password: Yup.string().required('Обязательное поле')
    });

    const[error, setError] =useState('');
    const handleSubmit = async (values: FormValues) => {
        try {
            const response: ApiResponse = await axios.post('post/login', {
                email: values.email,
                password: values.password
            })
            if (response.success) {
                console.log('Успешно: ',response.data)
            }else{
                setError('Неверное имя пользователя или пароль')
            }

        }catch (error) {
            console.error('Error:', error)
        }
    }

    return(
        <div className={styles.register_body}>
            <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
            >
                <div className={styles.register_info}>
                    <div>
                        <h1>innup</h1>
                    </div>
                    {error && <div style={{color: 'red'}}>
                        {error}</div>}
                    <Form >
                        <div className={styles.register_info_form}>
                            <div>
                                <Field type="email" name="email" placeholder="Введите почту"/>
                                <ErrorMessage name="email" component="div" className={styles.error}/>
                            </div>
                            <div>
                                <Field type="password" name="password" placeholder="Введите пароль"/>
                                <ErrorMessage name="password" component="div" className={styles.error}/>
                            </div>
                            <button type="submit">Вход</button>
                            <div>Нет аккаунта? <Link to="/registration">Регистрация</Link> </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>

    )
}