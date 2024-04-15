import style from "./startupform.module.sass"
import {BasicDataForm} from "./BasicDataForm.tsx";
import {CategoryForm} from "./CategoryForm.tsx";
import {Form, Formik} from "formik";
import {UploadPhotos} from "./UploadPhotos.tsx";
export const StartupForm = () => {
    const initialValues = {}
    const handleSubmit = () => {

    }

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
                        <div>

                        </div>
                        {/*<button></button>*/}
                    </main>
                </Form>
            </Formik>
        </>
    )
}