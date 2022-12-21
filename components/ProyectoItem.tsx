import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface Props {
  url: string;
  titleImage: string;
  children: ReactNode;
  titleBackground?: string;
  urlContent: string;
  urlGithub?: string;
}
//rgba(0 0 0 0.45)
const ProyectoItem = ({
  url,
  titleImage,
  children,
  titleBackground,
  urlContent,
  urlGithub,
}: Props) => {
  const [isHover, setHover] = useState(false);

  return (
    <div className="relative flex flex-col justify-between w-full  h-[200px] border-[#eaeff1] border-[1px] ">
      <div
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
        className="absolute text-white w-full h-full z-[2] bg-[#273043] flex flex-col hover:opacity-[1] opacity-[0] transition-all duration-[.5s]"
      >
        {isHover && (
          <>
            <div className="z-[3] flex flex-[1_1_100%] justify-center items-center">
              <div className="w-[250px] text-[18px] text-center font-bold uppercase">
                {titleBackground}
              </div>
            </div>
            <div className="flex flex-[0_1_100px] gap-5 realtive">
              <div className="absolute left-[50%] m-[0_0_0_-25px] flex gap-3">
                {urlGithub && (
                  <a
                    href={urlGithub}
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      width={20}
                      height={20}
                      src="/assets/img/github.svg"
                      alt="Github"
                    />
                  </a>
                )}
                <Link href={urlContent} className="cursor-pointer">
                  <i className="gg-info"></i>
                </Link>{" "}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="relative w-full h-full">
        <Image fill src={url} alt={titleImage} />
      </div>
      <div className="flex">{children}</div>
    </div>
  );
};

export default ProyectoItem;
