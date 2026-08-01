import { useState } from 'react';
import BackCardComponent from './BackCardComponent';
import CardInputFieldComponent from './CardInputFieldComponent';
import FrontCardComponent from './FrontCardComponent';

export default function Body() {
  const [cardData, setCardData] = useState({
    cardholderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  return (
    <section className="max-w-360 m-auto flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-24">
        <div className="relative w-87.5 h-62.5 md:w-125 md:h-112.5 ">

            <div className="absolute top-24 left-0 z-10 md:top-0 md:left-0 md:z-20">
              <FrontCardComponent cardData={cardData} />
            </div>

            <div className="absolute top-0 left-10 z-0 md:top-55 md:left-22.5 md:z-10">
              <BackCardComponent cardData={cardData}/>
            </div>

        </div>

        <CardInputFieldComponent cardData={cardData} setCardData={setCardData} />
    </section>
  );
}