import React from "react";

function ActionLink({ text, bgColor, iconSrc, href, textColor }) {
  return (
    <a
      href={href}
      target="_blank"
      className={`flex flex-col justify-center px-9 py-5 mt-12 w-full ${bgColor} rounded-[60px] max-md:px-5 max-md:mt-10 max-md:max-w-full transition-colors duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white`}
    >
      <div className="flex flex-wrap gap-10 justify-center items-center max-md:max-w-full">
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
        />
        <div className="self-stretch my-auto max-md:max-w-full">{text}</div>
      </div>
    </a>
  );
}

export default ActionLink;
