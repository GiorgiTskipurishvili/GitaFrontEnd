import styles from "./AccordionCard.module.css"
import { useState } from "react";
import { items } from "../../item";
import AccordionItem from "./AccordionItem";
import Logo from "../assets/logo.svg";

export default function AccordionCard() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(2);

  function handleClick(accordionNumber) {
    if (activeAccordionNumber === accordionNumber) {
      setActiveAccordionNumber(null);
    } else {
      setActiveAccordionNumber(accordionNumber);
    }
  }

  return (
    <main className={styles.AccordionCard}>
      <div>
        <img src={Logo} alt="hero" />
      </div>
      <div className={styles.item_container}>
        {items.map((item) => (
          <AccordionItem
            key={item.randomNum}
            title={item.title}
            desc={item.desc}
            randomNum={item.randomNum}
            activeAccordionNumber={activeAccordionNumber}
            handleClick={handleClick}
          />
        ))}
      </div>
    </main>
  );
}