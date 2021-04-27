import React from 'react';
import styles from './loading-animation.css';

function LoadingAnimation() {
    return (
        <>
            <div className={styles['pacman-container']}>
                <div className={styles.pacman}>
                </div>
            </div>
        </>
    );
}

export default LoadingAnimation;