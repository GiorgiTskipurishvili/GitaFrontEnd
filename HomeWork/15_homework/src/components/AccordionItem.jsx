
import styles from "./AccordionItem.module.css"
export default function AccordionItem({title,desc,randomNum,activeAccordionNumber,handleClick}) {
  const isAccordionItemH2BoldActive = activeAccordionNumber === randomNum;
  return (
    <div className={styles.AccordionItem} >
      <h2 className={`${styles.AccordionItemH2} ${isAccordionItemH2BoldActive ? styles.AccordionItemH2BoldActive : null}`} onClick={() => {
        handleClick(randomNum)
      }}>{title}</h2>

      {
        activeAccordionNumber === randomNum ? <p className={styles.AccordionItemP}>{desc}</p>: null
      }
    </div>
  );
}

