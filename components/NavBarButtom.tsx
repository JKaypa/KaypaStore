import Image from "next/image";
import { phoneImg } from "@/public/assets/images";
import {FiChevronDown} from 'react-icons/fi'
import {FaPlaceOfWorship} from 'react-icons/fa'
import {MdOutlineLocationOn} from 'react-icons/md'

function NavBarButtom() {
  return (
    <div className="py-2 px-6 flex items-center justify-evenly">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Image src={phoneImg} alt="phoneImg" className="w-6"/>
          <p className="text-sm font-semibold">How do you want your items?</p>
          <FiChevronDown />
          <span>|</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineLocationOn />
          <p className="text-sm text-zinc-100">Cartagena, 130002</p>
          <FaPlaceOfWorship />
          <p className="text-sm text-zinc-100">Cartagena Supercenter</p>
        </div>
      </div>
      <ul className="flex gap-6 text-sm font-semibold">
        <li className="navli">Deals</li>
        <li className="navli">Easter</li>
        <li className="navli">Grocery and essentials</li>
        <li className="navli">Home</li>
        <li className="navli">Tech</li>
        <li className="navli">Fashion</li>
        <li className="navli">Auto</li>
        <li className="navli">Walmart+</li>
      </ul>
    </div>
  );
}

export default NavBarButtom;
