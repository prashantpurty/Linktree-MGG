import React from "react";

function ActionLink({ text, bgColor, iconSrc, href, textColor }) {
  return (
    <a
      href={href}
      target="_blank"
      className={`flex flex-col justify-center px-9 py-5 mt-12 w-full ${bgColor} rounded-[60px] max-md:px-4 max-md:py-3 max-md:mt-8 transition-colors duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white`}
    >
      <div className="flex flex-wrap gap-6 md:gap-10 justify-center items-center text-center max-md:max-w-full">
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-10 md:w-12 aspect-square"
        />
        <div className={`self-stretch my-auto max-md:max-w-full ${textColor}`}>
          {text}
        </div>
      </div>
    </a>
  );
}

export default ActionLink;
