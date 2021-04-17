import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import styles from '../stylesheets/login-page.module.css';
import axios from 'axios';

const eye = <FontAwesomeIcon icon={faEye}/>

function LoginPage() {
    const {handleSubmit, register, formState: { errors } } = useForm();
    const [passwordShown, setPasswordShown] = useState(false);

    async function onFormSubmit(data) {
        // data.preventDefault();
        console.log(data);
    }

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true)
    };

    return (
        <div className={styles.container}>
        <form className={styles['login-form']} onSubmit={handleSubmit(onFormSubmit)}>
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
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    aria-invalid={errors.password ? "true" : "false"}
                    {...register('password', {required: true})}
                />
                <i onClick={togglePasswordVisibility}>{eye}</i>

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
        </div>
    )
}

export default LoginPage;