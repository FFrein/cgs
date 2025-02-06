import { productCard } from "./components/card.js";

function main() {
  const conceptPortfolio = document.getElementById(
    "conceptual-portfolio-store"
  );
  conceptPortfolio.append(
    productCard("./public/p1.png", "Ясность нашей позиции очевидна:.")
  );
  conceptPortfolio.append(
    productCard("./public/p2.png", "Для современного мира глубокий уровень.")
  );
  conceptPortfolio.append(
    productCard("./public/p3.png", "Противоположная точка зрения.")
  );
  conceptPortfolio.append(
    productCard("./public/p4.png", "И нет сомнений, что тщательные.")
  );
  conceptPortfolio.append(
    productCard("./public/p5.png", "Сложно сказать, почему сделанные на.")
  );
  conceptPortfolio.append(
    productCard("./public/p6.png", "В рамках спецификации современных.")
  );
}

main();
