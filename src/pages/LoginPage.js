import React from 'react';
import { useForm } from 'react-hook-form';


function LoginPage() {
    const {handleSubmit, register, formState: { errors } } = useForm();

    function onFormSubmit(data) {
        // data.preventDefault();
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>

            <label htmlFor="username">
                username:
                <input
                  type="text"
                  name="username"
                  id="username"
                  aria-invalid={errors.username ? "true" : "false"}
                  {...register('username', {required: true})}
                />
                {errors.username && (
                    <span role="alert">
                        username is required
                    </span>
                )}
            </label>

            <label htmlFor="password">
                password:
                <input
                    type="text"
                    name="password"
                    id="password"
                    aria-invalid={errors.password ? "true" : "false"}
                    {...register('password', {required: true})}
                />
                {errors.password && (
                    <span role="alert">
                        password is required
                    </span>
                )}
            </label>



            <button type="submit">
                log in
            </button>
        </form>
    )
}

export default LoginPage;