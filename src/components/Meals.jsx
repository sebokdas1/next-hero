"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch("");
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length !== 0) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => setMeals(data.meals || []));
    }
  }, [search]);

  return (
    <div>
      <span className="flex justify-center items-center mt-2">
        <input
          onChange={searchHandler}
          type="text"
          className="outline-none w-[50%] p-3 mb-3"
          placeholder="Search meal by name"
        />
      </span>

      {meals.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 px-2">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="border border-gray-400 p-2">
              <Image
                src={meal.strMealThumb}
                height={420}
                width={500}
                alt={meal.strMeal}
              />
              <h1 className="text-center text-white text-xl font-bold">
                {meal.strMeal}
              </h1>
              <h4 className="font-bold">{meal.strInstructions}</h4>
              <Link href={meal.strYoutube}>
                <button className="bg-red-300 px-2">Watch</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Meals;
