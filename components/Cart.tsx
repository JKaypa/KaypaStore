import { Product } from "@/pages/api/productdata";
import { phoneImg, ship1Img, ship2Img, ship3Img } from "@/public/assets/images";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state: any) => state.shopper.cart);

  return (
    <div className="w-full py-10">
      <div className="w-full flex gap-10">
        <div className="w-2/3 flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-black">
            Cart <span className="text-lightText font-normal">({cart.length} items)</span>
          </h1>
          <div>
            <div className="text-xl font-bold flex items-center gap-2 mb-2">
              <Image src={phoneImg} alt="phoneImg" className="w-10" />
              <p>Pickup and delivery options</p>
            </div>
            <div className="w-full grid grid-cols-3 gap-4 text-xs">
              <div
                className="w-full border border-zinc-400 rounded-md flex flex-col
              items-center justify-center gap-1 p-2"
              >
                <Image className="w-10" src={ship1Img} alt="shippingImage" />
                <p className=" font-bold">Shipping</p>
                <p>All items available</p>
              </div>
              <div
                className="w-full border border-zinc-400 rounded-md flex flex-col
              items-center justify-center gap-1 p-2"
              >
                <Image className="w-10" src={ship2Img} alt="shippingImage" />
                <p className=" font-bold">Pickup</p>
                <p>All items available</p>
              </div>
              <div
                className="w-full border border-zinc-400 rounded-md flex flex-col
              items-center justify-center gap-1 p-2"
              >
                <Image className="w-10" src={ship3Img} alt="shippingImage" />
                <p className=" font-bold">Delivery</p>
                <p>All items available</p>
              </div>
            </div>
            <div className="w-full p-5 border border-zinc-400 rounded-md flex flex-col gap-4">
              <p className="font-semibold text-sm text-zinc-500">
                Sold and shipped by <span className="text-black font-semibold">Shoppers.com</span>
              </p>
              <div className="flex gap-2">
                <button className="px-2 py-px text-[#004f9a] text-sm border border-[#004f9a] rounded-sm">
                  Best seller
                </button>
                <button className="px-2 py-px text-red-600 text-sm border border-red-600 rounded-sm">
                  Rollback
                </button>
              </div>
              <div>
                {cart.map((prod: Product) => {
                  return (
                    <>
                      <div
                        key={prod._id}
                        className="flex items-center justify-between gap-4 border-b
                      border-b-zinc-200 pb-4"
                      >
                        <div className="w-3/4 flex items-center gap-2">
                          <Image src={prod.image} alt={prod.title} width={500} height={500} className="w-32"/>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-1/3 p-4 mt-24 h-[500px] border border-zinc-400 
        rounded-md flex flex-col justify-center gap-4"
        ></div>
      </div>
    </div>
  );
}

export default Cart;
