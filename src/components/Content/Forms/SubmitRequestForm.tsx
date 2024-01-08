import React from 'react'
import { useForm } from "react-hook-form";
import s from "./SubmitRequestForm.module.scss"

const SubmitRequestForm = ({ handleFormClose }) => {
    const { register, getFieldState, handleSubmit, watch, formState: { errors } } = useForm({nativeValidaton: true});
    const onSubmit = data => console.log(data);

    return (
        <form
            className={s.form}
            onSubmit={handleSubmit((data) => {
                onSubmit(data);
                handleFormClose();
            })}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className={s.input_data_container}>
                <div className={s.input_data}>
                    <input {...register("name", { required: true })} />
                    {/* <input type="text" required></input> */}
                    <div className={s.underline}></div>
                    <label for="" className={!!watch("name") ? s.correct : undefined}>Ваше имя</label>
                </div>

                {/* include validation with required or other standard HTML validation rules */}

                <div className={s.input_data}>
                    <input type="tel" {...register("phone", { required: true })} />
                    <div className={s.underline}></div>
                    <label for="" className={!!watch("phone") ? s.correct : undefined}>Телефон</label>
                </div>
                {/* errors will return when field validation fails  */}
                {errors.phone && <span className={s.error}>Оставьте телефон</span>}
            </div>


            <input
                className={s.submit_btn}
                type="submit"
                value="Отправить"
            />
        </form>
    )
}

export default SubmitRequestForm