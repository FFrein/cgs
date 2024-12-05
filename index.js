import {productCard} from "./src/components/card.js";
import {formInput} from "./src/components/formInput.js";
function main(){
    const conceptPortfolio = document.getElementById("conceptual-portfolio-store");
    conceptPortfolio.append(productCard("./public/marketPlace.svg","Маркетплейс мебели и ее подбор"));
    conceptPortfolio.append(productCard("./public/cosmetica.svg","Концепт магазина косметики"));
    conceptPortfolio.append(productCard("./public/coto.svg","Концепт кото-кафе"));
    conceptPortfolio.append(productCard("./public/neon.svg","Компания, производящая неоновые вывески"));
    conceptPortfolio.append(productCard("./public/cloth.svg","Маркетплейс одежды, с возможностью онлайн торгов"));
    conceptPortfolio.append(productCard("./public/taxi.svg","Приложение для такси"));

    const applicationForm = document.getElementById("application-form");
    applicationForm.append(formInput("Как вас зовут","Ваше имя"));
    applicationForm.append(formInput("E-mail","Ваша почта"));
    applicationForm.append(formInput("Контактный номер телефона","Ваша почта"));
    applicationForm.append(formInput("Где будем обсуждать?","Напишите удобную вам соц. сеть/мессенджер"));
}

main();