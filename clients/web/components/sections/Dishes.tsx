"use client";

import React, { useEffect, useState } from "react";
import Dishe from "../elements/Dishe";
import axios from "axios";
import { typeDishe } from "@/types";

const Dishes = () => {
  const [data, setData] = useState<typeDishe[]>([]);
  useEffect(() => {
    axios
      .get("/api/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // https://student-app-express.onrender.com/food/Noodles
  // useEffect(() => {
  //   axios
  //     .get("https://student-app-express.onrender.com/food/Noodles")
  //     .then((response) => {
  //       // setData(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  // console.log(data);
  return (
    <section className="space-y-6">
      <h1 className="font-titleFont font-bold text-4xl">Top Dishes near you</h1>
      <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-4 ">
        {data.slice(1, 10).map((item, index) => {
          return <Dishe key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Dishes;
