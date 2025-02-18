import React from "react";
import ActionLink from "./ActionLink";

const actionLinks = [
  {
    text: "Join the Martian Crew!",
    bgColor: "bg-indigo-500",
    textColor: "text-white font-bold text-xl md:text-2xl",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/6fa0ed4202851ea2b315a9b76467f038848c45e40138bd59faebb15ae88821c0?apiKey=d8e705719ec941cca882091ae3698935&",
    href: "https://discord.gg/bc6xPzReuT",
  },
  {
    text: "Watch Epic Battles",
    bgColor: "bg-red-600",
    textColor: "text-white font-bold text-xl md:text-2xl",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/af4d30b35d16e7016a08d82e553943c5fd6306fc8aea70d266a5715bc9ed5ba3?apiKey=d8e705719ec941cca882091ae3698935&",
    href: "https://www.youtube.com/@Martiansgaminguild",
  },
  {
    text: "Follow Us on X",
    bgColor: "bg-neutral-300",
    textColor: "text-black font-bold text-xl md:text-2xl",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/e015838283f69c307f712b25f9d0279e2957da18fd40978a415ac54c50dc54fd?apiKey=d8e705719ec941cca882091ae3698935&",
    href: "https://x.com/martiansGGC",
  },
  {
    text: "Chat with us",
    bgColor: "bg-green-500",
    textColor: "text-white font-bold text-xl md:text-2xl",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/964569bf38ef1d300c0b7be677ebecb0055e70f06945441f56de80a981d30ed2?apiKey=d8e705719ec941cca882091ae3698935&",
    href: "https://chat.whatsapp.com/JMjhvYCW1iLIuCKANHFNB8",
  },
];

function MartianGuild() {
  return (
    <div className="flex flex-col items-center px-4 py-16 text-center bg-black text-white max-md:py-12">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/5fee169d5ef732d02b6c5b9469a9bf24c51ce259b638f476abafc8b2a85c2d31?apiKey=d8e705719ec941cca882091ae3698935&"
        alt="Martian Gaming Guild Logo"
        className="object-contain mx-auto w-[300px] max-md:w-[200px]"
      />
      <h1 className="mt-6 text-5xl font-bold tracking-wide max-md:text-3xl">
        MARTIANS GAMING GUILD
      </h1>
      <p className="mt-6 text-xl font-semibold tracking-widest max-md:text-lg">
        Unite, Play, Conquer
      </p>

      {/* Buttons Section */}
      <div className="w-full max-w-2xl mt-8 space-y-6">
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
