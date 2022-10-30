import CONFIG from '../../globals/config';

const createDetailTemplate = (restaurant) => 
`
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto__info">
  <center>
    <h1>${restaurant.name}</h1>
    
    <div>
    ${restaurant.categories
      .map(
        (category) => `
          <span class="category">${category.name}</span>
        `,
      )
      .join('')}
    </div>
  </center>
  <h3 style="color: red; text-decoration: underline"">Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="resto__overview">
    <h3 style="color: red; text-decoration: underline"">Overview</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="resto__menu">
    <h3 style="color: red; text-decoration: underline">Menu</h3>

      <div class="main-1">
      <h4>Food</h4>
      <ul>
      ${restaurant.menus.foods
        .map(
          (food) => `
            <li class="">${food.name}</li>
          `,
        )
        .join('')}
      </ul>
      </div>
      
      <div class="main-2">
        <h4>Drink</h4>
        <ul>
        ${restaurant.menus.drinks
          .map(
            (drink) => `
              <li class="">${drink.name}</li>
            `,
          )
          .join('')}
        </ul>
      </div>
  </div>

  <hr>

  <div class="resto__reviews" >
  <h3 style="color: red; text-decoration: underline">Reviews</h3>
  
  ${restaurant.customerReviews
    .map(
      (reviews) => `
         <div style="border-bottom: 0.5px solid #eee">
            <h4>${reviews.name}</h4> 
            <span style="
            font-size: 12px;
            color: #1f851d;
            margin-top: -5px;
            display: block;
            ">${reviews.date} </span>
            <p style="font-size: 14px">${reviews.review}</p>
         </div>
      `,
    )
    .join('')}
  </div>

`;

const createItemTemplate = (restaurant) => `
<div class="resto-item">
<a href="/#/detail/${restaurant.id}">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${restaurant.name}"
           src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.city}</p>
      <p>${restaurant.description}</p>
    </div>
    </a>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createItemTemplate,
  createDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
