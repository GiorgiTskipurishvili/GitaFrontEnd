import { useEffect } from "react"

/*

შექმენით სრულიად ახალი შვილი კომპონენტი სახელად LiveTracker.jsx (შიგნით უბრალოდ ეწეროს ტექსტი: " Live სინქრონიზაცია ჩართულია...").
App.jsx-ში შექმენით თოგლ (Toggle) სტეიტი isLive (true/false) და შესაბამისი ღილაკი: "ჩართე Live რეჟიმი" / "გათიშე Live რეჟიმი".
ტერნარული ოპერატორით მართეთ ამ კომპონენტის გამოჩენა: თუ isLive არის true, <LiveTracker /> უნდა გამოჩნდეს, თუ false გაქრეს.


LiveTracker.jsx კომპონენტის შიგნით დაწერეთ useEffect ([] მასივით). კომპონენტის გაჩენისას კონსოლში დაწერეთ "მონიტორინგი დაიწყო".
შიგნით ჩართეთ setInterval, რომელიც ყოველ 2 წამში კონსოლში დალოგავს მესიჯს: ამინდის მონაცემები სინქრონიზებულია ბაზასთან....
უმნიშვნელოვანესი ნაწილი: დაწერეთ Cleanup ფუნქცია (return () => {}), რომელიც ამ კომპონენტის გაქრობისას (Unmount) გათიშავს ტაიმერს (clearInterval)


*/
export default function LiveTracker() {
    useEffect(()=>{
        console.log("Live მონიტორინგი დაიწყო")

        const interval = setInterval(() => {
            console.log("ამინდის მონაცემები სინქრონიზებულია ბაზასთან....")
        }, 2000);

        return() =>{
            // console.log("unmounted")
            clearInterval(interval);
            console.log("Live მონიტორინგი შეჩერდა");
        }

    },[])

  return (
    <div className="live-box">
      <p>Live სინქრონიზაცია ჩართულია...</p>
    </div>
  )
}
