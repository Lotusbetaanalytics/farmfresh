import React from 'react';
import styles from './styles.module.css'
import img1 from '../../assets/farmfresh1.jpg';
import img2 from '../../assets/farmfresh2.jpg';
import img3 from '../../assets/farmfresh3.jpg';
import img4 from '../../assets/farmfresh4.jpg';

const PixStack = () => {
    return (
        <div className={styles.stack}>
            <div className={styles.grid}>
                <div className={styles.cards}>
                    <img src={img1} alt="Gallery" />
                </div>
                <div className={styles.cards}>
                    <img src={img2} alt="Gallery" />
                </div>
                <div className={styles.cards}>
                    <img src={img3} alt="Gallery" />
                </div>
                <div className={styles.cards}>
                    <img src={img4} alt="Gallery" />
                </div>
            </div>
        </div>
    )
}

export default PixStack
