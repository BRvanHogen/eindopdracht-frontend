import React from 'react';
import styles from './button.module.css';

function Button({type, text, onClick, id}) {
    return (
        <button
            className={styles.button}
            type={type}
            onClick={onClick}
            id={id}
        >
            {text}
        </button>
    )
}

export default Button;