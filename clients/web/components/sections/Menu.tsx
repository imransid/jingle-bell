import { menu_list } from "@/public/asstes";
import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <section className="space-y-12">
      <div className="space-y-6">
        <h1 className="font-titleFont font-bold text-4xl">Explore our menu</h1>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your <br className="hidden md:block" /> cravings
          and elevate dinig experience, one delicious meal at a time.
        </p>
        <div className="flex  justify-between gap-16 text-center overflow-x-auto pb-4 scrollbar-thin scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
          {menu_list.map((item, index) => {
            return (
              <div
                key={index}
                className="flex rounded-xl flex-col gap-y-2 cursor-pointer"
              >
                <Image
                  className="object-contain min-w-[104px] h-[104px]"
                  src={item?.menu_image}
                  alt="logo"
                  quality={100}
                />
                <div>{item?.menu_name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="h-[0.8px] bg-gray-200" />
    </section>
  );
};

export default Menu;
