import React from 'react'
import Yoghurt from '../yoghurt';
import Banner from '../Banner';
import Footer from '../Footer';
import styles from './styles.module.css';
import strawberry from '../../assets/stirred.jpg';
import farmfresh from '../../assets/sNatural.jpg';
import pineapple from '../../assets/sPineapple.jpg';



const StirredYoghurt = () => {
    return (
        <>
        <Banner Title="Stirred Yoghurt"  />
        <div className={styles.yoghurt}>
            <h1>Stirred Yoghurt</h1>
<p>With a variety of delicious flavours, no preservatives and real fruit pulp, be guaranteed that you will have a fresh and healthy treat.
Our stirred yoghurt comes in 2 sizes: 200g and 100g.</p>
        <div className={styles.grid}>
        <Yoghurt title="Farm Fresh Strawberry Stirred Yoghurt" img={strawberry}>
        <p><b>Ingredients: </b>
        Partly skimmed cow’s milk, Strawberry fruit pulp, Stabilizer, Lactic acid culture, Colouring (E129)</p>
      <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 385.2kJ/91.4kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 2.6g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 2.7g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 14.6g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.6g</p>
                       
            </Yoghurt>
            <Yoghurt title="Farm Fresh Pineapple Stirred Yoghurt" img={pineapple}>
        <p><b>Ingredients: </b>
        Partly skimmed cow’s milk, Pineapple fruit pulp, Stabilizer, Lactic acid culture, Colouring (E102)</p>
      <p><b>Nutritional Information Per 100g Serving</b></p>
      <p><b>Energy:</b>&nbsp;&nbsp; 385.2kJ/91.4kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 2.6g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 2.7g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 14.3g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.6g</p>
                        
            </Yoghurt>
            <Yoghurt title="Farm Fresh Natural Stirred Yoghurt" img={farmfresh}>
            <p><b>Ingredients: </b>
            Partly skimmed cow’s milk, Stabilizer, Lactic acid culture</p>
      <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 288.8kJ/84.9kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 1.5g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 3.0g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 7.2g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.8g</p>
                      
            </Yoghurt>

           
        </div>
        </div>
       
        <Footer />
        </>
    )
}

export default StirredYoghurt
