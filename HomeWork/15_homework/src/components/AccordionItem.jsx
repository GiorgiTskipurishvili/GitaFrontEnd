
import styles from "./AccordionItem.module.css"
import DropDown from "../assets/dropdown.svg";
export default function AccordionItem({title,desc,randomNum,activeAccordionNumber,handleClick}) {
  const isAccordionItemH2BoldActive = activeAccordionNumber === randomNum;
  const isAccordingItemDropDownRotate = activeAccordionNumber === randomNum;
  return (
    <div className={styles.AccordionItem} >
      <h2 className={`${styles.AccordionItemH2} ${isAccordionItemH2BoldActive ? styles.AccordionItemH2BoldActive : null}`} onClick={() => {
        handleClick(randomNum)
      }}>{title} <img className={`${isAccordingItemDropDownRotate ? styles.AccordingItemDropDownRotate : null}`} src={DropDown} alt="dropdown" /></h2>

      {
        activeAccordionNumber === randomNum ? <p className={styles.AccordionItemP}>{desc}</p>: null
      }
    </div>
  );
}

