export function productCard(img, text) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
        <img class="product-card-img" src="${img}" alt="product image"/>
        <p class="tdp-text-1 tdp-white-color product-card-title">${text}</p>
    `;
  return card;
}
