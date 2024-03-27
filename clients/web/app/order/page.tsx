import Proceed from "@/components/elements/Proceed";
import Delivery from "@/components/elements/Delivery";
import React from "react";

const page = () => {
  return (
    <main className="p-4 md:px-16 flex flex-col lgl:flex-row justify-between gap-4 md:gap-8 md:py-24">
      <Delivery />
      <Proceed link_to="/payment" title="Procced To Payment" />
    </main>
  );
};

export default page;
