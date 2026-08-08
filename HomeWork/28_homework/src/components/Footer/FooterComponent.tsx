import { Link } from "react-router-dom";
import apple from "../../assets/apple.svg"
import android from "../../assets/android.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"
import scoot from "../../assets/scoot.png"

export default function FooterComponent() {
  return (
    <>
<footer className="w-full bg-[#2c3e50] text-center text-white">
  <div
    className="flex items-center justify-around gap-5 bg-cover bg-center bg-no-repeat px-5 py-10 max-[780px]:flex-col max-[780px]:justify-between max-[780px]:px-[15px] max-[480px]:px-[15px]"
    style={{ backgroundImage: "url('../../imgs/Mask.png')" }}
  >
    <h2 className="font-space mb-5 w-[20%] text-left text-[36px] font-bold max-[780px]:mb-0 max-[780px]:w-1/2 max-[780px]:text-center max-[780px]:text-[28px] max-[480px]:mb-[30px] max-[480px]:w-full max-[480px]:text-[24px]">
      Sign up and Scoot off today
    </h2>

    <div className="flex items-center justify-center gap-5 max-[780px]:gap-[15px] max-[480px]:gap-[15px]">
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={apple}
          alt="App Store"
          className="w-[150px] max-[780px]:w-[130px] max-[480px]:w-full"
        />
      </a>

      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={android}
          alt="Google Play"
          className="w-[150px] max-[780px]:w-[130px] max-[480px]:w-full"
        />
      </a>
    </div>
  </div>

  <div className="flex w-full items-center justify-around bg-[#333a44] max-[480px]:flex-col">
    <div>
      <ul className="flex list-none items-center gap-10 max-[780px]:gap-5 max-[780px]:p-0 max-[480px]:flex-col max-[480px]:gap-[15px]">
        <li className="p-[10px] max-[780px]:p-2 max-[480px]:p-[5px]">
          <Link
            to="/"  
          >
            <img src={scoot} alt="scoot logo" />
          </Link>
        </li>

        <li className="p-[10px] max-[780px]:p-2 max-[480px]:p-[5px]">
          <Link
            to="/about"
            className="font-medium text-[#939caa] no-underline hover:text-[#f5c518] max-[780px]:text-base max-[480px]:text-sm"
          >
            About
          </Link>
        </li>

        <li className="p-[10px] max-[780px]:p-2 max-[480px]:p-[5px]">
          <Link
            to="/locations"
            className="font-medium text-[#939caa] no-underline hover:text-[#f5c518] max-[780px]:text-base max-[480px]:text-sm"
          >
            Location
          </Link>
        </li>

        <li className="p-[10px] max-[780px]:p-2 max-[480px]:p-[5px]">
          <Link
            to="/careers"
            className="font-medium text-[#939caa] no-underline hover:text-[#f5c518] max-[780px]:text-base max-[480px]:text-sm"
          >
            Careers
          </Link>
        </li>
      </ul>
    </div>

    <div className="flex">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2.5 text-[#f5c518] no-underline hover:text-white max-[480px]:mx-2.5"
      >
        <img src={facebook} alt="faceboook" />
      </a>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2.5 text-[#f5c518] no-underline hover:text-white max-[480px]:mx-2.5"
      >
        <img src={twitter} alt="twitter" />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2.5 text-[#f5c518] no-underline hover:text-white max-[480px]:mx-2.5"
      >
        <img src={instagram} alt="instagram" />
      </a>
    </div>
  </div>
</footer>
    </>
  )
}
