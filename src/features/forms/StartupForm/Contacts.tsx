import {Field} from "formik";
import style from "./startupform.module.sass";

export const Contacts = () => {
    return(
        <>
            <p>Контакты</p>

            <Field type="email" name="email" placeholder="Почта" className={style.contacts_data_inputs}/>

            <Field type="text" name="phone" placeholder="Номер телефона" className={style.contacts_data_inputs}/>

        </>
    )
}