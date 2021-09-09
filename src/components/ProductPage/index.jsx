import React from 'react'
import styles from './styles.module.css';


const ProductPage = (props) => {
    return (
        <div className={styles.about}>
              <div className={styles.grid}>
            <div className={styles.img}>
                <img src={props.img} alt={props.name} />
        </div>
        <div className={styles.text}>
            <h1>{props.name}</h1>
           {props.children}
        </div>
            </div>
        </div>
    )
}

export default ProductPage
