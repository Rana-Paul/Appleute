import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

import data from "./data.json";

function Scroller() {
  return (
    <MaxWidthWrapper className="inline-flex  justify-center flex-nowrap overflow-x-hidden">
        
      <ul typeof="disc" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {data.data1.map((item, index) => (
          <li
            className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
            key={index}
          >
            <Image src={item.img} height={140} width={150} alt="logo" className="w-20 h-10" />
          </li>
        ))}
      </ul>
      
    </MaxWidthWrapper>
  );
}

export default Scroller;

