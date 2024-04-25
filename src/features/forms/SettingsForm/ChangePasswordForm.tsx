import style from "./settings.module.sass";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import styles from "../RegistrationForm/registration.module.sass";
import {useChangePassword} from "../../../service";

export const ChangePasswordForm = () => {
    const initialValues = {oldPassword: '', newPassword: '', repeatPassword: ''}
    const {message, handleSubmitChangePassword} = useChangePassword();

    const validationSchema = Yup.object({
        oldPassword: Yup.string().required('Обязательное поле'),
        newPassword: Yup.string().required('Обязательное поле'),
        repeatPassword: Yup.string().oneOf([Yup.ref('newPassword')],'Пароли не совпадают').nullable().required('Обязательное поле')
    });

    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitChangePassword}
        >
            <Form>
                <div className={style.change_password_form}>
                    <h2>Изменить пароль</h2>
                    <div>
                        <Field type="password" name="oldPassword" className={style.password_input} placeholder="Старый пароль"/>
                        <ErrorMessage name="oldPassword" component="div" className={styles.error}/>
                    </div>
                    <div>
                        <Field type="password" name="newPassword" className={style.password_input} placeholder="Новый пароль"/>
                        <ErrorMessage name="newPassword" component="div" className={styles.error}/>
                    </div>
                    <div>
                        <Field type="password" name="repeatPassword" className={style.password_input} placeholder="Повторите новый пароль"/>
                        <ErrorMessage name="repeatPassword" component="div" className={styles.error}/>
                    </div>
                    <div>{message && <p> {message}</p>}</div>
                    <div className={style.basic_data_button_container}>
                        <button type="submit" className={style.update_button}>Изменить</button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}
