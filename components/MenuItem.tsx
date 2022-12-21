import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  url: string;
  target?: string;
  rel?: string;
  typeLink?: boolean;
}

const MenuItem = ({
  children,
  className = "",
  url,
  target,
  rel,
  typeLink,
}: Props) => {
  return typeLink ? (
    <Link
      href={url}
      className={`${
        className && className + " "
      }select-none text-[15px] whitespace-nowrap cursor-pointer p-[18px_20px_17px_20px] leading-[16px] border-r border-[#E9EAEB] border-solid flex-[1_1_auto] hover:text-[#1759A6] hover:bg-[#F4FAFF]`}
    >
      {children}
    </Link>
  ) : (
    <a
      href={url}
      target={target}
      rel={rel}
      className={`${
        className && className + " "
      }select-none text-[15px] whitespace-nowrap cursor-pointer p-[18px_20px_17px_20px] leading-[16px] border-r border-[#E9EAEB] border-solid flex-[1_1_auto] hover:text-[#1759A6] hover:bg-[#F4FAFF]`}
    >
      {children}
    </a>
  );
};

export default MenuItem;
