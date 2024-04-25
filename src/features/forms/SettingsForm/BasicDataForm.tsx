import style from "./settings.module.sass";
import {Form, Formik} from "formik";
import {handleSubmitBasicData} from "../../../service";

export const BasicDataForm = () => {
    const initialValues = {name: '', aboutMe:'',username:''};

    return(
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmitBasicData}
        >
            <Form>
                <h2>Имя</h2>
                <input type="text" name="name" className={style.basic_data_inputs}/>

                <h2>О себе</h2>
                <textarea name="aboutMe" className={style.basic_data_desc_input}/>

                <h2>Username</h2>
                <input type="text" name="username" className={style.basic_data_inputs}/>

                <div className={style.basic_data_button_container}>
                    <button type="submit" className={style.update_button}>Обновить</button>
                </div>
            </Form>
        </Formik>
    )
}