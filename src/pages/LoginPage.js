import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';


function LoginPage() {
    const {handleSubmit, register, errors } = useForm();

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
                  {...register('username')}
                />
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