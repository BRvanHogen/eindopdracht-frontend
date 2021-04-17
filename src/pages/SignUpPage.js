import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import styles from '../stylesheets/signup-page.module.css';
import axios from 'axios';

const eye = <FontAwesomeIcon icon={faEye}/>;

function SignUpPage() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const [passwordShown, setPasswordShown] = useState(false);

    async function onFormSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('https://localhost:8444/users', {
                username: data.username,
                password: data.password,
                email: data.email
            });

            console.log(result);
            // n.b. als de data keys overeen komen, mag je ook gewoon data meegeven als object hierboven
            //trek de data (zie inputs hieronder) ook even gelijk met wat in SB applicatie required is
        } catch (e) {
            console.error(e)
        }
    }

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div className={styles.container}>
        <form className={styles['signup-form']} onSubmit={handleSubmit(onFormSubmit)}>
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
        </div>
    );
}

export default SignUpPage;