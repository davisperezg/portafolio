import Image from "next/image";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

interface Tech {
  src: string;
  alt: string;
}

interface Props {
  url: string;
  titleImage: string;
  techs?: Tech[];
  titleBackground?: string;
  urlContent: string;
  urlGithub?: string;
}

const ProyectoItem = ({
  url,
  titleImage,
  techs,
  titleBackground,
  urlContent,
  urlGithub,
}: Props) => {
  return (
    <div className="flex flex-col border border-[#eaeff1]">
      <div className="relative h-[180px] w-full">
        <div className="absolute inset-0 z-[2] bg-[#0a0b0c]/80 text-white flex flex-col opacity-0 hover:opacity-100 transition-all duration-500">
          <div className="flex flex-1 justify-center items-center px-6">
            <p className="text-[13px] text-center font-semibold uppercase leading-snug drop-shadow">
              {titleBackground}
            </p>
          </div>
          <div className="flex h-[44px] justify-center items-center gap-4 border-t border-white/20">
            {urlGithub && (
              <a
                href={urlGithub}
                className="hover:scale-110 transition-transform"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width={18}
                  height={18}
                  src="/assets/img/github.svg"
                  alt="Github"
                />
              </a>
            )}
            <Link
              href={urlContent}
              className="hover:scale-110 transition-transform"
            >
              <FaInfoCircle size={18} />
            </Link>
          </div>
        </div>
        <Image fill src={url} alt={titleImage} className="object-cover" />
      </div>
      {techs && techs.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 px-3 py-2 border-t border-[#eaeff1] bg-white">
          {techs.map((tech) => (
            <Image
              key={tech.alt}
              width={18}
              height={18}
              src={tech.src}
              alt={tech.alt}
              className="object-contain"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProyectoItem;