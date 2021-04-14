import React from 'react';
import {useForm} from 'react-hook-form';


function SignUpPage() {
    const {handleSubmit, register, formState: {errors}} = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            username:
            <label htmlFor="username">
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

            password:
            <label htmlFor="password">
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

            email:
            <label htmlFor="email">
                <input
                    type="text"
                    name="email"
                    id="email"
                    // aria-invalid={errors.email ? "true" : "false"}
                    {...register('email',
                        {required: true,
                                validate: (value) => value.includes('@'),
                        })}
                />
                {errors.email && (
                    <span role="alert">
                        valid email is required {errors.email.message}
                    </span>
                )}
            </label>

            <button type="submit">
                sign up
            </button>
        </form>
    );
}

export default SignUpPage;