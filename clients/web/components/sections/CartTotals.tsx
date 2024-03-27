import Link from "next/link";
import React from "react";
import Proceed from "../elements/Proceed";

const CartTotals = () => {
  return (
    <section className="flex flex-col xl:flex-row gap-y-10 justify-between">
      <Proceed link_to="/order" title="PROCEED TO CHECKOUT" />
      <div className="text-gray-500 space-y-2 md:min-w-[400px]">
        <div>If you have a promo code, Enter it here</div>
        <div className="w-full flex flex-col md:flex-row gap-y-4">
          <input
            className="bg-[#E2E1E2] rounded-md md:rounded-none md:rounded-l-md px-6 py-2 grow"
            type="text"
            placeholder="promo Code"
          />
          <button className="text-white bg-black px-6 py-2  rounded-md md:rounded-none md:rounded-r-md">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartTotals;
