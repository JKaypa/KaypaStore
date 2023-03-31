import Image from "next/image";
import React from "react";
import { logo } from "../public/assets/images/index";
import { BiSearchAlt } from "react-icons/bi";

function Navbar() {
  return (
    <div className="w-1full bg-blue py-2 text-white">
      <div className="max-w-container mx-auto flex gap-2">
        <div className="navBarHover">
          <Image src={logo} className="w-44" alt="logo" />
        </div>

        <div className="navBarHover">
          <div className="grid grid-cols-2 gap-[2px]">
            <span className="w-1.5 h-1.5 border"></span>
            <span className="w-1.5 h-1.5 border"></span>
            <span className="w-1.5 h-1.5 border"></span>
            <span className="w-1.5 h-1.5 border"></span>
          </div>
          <p className="text-base font-semibold">Deparments</p>
        </div>

        <div className="navBarHover">
          <div className="grid grid-cols-2 gap-[2px]">
            <span className="w-1.5 h-1.5 border rounded-full"></span>
            <span className="w-1.5 h-1.5 border rounded-full"></span>
            <span className="w-1.5 h-1.5 border rounded-full"></span>
            <span className="w-1.5 h-1.5 border rounded-full"></span>
          </div>
          <p className="text-base font-semibold">Services</p>
        </div>

        <div className="flex flex-1 relative">
          <input
            className="w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200"
            type="text"
            placeholder="Search everything at KaypaStore online"
          />
          
          <span className="w-8">
            <BiSearchAlt />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
