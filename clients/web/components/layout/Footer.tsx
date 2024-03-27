import React from "react";
import { assets } from "@/public/asstes";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-bgcolor p-4 md:px-16 text-[#95969E]">
      <div className="container mx-auto space-y-10">
        <div className="grid  md:grid-cols-2 py-10 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <Image src={assets.logo} alt="logo" quality={100} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores minima, possimus nam recusandae beatae a repellendus
              expedita quia et officia dicta incidunt nesciunt sint voluptates
              veritatis qui esse? Libero, dolores!
            </p>
            <div className="flex gap-4">
              <div>
                <Image src={assets.facebook_icon} alt="logo" quality={100} />
              </div>
              <div>
                <Image src={assets.twitter_icon} alt="logo" quality={100} />
              </div>
              <div>
                <Image
                  // className="w-full h-full object-contain"
                  src={assets.linkedin_icon}
                  alt="logo"
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="font-titleFont font-bold text-lg text-white">
              COMPANY
            </h1>
            <div className="flex flex-col gap-y-2">
              <Link href="">Home</Link>
              <Link href="">About us</Link>
              <Link href="">Delivery</Link>
              <Link href="">Privacy policy</Link>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="font-titleFont font-bold text-lg text-white">
              GET IN TOUCH
            </h1>
            <div className="flex flex-col gap-y-2">
              <Link href="">+1-212-4560-7890</Link>
              <Link href="">contact@greatstack.dev</Link>
            </div>
          </div>
        </div>
        <div className="md:text-center">
          Copyright 2024 &copy; JingelBell.com - All Right Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
