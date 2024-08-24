import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-500">
      <h2 className="text-green-400">hello</h2>
      <ul className="flex justify-between bg-black">
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;
