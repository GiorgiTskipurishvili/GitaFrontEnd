import { useState } from "react"
import { Link } from "react-router-dom";
import Scoot from "../../assets/scoot.svg"
import Hamburger from "../../assets/hamburger.svg"

 
export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>

    <header className="relative flex w-[82%] m-auto my-5.25 items-center g:px-12 ">

      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="z-10 md:hidden"
        aria-label="Toggle menu"
      >
        <img
          src={Hamburger}
          alt="Menu"
          className="h-5 w-5"
        />
      </button>

      <Link
        to="/"
        className="
          absolute left-1/2 -translate-x-1/2
          md:static md:translate-x-0
        "
      >
        <img
          src={Scoot}
          alt="Scoot"
          className="w-[108px]"
        />
      </Link>

      <nav className="ml-20 hidden md:block">
        <ul className="flex items-center gap-8">
          <li className="text-[15px] font-bold text-[#939CAA]">
            <Link
              to="/about"
              className="transition-colors hover:text-[#FCB72B]"
            >
              About
            </Link>
          </li>

          <li className="text-[15px] font-bold text-[#939CAA]">
            <Link
              to="/location"
              className="transition-colors hover:text-[#FCB72B]"
            >
              Location
            </Link>
          </li>

          <li className="text-[15px] font-bold text-[#939CAA]">
            <Link
              to="/careers"
              className="transition-colors hover:text-[#FCB72B]"
            >
              Careers
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className="
          ml-auto hidden
          h-[53px] w-[180px]
          items-center justify-center
          bg-[#FCB72B]
          text-[15px] font-bold text-white
          transition-colors hover:bg-[#e5a521]
          md:flex
        "
      >
        Get Scootin
      </button>

      {isMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full bg-white px-6 py-8 shadow-md md:hidden">
          <nav>
            <ul className="flex flex-col gap-6">

              <li className="text-[15px] font-bold text-[#939CAA]">
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>

              <li className="text-[15px] font-bold text-[#939CAA]">
                <Link
                  to="/location"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Location
                </Link>
              </li>

              <li className="text-[15px] font-bold text-[#939CAA]">
                <Link
                  to="/careers"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
              </li>

              <li>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    flex h-[53px] w-[180px]
                    items-center justify-center
                    bg-[#FCB72B]
                    text-[15px] font-bold text-white
                  "
                >
                  Get Scootin
                </button>
              </li>

            </ul>
          </nav>
        </div>
      )}

    </header>
    </>
  )
}
