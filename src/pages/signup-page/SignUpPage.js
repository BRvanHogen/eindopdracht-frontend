import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import styles from './signup-page.module.css';
import axios from 'axios';
import {NavLink, useHistory} from 'react-router-dom';
import Button from "../../components/button/Button";
import {motion} from "framer-motion";

function SignUpPage() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const [passwordShown, setPasswordShown] = useState(false);
    const [signUpSuccess, toggleSignUpSuccess] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const history = useHistory();

    async function onFormSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('https://localhost:8444/users/sign-up', {
                username: data.username,
                password: data.password,
                email: data.email,
                enabled: data.enabled
            });

            console.log(result);
            // n.b. als de data keys overeen komen, mag je ook gewoon data meegeven als object hierboven
            //trek de data (zie inputs hieronder) ook even gelijk met wat in SB applicatie required is
            toggleSignUpSuccess(true);

            setTimeout(() => {
                history.push('/profile');
            }, 2000);


        } catch (e) {
            console.error(e)
        }
    }

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}>GarageLab</h1>
                <form className={styles['signup-form']} onSubmit={handleSubmit(onFormSubmit)}>
                    <fieldset className={styles.fieldset}>
                        {/*<legend>Sign up</legend>*/}
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
                            <i className={styles['toggle-password']} onClick={togglePasswordVisibility}>{passwordShown ? <p>🙊</p> : <p>🙈</p>}</i>

                            {errors.password && (
                                <span role="alert">
               password is required
            </span>
                            )}
                        </label>


                        <label htmlFor="email">
                            <input
                                className={styles.input}
                                type="text"
                                name="email"
                                id="email"
                                placeholder="email"
                                // aria-invalid={errors.email ? "true" : "false"}
                                {...register('email',
                                    {
                                        required: true,
                                        validate: (value) => value.includes('@'),
                                    })}
                            />
                            {errors.email && (
                                <span role="alert">
                        valid email is required {errors.email.message}
                    </span>
                            )}
                        </label>


                        <label>
                            register account
                            <input
                                type="checkbox"
                                name="enabled"
                                id="enabled"
                                {...register(
                                    'enabled',
                                    {required: true}
                                )}
                            />
                            {errors.enabled && (
                                <span role="alert">
                    please check the box
                </span>
                            )}
                        </label>

                        <Button
                            type="submit"
                            text="Go!"
                        />
                        {signUpSuccess ?
                            <p className={styles['hide-message']}></p>
                        :
                            <p
                                className={styles['signup-message']}
                            >
                                Already a user? Log in <NavLink to="sign-in">here</NavLink>
                            </p>
                        }

                        {signUpSuccess === true &&
                        <p className={styles['signup-message']}>sign up successful. Profile page loading...</p>
                        }
                    </fieldset>
                </form>
                <motion.div
                    className="block"
                    onClick={() => setIsActive(!isActive)}
                    animate={{
                        rotate: isActive ? 180 : 360
                    }}
                >
                    <h3 className={styles['signup-cue']}>Sign up below...</h3>
                </motion.div>
            </div>
        </div>
    );
}

export default SignUpPage;