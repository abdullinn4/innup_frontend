import style from './settings.module.sass'
import {BasicDataForm} from "./BasicDataForm.tsx";
import {ChangePasswordForm} from "./ChangePasswordForm.tsx";
import {UploadPhoto} from "./UploadPhoto.tsx";
import {DeleteAccount} from "./DeleteAccount.tsx";
export const SettingsForm = () => {
    return (
        <>
            <main className={style.settings_wrapper}>
                <h1>Настройки</h1>
                <div>
                    <UploadPhoto/>
                </div>
                <div className={style.basic_data}>
                    <BasicDataForm/>
                </div>
                <div className={style.change_password_form}>
                    <ChangePasswordForm/>
                </div>
                <div className={style.delete_account_form}>
                    <DeleteAccount/>
                </div>
            </main>
        </>

    )

}