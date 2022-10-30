import TheRestaurant from '../../data/res-source';
import { createItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero" id="home">
        <div class="hero-content">
          <h2>Restaurant Catalogue</h2>
          <h5 style="margin-bottom: 10px">Lets Find ur Restaurant</h5>
          <a href="#here" style="background: white;
          color: red;
          padding: 5px 20px;
          width: 45px;
          text-decoration: none;
          font-size: 16px;
          border-radius: 6px;">Here!</a>
        </div>
      </div>
      <div class="content" id="here">
        <h2 class="content__heading">All Restaurant</h2>
        <div id="restaurant-container" class="grid-resto">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurant.listRestaurant();
    const resContainer = document.querySelector('#restaurant-container');
    restaurants.forEach((restaurant) => {
      resContainer.innerHTML += createItemTemplate(restaurant);
    });
  },
};

export default Home;
