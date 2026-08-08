import React from "react";
interface FeatureProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function Feature({
  title,
  description,
  image,
  reverse = false,
}: FeatureProps) {
  return (
    <>
      <section
        className={`flex items-center justify-around gap-[50px] px-[50px] py-[50px] text-black ${reverse ? "flex-row-reverse" : "flex-row"} max-[780px]:flex-col-reverse max-[780px]:gap-[30px] max-[780px]:px-[30px] max-[780px]:py-[30px] max-[480px]:items-center max-[480px]:gap-5 max-[480px]:px-5 max-[480px]:py-5`}
      >
        {" "}
        {/* Content */}{" "}
        <div className="max-w-[500px] text-left max-[780px]:max-w-[400px] max-[780px]:text-center max-[480px]:max-w-full">
          {" "}
          <h2 className="mb-5 text-[36px] font-bold max-[780px]:mb-[15px] max-[780px]:text-[28px] max-[480px]:mb-2.5 max-[480px]:text-2xl">
            {" "}
            {title}{" "}
          </h2>{" "}
          <p className="mb-5 text-base max-[780px]:mb-[15px] max-[780px]:text-sm max-[480px]:mb-2.5 max-[480px]:text-sm">
            {" "}
            {description}{" "}
          </p>{" "}
          <button className="cursor-pointer border-0 bg-[#f5c518] px-[50px] py-5 font-bold transition-all duration-200 hover:border-[3px] hover:border-[#f5c518] hover:bg-transparent hover:text-[#f5c518] max-[780px]:px-10 max-[780px]:py-[15px] max-[480px]:w-full max-[480px]:max-w-[200px] max-[480px]:px-[30px] max-[480px]:py-2.5">
            {" "}
            Learn More{" "}
          </button>{" "}
        </div>{" "}
        {/* Image */}{" "}
        <div>
          {" "}
          <img
            src={image}
            alt={title}
            className="rounded-[50%] object-cover max-[780px]:h-[250px] max-[780px]:w-[250px] max-[480px]:h-[200px] max-[480px]:w-[200px]"
          />{" "}
        </div>{" "}
      </section>
    </>
  );
}
