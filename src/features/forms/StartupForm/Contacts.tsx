import style from "./startupform.module.sass";
import { Field, ErrorMessage, useFormikContext } from 'formik';


export const Contacts = () => {
    const { setFieldValue } = useFormikContext();

    const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const formattedValue = value.replace(/[^\d()-\s]/g, ''); // Разрешает только цифры, скобки, тире и пробелы
        setFieldValue('phone', formattedValue);
    };

    return (
        <>
            <p>Контакты</p>

            <Field type="email" name="email" placeholder="Почта" className={style.contacts_data_inputs} />
            <ErrorMessage name="email" component="div" className={style.error} />

            <Field
                type="text"
                name="phone"
                placeholder="Номер телефона"
                className={style.contacts_data_inputs}
                onInput={handlePhoneInput}
            />
            <ErrorMessage name="phone" component="div" className={style.error} />
        </>
    );
};

