import Tag from "../Atoms/Tag";

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex gap-x-2 flex-wrap gap-y-2">
      {tags.map((tag, i) => (
        <Tag key={i}>{tag}</Tag>
      ))}
    </div>
  );
};

export default TagList;
