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
    <section className="bg-[#101010] max-w-360 mx-auto">
      <div>
        <img src={Cover} alt="cover" className="w-full h-auto" />
      </div>


      <div className="w-[90%] sm:w-[85%] lg:w-[80.6%] mx-auto mt-10 lg:mt-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-extrabold text-white">
            Jogos em Destaque
          </h3>

          <div className="flex flex-wrap gap-2 lg:gap-4">
            <div className="bg-[#606060] px-4 lg:px-6 py-1 rounded-[100px]">
              <p className="text-white text-sm lg:text-base font-medium">PC</p>
            </div>
            <div className="bg-[#606060] px-4 lg:px-6 py-1 rounded-[100px]">
              <p className="text-white text-sm lg:text-base font-medium">Console</p>
            </div>
            <div className="bg-[#606060] px-4 lg:px-6 py-1 rounded-[100px]">
              <p className="text-white text-sm lg:text-base font-medium">
                Dispositivos Portáteis
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:flex lg:justify-between lg:items-center gap-6 lg:gap-0 mt-8 lg:mt-10">
          <img src={Gta5} alt="gta5" className="w-full lg:w-auto" />
          <img src={GtaOnline} alt="gtaOnline" className="w-full lg:w-auto" />
          <img src={Red} alt="red" className="w-full lg:w-auto" />
          <img src={RedOnline} alt="redOnline" className="w-full lg:w-auto" />
        </div>

        <div className="flex justify-center mt-10 lg:mt-16">
          <button className="bg-[#FCAF17] text-[#020202] px-8 sm:px-10 lg:px-12 py-3 lg:py-3.75 rounded-lg text-base lg:text-[20px] font-medium cursor-pointer">
            Ver todos os jogos
          </button>
        </div>
      </div>


      <div className="w-[90%] sm:w-[85%] lg:w-[80.6%] mx-auto mt-16 lg:mt-20 flex flex-col">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-[48px] font-extrabold">
          Últimas Notícias
        </h1>

        <div className="mt-8 lg:mt-10 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0">
          <div className="bg-[#020202] rounded-2xl w-full lg:w-215">
            <img src={Gta6} alt="gta6" className="w-full rounded-t-2xl" />
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-medium text-white p-4 lg:p-0">
              Grand Theft Auto VI - Veja o 1º trailer agora
            </h3>
            <p className="text-[#797979] text-sm lg:text-[16px] font-light border-[#9747FF] border-4 border-dashed px-4 lg:px-5 py-4 lg:py-5 mx-4 lg:mx-0 mb-4 lg:mb-0 lg:w-82.25 static lg:relative lg:-inset-4 lg:absolute lg:pt-5 lg:pb-16 lg:pointer-events-none">
              Rockstar Games 5 de dezembro de 2023
            </p>
          </div>

          <div className="flex flex-row lg:flex-col gap-4 lg:gap-10 w-full lg:w-auto">
            <div className="w-1/2 lg:w-65 bg-[#020202] rounded-2xl">
              <img src={R} alt="r" className="w-full rounded-t-2xl" />
              <p className="text-white text-xs lg:text-[13px] w-full lg:w-47.75 font-medium p-2 lg:p-0">
                1º Trailer. Terça-feira, 5 de Dezembro. 9h Et.
              </p>
              <span className="text-[#797979] text-[11px] lg:text-[12px] font-light px-2 lg:px-0">
                Rockstar Games 1 de dezembro de 2023
              </span>
            </div>

            <div className="w-1/2 lg:w-65 bg-[#020202] rounded-2xl">
              <img src={YellowCar} alt="yellowCar" className="w-full rounded-t-2xl" />
              <p className="text-white text-xs lg:text-[13px] w-full lg:w-47.75 font-medium p-2 lg:p-0">
                Nova atualização de GTA Online chegando em dezembro
              </p>
              <span className="text-[#797979] text-[11px] lg:text-[12px] font-light px-2 lg:px-0">
                GTA Online 30 de novembro de 2023
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:w-[85%] lg:w-[80.6%] mx-auto mt-16 lg:mt-28 relative">
        <img src={LastCover} alt="lastCover" className="w-full hidden lg:block" />

        <div className="flex flex-col lg:absolute lg:inset-0 items-center lg:items-center justify-center lg:justify-between text-center lg:text-left px-4 lg:px-16 gap-8 lg:gap-20.25 bg-[#020202] lg:bg-transparent rounded-2xl lg:rounded-none py-10 lg:py-0">
          <div>
            <img src={RockGamesLauncher} alt="rockGamesLauncher" className="mx-auto lg:mx-0" />
            <h3 className="text-white text-xl sm:text-2xl lg:text-[32px] font-medium w-full lg:w-81.5 mt-4">
              Todos os seus jogos em um só lugar.
            </h3>
            <button className="mt-4 bg-[#FCAF17] text-[#020202] py-2 lg:py-3.75 px-8 lg:px-12 font-extrabold text-base lg:text-[20px] cursor-pointer">
              Download
            </button>
          </div>

          <img src={GamesLauncher} alt="GamesLauncher" className="w-full sm:w-3/4 lg:w-165" />
        </div>
      </div>
    </section>
    </>
  );
}
