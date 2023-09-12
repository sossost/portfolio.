interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Section;
