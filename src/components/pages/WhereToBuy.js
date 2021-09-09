import React from 'react'
import Banner from '../Banner';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import WTB from '../WTB/WTB';

const WhereToBuy = () => {
    return (
        <>
        <Banner Title="Where To Buy"  />
        <WTB />
        <Footer />
        </>
    )
}

export default WhereToBuy
