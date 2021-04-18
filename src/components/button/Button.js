import React from 'react';
import styles from './button.module.css';

function Button({type, text, goal, id}) {
    return (
        <button
            className={styles.button}
            type={type}
            onClick={goal}
            id={id}
        >
            {text}
        </button>
    )
}

export default Button;