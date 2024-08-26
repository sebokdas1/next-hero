import Meals from "@/components/Meals";
import React from "react";

const page = () => {
  return (
    <div className="bg-orange-600  pt-2">
      <h1 className="text-4xl font-bold text-white text-center">
        Search your favourite meals
      </h1>
      <Meals />
    </div>
  );
};

export default page;
