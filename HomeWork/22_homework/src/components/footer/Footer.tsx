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
        <section className="max-w-360 mx-auto px-35 m-auto flex justify-between items-center py-22.75">
          <div className="flex gap-10">
            <div><img src={Logo} alt="" /></div>
            <div>
                <div>
                    <ul className="flex gap-6 text-[#B1B1B1] text-[16px] font-medium">
                        <li>CONTATO</li>
                        <li>SOBRE</li>
                        <li>sUPORTE</li>
                        <li>EMPREGOS</li>
                    </ul>
                </div>
                <div>
                    <span className="text-[13px] font-light text-[#B1B1B1]">©2023 Rockstar Games, Inc.    -    YWR Studio.  </span>
                </div>
            </div>
          </div>

          <div>
            <ul className="flex gap-8">
                <li><img src={Twitch} alt="twitch" /></li>
                <li><img src={Instagram} alt="instagram" /></li>
                <li><img src={Twitter} alt="twitter" /></li>
                <li><img src={Youtube} alt="youtube" /></li>
                <li><img src={Facebook} alt="facebook" /></li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
}
