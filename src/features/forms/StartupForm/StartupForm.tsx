import style from "./startupform.module.sass"
import {BasicDataForm} from "./BasicDataForm.tsx";
import {CategoryForm} from "./CategoryForm.tsx";
import {Form, Formik} from "formik";
import {UploadPhotos} from "./UploadPhotos.tsx";
import {Contacts} from "./Contacts.tsx";
import {handleCreateStartup} from "../../../service";
import {StartupDto} from "../../../entities";

export const StartupForm = () => {
    const initialValues: StartupDto = {
        name: '',
        slogan: '',
        webSite: '',
        description: '',
        category: '',
        email: '',
        phone: '',
        mainPhoto: null,
        additionalPhotos: []
    };

    const handleSubmit = async (values: StartupDto, { setSubmitting }: any) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('slogan', values.slogan);
        formData.append('web-site', values.webSite);
        formData.append('description', values.description);
        formData.append('category', values.category);
        formData.append('email', values.email);
        formData.append('phone', values.phone);

        if (values.mainPhoto) {
            formData.append('mainPhoto', values.mainPhoto);
        }

        values.additionalPhotos.forEach((photo: File, index: number) => {
            formData.append(`additionalPhoto${index}`, photo);
        });

        try {
            const response = await handleCreateStartup(formData);
            console.log('Форма успешно отправлена:', response);
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return(
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <main className={style.create_startup_wrapper}>
                        <h1>Стартап</h1>
                        <div>
                            <BasicDataForm/>
                        </div>
                        <div>
                            <CategoryForm/>
                        </div>
                        <div className={style.create_startup_media}>
                            <UploadPhotos/>
                        </div>
                        <div className={style.contacts_container}>
                            <Contacts/>
                        </div>
                        <div>
                            <button type="submit" className={style.create_startup_button}>Отправить заявку</button>
                        </div>
                    </main>
                </Form>
            </Formik>
        </>
    )
}