import React from 'react';
import styles from 'src/components/button/button.module.css';

function Button({type, text, goal}) {
    return (
        <button
            type={type}
            onClick={goal}
        >
            {text}
        </button>
    )
}

export default Button;