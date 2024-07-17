"use client";
import React from "react";
import { Instagram } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import data from "./data.json";
import Image from "next/image";

function Footer() {
  return (
    <>
      <>
        <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
          <div className="p-5 ">
            <ul>
              <p className="text-gray-800 font-bold text-3xl pb-6">
                Apple<span className="text-blue-600">ute</span>
              </p>
              <div className="flex gap-6 pb-5">
                <Instagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                <TwitterIcon className="text-2xl cursor-pointer hover:text-blue-600" />
                <Linkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                <Youtube className="text-2xl cursor-pointer hover:text-red-600" />
              </div>
              
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
              {data.Product.map((item, index) => (
                <li key={index} className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
                {item.title}
              </li>
              ))}
              
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
              {data.Company.map((item, index) => (
                <li key={index} className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
                {item.title}
              </li>
              ))}
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
              {data.Support.map((item, index) => (
                <li key={index} className="text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer">
                {item.title}
              </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    </>
  );
}

export default Footer;

