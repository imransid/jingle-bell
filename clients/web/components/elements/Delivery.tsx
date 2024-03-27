"use client";
import { CommandeContext } from "@/context/CommandeProvider";
import React, { useContext, useEffect, useState } from "react";

const Delivery = () => {
  const contextValue = useContext(CommandeContext);
  const [infos, setinfos] = useState(contextValue?.basketList?.infos);
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    if (mounted)
      contextValue.setBasketList({
        infos: infos,
        list: [...contextValue?.basketList.list],
      });
    else setmounted(true);
  }, [infos]);

  return (
    <div className="grow max-w-[500px]">
      <h1 className="font-titleFont font-bold text-3xl">
        Delivery Information
      </h1>
      <div className="space-y-3 mt-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="grow">
            <input
              type="text"
              placeholder="First name"
              autoComplete="First-name"
              value={infos?.firstName}
              onChange={(e) =>
                setinfos({ ...infos, firstName: e.target.value })
              }
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
          <div className="grow">
            <input
              type="text"
              value={infos?.lastName}
              onChange={(e) => setinfos({ ...infos, lastName: e.target.value })}
              placeholder="Last name"
              autoComplete="Last-name"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <input
            type="email"
            value={infos?.email}
            onChange={(e) => setinfos({ ...infos, email: e.target.value })}
            placeholder="Email address"
            autoComplete="email"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <input
            type="text"
            value={infos?.street}
            onChange={(e) => setinfos({ ...infos, street: e.target.value })}
            placeholder="Street"
            autoComplete="Street"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex gap-4">
          <div className="grow">
            <input
              type="text"
              value={infos?.city}
              onChange={(e) => setinfos({ ...infos, city: e.target.value })}
              placeholder="City"
              autoComplete="City"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
          <div className="grow">
            <input
              type="text"
              value={infos?.state}
              onChange={(e) => setinfos({ ...infos, state: e.target.value })}
              placeholder="State"
              autoComplete="Country"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="grow">
            <input
              type="text"
              value={infos?.zipcode}
              onChange={(e) => setinfos({ ...infos, zipcode: e.target.value })}
              placeholder="Zip code"
              autoComplete="Zip code"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
          <div className="grow">
            <input
              type="text"
              value={infos?.phone}
              onChange={(e) => setinfos({ ...infos, phone: e.target.value })}
              placeholder="Country"
              autoComplete="Country"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone"
            autoComplete="Phone"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
