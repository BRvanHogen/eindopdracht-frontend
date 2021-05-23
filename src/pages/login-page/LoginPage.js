import React, {useState, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './login-page.module.css';
import axios from 'axios';
import {AuthContext} from "../../context/AuthContext";
import Button from "../../components/button/Button";
import InputField from "../../components/input-field/InputField";
import LoadingAnimation from "../../components/loading-disc/LoadingAnimation";
import ClipAnimation from "../../components/decoration/clip-animation/ClipAnimation";
import LoadingRipple from "../../components/loading-disc/loadingRipple";
import {NavLink} from "react-router-dom";

function LoginPage() {
    const {login} = useContext(AuthContext);
    const {handleSubmit, register, formState: {errors}} = useForm();
    const [passwordShown, setPasswordShown] = useState(false);
    const [loginSuccess, toggleLoginSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function onFormSubmit(data) {
        try {
            toggleLoading(true);
            const result = await axios.post('https://localhost:8444/authenticate', {
                username: data.username,
                password: data.password
            });
            //login functie uit AuthContext wordt aangeroepen en jwt wordt meegegeven uit results, zodat we hem in AuthContext kunnen ontvangen
            login(result.data.jwt);

            console.log(result);

            toggleLoading(false);
            toggleLoginSuccess(true);

        } catch (e) {
            toggleLoading(false);
            console.error(e);
        }
    }

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true)
    };

    return (
        <div className={styles.background}>
        <div className={styles.container}>
            <h1 className={styles.title}>GarageLab</h1>
            <form className={styles['login-form']} onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset className={styles.fieldset}>
                    {/*<legend className={styles.legend}>Log in</legend>*/}
                    <label htmlFor="username">
                        <input
                            className={styles.input}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="username"
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
                        <input
                            className={styles.input}
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="password"
                            aria-invalid={errors.password ? "true" : "false"}
                             {...register('password', {required: true})}
                        />
                        <i
                            className={styles['toggle-password']}
                            onClick={togglePasswordVisibility}
                        >
                            {passwordShown ? <p>🙊</p> : <p>🙈</p>}
                        </i>

                        {loginSuccess ?
                            <p className={styles['hide-message']}></p> :
                        <p
                            className={styles['login-message']}
                        >
                            Please login. Not a user? Sign up <NavLink to="sign-up">here</NavLink>
                        </p>
                        }

                        {errors.password && (
                            <span role="alert">
                        password is required
                    </span>
                        )}
                    </label>
                    <div className={styles['button-container']}>
                    <label htmlFor="login">
                        <Button
                            className={styles.button}
                            type="submit"
                            text="Go!"
                        />
                    </label>
                    </div>

                    {loginSuccess === true && <p className={styles['login-message']}>login successful. Profile page loading</p>}
                </fieldset>
            </form>
        </div>
            {loading === true && <LoadingRipple/>}
        </div>
    )
}

export default LoginPage;