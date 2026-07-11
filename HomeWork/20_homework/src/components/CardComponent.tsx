import { useEffect, useState } from "react";
import "./CardComponent.css";
export default function CardComponent() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const tipAmountPerPerson = people > 0 ? (bill * tip) / people : 0;
  const totalPerPerson = people > 0 ? (bill + bill * tip) / people : 0;

  const isFormEmpty = bill === 0 && tip === 0 && people === 0;
  const showError = bill > 0 && tip > 0 && people === 0;
  useEffect(() => {
    console.log("წარმატებით დამაუნთდა");
  }, []);

  return (
    <>
      <div className="card-container">
        <div className="left-card__container">
          <div className="bill-container">
            <label>Bill</label>
            <div className="input-wrapper">
                <span>$</span>
                <input
                type="number"
                min={0}
                value={bill}
                onChange={(e) => {
                    setBill(Number(e.target.value));
                }}
                />
            </div>

          </div>

          <div className="tip-container">
            <label>Select Tip %</label>
            <div className="btns">
              <button onClick={() => setTip(0.05)}>5%</button>
              <button onClick={() => setTip(0.1)}>10%</button>
              <button onClick={() => setTip(0.15)}>15%</button>
              <button onClick={() => setTip(0.25)}>25%</button>
              <button onClick={() => setTip(0.5)}>50%</button>
              <input type="number" placeholder="Custom" value={customTip} onChange={(e)=>{
                setCustomTip(e.target.value)
                setTip(Number(e.target.value)/100)
              }}/>
            </div>
          </div>

          <div className="people-container">
            <div className="people-container__inner">
                <label>Number of People</label>
                {
                    showError  && (
                    <label className="error-message">Can’t be zero</label>
                    )
                }
                
            </div>
            <div className="input-wrapper">
                <span>$</span>
                <input
                className={showError ? "error":""}
                type="number"
                min={0}
                value={people}
                onChange={(e) => {
                    setPeople(Number(e.target.value));
                }}
                />
            </div>

          </div>
        </div>

        <div className="right-card__container">
          <div className="tip-amount__container">
            <div className="about">
              <p>Tip Amount</p>
              <span>/ person</span>
            </div>
            <h1>${tipAmountPerPerson.toFixed(2)}</h1>
          </div>

          <div className="total-container">
            <div className="about">
              <p>Tip Amount</p>
              <span>/ person</span>
            </div>
            <h1>${totalPerPerson.toFixed(2)}</h1>
          </div>

          <button
            disabled={isFormEmpty}
            onClick={() => {
              setBill(0);
              setPeople(0);
              setTip(0);
              setCustomTip("")
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
}
