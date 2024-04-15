import style from "./settings.module.sass";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import styles from "../RegistrationForm/registration.module.sass";
interface FormValues {
    oldPassword: string
    newPassword: string
    repeatPassword: string
}
interface ApiResponse{
    success: boolean;
    error: string;
    data: any;
}

export const ChangePasswordForm = () => {
    const initialValues = {oldPassword: '', newPassword: '', repeatPassword: ''}

    const validationSchema = Yup.object({
        oldPassword: Yup.string().required('Обязательное поле'),
        newPassword: Yup.string().required('Обязательное поле'),
        repeatPassword: Yup.string().oneOf([Yup.ref('newPassword')],'Пароли не совпадают').nullable().required('Обязательное поле')
    });
    const handleSubmit = async (values: FormValues) => {
        try{
            const response: ApiResponse = await axios.post('post/change-password',{
                oldPassword: values.oldPassword,
                newPassword: values.newPassword
            })
            if (response.success){
                console.log("Смена пароля прошла успешно")
            }else{
                console.log('Неверный пароль')
            }
        }catch (error) {
            console.error('Error',error)
        }
    }

    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
                    <div className={style.basic_data_button_container}>
                        <button type="submit" className={style.update_button}>Изменить</button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}
