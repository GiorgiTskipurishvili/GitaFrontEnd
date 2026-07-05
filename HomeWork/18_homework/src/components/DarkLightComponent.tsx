// import DarkMoon from "../assets/darkmoon.svg"
// import LightMoon from "../assets/lightmoon.svg"
import gr5 from "../assets/Group5.svg"
import gr6 from "../assets/Group6.svg"
import './DarkLight.css'


// type Props = {
//     theme: string
//     setTheme: React.Dispatch<React.SetStateAction<string>>;
// }

export default function DarkLightComponent({theme, setTheme}) {
  return (
    <>
    <div className="DarkLight-container">
        <div>
            <h1>devfinder</h1>
        </div>

        <div>
            {
                theme === "light"?(
                    <button onClick={() => {
                        setTheme("dark")
                    }}><img src={gr5} alt="" /></button>
                ):(
                    <button onClick={() => {
                        setTheme("light")
                    }}><img src={gr6} alt="" /></button>
                )
            }
        </div>
    </div>
    </>
  )
}
