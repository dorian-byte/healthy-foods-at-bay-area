document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded with JavaScript');
  let foods = [
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
    },
  ];

  function createItemCard(imageUrl, cardTitle, cardSubtitle, idx) {
    let card = document.createElement('div');
    card.style.cursor = 'pointer';
    card.onclick = function () {
      window.location.href = './food-detail.html?food=' + idx;
    };
    card.className = 'item-card';

    let imageDiv = document.createElement('div');
    imageDiv.className = 'item-image';
    imageDiv.style.backgroundImage = `url(${imageUrl})`;

    let contentDiv = document.createElement('div');
    contentDiv.className = 'item-content';

    let title = document.createElement('h3');
    title.textContent = cardTitle;
    title.className = 'item-title';

    let subtitle = document.createElement('p');
    subtitle.textContent = cardSubtitle;
    subtitle.className = 'item-subtitle';

    contentDiv.appendChild(title);
    contentDiv.appendChild(subtitle);

    card.appendChild(imageDiv);
    card.appendChild(contentDiv);

    return card;
  }

  let cardsContainer = document.querySelector('.cards-container');
  foods.forEach(function (food, idx) {
    const imageUrl =
      './images/' + food.foodName.toLowerCase().replaceAll(' ', '-') + '.png';
    cardsContainer.appendChild(
      createItemCard(imageUrl, food.foodName, food.briefIntro, idx)
    );
  });

  let searchButton = document.getElementById('search-button');
  let searchInput = document.getElementById('search-input');

  function handleSearch() {
    const query = document.getElementById('search-input').value || '';
    let newfoods = foods.filter(function (food) {
      return food.foodName.toLowerCase().includes(query);
    });
    cardsContainer.innerHTML = '';
    newfoods.forEach(function (food, idx) {
      const imageUrl =
        './images/' + food.foodName.toLowerCase().replaceAll(' ', '-') + '.png';
      cardsContainer.appendChild(
        createItemCard(imageUrl, food.foodName, food.briefIntro, idx)
      );
    });
  }
  searchButton.onclick = handleSearch;
  searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });
});
