import Logo from "../../assets/logo.svg";
import Home from "../../assets/dashboard.svg";
import ActiveHome from "../../assets/activeDashboard.svg";
import Video from "../../assets/movie.svg";
import ActiveVideo from "../../assets/activeMovie.svg";
import Tv from "../../assets/tv.svg";
import ActiveTv from "../../assets/ActiveTv.svg";
import Save from "../../assets/save.svg";
import ActiveSave from "../../assets/ActiveSave.svg";
import UserPhoto from "../../assets/userPhoto.png";
import { NavLink } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex fixed left-0 top-0 z-50 w-[96px] h-screen p-5">
        <div className="w-full h-full bg-[#161D2F] rounded-[20px] flex flex-col items-center py-5">
          {/* Logo */}
          <NavLink to="/" className="mb-10">
            <img src={Logo} alt="logo" className="w-[28px] h-[22px]" />
          </NavLink>

          {/* Navigation */}
          <nav className="flex flex-col items-center gap-8">
            <NavLink to="/">
              {({ isActive }) => (
                <img
                  src={isActive ? ActiveHome : Home}
                  alt="home"
                  className="w-[18px] h-[18px]"
                />
              )}
            </NavLink>

            <NavLink to="/movies">
              {({ isActive }) => (
                <img
                  src={isActive ? ActiveVideo : Video}
                  alt="movies"
                  className="w-[18px] h-[18px]"
                />
              )}
            </NavLink>

            <NavLink to="/tv">
              {({ isActive }) => (
                <img
                  src={isActive ? ActiveTv : Tv}
                  alt="tv"
                  className="w-[18px] h-[18px]"
                />
              )}
            </NavLink>

            <NavLink to="/saves">
              {({ isActive }) => (
                <img
                  src={isActive ? ActiveSave : Save}
                  alt="saved"
                  className="w-[18px] h-[18px]"
                />
              )}
            </NavLink>
          </nav>

          {/* User */}
          <div className="mt-auto">
            <img
              src={UserPhoto}
              alt="profile"
              className="w-[30px] h-[30px] rounded-full"
            />
          </div>
        </div>
      </aside>

      {/* TABLET + MOBILE HEADER */}
      <header className="lg:hidden w-full h-[72px]  flex items-center">
        <div className="w-full h-full bg-[#161D2F] flex items-center justify-between px-5">
          {/* Logo */}
          <NavLink to="/">
            <img src={Logo} alt="logo" className="w-[25px] h-[20px]" />
          </NavLink>

          {/* Navigation */}
          <nav className="flex items-center gap-6 md:gap-8">
            <NavLink to="/">
              {({ isActive }) => (
                <img
                  src={isActive ? ActiveHome : Home}
                  alt="home"
                  className="w-[18px] h-[18px]"
                />
              )}
            </NavLink>

            <NavLink to="/movies">
              {({ isActive }) => (
                <img
                  src={isActive ? ActiveVideo : Video}
                  alt="movies"
                  className="w-[18px] h-[18px]"
                />
              )}
            </NavLink>

            <NavLink to="/tv">
              {({ isActive }) => (
                <img
                  src={isActive ? ActiveTv : Tv}
                  alt="tv"
                  className="w-[18px] h-[18px]"
                />
              )}
            </NavLink>

            <NavLink to="/saves">
              {({ isActive }) => (
                <img
                  src={isActive ? ActiveSave : Save}
                  alt="saved"
                  className="w-[18px] h-[18px]"
                />
              )}
            </NavLink>
          </nav>

          {/* User */}
          <img
            src={UserPhoto}
            alt="profile"
            className="w-[30px] h-[30px] rounded-full"
          />
        </div>
      </header>
    </>
  );
}
