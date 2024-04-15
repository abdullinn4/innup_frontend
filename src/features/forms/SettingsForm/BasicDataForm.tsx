import style from "./settings.module.sass";
import axios from "axios";
import {Form, Formik} from "formik";

interface FormValues{
    name: string,
    aboutMe: string,
    username: string
}
export const BasicDataForm = () => {
    const initialValues = {name: '', aboutMe:'',username:''};
    const handleSubmit = async (values: FormValues) => {
        try {
            const response = await axios.post('post/basic-data-form', {
                name: values.name,
                aboutMe: values.aboutMe,
                username: values.username
            })
            console.log('',response.data)
        }catch (error) {
            console.error('',error)
        }
    }


    return(
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
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