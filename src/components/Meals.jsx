"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setmeals] = useState([]);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch("");
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length !== 0) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        .then((res) => res.json())
        .then((data) => setmeals(data));
    }
  }, [search]);

  return (
    <div>
      <span className="flex justify-center items-center mt-2">
        <input
          onChange={searchHandler}
          type="text"
          className="outline-none w-[50%] p-3"
          placeholder="Search meal by name"
        />
      </span>

      {meals.length === 0 || meals.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {meals?.map((meal) => (
            <div key={meal?.idMeal}>
              <h1>{meal?.strMeal}</h1>
              <h4>{meal?.strInstructions}</h4>
              <Link href={meal?.strYoutube}>
                <button>watch</button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>not found</h1>
        </div>
      )}
    </div>
  );
};

export default Meals;
