import react from 'react';
import styles from './loading-ripple.module.css';

function LoadingRipple() {
    return (
        <>
            <div className={styles['loading-ripple']}></div>
            <div className={styles['div-1']}>
            </div>
            <div>
            </div>
        </>
    )
}

export default LoadingRipple;