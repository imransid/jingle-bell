"use client";

import { CommandeContext } from "@/context/CommandeProvider";
import React, { useContext, useState } from "react";

const PayCard = () => {
  const contextValue = useContext(CommandeContext);
  const [cardInfos, setCardInfos] = useState({
    email: "",
    cardNumber: "",
    date: "",
    cardholder: "",
    country: "",
    cvv: "",
  });

  const payNow = (e: any) => {
    e.preventDefault();
    contextValue.setBasketList({
      infos: { ...contextValue?.basketList?.list, cardInfos },
      list: [...contextValue?.basketList?.list],
    });
  };

  return (
    <section className="p-4 md:px-16" onSubmit={(e) => payNow(e)}>
      <h1 className="font-titleFont font-bold text-3xl">Pay with card</h1>
      <form className="space-y-3 mt-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-700"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              onChange={(e) =>
                setCardInfos({ ...cardInfos, email: e.target.value })
              }
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        {/* -------------- */}
        <div>
          <label
            htmlFor="card-number-input"
            className="text-sm font-medium leading-6 text-gray-70"
          >
            Card information :
          </label>
          <div className="relative mt-2">
            <input
              type="text"
              id="card-number-input"
              className="bg-gray-50 ring-1 text-gray-900 text-sm rounded-lg focus:ring-orangeColor focus:border-orangeColor block w-full pe-10 p-2.5  dark:placeholder-gray-400 ring-gray-300 outline-none dark:focus:ring-orangeColor dark:focus:border-orangeColor"
              placeholder="4242 4242 4242 4242"
              pattern="^4[0-9]{12}(?:[0-9]{3})?$"
              onChange={(e) =>
                setCardInfos({
                  ...cardInfos,
                  cardNumber: e.target.value,
                })
              }
              required
            />
            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
              <svg fill="none" className="h-6" viewBox="0 0 36 21">
                <path
                  fill="currentColor"
                  d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* -------------- */}
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="relative max-w-sm col-span-2">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <label htmlFor="card-expiration-input" className="sr-only">
              Card expiration date:
            </label>
            <input
              // datepicker
              datepicker-format="mm/yy"
              id="card-expiration-input"
              type="text"
              className="bg-gray-50 border  ring-1 text-gray-900 text-sm rounded-lg focus:ring-orangeColor focus:border-orangeColor block w-full ps-10 p-2.5 dark:placeholder-gray-400  dark:focus:ring-orangeColor dark:focus:border-orangeColor ring-gray-300 outline-none"
              placeholder="12/23"
              pattern="2[0-9]/2[0-9]"
              onChange={(e) =>
                setCardInfos({ ...cardInfos, date: e.target.value })
              }
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="cvv-input" className="sr-only">
              Card CVV code:
            </label>
            <input
              type="number"
              id="cvv-input"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border  ring-1 text-gray-900 text-sm rounded-lg focus:ring-orangeColor focus:border-orangeColor block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-orangeColor dark:focus:border-orangeColor ring-gray-300 outline-none"
              placeholder="CVV"
              pattern="^[0-9]{3}$"
              onChange={(e) =>
                setCardInfos({ ...cardInfos, cvv: e.target.value })
              }
              required
            />
          </div>
        </div>
        {/* -------------- */}
        <div>
          <label
            htmlFor="Cardholder"
            className="block text-sm font-medium leading-6 text-gray-700"
          >
            Cardholder name
          </label>
          <div className="mt-2">
            <input
              id="Cardholder"
              name="Cardholder"
              type="text"
              autoComplete="Cardholder name"
              onChange={(e) =>
                setCardInfos({ ...cardInfos, cardholder: e.target.value })
              }
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeColor sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/* -------------- */}
        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              required
              className="block w-full rounded-md border-0 p-3 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orangeColor outline-none sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e) =>
                setCardInfos({ ...cardInfos, country: e.target.value })
              }
            >
              <option>Maroc</option>
              <option>United States</option>
              <option>Canada</option>
            </select>
          </div>
        </div>
        {/* -------------- */}
        <button
          type="submit"
          className="text-white bg-orangeColor hover:bg-orangeColor focus:ring-4 focus:ring-orangeColor font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orangeColor dark:hover:bg-orangeColor focus:outline-none dark:focus:ring-orangeColor min-w-full md:min-w-[400px]"
        >
          Pay now
        </button>
      </form>
    </section>
  );
};

export default PayCard;
