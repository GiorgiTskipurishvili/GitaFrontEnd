import { useEffect } from "react";
import "./LiveTracker.css"


export default function LiveTracker() {
    useEffect(() => {
        console.log("Live მონიტორინგი დაიწყოო")

        const intervalId = setInterval(() => {
            console.log("კავშირი ბაზასთან ........")
        }, 2000);

        return () => {
            console.log("Live მონიტორინგი გაითიშა")
            clearInterval(intervalId)
        }
    },[])
  return (
   <div className="live-tracker">
        <p className="live-tracker-text">
            Live სიქნრონიზაცია ჩართულია...
        </p>
   </div>
  )
}
