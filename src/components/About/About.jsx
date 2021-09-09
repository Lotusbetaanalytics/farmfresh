import React from 'react'
import styles from './styles.module.css'
const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.grid}>
            <div className={styles.img}>
            {/* <img src={product} alt="FarmFresh" /> */}
        </div>
        <div className={styles.text}>
            <h5 className={styles.smBtn}>About Us</h5>
            <h1>Premium Brand of Yoghurt</h1>
            <p>FarmFresh yoghurt is a premium brand of yoghurt that is made from high quality fresh milk from our well nourished high breed of Holstein Friesian cows. 
                Our product is produced with state of the art modern technology that ensures no direct human interaction with the product along the process path, 
                hence guaranteeing high quality products.</p>
        </div>
            </div>
        </div>
    )
}

export default About
