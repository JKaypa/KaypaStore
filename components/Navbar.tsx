import Image from "next/image";
import React, { useEffect, useState } from "react";
import { logo } from "../public/assets/images/index";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import NavBarButtom from "./NavBarButtom";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "@/pages/api/productdata";
import { useSession, signIn, signOut } from "next-auth/react";
import { addUser, removeUser } from "@/store/slice";

function Navbar() {
  const { data: session } = useSession();
  console.log(session);
  
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.shopper.userInfo);

  const cart = useSelector((state: any) => state.shopper.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    session ? dispatch(addUser(session.user)) : dispatch(removeUser())
  }, [session]);

  useEffect(() => {
    setTotalAmount(
      cart
        .map((prod: Product) => prod.price * prod.quantity)
        .reduce((acc: number, cur: number) => acc + cur, 0)
        .toFixed(2)
    );
  }, [cart]);

  return (
    <div className="bg-blue text-white sticky top-0 z-10">
      <div className="border-b border-b-white">
        <div className="max-w-container mx-auto h-20 px-4 flex items-center gap-2">
          <Link href="/">
            <div className="navBarHover">
              <Image src={logo} className="w-44" alt="logo" />
            </div>
          </Link>

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

          <div className="h-10 flex flex-1 relative">
            <input
              className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200"
              type="text"
              placeholder="Search everything at Shoppers online"
            />

            <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl">
              <BiSearchAlt />
            </span>
          </div>

          <div className="navBarHover">
            <AiOutlineHeart />
            <div>
              <p className="text-xs">Recorder</p>
              <h2 className="text-base font-semibold -mt-1">My Items</h2>
            </div>
          </div>
          {user ? (
            <div onClick={() => signOut()} className="navBarHover">
              <Image width={500} height={500} className="w-10 rounded-full object-cover" src={user.image} alt="userImage"/>
              <div>
                <p className="text-xs">Sign Out</p>
                <h2 className="text-base font-semibold -mt-1">{user.name}</h2>
              </div>
            </div>
          ) : (
            <div onClick={() => signIn()} className="navBarHover">
              <AiOutlineUser />
              <div>
                <p className="text-xs">Sign In</p>
                <h2 className="text-base font-semibold -mt-1">Account</h2>
              </div>
            </div>
          )}
          <Link href="/cart">
            <div className="px-5 flex flex-col justify-center items-center rounded-full hover:bg-hoverBg duration-300 relative">
              <BsCart2 className="pt-1 text-2xl" />
              <p className="pb-1 text-xs">${totalAmount}</p>
              <span className="p-1 absolute w-4 h-4 bg-yellow text-black top-1 right-4 rounded-full flex justify-center items-center font-bodyFont text-xs">
                {cart.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <NavBarButtom />
    </div>
  );
}

export default Navbar;
