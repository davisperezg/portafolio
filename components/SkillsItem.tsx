import Image from "next/image";

interface Props {
  url: string;
  title: string;
  width?: number;
  height?: number;
}

const SkillsItem = ({ url, title, width = 40, height = 40 }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 py-4 px-2 rounded border border-[#eaeff1] hover:border-[#273043]/30 hover:shadow-sm transition-all duration-200">
      <div className="flex items-center justify-center h-[40px]">
        <Image
          className="object-contain max-h-[40px] w-auto min-h-[40px]"
          width={width}
          height={height}
          src={url}
          alt={title}
        />
      </div>
      <span className="text-[11px] font-medium text-[#273043]/70 text-center leading-tight">
        {title}
      </span>
    </div>
  );
};

export default SkillsItem;
