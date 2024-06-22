import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faUser } from "@fortawesome/free-regular-svg-icons";
import { faGear, faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useUserStore } from "../../store/store";

//TODO~ Home, Explore, Search, Profile

const Navbar = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div className="navbar fixed bottom-0 left-0 w-full h-20 py-6 px-8 bg-colorPrimary text-white text-4xl flex items-center gap-6 justify-between">
      <div className="grid w-1/2 grid-cols-2">
        <NavLink
          className="hover:text-colorPrimary hover:drop-shadow-[0_0_4px_white]"
          to={"/"}
        >
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
        <NavLink
          className="hover:text-colorPrimary hover:drop-shadow-[0_0_4px_white]"
          to={"/explore"}
        >
          <FontAwesomeIcon icon={faCompass} />
        </NavLink>
      </div>
      <div className="">
        <button
          disabled={user === null}
          className="w-16 h-16 rounded-full border-2 border-colorPrimary bg-white text-colorPrimary flex items-center justify-center absolute left-1/2 top-[-22px] translate-x-[-50%] disabled:cursor-not-allowed"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="grid w-1/2 grid-cols-2 text-right">
        <NavLink
          className="hover:text-colorPrimary hover:drop-shadow-[0_0_4px_white]"
          to={"/profile"}
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          className="hover:text-colorPrimary hover:drop-shadow-[0_0_4px_white]"
          to={"/settings"}
        >
          <FontAwesomeIcon icon={faGear} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
