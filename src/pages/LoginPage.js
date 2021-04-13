import React from 'react';
import { useForm } from 'react-hook-form';


function LoginPage() {
    const { handleSubmit, register, errors } = useForm();

    function onFormSubmit(data) {
        // data.preventDefault();
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
        <p>hier inloggen</p>
            <label htmlFor="username">
        <input
            type="text"
            placeholder="gebruikersnaam"
            name="username"
            ref={register(
                {
                    required: {
                    value: true,
                    message: 'voer gebruikersnaam in',

                    },
                }
                )}
        />
            </label>
            {errors.username && <p>{errors.username.message}</p>}


            <label htmlFor="password">
                <input
                    type="text"
                    placeholder="wachtwoord"
                    name="password"
                    ref={register(
                        {
                            required: {
                                value: true,
                                message: 'voer wachtwoord in',
                            }
                        }
                        )}
                />
            </label>
            {errors.password && <p>{errors.password.message}</p>}


            <button type="submit">
                log in
            </button>
        </form>
    )
}

export default LoginPage;