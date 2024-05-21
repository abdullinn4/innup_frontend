import style from "./startupform.module.sass";
import { BasicDataForm } from "./BasicDataForm.tsx";
import { CategoryForm } from "./CategoryForm.tsx";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { UploadPhotos } from "./UploadPhotos.tsx";
import { Contacts } from "./Contacts.tsx";
import { handleCreateStartup } from "../../../service";
import { StartupDto } from "../../../entities";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Обязательно"),
    slogan: Yup.string().required("Обязательно"),
    webSite: Yup.string().url("Некорректный URL").required("Обязательно"),
    description: Yup.string().required("Обязательно"),
    category: Yup.string().required("Обязательно"),
    email: Yup.string().email("Некорректная почта").required("Обязательно"),
    phone: Yup.string().required("Обязательно"),
    price: Yup.string().required("Обязательно"),
    mainPhoto: Yup.mixed().required("Обязательно"),
    additionalPhotos: Yup.array().min(1, "Добавьте хотя бы одно дополнительное фото").required("Обязательно")
});

export const StartupForm = () => {
    const initialValues: StartupDto = {
        name: '',
        slogan: '',
        webSite: '',
        description: '',
        category: '',
        email: '',
        phone: '',
        price: '',
        mainPhoto: null,
        additionalPhotos: []
    };

    const handleSubmit = async (values: StartupDto, { setSubmitting }: any) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('slogan', values.slogan);
        formData.append('webSite', values.webSite);
        formData.append('description', values.description);
        formData.append('category', values.category);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('price', values.price);

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

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <main className={style.create_startup_wrapper}>
                            <h1>Стартап</h1>
                            <div>
                                <BasicDataForm />
                            </div>
                            <div>
                                <CategoryForm />
                            </div>
                            <div className={style.create_startup_media}>
                                <UploadPhotos />
                            </div>
                            <div className={style.contacts_container}>
                                <Contacts />
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting} className={style.create_startup_button}>Отправить заявку</button>
                            </div>
                        </main>
                    </Form>
                )}
            </Formik>
        </>
    );
};
