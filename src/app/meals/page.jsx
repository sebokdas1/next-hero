import Meals from "@/components/Meals";
import React from "react";

const page = () => {
  // const [meals, setmeals] = useState([]);

  //   useEffect(() => {
  //     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
  //   }, [search])
  //     .then((res) => res.json())
  //     .then((data) => setmeals(data));

  return (
    <div className="bg-orange-600 h-screen pt-2">
      <h1 className="text-4xl font-bold text-white text-center">
        Search your favourite meals
      </h1>
      <Meals />
    </div>
  );
};

export default page;
