import React, { useState } from "react";
import faq from "../../assets/faq.jpg";
import Image from "../layer/Image";
import AboutBanner from "../about/AboutBanner";
import Newsletter from "../Newsletter";
import { FaPlus } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";

const Faq = () => {
  let [show, setShow] = useState(false);
  let [show2, setShow2] = useState(false);
  let [show3, setShow3] = useState(false);
  let [show4, setShow4] = useState(false);
  let [show5, setShow5] = useState(false);
  let [show6, setShow6] = useState(false);

  return (
    <div className=" bg-bg-img bg-cover">
      <AboutBanner />
      <div className="py-32">
        <div className="main max-w-[1300px] flex gap-x-8 mx-auto">
          <div className="left">
            <div className="left w-[634px] h-[648px] relative">
              <div className="top size-[435px] bg-[#DCCA87] absolute top-0 right-0"></div>
              <div>
                <Image src={faq} className="z-20 absolute top-6 right-6" />
              </div>
              <div className="bottom size-[435px] bg-[#DCCA87] absolute bottom-0 left-0"></div>
            </div>
          </div>

          <div className="right w-[634px] h-[648px] relative">
            <div className="w-full absolute h-[648px] flex flex-col gap-y-6">
              <div
                className={`relative bg-[#242424] border ${
                  show ? "border-[#DCCA87]" : ""
                }`}
              >
                <h4
                  onClick={() => setShow(!show)}
                  className={`text-[23px] font-CU font-bold leading-[30px] p-6 flex justify-between items-center cursor-pointer relative ${
                    show ? "text-[#DCCA87]" : "text-[#fff]"
                  }`}
                >
                  How do I reach the restaurant?
                  <span>
                    <FaPlus
                      className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-6 ${
                        show
                          ? "opacity-0 invisible"
                          : "opacity-100 visible rotate-90"
                      }`}
                    />
                    <GoTriangleDown
                      className={`absolute top-1/2 translate-y-[-50%] right-6 ${
                        show
                          ? "opacity-100 visible"
                          : "opacity-0 invisible rotate-90"
                      }`}
                    />
                  </span>
                </h4>
                <p
                  className={`text-[#aaa] font-OS flex flex-col gap-y-4 p-6 transition-all duration-300 ${
                    show ? "static" : "absolute translate-y-[-70%] invisible"
                  }`}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <div
                className={`relative bg-[#242424] border ${
                  show2 ? "border-[#DCCA87]" : ""
                }`}
              >
                <h4
                  onClick={() => setShow2(!show2)}
                  className={`text-[23px] font-CU font-bold leading-[30px] p-6 flex justify-between items-center cursor-pointer relative ${
                    show2 ? "text-[#DCCA87]" : "text-[#fff]"
                  }`}
                >
                  Is there a reservation required?
                  <span>
                    <FaPlus
                      className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-6 ${
                        show2
                          ? "opacity-0 invisible"
                          : "opacity-100 visible rotate-90"
                      }`}
                    />
                    <GoTriangleDown
                      className={`absolute top-1/2 translate-y-[-50%] right-6 ${
                        show2
                          ? "opacity-100 visible"
                          : "opacity-0 invisible rotate-90"
                      }`}
                    />
                  </span>
                </h4>
                <p
                  className={`text-[#aaa] font-OS flex flex-col py-4 px-6 transition-all duration-300 ${
                    show2 ? "static" : "absolute translate-y-[-70%] invisible"
                  }`}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, quaerat magni ullam veritatis obcaecati alias harum
                  laboriosam iste repudiandae,
                </p>
              </div>

              <div
                className={`relative bg-[#242424] border ${
                  show3 ? "border-[#DCCA87]" : ""
                }`}
              >
                <h4
                  onClick={() => setShow3(!show3)}
                  className={`text-[23px] font-CU font-bold leading-[30px] p-6 flex justify-between items-center cursor-pointer relative ${
                    show3 ? "text-[#DCCA87]" : "text-[#fff]"
                  }`}
                >
                  Can I host an event at the restaurant?
                  <span>
                    <FaPlus
                      className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-6 ${
                        show3
                          ? "opacity-0 invisible"
                          : "opacity-100 visible rotate-90"
                      }`}
                    />
                    <GoTriangleDown
                      className={`absolute top-1/2 translate-y-[-50%] right-6 ${
                        show3
                          ? "opacity-100 visible"
                          : "opacity-0 invisible rotate-90"
                      }`}
                    />
                  </span>
                </h4>
                <p
                  className={`text-[#aaa] font-OS flex flex-col gap-y-4 p-6 transition-all duration-300 ${
                    show3 ? "static" : "absolute translate-y-[-70%] invisible"
                  }`}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <div
                className={`relative bg-[#242424] border ${
                  show4 ? "border-[#DCCA87]" : ""
                }`}
              >
                <h4
                  onClick={() => setShow4(!show4)}
                  className={`text-[23px] font-CU font-bold leading-[30px] p-6 flex justify-between items-center cursor-pointer relative ${
                    show4 ? "text-[#DCCA87]" : "text-[#fff]"
                  }`}
                >
                  Is valet parking available at the restaurant?
                  <span>
                    <FaPlus
                      className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-6 ${
                        show4
                          ? "opacity-0 invisible"
                          : "opacity-100 visible rotate-90"
                      }`}
                    />
                    <GoTriangleDown
                      className={`absolute top-1/2 translate-y-[-50%] right-6 ${
                        show4
                          ? "opacity-100 visible"
                          : "opacity-0 invisible rotate-90"
                      }`}
                    />
                  </span>
                </h4>
                <p
                  className={`text-[#aaa] font-OS flex flex-col gap-y-4 p-6 transition-all duration-300 ${
                    show4 ? "static" : "absolute translate-y-[-70%] invisible"
                  }`}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <div
                className={`relative bg-[#242424] border ${
                  show5 ? "border-[#DCCA87]" : ""
                }`}
              >
                <h4
                  onClick={() => setShow5(!show5)}
                  className={`text-[23px] font-CU font-bold leading-[30px] p-6 flex justify-between items-center cursor-pointer relative ${
                    show5 ? "text-[#DCCA87]" : "text-[#fff]"
                  }`}
                >
                  When are the happy hours of your bar?
                  <span>
                    <FaPlus
                      className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-6 ${
                        show5
                          ? "opacity-0 invisible"
                          : "opacity-100 visible rotate-90"
                      }`}
                    />
                    <GoTriangleDown
                      className={`absolute top-1/2 translate-y-[-50%] right-6 ${
                        show5
                          ? "opacity-100 visible"
                          : "opacity-0 invisible rotate-90"
                      }`}
                    />
                  </span>
                </h4>
                <p
                  className={`text-[#aaa] font-OS flex flex-col gap-y-4 p-6 transition-all duration-300 ${
                    show5 ? "static" : "absolute translate-y-[-70%] invisible"
                  }`}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud.
                </p>
              </div>

              <div
                className={`relative bg-[#242424] border ${
                  show6 ? "border-[#DCCA87]" : ""
                }`}
              >
                <h4
                  onClick={() => setShow6(!show6)}
                  className={`text-[23px] font-CU font-bold leading-[30px] p-6 flex justify-between items-center cursor-pointer relative ${
                    show6 ? "text-[#DCCA87]" : "text-[#fff]"
                  }`}
                >
                  Is seafood available at the restaurant?
                  <span>
                    <FaPlus
                      className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-6 ${
                        show6
                          ? "opacity-0 invisible"
                          : "opacity-100 visible rotate-90"
                      }`}
                    />
                    <GoTriangleDown
                      className={`absolute top-1/2 translate-y-[-50%] right-6 ${
                        show6
                          ? "opacity-100 visible"
                          : "opacity-0 invisible rotate-90"
                      }`}
                    />
                  </span>
                </h4>
                <p
                  className={`text-[#aaa] font-OS flex flex-col gap-y-4 p-6 transition-all duration-300 ${
                    show6 ? "static" : "absolute translate-y-[-70%] invisible"
                  }`}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Faq;
