import React from 'react'
import styles from './styles.module.css';
import milk from '../../assets/milk2.jpg';
import syoghurt from '../../assets/Slide.JPG';
import dyoghurt from '../../assets/farmfresh.jpg';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className={styles.product}>
          <h1>Our Products</h1>  

          <div className={styles.grid}>
        <Link to="/products/milk">
          <div className={styles.products}>
            <div className={styles.img}>
                <img src={milk} alt="Product" />
            </div>
            <div className={styles.text}>
                <h2>Milk</h2>
                <p>Farm Fresh milk is obtained from exotic Friesian cows reared on the highlands of Vom, Jos.</p>
            </div>
         </div>
         </Link>
         <Link to="/products/drinking-yoghurt">
         <div className={styles.products}>
            <div className={styles.img}>
                <img src={syoghurt} alt="Product" />
            </div>
            <div className={styles.text}>
                <h2>Stirred Yoghurt</h2>
                <p>With a variety of delicious flavours, no preservatives and real fruit pulp, be guaranteed that you will have a fresh and healthy treat. 
                    Our stirred yoghurt comes in 2 sizes: 200g and 100g.</p>
            </div>
         </div>
         </Link>
         <Link to="/products/stirred-yoghurt">
         <div className={styles.products}>
            <div className={styles.img}>
                <img src={dyoghurt} alt="Product" />
            </div>
            <div className={styles.text}>
                <h2>Drinking Yoghurt</h2>
                <p>With a variety of delicious flavours and no preservatives, be guaranteed that you will have a fresh and healthy treat. Our drinking yoghurt comes in 2 sizes: 1L and 350ml.</p>
            </div>
         </div>
         </Link>

         </div>
        </div>
    )
}

export default Products
