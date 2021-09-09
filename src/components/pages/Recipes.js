import React from 'react'
import ProductPage from '../ProductPage';
import Banner from '../Banner';
import Footer from '../Footer';
import salad from '../../assets/salad.jpg'
import cake from '../../assets/cake.jpg'
import egg from '../../assets/eggs.jpg'
import pancake from '../../assets/pancake.jpg'
import mango from '../../assets/mangos.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Recipes = () => {
    return (
        <>
        <Banner Title="Recipes"  />
       <ProductPage name="Honey Herb Salad Dressing" img={salad}>
      <table className="table table-striped">
          <tbody>
              <tr>
                  <td>1/2</td>
                  <td>Cup</td>
                  <td>FarmFresh Unsweetened Yoghurt or 200g FarmFresh Natural Stirred Yoghurt</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Teaspoon</td>
                  <td>Finely chopped Parsley</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Teaspoon</td>
                  <td>Finely chopped Mint</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Teaspoon</td>
                  <td>Finely chopped Onion</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Tablespoon</td>
                  <td>Olive oil</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Tablespoon</td>
                  <td>Honey</td>
              </tr>
              <tr>
                  <td>1/4</td>
                  <td>Teaspoon</td>
                  <td>Sea Salt</td>
              </tr>
              <tr>
                  <td>1/4</td>
                  <td>Teaspoon</td>
                  <td>Black Pepper</td>
              </tr>
          </tbody>
      </table>
      <p>Mix all ingredients together.<br />

Liberally drizzle over any salad of your choice.</p>
        </ProductPage>
        <ProductPage name="Simple Chocolate Cake (recipe from Sifa Asani Gowon)" img={cake}>
        <table className="table table-striped">
          <tbody>
              <tr>
                  <td>1/2</td>
                  <td>Cup</td>
                  <td>Butter</td>
              </tr>
              <tr>
                  <td>11/2</td>
                  <td>Cups</td>
                  <td>Brown Sugar</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td></td>
                  <td>Eggs</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Cups</td>
                  <td>Flour</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Teaspoon</td>
                  <td>Bicarbonate of Soda</td>
              </tr>
              <tr>
                  <td>1/2</td>
                  <td>Cup</td>
                  <td>Cocoa</td>
              </tr>
              <tr>
                  <td>1/2</td>
                  <td>Cup</td>
                  <td>FarmFresh Pasteurized Milk (Full Cream or Low Fat)</td>
              </tr>
              <tr>
                  <td>1/2</td>
                  <td>Cup</td>
                  <td>FarmFresh Unsweetened Drinking Yoghurt</td>
              </tr>
          </tbody>
      </table>
      <p>Cream butter an sugar together. Beat in eggs until fluffy.<br /><br />

In a separate bowl, sift flour, cocoa and bicarbonate of soda. In another bowl, mix milk and yoghurt together.<br /><br />

Add butter and egg mixture into the flour mixture alternately with milk mixture.<br /><br />

Spread into an 8 – 9 inch greased cake tin and bake in preheated oven at 350 °F (180 °C). Bake for 40 minutes to 1 hour.<br /><br />

When done, take out and let cool.<br /><br />

Optional – Top with chocolate ganache – on medium heat, melt 1/3 Cups of butter in a pan, add ¾ Cups of FarmFresh Pasteurized Full Cream Milk and head until just before it gets to a boil. Add 1 Cup of dark chocolate chips to heated milk. Stir until chocolate is melted and well incorporated with milk. Let cool and pour over cake, starting from the center.</p>
        </ProductPage>

        <ProductPage name="Fluffy FarmFresh Scrambled Eggs" img={egg}>
      <table className="table table-striped">
          <tbody>
              <tr>
                  <td>2</td>
                  <td></td>
                  <td>Eggs</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Tablespoons</td>
                  <td>FarmFresh Natural Stirred Yoghurt</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Pinch</td>
                  <td>Salt</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Teaspoon</td>
                  <td>Vegetable oil</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Teaspoon</td>
                  <td>Butter</td>
              </tr>
          </tbody>
      </table>
      <p>Whisk together eggs, yoghurt and salt in a bowl until slightly fluffy.<br /><br />

      Heat oil in a pan over medium heat; coat the pan evenly with the oil.<br/><br />
      Stir in the egg mixture and add the butter. Continue stirring until cooked.<br /><br />
      Makes 1 serving.
      </p>
        </ProductPage>

        <ProductPage name="American Style Wheat & Yoghurt Pancakes" img={pancake}>
      <table className="table table-striped">
          <tbody>
              <tr>
                  <td>1/2</td>
                  <td>Cup</td>
                  <td>Whole wheat flour</td>
              </tr>
              <tr>
                  <td>1/2</td>
                  <td>Cup</td>
                  <td>All purpose flour</td>
              </tr>
            
              <tr>
                  <td>1</td>
                  <td>Teaspoon</td>
                  <td>Bicarbonate of Soda</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Tablespoon</td>
                  <td>Raw cane Sugar</td>
              </tr>
              <tr>
                  <td>1/4</td>
                  <td>Teaspoon</td>
                  <td>Salt</td>
              </tr>
              <tr>
                  <td>1/2</td>
                  <td>Cup</td>
                  <td>FarmFresh Pasteurised Milk (Full Cream or Low Fat)</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>200g cup</td>
                  <td>Farm Fresh Natural Stirred Yoghurt</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td></td>
                  <td>Egg</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Tablespoons</td>
                  <td>Melted Unsalted Butter</td>
              </tr>
          </tbody>
      </table>
      <p>Sieve whole wheat flour, all purpose flour, bicarbonate of soda and salt into a mixing bowl. Add sugar and mix with a fork<br /><br />

      In another bowl, whisk together, the egg, milk, yoghurt and melted unsalted butter. Add the flour mixture to the liquid and stir just until combined.<br/><br />
      Heat a skillet, griddle, or pan over medium heat. Lightly coat with 1 teaspoon of vegetable oil. Drop mixture, ¼ cup at a time on the griddle with space for spreading. Fry until bubbles form and break on the pancake’s surface, and the bottom is browned. Flip and cook the other side just until done.<br/><br/>
      Makes 8 pancakes.
      </p>
        </ProductPage>


        <ProductPage name="Zesty Mango Smoothie" img={mango}>
      <table className="table table-striped">
          <tbody>
              <tr>
                  <td>3</td>
                  <td>Cups</td>
                  <td>Peeled and diced Mangos (fresh or frozen)</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>Teaspoon</td>
                  <td>Grated Ginger</td>
              </tr>
            
              <tr>
                  <td>1</td>
                  <td>Tablespoon</td>
                  <td>Honey</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>200g cup</td>
                  <td>FarmFresh Natural Stirred Yoghurt</td>
              </tr>
              
          </tbody>
      </table>
      <p>Place all ingredients in a blender. Blend until smooth. Serve chilled. Makes 3 servings<br /><br />
      </p>
        </ProductPage>
        <Footer />
        </>
    )
}

export default Recipes
