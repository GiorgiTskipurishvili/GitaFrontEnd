export default function AccordionItem({handleClick, activeAccordionNumber,randomNum, title, desc}) {
  return (
    <>
        <div>
            <h2 onClick={()=>{
                handleClick(randomNum)
            }}>{title}</h2>
            {
                activeAccordionNumber === randomNum ? <p>{desc}</p> : null
            }
        </div>
    </>
  )
}
