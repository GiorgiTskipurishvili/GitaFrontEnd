import Cover from "../../assets/cover.webp";
import Gta5 from "../../assets/GTA5.svg";
import GtaOnline from "../../assets/GTAonline.svg";
import Red from "../../assets/RED.svg";
import RedOnline from "../../assets/REDOnline.svg";
import Gta6 from "../../assets/GTA6.webp";
import R from "../../assets/R.webp";
import YellowCar from "../../assets/yellowCar.webp";
import LastCover from "../../assets/lastCover.webp";
import RockGamesLauncher from "../../assets/RockGamesLauncher.webp";
import GamesLauncher from "../../assets/GamesLauncher.webp";

export default function Body() {
  return (
    <>
      <section className=" bg-[#101010] max-w-360 m-auto">
        <div>
          <img src={Cover} alt="cover" />
        </div>

        <div className="w-[80.6%] m-auto mt-20">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-[48px] font-extrabold text-[white] ">
                Jogos em Destaque
              </h3>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#606060] px-6 py-1 rounded-[100px]">
                <p className="text-[white] font-medium">PC</p>
              </div>
              <div className="bg-[#606060] px-6 py-1 rounded-[100px]">
                <p className="text-[white] font-medium">Console</p>
              </div>
              <div className="bg-[#606060] px-6 py-1 rounded-[100px]">
                <p className="text-[white] font-medium">
                  Dispositivos Portáteis
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center flex-wrap  mt-10">
            <div>
              <img src={Gta5} alt="gta5" />
            </div>
            <div>
              <img src={GtaOnline} alt="gtaOnline" />
            </div>
            <div>
              <img src={Red} alt="red" />
            </div>
            <div>
              <img src={RedOnline} alt="redOnline" />
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button className="bg-[#FCAF17] text-[#020202] px-12 py-3.75 rounded-lg text-[20px] font-medium cursor-pointer">
              Ver todos os jogos
            </button>
          </div>
        </div>

        <div className="w-[80.6%] m-auto mt-20 flex flex-col">
          <div>
            <h1 className="text-[white] text-[48px] font-extrabold">
              Últimas Notícias
            </h1>
          </div>

          <div className="mt-10 flex justify-between items-start">
            <div className=" bg-[#020202] rounded-2xl w-215">
              <img src={Gta6} alt="gta6" className="w-full rounded-t-2xl" />

              <h3 className="text-[32px] font-medium text-[white]">
                Grand Theft Auto VI - Veja o 1º trailer agora
              </h3>

              <div className="relative inline-block">
                <p className="text-[#797979] text-[16px] font-light border-[#9747FF] border-4 border-dashed px-5 pt-5 pb-16 w-82.25 -inset-4 absolute pointer-events-none">
                  Rockstar Games 5 de dezembro de 2023
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="w-65 bg-[#020202] rounded-2xl">
                <img src={R} alt="r" className="w-full rounded-t-2xl" />
                <p className="text-[white] text-[13px] w-47.75 font-medium">
                  1º Trailer. Terça-feira, 5 de Dezembro. 9h Et.
                </p>
                <span className="text-[#797979] text-[12px] font-light">
                  Rockstar Games 1 de dezembro de 2023
                </span>
              </div>

              <div className="w-65 bg-[#020202] rounded-2xl">
                <img
                  src={YellowCar}
                  alt="yellowCar"
                  className="w-full rounded-t-2xl"
                />
                <p className="text-[white] text-[13px] w-47.75 font-medium">
                  Nova atualização de GTA Online chegando em dezembro
                </p>
                <span className="text-[#797979] text-[12px] font-light">
                  GTA Online 30 de novembro de 2023
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80.6%] m-auto mt-28 relative">
          <img src={LastCover} alt="lastCover" className="w-full" />

          <div className="absolute inset-0 flex items-center justify-between px-16 gap-20.25">
            <div>
              <img src={RockGamesLauncher} alt="rockGamesLauncher" />

              <h3 className="text-white text-[32px] font-medium w-81.5">
                Todos os seus jogos em um só lugar.
              </h3>

              <button className="bg-[#FCAF17] text-[#020202] py-3.75 px-12 font-extrabold text-[20px] cursor-pointer">
                Download
              </button>
            </div>

            <img src={GamesLauncher} alt="GamesLauncher" className="w-165" />
          </div>
        </div>
      </section>
    </>
  );
}
