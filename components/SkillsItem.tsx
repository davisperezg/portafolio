import Image from "next/image";

interface Props {
  url: string;
  title: string;
  width?: number;
  height?: number;
}

const SkillsItem = ({ url, title, width = 50, height = 50 }: Props) => {
  return (
    <div className="flex flex-col justify-between w-auto h-auto">
      <div className="flex justify-center">
        <Image
          className="object-cover w-[50px] h-[50px]"
          width={width}
          height={height}
          src={url}
          alt={title}
        />
      </div>
      <div className="flex justify-center">
        <small className="font-semibold">{title}</small>
      </div>
    </div>
  );
};

export default SkillsItem;
