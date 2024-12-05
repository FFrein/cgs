export function productCard(img, text){
    const card = document.createElement('div');
    card.className = "product-card"
    card.innerHTML = `
        <img class="product-card-img" src="${img}" alt="product image"/>
        <p class="dsd-text3 product-card-title">${text}</p>
    `
    return card;
}