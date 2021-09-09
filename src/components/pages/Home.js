import React from 'react'
import Carousel from '../Carousel';
import About from '../About/About';
import Products from '../Products/Products';
import WWB from '../WWB/WWB';
import PixStack from '../pixstack';
import Footer from '../Footer';

const Home = () => {
    return (
        <>
        <Carousel />
        <About />
        <Products />
        <WWB />
        <PixStack />
        <Footer />
        </>
    )
}

export default Home
