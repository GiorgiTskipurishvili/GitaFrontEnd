import { useState } from "react"
import styles from "./AccordionCard.module.css"
import AccordionItem from "./AccordionItem"
import { items } from "../../items"

// export default function AccordionCard() {
//     const [isVisible,setIsVisible] = useState(false)
//     const [isVisible2,setIsVisible2] = useState(false)
//   return (
//     // <div className={styles.AccordionCard}>
//     //   Accordion Card
//     // </div>
//     // <div className={`${styles.AccordionCard} ${false ? styles.fontFirst : styles.secondFont}`}>
//     //   Accordion Card
//     // </div>
//     <>
//         <main className={styles.AccordionCard}>
//             <div>
//                 <h2 onClick={()=>{
//                     setIsVisible(!isVisible)
//                 }}>Acordion1</h2>
//                 {
//                     isVisible ? <p>Gitas studentebi</p> : null
//                 }
//             </div>
//             <div>
//                 <h2 onClick={()=>{
//                     setIsVisible2(!isVisible2)
//                 }}>Acordion2</h2>
//                 {
//                     isVisible2 ? <p>Gitas studentebi</p> : null
//                 }
//             </div>
//         </main>
//     </>
//   )
// }







// export default function AccordionCard() {
//     const [activeAccordionNumber, setActiveAccordionNumber] = useState(null)
//   return (
//     <>
//         <main className={styles.AccordionCard}>
//             <div>
//                 <h2 onClick={()=>{
//                     if(activeAccordionNumber===1){
//                         setActiveAccordionNumber(null)
//                     }else{
//                         setActiveAccordionNumber(1)
//                     }                   
//                 }}>Accordion 1</h2>
//                 {
//                     activeAccordionNumber === 1 ? <p>accordion 1</p> : null
//                 }
//             </div>
//             <div>
//                 <h2 onClick={()=>{
//                     if(activeAccordionNumber===2){
//                         setActiveAccordionNumber(null)
//                     }else{
//                         setActiveAccordionNumber(2)
//                     }    
//                 }}>Accordion 2</h2>
//                 {
//                     activeAccordionNumber === 2 ? <p>accordion 2</p> : null
//                 }
//             </div>
//             <div>
//                 <h2 onClick={()=>{
//                     if(activeAccordionNumber===3){
//                         setActiveAccordionNumber(null)
//                     }else{
//                         setActiveAccordionNumber(3)
//                     }    
//                 }}>Accordion 3</h2>
//                 {
//                     activeAccordionNumber === 3 ? <p>accordion 3</p> : null
//                 }
//             </div>
//         </main>
//     </>
//   )
// }





/////////// ფუნქცია პარამეტრი 
// export default function AccordionCard() {
//     const [activeAccordionNumber, setActiveAccordionNumber] = useState(null)

//     function handleClick(accordionNumber){
//         if(activeAccordionNumber===accordionNumber){
//             setActiveAccordionNumber(null)
//         }else{
//             setActiveAccordionNumber(accordionNumber)
//         }   
//     }

//   return (
//     <>
//         <main className={styles.AccordionCard}>
//             <div>
//                 <h2 onClick={()=>{
//                     handleClick(1)                 
//                 }}>Accordion 1</h2>
//                 {
//                     activeAccordionNumber === 1 ? <p>accordion 1</p> : null
//                 }
//             </div>
//             <div>
//                 <h2 onClick={()=>{
//                     handleClick(2)   
//                 }}>Accordion 2</h2>
//                 {
//                     activeAccordionNumber === 2 ? <p>accordion 2</p> : null
//                 }
//             </div>
//             <div>
//                 <h2 onClick={()=>{
//                     handleClick(3) 
//                 }}>Accordion 3</h2>
//                 {
//                     activeAccordionNumber === 3 ? <p>accordion 3</p> : null
//                 }
//             </div>
//         </main>
//     </>
//   )
// }







////////////// items.js, AccordionItem and AccordionCard
 
export default function AccordionCard() {
    const [activeAccordionNumber, setActiveAccordionNumber] = useState(2)

    // const items = [
    //     {
    //         randomNum:1,
    //         title: "Accordion 1",
    //         desc : " desc of accordion 1"
    //     },
    //     {
    //         randomNum:2,
    //         title: "Accordion 2",
    //         desc : " desc of accordion 2"
    //     },
    //     {
    //         randomNum:3,
    //         title: "Accordion 3",
    //         desc : " desc of accordion 3"
    //     }

    // ]

    function handleClick(accordionNumber){
        if(activeAccordionNumber===accordionNumber){
            setActiveAccordionNumber(null)
        }else{
            setActiveAccordionNumber(accordionNumber)
        }   
    }

  return (
    <>
        <main className={styles.AccordionCard}>
            {
                items.map((el)=>(
                    <AccordionItem 
                        handleClick={handleClick}
                        title ={el.title}
                        desc = {el.desc}
                        activeAccordionNumber = {activeAccordionNumber}
                        randomNum ={el.randomNum}
                    />
                ))
            }
        </main>
    </>
  )
}
