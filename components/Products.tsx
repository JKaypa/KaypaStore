import { Props } from "@/pages";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";

function Products({ productData }: Props) {
  return (
    <div className="py-6 px-4 grid grid-cols-4 gap-4 bg-white">
      {productData.map((product) => (
        <div key={product._id} className="border border-gray-200 mb-6 group">
          <div className="w-full h-[350px] overflow-hidden p-1">
            <Image
              width={300}
              height={250}
              src={product.image}
              alt={product.title}
              className="object-contain scale-100 group-hover:scale-105 duration-300"
            />
          </div>
          <div className="px-2 flex flex-col justify-center">
            <div className="flex justify-between">
              <button
                className="w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center
               hover:bg-[#004f9a] duration-300"
              >
                <span>
                  <GoPlus />
                </span>
                Add
              </button>
              <Link
                href={{
                  pathname: `product/${product._id}`,
                  query: {
                    _id: product._id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    oldPrice: product.oldPrice,
                    brand: product.brand,
                    categoty: product.category,
                    image: product.image,
                    isNew: product.isNew,
                  },
                }}
                as={`product/${product._id}`}
              >
                <button
                  className="w-24 h-9 bg-white text-black border border-black rounded-full flex gap-1 items-center justify-center
               hover:bg-black hover:text-white duration-300"
                >
                  <span>
                    <GoPlus />
                  </span>
                  Detail
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-lg text-green-700 font-semibold ">Now ${product.price}</p>
              <p className="text-gray-500 line-through">${product.oldPrice}</p>
            </div>
            <p className="text-lg font-semibold py-2">{product.title.substring(0, 25)}</p>
            <p>{product.description.substring(0, 80)}...</p>
            <div className="flex gap-2 items-center text-sm mt-2">
              <div className="flex text-sm gap-1">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <p>25</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
