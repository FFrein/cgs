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
        <div class="tab-service-wrapper tdp-grey-bg">
            <p class="tdp-text-1 tdp-white-color tdp-grey-bg tab-main-text">${main_text}</p>
            <div class="tab-service tdp-grey-bg">
                <div class="tdp-grey-bg tab-left-col">
                    <div class="tdp-grey-bg">
                        <p class="subheader-4 tdp-green-bg tdp-black-color tab-service-title">${title1}</p>
                        <p class="tdp-text-1 tdp-white-color tdp-grey-bg tab-service-text">${tab1_text}</p>
                    </div>
                    <div class="tdp-grey-bg">
                        <p class="subheader-4 tdp-green-bg tdp-black-color tab-service-title">${title2}</p>
                        <p class="tdp-text-1 tdp-white-color tdp-grey-bg tab-service-text">${tab2_text}</p>
                    </div>
                </div>
                <img class="service-tab-img tdp-grey-bg" src="${img}" alt="product image"/>
            </div>
        </div>
      `;
  return tab;
}
