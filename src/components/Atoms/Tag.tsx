const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-3 py-1 rounded-full bg-gray-500 w-fit">
      <p className="text-xs">{children}</p>
    </div>
  );
};

export default Tag;
