document.addEventListener('DOMContentLoaded', function () {
  const foods = [
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
  let itemList = document.getElementById('food-item-list');

  function createCard(imageSrc, title, subtitle, index) {
    let card = document.createElement('div');
    card.className = 'food-card';

    let link = document.createElement('a');
    link.href = `./food-detail.html?drink=${index}`;

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
