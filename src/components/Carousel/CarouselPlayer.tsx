"use client";
import Image from "next/image";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel,
} from "../ui/carousel";
import data from "./data.json";
import Autoplay from "embla-carousel-autoplay";

function CarouselPlayer() {
  return (
    <div suppressHydrationWarning={true} className="mx-auto max-w-7xl px-6 lg:px-8 mt-1">
      <Carousel
      plugins={[Autoplay({delay:5000})]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {data.data.map((item, index) => (
            <CarouselItem key={index}>
              <div className="grid sm:grid-cols-2">
                <div className="">
                  <Image
                    src={item.img}
                    alt="hiii"
                    height={0}
                    width={0}
                    sizes="(max-width: 768px) 100vw, 768px"
                    objectFit="contain"
                    className="w-[80%] rounded-lg shadow-lg "
                  />
                </div>
                <div className="p-2 relative w-full sm:text-start text-center sm:w-[100%]">
                  {/* map */}
                  <div>
                    <h3 className="mt-2 sm:mt-4 text-xl sm:text-2xl text-black-600 font-bold">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-2 sm:mt-4 text-start w-full sm:p-0 ">
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </div>
              </div>
              {/* <img src="public/img/step1" alt="heheh" /> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarouselPlayer;

