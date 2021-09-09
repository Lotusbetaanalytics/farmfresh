import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Applogo from '../../assets/logo.png';
import SortIcon from '@material-ui/icons/Sort';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    return (
        <div className={scroll ? styles.navbarActive : styles.navbar} >
            <div className={styles.logo}>
                <img src={Applogo} alt="FarmFresh" />
            </div>
            <div className={styles.bar} onClick={handleClick}>
                {click ? <CloseIcon fontSize="large" /> : <SortIcon fontSize="large" />}
            </div>
            <div className={click ? styles.navMenuactive : styles.navMenu}>
                <ul>
                    <li>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link to='#' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                        <div className={styles.dropdown}>
                            <ul>
                                <li>
                                    <Link to='/products/milk' className='nav-links' onClick={closeMobileMenu}>
                                        Milk
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/products/drinking-yoghurt' className='nav-links' onClick={closeMobileMenu}>
                                        Drinking Yoghurt
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/products/stirred-yoghurt' className='nav-links' onClick={closeMobileMenu}>
                                        Stirred Yoghurt
                                    </Link>
                                </li>

                            </ul>
                        </div>

                    </li>


                    <li>
                        <Link to='/recipes' className='nav-links' onClick={closeMobileMenu}>
                            Recipes
                        </Link>
                    </li>
                    <li>
                        <Link to='/where-to-buy' className='nav-links' onClick={closeMobileMenu}>
                            Where to Buy
                        </Link>
                    </li>
                    <li>
                        <a href='https://farmfreshdirect.ng/' className='nav-links' onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer" >
                            Shop
                        </a>
                    </li>
                    <li>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <Link to='/Distributor' className={`${styles.btn} btn-warning`} onClick={closeMobileMenu}>
                    <b>Become a Distributor</b>
                </Link>
                <Link to='/login' className={`${styles.btn} btn-dark`} onClick={closeMobileMenu}>
                    <b>Sign in</b>
                </Link>
            </div>

        </div>
    )
}
export default Navbar;