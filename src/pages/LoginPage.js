import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';


function LoginPage() {
    const {handleSubmit, register, formState: { errors } } = useForm();

    function onFormSubmit(data) {
        // data.preventDefault();
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>

            <label htmlFor="username">
                Gebruikersnaam:
                <input
                  type="text"
                  name="username"
                  id="username"
                  aria-invalid={errors.username ? "true" : "false"}
                  {...register('username', {required: true})}
                />
                {errors.username && (
                    <span role="alert">
                        dit moet
                    </span>
                )}
            </label>


            {/*<fieldset>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        placeholder="wachtwoord"*/}
            {/*        name="password"*/}
            {/*    />*/}
            {/*</fieldset>*/}


            <button type="submit">
                log in
            </button>
        </form>
    )
}

export default LoginPage;

//trials
// {...register("username", {required: true, message: "this is required" })}

// https://react-hook-form.com/faqs#Howtocreateanaccessibleinputerrorandmessage
//toch raar dat 'ie het nu niet doet.