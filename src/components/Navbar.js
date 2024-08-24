import React from "react";

const Navbar = () => {
  return (
    <nav className="p-3 flex justify-evenly bg-gray-200">
      <h2 className="text-green-700 text-2xl font-bold">Logo</h2>
      <ul className="flex justify-between space-x-4">
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;
