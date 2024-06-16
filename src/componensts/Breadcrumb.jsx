import React from 'react';
import { FaAngleRight } from "react-icons/fa";

const Breadcrumb = ({ className }) => {
  // Split the pathname into words, capitalize each word, and join them with a space
  const pathName = window.location.pathname.split("/")[1]
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <p className={`flex items-center justify-center text-white text-[23px] font-bold leading-[30px] font-CU w-full capitalize ${className}`}>
      Home <FaAngleRight className='text-xxl mt-1' /> <span>{pathName}</span>
    </p>
  );
};

export default Breadcrumb;
