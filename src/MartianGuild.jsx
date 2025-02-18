import React from "react";
import ActionLink from "./ActionLink";

const actionLinks = [
  {
    text: "Join the Martian Crew! 🚀 Chat & Conquer!",
    bgColor: "bg-indigo-500",
    textColor: "text-white",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/6fa0ed4202851ea2b315a9b76467f038848c45e40138bd59faebb15ae88821c0?apiKey=d8e705719ec941cca882091ae3698935&",
    href: "https://discord.gg/bc6xPzReuT",
  },
  {
    text: "Watch Epic Battles",
    bgColor: "bg-red-600",
    textColor: "text-white",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/af4d30b35d16e7016a08d82e553943c5fd6306fc8aea70d266a5715bc9ed5ba3?apiKey=d8e705719ec941cca882091ae3698935&",
    href: "https://www.youtube.com/@Martiansgaminguild",
  },
  {
    text: "Follow Us on X",
    bgColor: "bg-neutral-300",
    textColor: "text-black",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/e015838283f69c307f712b25f9d0279e2957da18fd40978a415ac54c50dc54fd?apiKey=d8e705719ec941cca882091ae3698935&",
    href: "https://x.com/martiansGGC",
  },
  {
    text: "Chat with us",
    bgColor: "bg-green-500",
    textColor: "text-white",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/964569bf38ef1d300c0b7be677ebecb0055e70f06945441f56de80a981d30ed2?apiKey=d8e705719ec941cca882091ae3698935&",
    href: "https://chat.whatsapp.com/JMjhvYCW1iLIuCKANHFNB8",
  },
];

function MartianGuild() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-4 py-24 text-3xl font-medium text-center text-black bg-black max-md:px-5">
      <div className="flex flex-col">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/5fee169d5ef732d02b6c5b9469a9bf24c51ce259b638f476abafc8b2a85c2d31?apiKey=d8e705719ec941cca882091ae3698935&"
          alt="Martian Gaming Guild Logo"
          className="object-contain mx-auto max-w-full aspect-[1.73] w-[367px]"
        />
        <h1 className="self-center mt-8 text-5xl font-bold text-white tracking-[2.5px] max-md:max-w-full max-md:text-4xl">
          MARTIANS GAMING GUILD
        </h1>
        <p className="self-center mt-10 text-2xl font-bold text-white tracking-widest max-md:mt-10">
          Unite, Play, Conquer
        </p>
        {actionLinks.map((link, index) => (
          <ActionLink
            key={index}
            text={link.text}
            bgColor={link.bgColor}
            textColor={link.textColor}
            iconSrc={link.iconSrc}
            href={link.href}
          />
        ))}
      </div>
    </div>
  );
}

export default MartianGuild;
