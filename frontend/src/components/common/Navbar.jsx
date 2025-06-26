import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="flex mx-auto px-[30px] items-center justify-between h-full">
        {/* logo */}
        <div>
          <img src={Logo} alt="" className="w-[40px]" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
