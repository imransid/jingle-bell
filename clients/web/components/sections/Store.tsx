import { assets } from "@/public/asstes";
import Image from "next/image";
import React from "react";

const Store = () => {
  return (
    <section className="flex flex-col place-items-center gap-y-10">
      <h1 className="font-titleFont font-bold text-3xl md:text-4xl sm:text-center leading-snug">
        For Better Expercience Download <br className="hidden md:block" />{" "}
        Jingel Bell App
      </h1>
      <div className="flex flex-col md:flex-row gap-y-4 gap-x-8">
        <Image
          className="object-contain w-[216px]"
          src={assets.play_store}
          alt="play_store"
          quality={100}
        />
        <Image
          className="object-contain  w-[216px]"
          src={assets.app_store}
          alt="app_store"
          quality={100}
        />
      </div>
    </section>
  );
};

export default Store;
