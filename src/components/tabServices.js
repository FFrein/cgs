export function servicesTab(
  img,
  main_text,
  title1,
  tab1_text,
  title2,
  tab2_text
) {
  const tab = document.createElement("div");
  tab.className = "details";
  tab.innerHTML = `
        <div class="tab-service-wrapper">
            <p class="tab-main-text">${main_text}</p>
            <div class="tab-service">
                <div class="tab-left-col">
                    <div class="tab-block">
                        <p class="tab-service-title">${title1}</p>
                        <p class="tab-service-text">${tab1_text}</p>
                    </div>
                    <div class="tab-block">
                        <p class="tab-service-title">${title2}</p>
                        <p class="tab-service-text">${tab2_text}</p>
                    </div>
                </div>
                <img class="service-tab-img" src="${img}" alt="product image"/>
            </div>
        </div>
      `;
  return tab;
}
