import { twMerge } from "tailwind-merge";

const Spacing = ({ className }: { className: string }) => {
  return <div className={twMerge(`flex-none `, className)} />;
};

export default Spacing;
