document.addEventListener('DOMContentLoaded', function () {
  const foods = [
    {
      foodName: 'Avocado Salad',
      chefName: 'Chef Maria Rodriguez',
      restaurantName: 'Green Bites Cafe',
      starLevel: 4,
      briefIntro:
        'A fresh salad featuring ripe avocados, mixed greens, and a zesty lime dressing.',
      tags: ['Salad', 'Vegetarian', 'Vegan', 'Healthy'],
      estimatedPrice: '$12.99',
      reviews: [
        {
          starLevel: 4,
          shortReview:
            'Avocado was perfectly ripe, and the dressing was flavorful!',
          reviewedTime: '30 minutes ago',
        },
        {
          starLevel: 5,
          shortReview: "Best avocado salad I've had! Will definitely return.",
          reviewedTime: '2 days ago',
        },
      ],
    },
    {
      foodName: 'Quinoa Bowl',
      chefName: 'Chef David Johnson',
      restaurantName: 'Quinoa Delights',
      starLevel: 4,
      briefIntro:
        'A nutritious quinoa bowl with roasted vegetables, chickpeas, and tahini sauce.',
      tags: ['Quinoa', 'Bowl', 'Vegetarian', 'Gluten-Free', 'Healthy'],
      estimatedPrice: '$14.99',
      reviews: [
        {
          starLevel: 5,
          shortReview: 'Healthy and delicious. The tahini sauce is a winner!',
          reviewedTime: '45 minutes ago',
        },
        {
          starLevel: 3,
          shortReview: 'Decent bowl but lacked seasoning. Could be better.',
          reviewedTime: '3 days ago',
        },
      ],
    },
    {
      foodName: 'Grilled Salmon',
      chefName: 'Chef Sarah Williams',
      restaurantName: 'Oceanview Grill',
      starLevel: 5,
      briefIntro:
        'Delicious grilled salmon seasoned with herbs and served with steamed asparagus.',
      tags: ['Seafood', 'Salmon', 'Grilled', 'Healthy'],
      estimatedPrice: '$18.99',
      reviews: [
        {
          starLevel: 5,
          shortReview:
            'The salmon was cooked to perfection, and the herbs were a great touch.',
          reviewedTime: '1 hour ago',
        },
        {
          starLevel: 4,
          shortReview:
            'Great flavors, but the portion size was smaller than expected.',
          reviewedTime: '1 day ago',
        },
      ],
    },
    {
      foodName: 'Kale and Quinoa Salad',
      chefName: 'Chef Emily Martinez',
      restaurantName: 'Greens & Grains',
      starLevel: 4,
      briefIntro:
        'A hearty kale and quinoa salad with cherry tomatoes, almonds, and lemon vinaigrette.',
      tags: ['Salad', 'Kale', 'Quinoa', 'Vegetarian', 'Healthy'],
      estimatedPrice: '$11.99',
      reviews: [
        {
          starLevel: 4,
          shortReview: 'Fresh kale and the crunch of almonds made my day!',
          reviewedTime: '15 minutes ago',
        },
        {
          starLevel: 4,
          shortReview:
            'Good balance of ingredients, but could use a bit more dressing.',
          reviewedTime: '5 days ago',
        },
      ],
    },
    {
      foodName: 'Chicken and Vegetable Stir-Fry',
      chefName: 'Chef Kevin Anderson',
      restaurantName: "Wok 'n Roll",
      starLevel: 4,
      briefIntro:
        'A low-fat chicken and vegetable stir-fry with a savory ginger-soy sauce.',
      tags: ['Stir-Fry', 'Chicken', 'Vegetables', 'Healthy'],
      estimatedPrice: '$13.99',
      reviews: [
        {
          starLevel: 5,
          shortReview:
            'The ginger-soy sauce is amazing. Chicken was tender and veggies were crisp.',
          reviewedTime: '10 minutes ago',
        },
        {
          starLevel: 4,
          shortReview:
            'Tasty and fulfilling. A bit too much sauce for my liking though.',
          reviewedTime: '2 days ago',
        },
      ],
    },
    {
      foodName: 'Quinoa and Black Bean Salad',
      chefName: 'Chef Alex Davis',
      restaurantName: 'Quinoa Fusion',
      starLevel: 4,
      briefIntro:
        'A refreshing salad with quinoa, black beans, corn, and a cilantro-lime dressing.',
      tags: ['Salad', 'Quinoa', 'Vegan', 'Gluten-Free'],
      estimatedPrice: '$10.99',
      reviews: [
        {
          starLevel: 4,
          shortReview:
            'Loved the combination of lime and cilantro. Super refreshing!',
          reviewedTime: '25 minutes ago',
        },
        {
          starLevel: 3,
          shortReview:
            'Overall decent but expected more flavor from the dressing.',
          reviewedTime: '4 days ago',
        },
      ],
    },
    {
      foodName: 'Veggie Wrap',
      chefName: 'Chef Jordan Smith',
      restaurantName: 'Wrap & Roll Deli',
      starLevel: 4,
      briefIntro:
        'A whole wheat wrap filled with an assortment of fresh vegetables, hummus, and a light vinaigrette.',
      tags: ['Wrap', 'Vegetarian', 'Healthy', 'Light'],
      estimatedPrice: '$9.99',
      reviews: [
        {
          starLevel: 5,
          shortReview:
            'The wrap was bursting with fresh veggies, and the hummus was a creamy delight!',
          reviewedTime: '20 minutes ago',
        },
        {
          starLevel: 5,
          shortReview:
            'Absolutely delicious and filling. The vinaigrette added a perfect zing!',
          reviewedTime: '1 day ago',
        },
        {
          starLevel: 4,
          shortReview:
            'Really enjoyed the variety of veggies. Could use a bit more dressing though.',
          reviewedTime: '3 days ago',
        },
        {
          starLevel: 3,
          shortReview:
            'Healthy option but the wrap was a little dry. More hummus next time, please!',
          reviewedTime: '5 days ago',
        },
      ],
    },
  ];

  const drinks = [
    {
      foodName: 'Mango Smoothie Bowl',
      chefName: 'Chef Michael Lee',
      restaurantName: 'Smoothie Haven',
      starLevel: 4,
      briefIntro:
        'A refreshing mango smoothie bowl topped with fresh fruits, granola, and honey.',
      tags: ['Smoothie', 'Breakfast', 'Vegetarian', 'Healthy'],
      estimatedPrice: '$9.99',
      reviews: [
        {
          starLevel: 5,
          shortReview:
            'The mango flavor was so fresh, and the toppings were the perfect complement!',
          reviewedTime: '2 hours ago',
        },
        {
          starLevel: 4,
          shortReview:
            'Delicious and nourishing, although it was a bit on the sweeter side for me.',
          reviewedTime: '1 day ago',
        },
        {
          starLevel: 4,
          shortReview:
            'Great portion size and the granola added a nice crunch. Will order again!',
          reviewedTime: '3 days ago',
        },
      ],
    },
    {
      foodName: 'Acai Bowl',
      chefName: 'Chef Jessica Wong',
      restaurantName: 'Acai Paradise',
      starLevel: 4,
      briefIntro:
        'An acai bowl topped with fresh berries, banana slices, and honey drizzle.',
      tags: ['Acai', 'Smoothie Bowl', 'Vegetarian', 'Healthy'],
      estimatedPrice: '$10.99',
      reviews: [
        {
          starLevel: 5,
          shortReview:
            'The balance of flavors was impeccable, and the honey drizzle was a game changer!',
          reviewedTime: '45 minutes ago',
        },
        {
          starLevel: 3,
          shortReview:
            "Enjoyable, but the bananas weren't as fresh as I'd like. The acai itself was good.",
          reviewedTime: '2 days ago',
        },
        {
          starLevel: 4,
          shortReview:
            'Berry delicious! Packed with antioxidants and very filling.',
          reviewedTime: '4 days ago',
        },
      ],
    },
    {
      foodName: 'Greek Yogurt Parfait',
      chefName: 'Chef Daniel Kim',
      restaurantName: 'Yogurt Delights',
      starLevel: 4,
      briefIntro:
        'A Greek yogurt parfait with layers of fresh berries, granola, and honey.',
      tags: ['Parfait', 'Breakfast', 'Yogurt', 'Healthy'],
      estimatedPrice: '$8.99',
      reviews: [
        {
          starLevel: 5,
          shortReview:
            'Creamy Greek yogurt with the freshest berries. A perfect start to the day!',
          reviewedTime: '10 minutes ago',
        },
        {
          starLevel: 4,
          shortReview:
            'Good mix of textures and tastes. A very wholesome breakfast option.',
          reviewedTime: '3 days ago',
        },
        {
          starLevel: 4,
          shortReview:
            'The granola was a bit too sweet for my liking, but overall a solid breakfast choice.',
          reviewedTime: '1 week ago',
        },
      ],
    },
  ];

  let params = new URLSearchParams(window.location.search);
  let foodIndex = params.get('food');
  let drinkIndex = params.get('drink');
  let getFoodDetailsByIndex = function (index) {
    console.log('fi', foodIndex, 'di', drinkIndex, 'i', index);
    return drinkIndex !== null ? drinks[index] : foods[index];
  };

  foodIndex = foodIndex ? foodIndex : drinkIndex;
  let foodDetails = getFoodDetailsByIndex(foodIndex);
  document.getElementById('food-image').src = `./images/${foodDetails.foodName
    .toLowerCase()
    .replaceAll(' ', '-')}.png`;

  document.getElementById('food-title').textContent = foodDetails.foodName;
  document.getElementById('chef-name').textContent = foodDetails.chefName;
  document.getElementById('restaurant-name').textContent =
    foodDetails.restaurantName + ' (restaurant)';
  document.getElementById('food-description').textContent =
    foodDetails.briefIntro;
  const starLevelString = Array.from(
    { length: foodDetails.starLevel },
    () => '★'
  ).join('');

  document.getElementById('star-level').textContent = starLevelString;

  let tagList = document.getElementById('tag-list');
  tagList.className = 'food-detail-tags';
  foodDetails.tags.forEach(function (tag) {
    let tagElement = document.createElement('span');
    tagElement.className = 'food-detail-tag';
    tagElement.textContent = tag;
    tagList.appendChild(tagElement);
  });
  document.getElementById('estimated-price').textContent =
    foodDetails.estimatedPrice;

  let reviews = foodDetails.reviews;

  let reviewsSection = document.querySelector('.food-detail-reviews-section');

  reviews.forEach(function (review) {
    let avatar = './images/acai-bowl.png';
    let reviewCard = document.createElement('div');
    reviewCard.style.color = 'black';
    reviewCard.className = 'food-detail-review-card';

    let reviewAvatar = document.createElement('img');
    reviewAvatar.className = 'food-detail-review-avatar';
    reviewAvatar.src = avatar;
    reviewAvatar.alt = 'User';

    let reviewInfo = document.createElement('div');
    reviewInfo.className = 'food-detail-review-info';

    let starLevel = document.createElement('div');
    starLevel.className = 'food-detail-star-level';
    starLevel.textContent = Array.from(
      { length: review.starLevel },
      () => '★'
    ).join('');

    let reviewText = document.createElement('h3');
    reviewText.textContent = review.shortReview;

    let reviewTime = document.createElement('div');
    reviewTime.className = 'food-detail-review-time';
    reviewTime.textContent = review.reviewedTime;

    reviewInfo.appendChild(starLevel);
    reviewInfo.appendChild(reviewText);
    reviewInfo.appendChild(reviewTime);

    reviewCard.appendChild(reviewAvatar);
    reviewCard.appendChild(reviewInfo);

    reviewsSection.appendChild(reviewCard);
  });
  let drinksLink = document.getElementById('drinks-link');
  let foodsLink = document.getElementById('foods-link');

  if (drinkIndex !== null) {
    drinksLink.className = 'nav-link curr-link';
  } else {
    foodsLink.className = 'nav-link curr-link';
  }
});
