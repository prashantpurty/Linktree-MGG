import React from "react";

function ActionLink({ text, bgColor, iconSrc, href, textColor }) {
  return (
    <a
      href={href}
      target="_blank"
      className={`flex items-center gap-4 px-6 py-4 mt-6 w-full ${bgColor} rounded-[50px] max-md:px-4 max-md:mt-5 transition-transform duration-300 hover:scale-105`}
    >
      {/* Icon */}
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="w-12 h-12 object-contain"
      />
      {/* Text */}
      <div
        className={`text-xl md:text-2xl font-bold flex-1 text-center ${textColor}`}
      >
        {text}
      </div>
    </a>
  );
}

export default ActionLink;
