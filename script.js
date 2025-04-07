const flowers = [
    "Rose Bouquet", "Marigold Bliss", "Tulip Garden", "Orchid Elegance", "Sunshine Lilies",
    "Daisy Delight", "Romantic Roses", "Chrysanthemum Charm", "Fresh Pink Blossoms", "Petal Paradise",
    "Golden Marigold", "White Jasmine", "Bright Mix Blooms", "Color Pop Tulips", "Yellow Sunshine"
  ];
  
  const container = document.getElementById('product-section');
  
  flowers.forEach((name, i) => {
    const price = 499 + i * 50;
    const imgURL = `flower${i + 1}.jpg`;
  
    const productCard = document.createElement('div');
    productCard.className = 'product';
  
    productCard.innerHTML = `
      <img src="${imgURL}" alt="${name || 'Flower Image'}" loading="lazy" />
      <h3>${name}</h3>
      <p>₹${price}</p>
      <button>Add to Cart</button>
    `;
  
    container.appendChild(productCard);
  });
  