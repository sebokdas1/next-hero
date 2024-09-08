"use client";
import React from "react";

const page = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const res = await fetch("http://localhost:3000/api/auth/signup/new-user", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
  };

  return (
    <div className="flex justify-center">
      <div className="rounded bg-[#f2f2f2] p-[20px] w-[50%] mt-3">
        <form onSubmit={handleRegister}>
          <label htmlFor="name">Name</label>
          <input
            className="w-[100%] py-[12px] px-[20px] my-[8px]"
            type="text"
            id="name"
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            className="w-[100%] py-[12px] px-[20px] my-[8px]"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email "
            required
          />

          <label htmlFor="password">Password</label>
          <input
            className="w-[100%] py-[12px] px-[20px] my-[8px]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <input
            className="w-[100%] py-[12px] px-[20px] my-[8px] bg-[#4CAF50] text-white cursor-pointer"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default page;
