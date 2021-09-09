import React from 'react'
import Yoghurt from '../yoghurt';
import Banner from '../Banner';
import Footer from '../Footer';
import styles from './styles.module.css';
import Mango from '../../assets/mango.jpg';
import Sweet from '../../assets/sweet.jpg';
import unsweet from '../../assets/unsweet.jpg';
import banana from '../../assets/banana.jpg';
import pineapple from '../../assets/Pineapple1L.jpg';
import strawberry from '../../assets/Strawberry1L.jpg';
import vanilla from '../../assets/vanilla.jpg';


const DrinkingYoghurt = () => {
    return (
        <>
        <Banner Title="Drinking Yoghurt"  />
        <div className={styles.yoghurt}>
            <h1>Drinking Yoghurt</h1>
<p>With a variety of delicious flavours and no preservatives, be guaranteed that you will have a fresh and healthy treat. Our drinking yoghurt comes in 2 sizes: 1L and 350ml.</p>
        <div className={styles.grid}>
        <Yoghurt title="Mango Flavoured Drinking Yoghurt" img={Mango}>
        <p><b>Ingredients: </b>
        Partly skimmed cow’s milk, Sugar, Stabiliser, Natural flavouring, Lactic acid culture, Natural colouring</p>
      <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 251.3kJ/61.2kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 3.2g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 3.3g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 4.6g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.7g</p>
                        <p><b>Storage Instructions</b><br />
Keep refrigerated between 3 and 7 ºC Consume within 3 days of opening</p>
            </Yoghurt>
            <Yoghurt title="Sweetened Drinking Yoghurt" img={Sweet}>
        <p><b>Ingredients: </b>
        Partly skimmed cow’s milk,  Stabiliser, Lactic acid culture</p>
      <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 355.8kJ/84.9kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 3.0g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 2.8g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 11.6g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.8g</p>
                        <p><b>Storage Instructions</b><br />
Keep refrigerated between 3 and 7 ºC Consume within 3 days of opening</p>
            </Yoghurt>
            <Yoghurt title="Unsweetened Drinking Yoghurt" img={unsweet}>
            <p><b>Ingredients: </b>
            Partly skimmed cow’s milk,  Stabiliser, Lactic acid culture</p>
      <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 355.8kJ/84.9kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 3.0g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 2.8g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 11.6g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.8g</p>
                        <p><b>Storage Instructions</b><br />
Keep refrigerated between 3 and 7 ºC Consume within 3 days of opening</p>
            </Yoghurt>

            <Yoghurt title="Banana Flavoured Drinking Yoghurt" img={banana}>
            <p><b>Ingredients: </b>
            Partly skimmed cow’s milk, Sugar, Stabiliser, Natural flavouring, Lactic acid culture, Natural colouring</p>
      <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 355.8kJ/84.9kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 3.0g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 2.8g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 11.6g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.8g</p>
                        <p><b>Storage Instructions</b><br />
Keep refrigerated between 3 and 7 ºC Consume within 3 days of opening</p>
            </Yoghurt>
            <Yoghurt title="Pineapple Flavoured Drinking Yoghurt" img={pineapple}>
            <p><b>Ingredients: </b>
            Partly skimmed cow’s milk, Sugar, Stabiliser, Natural flavouring, Lactic acid culture, Natural colouring</p>
      <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 355.8kJ/84.9kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 3.0g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 2.8g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 11.6g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.8g</p>
                        <p><b>Storage Instructions</b><br />
Keep refrigerated between 3 and 7 ºC Consume within 3 days of opening</p>
            </Yoghurt>
            <Yoghurt title="Strawberry Flavoured Drinking Yoghurt" img={strawberry}>
            <p><b>Ingredients: </b>
            Partly skimmed cow’s milk, Sugar, Stabiliser, Natural flavouring, Lactic acid culture, Natural colouring</p>
      <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 355.8kJ/84.9kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 3.0g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 2.8g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 11.6g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.8g</p>
                        <p><b>Storage Instructions</b><br />
Keep refrigerated between 3 and 7 ºC Consume within 3 days of opening</p>
            </Yoghurt>
            <Yoghurt title="Vanilla Flavoured Drinking Yoghurt" img={vanilla}>
            <p><b>Ingredients: </b>
            Partly skimmed cow’s milk, Sugar, Stabiliser, Natural flavouring, Lactic acid culture, Natural colouring</p>
      <p><b>Nutritional Information Per 100g Serving</b></p>
                        <p><b>Energy:</b>&nbsp;&nbsp; 355.8kJ/84.9kcal</p>
                        <p><b>Milk fat:</b>&nbsp;&nbsp; 3.0g max</p>
                        <p><b>Protein:</b>&nbsp;&nbsp; 2.8g min</p>
                        <p><b>Carbohydrates:</b>&nbsp;&nbsp; 11.6g</p>
                        <p><b>Minerals:</b>&nbsp;&nbsp;  0.8g</p>
                        <p><b>Storage Instructions</b><br />
Keep refrigerated between 3 and 7 ºC Consume within 3 days of opening</p>
            </Yoghurt>
        </div>
        </div>
       
        <Footer />
        </>
    )
}

export default DrinkingYoghurt
