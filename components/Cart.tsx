import { Product } from "@/pages/api/productdata";
import { phoneImg, ship1Img, ship2Img, ship3Img, warningImg } from "@/public/assets/images";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbReload } from "react-icons/tb";
import { HiMinusSm } from "react-icons/hi";
import { MdOutlineAdd } from "react-icons/md";
import FormattedPrice from "./FormattedPrice";
import { addToCart, deleteProduct, minusQuantity, resetCart } from "@/store/slice";
import { IoMdClose } from "react-icons/io";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.shopper.cart);
  const [warningMsg, setwarningMsg] = useState(false);
  let oldPrice = 0;
  let total = 0;
  cart.map((prod: Product) => {
    oldPrice += prod.oldPrice * prod.quantity;
    total += prod.price * prod.quantity;
  });
  let savings = total - oldPrice;
  
  useEffect(() => {
    setwarningMsg(true);
  }, []);

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
                          <Image
                            src={prod.image}
                            alt={prod.title}
                            width={500}
                            height={500}
                            className="w-32"
                          />
                          <div>
                            <h2 className="text-base text-zinc-900">{prod.title}</h2>
                            <p className="text-sm text-zinc-500">{prod.description}</p>
                            <p className="text-sm text-zinc-500">price: ${prod.price}</p>
                            <p className="text-sm text-zinc-500 flex items-center gap-1">
                              <span className="bg-blue rounded-full text-white text-xs">
                                <TbReload className="rotate-180" />
                              </span>
                              Free 30-days returns
                            </p>
                            <div className="pt-2 flex gap-6">
                              <button
                                onClick={() => dispatch(deleteProduct(prod._id))}
                                className="text-sm underline underline-offset-2 text-zinc-600 
                                hover:no-underline hover:text-blue duration-300"
                              >
                                Remove
                              </button>
                              <div className="w-28 h-9 border border-zinc-400 rounded-full font-semibold flex items-center justify-between px-3 text-base">
                                <button
                                  onClick={() =>
                                    dispatch(
                                      minusQuantity({ _id: prod._id, quantity: prod.quantity })
                                    )
                                  }
                                  className="text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center duration-200"
                                >
                                  <HiMinusSm />
                                </button>
                                <span>{prod.quantity}</span>
                                <button
                                  onClick={() =>
                                    dispatch(addToCart({ _id: prod._id, quantity: prod.quantity }))
                                  }
                                  className="text-lg w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center duration-200"
                                >
                                  <MdOutlineAdd />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/4 text-right flex flex-col items-end gap-1">
                          <p className="font-semibold text-xl text-[#2a8703]">
                            <FormattedPrice amount={prod.price * prod.quantity} />
                          </p>
                          <p className="text-sm line-through text-zinc-500">
                            <FormattedPrice amount={prod.oldPrice * prod.quantity} />
                          </p>
                          <div className="flex items-center text-xs gap-2">
                            <p className="bg-green-200 text-[8px] uppercase px-2 py-[1px]">
                              You save
                            </p>
                            <p className="font-semibold text- text-green-700">
                              <FormattedPrice
                                amount={prod.oldPrice * prod.quantity - prod.price * prod.quantity}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <button
                onClick={() => dispatch(resetCart())}
                className="w-44 bg-red-500 text-white h-10 rounded-full text-base font-semibold hover:bg-red-800 duration-300"
              >
                Reset Cart
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-1/3 p-4 mt-24 h-[500px] border border-zinc-400 
          rounded-md flex flex-col justify-center gap-4"
        >
          <div className="w-full flex flex-col gap-4 border-b border-b-zinc-200 pb-4">
            <button className="bg-blue hover:bg-hoverBg w-full text-white h-10 rounded-full font-semibold duration-300">
              Continue to checkout
            </button>
            <p className="text-sm text-center text-red-500 mt-4 font-semibold">
              Please sign in for checkout
            </p>
            {warningMsg && (
              <>
                <div className="bg-[#002d58] text-white p-2 rounded-lg flex items-center justify-between gap-4">
                  <Image src={warningImg} alt="warningImg" className="w-8" />
                  <p className="text-sm">
                    Items in your cart have reduced prices. Checkout now for extra savings!
                  </p>
                  <IoMdClose
                    onClick={() => {
                      setwarningMsg(false);
                    }}
                    className="text-3xl hover:text-red-400 cursor-pointer duration-200"
                  />
                </div>
              </>
            )}
            <p className="text-sm text-center">
              For the best shopping experience,
              <span className="underline underline-offset-2"> sign in</span>
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 border-b border-b-zinc-200 pb-4">
            <div className="flex- flex-col justify-between gap-1">
              <div className="text-sm flex justify-between">
                <p className="font-semibold">
                  Subtotal<span>({cart.length} items)</span>
                </p>
                <p className="line-through text-zinc-500 text-base">
                  <FormattedPrice amount={oldPrice} />
                </p>
              </div>
              <div className="text-sm flex justify-between">
                <p className="font-semibold">Savings</p>
                <p className="font-bold text-green-700 bg-green-100 rounded-md p-1">
                 <FormattedPrice amount={savings} />
                </p>
              </div>
              <div className="text-sm flex justify-between">
                <p className="font-semibold text-base">Total Amount</p>
                <p className="font-bold text-base">
                 <FormattedPrice amount={total} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
