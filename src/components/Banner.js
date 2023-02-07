import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center top-0 p-5 text-white text-md  uppercase space-x-5 w-100 sticky z-50">
      <Link className="hover:text-black" href="#expenses-form">
        Expenses Form
      </Link>
      <Link className="hover:text-black" href="#overview">
        Overview
      </Link>
    </div>
  );
};

export default Banner;
