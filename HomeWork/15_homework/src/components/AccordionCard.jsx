import styles from "./AccordionCard.module.css"
import { useState } from "react";
import { items } from "../../item";
import AccordionItem from "./AccordionItem";
import Logo from "../assets/logo.svg";
import Box from "../assets/box.svg";
import Shadow from "../assets/shadow.svg";
import FirstLiner from "../assets/liner1.svg";
import SecondLiner from "../assets/liner2.svg";
import LogoMobile from "../assets/logo-mobile.svg";
import ShadowMobile from "../assets/shadow-mobile.svg";

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
      <div className={styles.logoWrapper}>
        <img className={styles.ShadowImg} src={Shadow} alt="shadow" />
        <img className={styles.FirstLinerImg} src={FirstLiner} alt="firstliner" />
        <img className={styles.SecondLinerImg} src={SecondLiner} alt="secondliner" />

        <img className={styles.LogoImg} src={Logo} alt="logo" />
        <img className={styles.BoxImg} src={Box} alt="box" />

        <img className={styles.LogoMobileImg} src={LogoMobile} />
        <img className={styles.ShadowMobileImg} src={ShadowMobile} />

      </div>
      <div className={styles.item_container}>
        <h1 className={styles.faq}>FAQ</h1>
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