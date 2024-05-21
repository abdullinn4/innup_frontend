import { Field, ErrorMessage } from "formik";
import style from "./startupform.module.sass";

export const Contacts = () => {
    return (
        <>
            <p>Контакты</p>

            <Field type="email" name="email" placeholder="Почта" className={style.contacts_data_inputs} />
            <ErrorMessage name="email" component="div" className={style.error} />

            <Field type="text" name="phone" placeholder="Номер телефона" className={style.contacts_data_inputs} />
            <ErrorMessage name="phone" component="div" className={style.error} />
        </>
    );
};
