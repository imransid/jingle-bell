import { assets } from "@/public/asstes";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface orderType {
  _id: string;
  name: string;
  image: StaticImageData;
  price: number;
  quantity: number;
  total: number;
  removeOrder: (_id: any) => void;
}

const Order = ({
  _id,
  image,
  name,
  quantity,
  total,
  price,
  removeOrder,
}: orderType) => {
  return (
    <tr className="border-b">
      <td className="py-4">
        <Image src={image} alt="logo" quality={100} className="h-20 w-20" />
      </td>
      <td className="py-4">
        {name}
        <div className="mt-2 space-y-2 md:hidden">
          <div className="flex justify-between">
            <span>Price : </span>
            <span>${price}</span>
          </div>
          <div className="flex justify-between">
            <span>Qte : </span>
            <span>{quantity}</span>
          </div>
          <div className="flex justify-between">
            <span>Total : </span>
            <span>{total}</span>
          </div>
        </div>
      </td>
      <td className="py-4 hidden md:table-cell">${price}</td>
      <td className="py-4 hidden md:table-cell">{quantity}</td>
      <td className="py-4 hidden md:table-cell">${total}</td>
      <td className="py-4 text-center md:text-start">
        <button onClick={() => removeOrder(_id)}>
          <Image
            className="h-4 w-4"
            src={assets.cross_icon}
            alt="logo"
            quality={100}
          />
        </button>
      </td>
    </tr>
  );
};

export default Order;
