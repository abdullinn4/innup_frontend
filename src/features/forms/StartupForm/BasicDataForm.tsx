import style from "./startupform.module.sass"
import {Field} from "formik";
export const BasicDataForm = () => {
    return(
        <>
            <p>Название продукта</p>
            <Field type="text" name="name" className={style.basic_data_inputs}/>

            <p>Слоган</p>
            <Field type="text" name="slogan" className={style.basic_data_slogan_input}/>

            <p>Веб-сайт</p>
            <Field type="email" name="webSite" className={style.basic_data_inputs}/>

            <p>Описание</p>
            <Field name="description" as="textarea" className={style.basic_data_textarea}/>
        </>

    )
}