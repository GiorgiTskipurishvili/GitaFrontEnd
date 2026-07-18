import Logo from "../../assets/Logo.svg"
import Twitch from "../../assets/Twitch.svg"
import Instagram from "../../assets/instagram.svg"
import Twitter from "../../assets/twitter.svg"
import Youtube from "../../assets/youtube.svg"
import Facebook from "../../assets/facebook.svg"

export default function Footer() {
  return (
    <>
    <footer className="bg-[#020202]">
      <section className="max-w-360 mx-auto px-4 sm:px-8 lg:px-35 py-10 sm:py-14 lg:py-22.75 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
          <img src={Logo} alt="" className="h-6 sm:h-auto" />
          <div>
            <ul className="flex flex-wrap justify-center sm:justify-start gap-4 lg:gap-6 text-[#B1B1B1] text-sm lg:text-[16px] font-medium">
              <li>CONTATO</li>
              <li>SOBRE</li>
              <li>SUPORTE</li>
              <li>EMPREGOS</li>
            </ul>
            <span className="block mt-2 sm:mt-0 text-xs lg:text-[13px] font-light text-[#B1B1B1]">
              ©2023 Rockstar Games, Inc. - YWR Studio.
            </span>
          </div>
        </div>

        <ul className="flex gap-6 lg:gap-8">
          <li><img src={Twitch} alt="twitch" className="h-5 lg:h-auto" /></li>
          <li><img src={Instagram} alt="instagram" className="h-5 lg:h-auto" /></li>
          <li><img src={Twitter} alt="twitter" className="h-5 lg:h-auto" /></li>
          <li><img src={Youtube} alt="youtube" className="h-5 lg:h-auto" /></li>
          <li><img src={Facebook} alt="facebook" className="h-5 lg:h-auto" /></li>
        </ul>
      </section>
    </footer>
    </>
  );
}
