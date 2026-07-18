import Logo from "../../assets/Logo.svg";
import Search from "../../assets/search.svg";
import User from "../../assets/user.svg";
import DropDown from "../../assets/arrow_drop_down.svg";
export default function Header() {
  return (
    <>
      <header className="bg-[#020202]">
        <section className="max-w-360 px-35  m-auto flex justify-between items-center py-7.25">
          <div className="flex items-center">
            <div className="mr-11.75">
              <img src={Logo} alt="logo" />
            </div>
            <div>
              <ul className="text-[white] flex gap-6 text-[16px]">
                <li className="flex">
                  Jogos <img src={DropDown} alt="dropDown" />
                </li>
                <li>Loja</li>
                <li>Ajuda</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div>
              <button className="text-[#020202] text-[20px] bg-[#FCAF17] rounded-lg px-4 py-2.75 cursor-pointer">Baixe o Launcher</button>
            </div>
            <div className="flex gap-6">
              <img src={Search} alt="search" />
                <img src={User} alt="user" />
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
