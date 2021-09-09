import React from 'react'
import ProductPage from '../ProductPage';
import Banner from '../Banner';
import Footer from '../Footer';
import product from '../../assets/fullcream.jpg'
import product2 from '../../assets/lowfat.jpg'

const Milk = () => {
    return (
        <>
        <Banner Title="Milk"  />
       <ProductPage name="FarmFresh Full Cream Pasteurised Milk" img={product}>
       <p>Ingredients</p>
                        <p>Fresh Cow's Milk</p>
                        <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 251.3kJ/61.2kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 3.2g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 3.3g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 4.6g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.7g</p>
        </ProductPage>
        <ProductPage name="FarmFresh Low Fat Pasteurised Milk" img={product2}>
        <p>Ingredients</p>
                        <p>Fresh Cow's Milk</p>
                        <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 188.4kJ/61.2kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 1.5g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 3.3g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 4.6g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.7g</p>
        </ProductPage>
        <Footer />
        </>
    )
}

export default Milk
