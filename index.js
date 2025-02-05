import { productCard } from "./src/components/card.js";

function main() {
  const conceptPortfolio = document.getElementById(
    "conceptual-portfolio-store"
  );
  conceptPortfolio.append(
    productCard("./public/bloom.png", "Bloom (Приложение для знакомств).")
  );
  conceptPortfolio.append(
    productCard(
      "./public/candles.png",
      "Lion's Candles(Интернет магазин свечей)"
    )
  );
  conceptPortfolio.append(
    productCard(
      "./public/biometric.png",
      "Bimetric - узконаправленное ПО. Служит для цифровизации столовой"
    )
  );
  conceptPortfolio.append(
    productCard(
      "./public/shop.png",
      "Интернет-магазина мебели, ключевой возможностью было - AR примерка мебели"
    )
  );
  conceptPortfolio.append(
    productCard(
      "./public/corp.png",
      "Разработка корпоративного чата внутри компании."
    )
  );
  conceptPortfolio.append(
    productCard(
      "./public/crm.png",
      "Внутренняя CRM система для управления проектами с аналитикой"
    )
  );
}

main();
