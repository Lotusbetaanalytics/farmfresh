import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom';

const WTB = () => {
    return (
        <div className={styles.wtb}>
            <div className={styles.grid}>
                <div className={styles.card}>
                <Link to="/">
                <div className={styles.circle}>
                <h3>NORTH CENTRAL</h3>
                </div>
                </Link>
                <p>Plateau, Nassarawa, Benue, FCT, Kogi</p>
                </div>
                
                <div className={styles.card}>
                <Link to="/">
                <div className={styles.circle}>
                <h3>NORTH EAST</h3>
                </div>
                
                </Link>
                <p>Bauchi, Gombe</p>
</div>
<div className={styles.card}>
                <Link to="/">
                <div className={styles.circle}>
                <h3>NORTH WEST</h3>
                </div>
                </Link>
                <p>Kaduna, Kano</p>
                </div>
                <div className={styles.card}>
                <Link to="/">
                <div className={styles.circle}>
                <h3>SOUTH WEST</h3>
                </div>
                </Link>
                <p>Lagos, Oyo</p>
</div>
<div className={styles.card}>
                <Link to="/">
                <div className={styles.circle}>
                <h3>SOUTH EAST</h3>
                </div>
                </Link>
                <p>Kaduna, Kano</p>
                </div>
                <div className={styles.card}>
                <Link to="/">
                <div className={styles.circle}>
                <h3>SOUTH SOUTH</h3>
                </div>
                </Link>
                <p>PortHarcourt, Crossriver</p>
                </div>
            </div>
        </div>
    )
}

export default WTB
