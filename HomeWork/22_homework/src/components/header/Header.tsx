import Logo from "../../assets/Logo.svg";
import Search from "../../assets/search.svg";
import User from "../../assets/user.svg";
import DropDown from "../../assets/arrow_drop_down.svg";
export default function Header() {
  return (
    <>
    <header className="bg-[#020202]">
      <section className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 lg:px-35 py-4 md:py-6 lg:py-7.25 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-8 lg:gap-0">
          <div className="lg:mr-11.75">
            <img src={Logo} alt="logo" className="h-6 sm:h-7 lg:h-auto" />
          </div>
          <div className="hidden md:block">
            <ul className="text-white flex gap-4 lg:gap-6 text-sm lg:text-[16px]">
              <li className="flex items-center gap-1">
                Jogos <img src={DropDown} alt="dropDown" />
              </li>
              <li>Loja</li>
              <li>Ajuda</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 lg:gap-10 order-3 md:order-none w-full md:w-auto justify-between md:justify-end">
          <button className="text-[#020202] text-sm sm:text-base lg:text-[20px] bg-[#FCAF17] rounded-lg px-3 sm:px-4 py-2 lg:py-2.75 cursor-pointer whitespace-nowrap">
            Baixe o Launcher
          </button>
          <div className="flex gap-4 lg:gap-6">
            <img src={Search} alt="search" className="h-5 lg:h-auto" />
            <img src={User} alt="user" className="h-5 lg:h-auto" />
          </div>
        </div>
      </section>
    </header>
    </>
  );
}
