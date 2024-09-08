import React from "react";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="rounded bg-[#f2f2f2] p-[20px] w-[50%] mt-3">
        <form>
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
