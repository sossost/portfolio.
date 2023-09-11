interface BackdropProps {
  onClick: () => void;
}

const Backdrop = ({ onClick }: BackdropProps) => {
  return (
    <div
      className="
         fixed
         inset-0 
         w-full 
         h-full 
         bg-black 
         opacity-50 
         z-40 
         cursor-pointer
         "
      onClick={onClick}
    />
  );
};

export default Backdrop;
