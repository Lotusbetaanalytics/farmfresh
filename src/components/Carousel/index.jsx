import React from 'react'
import styles from './styles.module.css';
import product from '../../assets/product.png';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div className={styles.backdrop}>
            <img src={product} alt="Products" />
            <div className={styles.btnM}>
                <Link to="/products/milk" className={`${styles.btn} btn-warning`}>See More</Link>
                <a className={`${styles.btn} btn-dark`} href="http://farmfreshdirect.ng/">Order Now</a>
            </div>

        </div>
    )
}
export default Carousel;