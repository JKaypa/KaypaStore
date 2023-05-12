import { Props } from "@/pages";
import Image from "next/image";
import React from "react";
import { GoPlus } from "react-icons/go";

function Products({ productData }: Props) {
  return (
    <div className="py-6 px-4 grid grid-cols-4 gap-4">
      {productData.map((product) => (
        <div key={product._id} className="h-[350px] p-1 border border-gray-200 mb-6 group">
          <div >
            <Image
              width={300}
              height={250}
              src={product.image}
              alt={product.title}
              className="object-contain scale-100 group-hover:scale-105 duration-300"
            />
          </div>
          <div>
            <div>
              <button 
              className="w-20 bg-blue text-white rounded-full flex gap-1 items-center justify-center
               hover:bg-[#004f9a] duration-300">
                <span>
                  <GoPlus />
                </span>
                Add
              </button>
              <button 
              className="w-20 bg-white text-black border border-black rounded-full flex gap-1 items-center justify-center
               hover:bg-black hover:text-white duration-300">
                <span>
                  <GoPlus />
                </span>
                Detail
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
