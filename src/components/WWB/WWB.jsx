import React from 'react'
import product from '../../assets/wwb.jpg';
import styles from './styles.module.css'

const WWB = () => {
    return (
        <div className={styles.wwb}>
        <div className={styles.grid}>
        <div className={styles.img}>
        <img src={product} alt="FarmFresh What we Believe" />
    </div>
    <div className={styles.text}>
        <h1>What we Believe</h1>
        <p>"It's all about quality produce, ensuring we have healthy and happy cows, preserving the environment and giving our customers what they truly deserve."<br/><br />
            "We believe in a simple approach to dairy farming and that when we do these things well, people can taste the difference."</p>
    </div>
        </div>
    </div>
    )
}

export default WWB
