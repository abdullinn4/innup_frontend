import { useState } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import style from "./startupform.module.sass";
import { options } from "./CategoryOptions.ts";

export const CategoryForm = () => {
    const { setFieldValue } = useFormikContext<any>();
    const [selectedOption, setSelectedOption] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (value: string) => {
        setSelectedOption(value);
        setFieldValue("category", value);
        setIsOpen(false);
    };

    return (
        <>
            <p>Категория</p>
            <div className={style.custom_select_container} onClick={() => setIsOpen(!isOpen)}>
                <div className={style.custom_select}>
                    {selectedOption ? options.find(option => option.value === selectedOption)?.label : "Выберите категорию"}
                </div>
                {isOpen && (
                    <div className={style.custom_select_dropdown}>
                        {options.map((option) => (
                            <div
                                key={option.value}
                                className={style.custom_select_option}
                                onClick={() => handleOptionClick(option.value)}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Field type="hidden" name="category" value={selectedOption} />
            <ErrorMessage name="category" component="div" className={style.error} />
        </>
    );
};
