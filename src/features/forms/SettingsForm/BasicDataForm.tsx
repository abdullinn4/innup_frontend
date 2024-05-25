import style from "./settings.module.sass";
import {Form, Formik} from "formik";
import {handleSubmitBasicData} from "../../../service";
import {RootState} from "../../../app/store.ts";
import {useSelector} from "react-redux";

interface BasicDataValues {
    name: string;
    aboutMe: string;
    email: string;
}

export const BasicDataForm = () => {
    const user = useSelector((state:RootState) => state.user.user);



    const initialValues: BasicDataValues = {
        name: user?.name || '',
        aboutMe: user?.aboutMe || '',
        email: user?.email || ''
    };

    return(
        <Formik
            initialValues={initialValues}
            onSubmit={(values: BasicDataValues) => {
                const combinedValues = { ...values, password: user.password };
                handleSubmitBasicData(combinedValues);
            }}
        >
            <Form>
                <h2>Имя</h2>
                <input type="text" name="name" className={style.basic_data_inputs} value={user?.name}/>

                <h2>О себе</h2>
                <textarea name="aboutMe" className={style.basic_data_desc_input} value={user?.aboutMe}/>

                <h2>Email</h2>
                <input type="text" name="email" className={style.basic_data_inputs} value={user?.email}/>

                <div className={style.basic_data_button_container}>
                    <button type="submit" className={style.update_button}>Обновить</button>
                </div>
            </Form>
        </Formik>
    )
}