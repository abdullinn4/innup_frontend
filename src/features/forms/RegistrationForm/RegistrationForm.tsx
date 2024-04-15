import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import {Link} from "react-router-dom";
import styles from "./registration.module.sass"

interface FormValues{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const RegistrationForm = () => {
    const initialValues = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Обязательное поле'),
        lastName: Yup.string().required('Обязательное поле'),
        email: Yup.string().email('Неверный адрес почты').required('Обязательное поле'),
        password: Yup.string().matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            'Пароль должен содержать по крайней мере 8 символов, включая строчные и прописные буквы, и цифры'
        ).required("Обязательное поле"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')],'Пароли не совпадают').nullable().required('Обязательное поле')});

    const handleSubmit = async (values: FormValues) => {
        try{
            const response = await axios.post<FormValues>('post/registrationForm',{
                email: values.email,
                password: values.password,
            });
            console.log(response.data);
        }catch (error){
            console.error('Error:', error);
        }

    }
    return(
            <body className={styles.register_body}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({isValid,dirty}) => (
                        <div className={styles.register_info}>
                            <div>
                                <h1>innup</h1>
                            </div>
                            <Form >
                                <div className={styles.register_info_form}>
                                    <div>
                                        <Field type="text" name="firstName" placeholder="Введите имя"/>
                                        <ErrorMessage name="firstName" component="div" className={styles.error}/>
                                    </div>
                                    <div>
                                        <Field type="text" name="lastName" placeholder="Введите фамилию"/>
                                        <ErrorMessage name="lastName" component="div" className={styles.error}/>
                                    </div>
                                    <div>
                                        <Field type="email" name="email" placeholder="Введите почту"/>
                                        <ErrorMessage name="email" component="div" className={styles.error}/>
                                    </div>
                                    <div>
                                        <Field type="password" name="password" placeholder="Введите пароль"/>
                                        <ErrorMessage name="password" component="div" className={styles.error}/>
                                    </div>
                                    <div>
                                        <Field type="password" name="confirmPassword" placeholder="Повторите пароль"/>
                                        <ErrorMessage name="confirmPassword" component="div" className={styles.error}/>
                                    </div>
                                    <button type="submit" disabled={!isValid || !dirty}>Регистрация</button>
                                    <div>Уже есть аккаунт? <Link to="/login">Войти</Link> </div>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
            </body>
    );
}