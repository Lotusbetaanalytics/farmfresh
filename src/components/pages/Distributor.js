import React from 'react'
import ProductPage from '../ProductPage';
import Banner from '../Banner';
import Footer from '../Footer';
import product from '../../assets/farmfresh5.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <>
        <Banner Title="Distributor"  />
       <ProductPage name="Requirements for a Farm Fresh Distributor" img={product}>
            <p>The category of people we classify as Distributors are customers who meet the following criteria:</p>
            <ul>
                <li>A long distance truck with fucntional cooling system & temperature logger; for picking up products from the factory in Jos (preferably a 4 tonnes truck); no older than 1 year</li>
                <li>A functional cold room with temperature logger for product storage (this can be internal or external)</li>
                <li>An outlets database of prospective customers for the proposed distribution area</li>
                <li>Empty crates for picking up products</li>
                <li>Standby generator to power the cold room in the event of a power failure</li>
                <li>2 mini cooling vans with temperature loggers for distribution within your allocated area, no older than 1 year</li>
                <li>Holding deposit equivalent to 4 weeks supply</li>
            </ul><br/>
            <h4 className="text-info">Requirements for a Farm Fresh Sub Distributor</h4>
            <p>The category of people we classify as Sub Distributors are customers who meet the following criteria:</p>
            <ul>
                <li>One cooling van with a temperature logger for distributions, no older than 1 year</li>
                <li>A functional cold room with temperature logger for product storage (this can be internal or external)</li>
                <li>Empty crates for picking up products</li>
                <li>Standby generator to power the cold room in the event of a power failure</li>
                <li>An outlets database of prospective customers for the proposed distribution area</li>
            </ul>
        </ProductPage>
        <Footer />
        </>
    )
}

export default Contact
