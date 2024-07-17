/** @format */
"use client";

import Image, { StaticImageData } from "next/image";

import Audrey from "../../../public/img/1t.png";
import Jake from "../../../public/img/2t.png";
import Keri from "../../../public/img/3t.png";
import William from "../../../public/img/4t.png";
import Zach from "../../../public/img/5t.png";
import clsx from "clsx";

// colors
// ### Primary

const color_ModerateViolet = "hsl(263, 55%, 52%)";
const color_VeryDarkGrayishBlue = "hsl(217, 19%, 35%)";
const color_VeryDarkBlackishBlue = "hsl(219, 29%, 14%)";
const color_White = "hsl(0, 0%, 100%)";

// ### Neutral
const color_LightGray = "hsl(0, 0%, 81%)";
const color_LightGrayishBlue = "hsl(210, 46%, 95%)";

interface DataType {
  className?: string;
  bgColor?: string;
  textColor?: string;
  avatarImg: StaticImageData;
  name: string;
  heading: string;
  description: string;
}

const data: DataType[] = [
  {
    // 1
    className: "md:col-span-2",
    bgColor: color_ModerateViolet,
    textColor: color_LightGray,
    avatarImg: Audrey,
    name: "Act in EIT Food",
    heading:
    "Act in EIT Food: Collaboration with an International Food Project Funded by the EU and the German Federal Ministry",
    description:
      "Discover our role in EIT Food, an international food project supported by the EU and the German Federal Ministry. This collaboration aims to drive innovation and sustainability in the food sector. By participating in EIT Food, we contribute to developing new technologies, improving food quality, and promoting healthier and more sustainable diets. Our partnership emphasizes research, education, and outreach to address global food challenges. Join us in our mission to transform the food system for a better future. Learn more about our initiatives and achievements."
  },
  {
    // 2
    avatarImg: Jake,
    bgColor: color_VeryDarkGrayishBlue,
    textColor: color_LightGray,
    name: "Vytal App and API",
    heading: "Optimizing the Vytal App and API for Client-Specific Needs",
    description:
    "Explore how we enhanced the Vytal app and API to meet our client's unique requirements. Our optimization efforts focused on improving functionality, user experience, and overall performance."
  },
  {
    // 3
    className: "md:row-span-2",
    bgColor: color_LightGrayishBlue,
    textColor: color_VeryDarkGrayishBlue,
    avatarImg: Zach,
    name: "Betra Supermarket Unit",
    heading: "Betra Supermarket: Unmanned Future in Belgrade",
    description:
    "Immerse yourself in the supermarket of the future with the Betra Supermarket Unit. This revolutionary, unmanned retail experience is now available for admiration in Belgrade, showcasing its first execution. The Betra Supermarket Unit leverages advanced technology to provide a seamless, efficient, and convenient shopping experience without the need for staff. Customers can enjoy a modern retail environment where they can shop at their own pace, utilizing innovative solutions for checkout and product selection. This pioneering concept aims to transform the traditional shopping experience, offering a glimpse into the future of retail. With its emphasis on automation, efficiency, and customer convenience, the Betra Supermarket Unit represents a significant step forward in the evolution of the shopping landscape. Visit Belgrade to witness this groundbreaking innovation and explore how it is set to redefine the way we shop."
  },
  {
    // 4
    bgColor: color_LightGrayishBlue,
    textColor: color_VeryDarkGrayishBlue,
    avatarImg: Keri,
    name: "Quarter App",
    heading: "Quarter App: A Sneak Peek at What's Coming",
    description:
    "Prepare to be surprised by the Quarter App! Here’s a small design teaser to pique your interest. Stay tuned for the full project page, which will be completed after the app's release. Exciting features and innovative design await!"
  },
  {
    // 5
    className: "md:col-span-2",
    avatarImg: William,
    bgColor: color_VeryDarkBlackishBlue,
    textColor: color_LightGray,
    name: "Toggl to Monday API",
    heading:
    "Enhancing Internal Processes: From Toggl to Monday API Integration",
    description:
    "Discover our streamlined approach to improving efficiency by integrating Toggl with Monday.com through a custom API. This optimization simplifies time tracking, project management, and task coordination, ensuring a more cohesive workflow. By automating data transfer and reducing manual input, our internal processes are now more efficient and error-free. This integration reflects our commitment to leveraging technology to enhance productivity and deliver superior results."
  }
];

export default function Testimonial() {
  return (
    <main className="flex justify-center items-center min-h-screen p-8  font-BarlowSemiCondensed  ">
      <div className="grid gap-6 md:grid-cols-4 md:grid-rows-2 max-w-[960px] ">
        {data.map((data, index) => (
          <Card
            bgColor={data.bgColor}
            textColor={data.textColor}
            avatarImg={data.avatarImg}
            description={data.description}
            heading={data.heading}
            key={index}
            name={data.name}
            className={data.className}
          />
        ))}
      </div>
    </main>
  );
}

function Card(props: DataType) {
  return (
    <div
      style={{ color: props.textColor, background: props.bgColor }}
      className={clsx(
        "p-6 shadow-2xl rounded-lg h-auto flex flex-col gap-4 max-w-[400px] md:max-w-none ",
        props.className
      )}
    >
      {/* avatar and name */}
      <section className="flex gap-2 ">
        <Image
          src={props.avatarImg}
          alt="profile-img"
          className="rounded-full h-20 w-20 border-2"
        />
        <div>
          <div className="text-xs font-semibold">{props.name}</div>
          <p className="text-[10px] opacity-50">Verified Graduate</p>
        </div>
      </section>

      <h3 className="font-semibold text-lg ">{props.heading}</h3>
      <p className="text-xs opacity-70 leading-relaxed ">
        “ {props.description} ”
      </p>
    </div>
  );
}

