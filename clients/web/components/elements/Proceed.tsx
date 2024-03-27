"use client";

import { CommandeContext } from "@/context/CommandeProvider";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

interface typeProps {
  link_to: string;
  title: string;
}

const Proceed = ({ link_to, title }: typeProps) => {
  const router = useRouter();
  const contextValue = useContext(CommandeContext);
  let total = 0;
  for (const item of contextValue?.basketList?.list) {
    total += item.total;
  }

  const handleInfos = (link_to: string) => {
    const infos = contextValue?.basketList?.infos;
    if (
      link_to === "/payment" &&
      (infos?.firstName === "" || infos?.lastName === "" || infos?.email === "")
    )
      alert("error");
    else {
      router.push(link_to);
    }
  };

  return (
    <div className="md:min-w-[500px] space-y-4">
      <h1 className="font-titleFont font-bold text-3xl">Cart Totals</h1>
      <div className="border-b py-2 flex gap-x-4 justify-between">
        <span>Subtotal</span>
        <span>${total}</span>
      </div>
      <div className="border-b py-2 flex gap-x-4 justify-between">
        <span>Delivery Fee</span>
        <span>$5</span>
      </div>
      <div className="font-semibold  py-2 flex gap-x-4 justify-between">
        <span>Total</span>
        <span>${total !== 0 ? total + 5 : 0}</span>
      </div>
      <button
        onClick={() => handleInfos(link_to)}
        className="bg-orangeColor mt-2 font-titleFont rounded-md text-white py-2 px-6"
      >
        {title}
      </button>
    </div>
  );
};

export default Proceed;
