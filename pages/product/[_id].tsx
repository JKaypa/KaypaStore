import { ship1Img, ship2Img, ship3Img } from "@/public/assets/images";
import { addToCart } from "@/store/slice";
import Image from "next/image";
import React from "react";
import { BsInfoCircle, BsStarFill } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

function ProductDetails() {
  const dispatch = useDispatch();
  const product = useSelector((state: any) => state.shopper.detail);

  return (
    <div className="w-full bg-white">
      <div className="max-w-contentContainer mx-auto flex items-center py-4">
        <div className="w-2/3 h-full flex items-center justify-center overflow-hidden relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-[80%] transform origin-top-left cursor-move duration-500"
          />
        </div>
        <div className="w-1/3 h-full flex flex-col gap-2">
          <p className="p-2 text-[#004f9a] text-sm font-semibold border border-gray-400">
            500+ bougth since yesterday
          </p>
          <div className="px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button className="px-2 py-px text-[#004f9a] text-sm border border-[#004f9a] rounded-sm">
                  Best seller
                </button>
                <button className="px-2 py-px text-red-600 text-sm border border-red-600 rounded-sm">
                  Rollback
                </button>
              </div>
              <IoMdHeartEmpty className="text-gray-600 text-2xl" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm underline underline-offset-4">{product.brand}</p>
              <p className="text-xl font semibold text-black">{product.title}</p>
              <p className="text-base text-zinc-500">{product.description}</p>
              <div className="flex gap-2 items-center text-xs mt-2">
                <div className="flex gap-1">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p>25</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="font-semibold text-2xl text-[#2a8703]">Now ${product.price}</p>
                <p className="text-sm text-zinc-500 line-through flex items-center gap-1">
                  ${product.oldPrice}{" "}
                  <span>
                    <BsInfoCircle />
                  </span>
                </p>
              </div>
            </div>
            <div className="text-xs text-zinc-500 flex items-center gap-1">
              <p>
                <span className="font-semibold">$18/mo</span>
                <span className="font-bold">withAffirm</span>
                <span className="underline underline-offset-2">Learn how</span>
              </p>
              <p className="text-xs text-zinc-500 flex items-center gap-1">
                Price when purchased online
                <span>
                  <BsInfoCircle />
                </span>
              </p>
            </div>
            <div className="border-b border-b-zinc-300 pb-4">
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      _id: Number(product._id),
                      title: product.title,
                      description: product.description,
                      image: product.image,
                      price: product.price,
                      oldPrice: product.oldPrice,
                      quantity: 1,
                      brand: product.brand,
                      category: product.category,
                    })
                  );
                  toast.success(`${product.title} was added to cart successfully!`);
                }}
                className="w-32 h-10 bg-blue text-white rounded-full hover:bg-[#004f9a] duration-300"
              >
                Add to cart
              </button>
            </div>
            <div>
              <p className="text-base font-semibold">How do you want your item?</p>
              <div className="w-full grid grid-cols-3 gap-4 text-xs">
                <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                  <Image className="w-10" src={ship1Img} alt="shippingImage" />
                  <p>Shiping</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>

                <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                  <Image className="w-10" src={ship2Img} alt="shippingImage" />
                  <p>Pickup</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>

                <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                  <Image className="w-10" src={ship3Img} alt="shippingImage" />
                  <p>Delivery</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>
              </div>
              <span className="font-bold text-xs">Cartagena, 130002</span>
              <span className="text-xs underline underline-offset-2 ml-1">Change</span>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default ProductDetails;
