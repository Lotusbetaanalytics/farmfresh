import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import footer from '../../assets/footer.png';

const Footer = () => {
    return (
        <div className={styles.footer}>
             <div className={styles.grid}>
             <div className={styles.card}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="https://idls.lotusbetaanalytics.ca">Integrated Dairies</a></li>
                    <li><a href="https://farmfreshdirect.ng">FarmFresh Direct</a></li>
                    <li><a href="https://refresh.lotusbetaanalytics.ca">Refresh</a></li>
                    <li><Link>Privacy Policy</Link></li>
                </ul>
            </div>
            <div className={styles.media}>
            <a href="https://www.facebook.com/FarmFresh.IDL"><FaFacebookSquare /></a>
            <a href="https://instagram.com/integrateddairies/"><FaInstagramSquare /></a>
            <a href="https://twitter.com/IDL_FARMFRESH"><FaTwitterSquare /></a>
            </div>
            <div className={styles.img}>
            <img src={footer} alt="Footer" />
            </div>
            </div>
        </div>
    )
}

export default Footer
