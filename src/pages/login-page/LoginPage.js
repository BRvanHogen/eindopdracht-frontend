import React, {useState, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './login-page.module.css';
import axios from 'axios';
import {AuthContext} from "../../context/AuthContext";
import Button from "../../components/button/Button";
import InputField from "../../components/input-field/InputField";

function LoginPage() {
    const {login} = useContext(AuthContext);
    const {handleSubmit, register, formState: {errors}} = useForm();
    const [passwordShown, setPasswordShown] = useState(false);
    const [loginSuccess, toggleLoginSuccess] = useState(false);


    async function onFormSubmit(data) {
        try {
            const result = await axios.post('https://localhost:8444/authenticate', {
                username: data.username,
                password: data.password
            });
            //login functie uit AuthContext wordt aangeroepen en jwt wordt meegegeven uit results, zodat we hem in AuthContext kunnen ontvangen
            login(result.data.jwt);

            console.log(result);

            toggleLoginSuccess(true);

        } catch (e) {
            console.error(e);
        }
    }

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true)
    };

    return (
        <div className={styles.container}>
            <form className={styles['login-form']} onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <legend>Log in</legend>
                    <label htmlFor="username">
                        username:
                        <input
                            type="text"
                            name="username"
                            id="username"
                            aria-invalid={errors.username ? "true" : "false"}
                            {...register('username', {required: true})}
                        />
                        {/*    <InputField*/}
                        {/*    name="username"*/}
                        {/*    id="username"*/}
                        {/*    />*/}
                        {errors.username && (
                            <span role="alert">
                        username is required
                    </span>
                        )}
                    </label>

                    <label htmlFor="password">
                        password:
                        <input
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            id="password"
                            aria-invalid={errors.password ? "true" : "false"}
                            {...register('password', {required: true})}
                        />
                        <i onClick={togglePasswordVisibility}>{passwordShown ? <p>🙊</p> : <p>🙈</p>}</i>

                        {errors.password && (
                            <span role="alert">
                        password is required
                    </span>
                        )}
                    </label>

                    <label htmlFor="login">
                        <Button
                            type="submit"
                            text="Go!"
                        />
                    </label>

                    {loginSuccess === true && <p>login successful. Profile page loading</p>}
                </fieldset>
            </form>
        </div>
    )
}

export default LoginPage;