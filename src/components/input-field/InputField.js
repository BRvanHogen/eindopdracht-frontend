import React from 'react';
import styles from 'src/components/input-field/input-field.module.css';
import {useForm} from "react-hook-form";


function InputField({name, id}) {
    const {register, formState: { errors }} = useForm();
    return (
        <label htmlFor={name}>
        <input
            type="text"
            name={name}
            id={id}
            {...register(`${name}`, {required: true})}
        />
            {errors.name && (
                <span role="alert">
                    {name} is required
                </span>
            )}
        </label>
    )
}

export default InputField;