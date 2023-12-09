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
    },

    {
      foodName: 'Quinoa and Black Bean Salad',
      chefName: 'Chef Alex Davis',
      restaurantName: 'Quinoa Fusion',
      starLevel: 4,
      briefIntro:
        'A protein-packed quinoa and black bean salad with a zesty lime-cilantro dressing.',
      tags: ['Salad', 'Quinoa', 'Black Beans', 'Vegetarian', 'Healthy'],
      estimatedPrice: '$11.99',
    },
    {
      foodName: 'Veggie Wrap',
      chefName: 'Chef Lisa Brown',
      restaurantName: 'Wrap It Up',
      starLevel: 4,
      briefIntro:
        'A satisfying veggie wrap filled with roasted vegetables, hummus, and whole-grain tortilla.',
      tags: ['Wrap', 'Vegetarian', 'Vegan', 'Healthy'],
      estimatedPrice: '$10.99',
    },
  ];
  let itemList = document.getElementById('food-item-list');

  function createCard(imageSrc, title, subtitle, index) {
    let card = document.createElement('div');
    card.className = 'food-card';

    let link = document.createElement('a');
    link.href = `./food-detail.html?food=${index}`;

    let img = document.createElement('img');
    img.className = 'food-card-image';
    img.src = imageSrc;
    img.alt = title;

    let content = document.createElement('div');
    content.className = 'food-card-content';

    let h2 = document.createElement('h2');
    h2.className = 'food-card-title';
    h2.textContent = title;

    let p = document.createElement('p');
    p.className = 'food-card-subtitle';
    p.textContent = subtitle;

    content.appendChild(h2);
    content.appendChild(p);

    link.appendChild(img);
    link.appendChild(content);
    card.appendChild(link);

    return card;
  }

  foods.forEach(function (food, index) {
    let title = food.foodName;
    let subtitle = '@' + food.restaurantName;
    const imageSrc =
      './images/' + food.foodName.toLowerCase().replaceAll(' ', '-') + '.png';
    itemList.appendChild(createCard(imageSrc, title, subtitle, index));
  });
});
