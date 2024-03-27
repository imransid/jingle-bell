"use client";

import { CommandeContext } from "@/context/CommandeProvider";
import { assets, food_list } from "@/public/asstes";
import Image from "next/image";
import React, { useContext } from "react";
import Order from "../elements/Order";

const ListOrders = () => {
  const contextValue = useContext(CommandeContext);
  const removeOrder = (_id: any) => {
    const itemInList = contextValue?.basketList?.list.filter(
      (dish: any) => dish._id !== _id
    );

    contextValue.setBasketList({
      ...contextValue.basketList.infos,
      list: [...itemInList],
    });
  };
  // console.log(contextValue.basketList.length);
  return (
    <section>
      <table className="table-fixed w-full font-medium">
        <thead>
          <tr className="border-b text-gray-500">
            <th className="custom-th">Items</th>
            <th className="custom-th md:table-cell hidden">Title</th>
            <th className="custom-th table-cell md:hidden">Infos</th>
            <th className="custom-th hidden md:table-cell">Price</th>
            <th className="custom-th hidden md:table-cell">Quantity</th>
            <th className="custom-th hidden md:table-cell">Total</th>
            <th className="py-4 font-medium text-center md:text-start">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {contextValue?.basketList?.list?.map((item: any, index: number) => {
            return (
              <Order
                key={index}
                _id={item?._id}
                image={item?.image}
                name={item?.name}
                quantity={item?.quantity}
                total={item?.total}
                price={item?.price}
                removeOrder={removeOrder}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ListOrders;
