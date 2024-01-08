import React from 'react'
import { useForm } from "react-hook-form";
import s from "./SubmitRequestForm.module.scss"

const SubmitRequestForm = ({handleFormClose}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <form 
        className={s.form}
        onSubmit={handleSubmit(() => {
            onSubmit();
            handleFormClose();
            })}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    )
}

export default SubmitRequestForm