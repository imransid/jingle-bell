"use client";

import { CommandeContext } from "@/context/CommandeProvider";
import { assets } from "@/public/asstes";
import { typeDishe } from "@/types";
import Image from "next/image";
import React, { useContext, useEffect, useMemo, useState } from "react";

interface propsType {
  item: typeDishe;
}

const Dishe = ({ item }: propsType) => {
  const contextValue = useContext(CommandeContext);
  const { _id, name, image, price, description } = item;
  const [mounted, setMounted] = useState(false);

  const [addDish, setaddDish] = useState(0);

  const handleAddDish = (quantity: number) => {
    // const itemInList = contextValue?.basketList?.list.filter(
    //   (dish: typeDishe) => dish._id !== _id
    // );
    const itemInList = contextValue.filter(parseInt(_id), "notIn");
    const itemSelected = contextValue.filter(parseInt(_id), "In");
    // const itemSelected = contextValue?.basketList?.list.filter(
    //   (dish: typeDishe) => dish._id === _id
    // );

    if (quantity === 1 && itemSelected.length === 0) {
      contextValue.setBasketList({
        ...contextValue.basketList.infos,
        list: [
          ...contextValue?.basketList?.list,
          { ...item, quantity, total: quantity * price },
        ],
      });
    } else if (quantity === 0) {
      contextValue?.setBasketList({
        ...contextValue.basketList.infos,
        list: [...itemInList],
      });
    } else {
      contextValue?.setBasketList({
        ...contextValue.basketList.infos,
        list: [...itemInList, { ...item, quantity, total: quantity * price }],
      });
    }
  };

  useEffect(() => {
    if (mounted) handleAddDish(addDish);
    else setMounted(true);
  }, [addDish]);

  useEffect(() => {
    if (contextValue.filter(parseInt(_id), "In")?.length !== 0) {
      setaddDish(contextValue.filter(parseInt(_id), "In")[0]?.quantity);
    }
  }, [mounted]);

  // console.log(contextValue.basketList);

  return (
    <div className="gap-y-2 cursor-pointer shadow-md rounded-2xl">
      <div className="relative">
        <Image
          className="object-cover rounded-t-2xl w-full min-w-[104px] h-[204px]"
          src={image}
          alt={name}
        />
        {addDish !== 0 ? (
          <div className="flex gap-4 items-center absolute bottom-3 bg-white py-1 px-2 rounded-full right-3">
            <Image
              className="object-cover rounded-t-2xl max-w-10"
              src={assets.remove_icon_red}
              alt={name}
              onClick={() => setaddDish((prev) => prev - 1)}
            />
            <span className="font-medium font-titleFont">{addDish}</span>
            <Image
              className="object-cover rounded-t-2xl max-w-10"
              src={assets.add_icon_green}
              alt={name}
              onClick={() => setaddDish((prev) => prev + 1)}
            />
          </div>
        ) : (
          <button
            onClick={() => setaddDish(1)}
            className="absolute bottom-3 right-3"
          >
            <Image
              className="object-cover rounded-t-2xl w-10"
              src={assets.add_icon_white}
              alt={name}
            />
          </button>
        )}
      </div>
      <div className="p-4 space-y-2">
        <div className="flex gap-x-2 justify-between">
          <h3 className="font-titleFont font-bold">{name}</h3>
          <Image
            className="object-contain"
            src={assets.rating_starts}
            alt="rating_starts"
          />
        </div>
        <p className="text-sm">{description}</p>
        <div className="font-bold text-orangeColor">${price}</div>
      </div>
    </div>
  );
};

export default Dishe;
