import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        `
        inline-block
        px-6 py-3
        text-base
        font-medium
        leading-6
        text-center
        text-cyan-900
        transition
        duration-200
        ease-in-out
        bg-cyan-100
        cursor-pointer
        border
        border-transparent
        rounded-md
        hover:bg-neutral-400
      `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
