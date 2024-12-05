export function formInput(title, placeholder){
    const card = document.createElement('div');
    card.className = "custom-form-div"
    card.innerHTML = `
        <h3 class="dsd-h3 custom-form-input-title">${title}</h3>
        <input class="custom-form-input dsd-text4" id="${title}" type="text" placeholder="${placeholder}"/>
    `
    return card;
}