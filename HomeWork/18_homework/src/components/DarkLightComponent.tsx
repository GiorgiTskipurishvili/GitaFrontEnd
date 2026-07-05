<<<<<<< HEAD
=======
// import DarkMoon from "../assets/darkmoon.svg"
// import LightMoon from "../assets/lightmoon.svg"
>>>>>>> 9b0a8218b47d578674113a85939470f5fdcf8cfd
import gr5 from "../assets/Group5.svg"
import gr6 from "../assets/Group6.svg"
import './DarkLight.css'

<<<<<<< HEAD
=======

// type Props = {
//     theme: string
//     setTheme: React.Dispatch<React.SetStateAction<string>>;
// }

>>>>>>> 9b0a8218b47d578674113a85939470f5fdcf8cfd
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
