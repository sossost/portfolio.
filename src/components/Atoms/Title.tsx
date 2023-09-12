import { twMerge } from "tailwind-merge";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: TitleProps) => {
  return <h1 className={twMerge(`font-bold`, className)}>{children}</h1>;
};

export default Title;
