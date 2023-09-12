import Image from "next/image";
import React from "react";

const CloseButton = ({
  ...props
}: React.ButtonHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="
        cursor-pointer
        p-2 rounded-full
        border-2
        border-transparent
        hover:border-white
        hover:bg-white
        hover:bg-opacity-20
        transition-all
        duration-300
        ease-in-out 
      "
      {...props}
    >
      <Image src="/images/XIcon.png" alt="x_button" width={16} height={16} />
    </div>
  );
};

export default CloseButton;
