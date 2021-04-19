import React from 'react';
import styles from './input-field.module.css';
import {useForm} from "react-hook-form";


function InputField({name, id}) {
    const {register, formState: { errors }} = useForm();
    return (
        <label htmlFor={name}>
            {name}:
        <input
            className={styles['input-field']}
            type="text"
            name={name}
            id={id}
            {...register(`${name}`, {required: true})}
        />
            {errors[{name}] && (
                <span role="alert">
                    {name} is required!
                </span>
            )}
        </label>
    )
}

export default InputField;