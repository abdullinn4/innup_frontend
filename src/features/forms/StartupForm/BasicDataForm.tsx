import { Field, ErrorMessage } from "formik";
import style from "./startupform.module.sass";

export const BasicDataForm = () => {
    return (
        <>
            <p>Название продукта</p>
            <Field type="text" name="name" className={style.basic_data_inputs} />
            <ErrorMessage name="name" component="div" className={style.error} />

            <p>Слоган</p>
            <Field type="text" name="slogan" className={style.basic_data_slogan_input} />
            <ErrorMessage name="slogan" component="div" className={style.error} />

            <p>Веб-сайт (При наличии)</p>
            <Field type="url" name="webSite" className={style.basic_data_inputs} />
            <ErrorMessage name="webSite" component="div" className={style.error} />

            <p>Описание</p>
            <Field name="description" as="textarea" className={style.basic_data_textarea} />
            <ErrorMessage name="description" component="div" className={style.error} />

            <p>Укажите, какой примерный бюджет потребуется для развития стартапа</p>
            <Field type="text" name="price" className={style.basic_data_slogan_input} />
            <ErrorMessage name="price" component="div" className={style.error} />
        </>
    );
};
