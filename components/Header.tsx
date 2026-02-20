import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <header className="z-[12] w-full h-[112px] bg-white overflow-visible fixed shadow-headerTop">
      <div className="border-b border-[#E9EAEB] border-solid h-[56px] flex justify-between">
        <div className="p-[18px_20px_17px_20px] h-full">
          <span className="font-extrabold text-[24px] leading-[16px] select-none text-[#273043]">
            <Link href="/">Davis Pérez</Link>
          </span>
        </div>
        <div className="flex flex-row">
          <MenuItem
            url="https://github.com/davisperezg"
            target="_blank"
            rel="noreferrer"
            className="border-l border-[#E9EAEB] border-solid"
          >
            <Image
              className="invert-[1] object-cover"
              width={25}
              height={25}
              src="/assets/img/github.svg"
              alt="Github"
            />
          </MenuItem>
          <MenuItem
            target="_blank"
            rel="noreferrer"
            url="https://www.linkedin.com/in/davisperezg"
          >
            <Image
              className="invert-[1] object-contain"
              width={25}
              height={25}
              src="/assets/img/linkedin.svg"
              alt="LinkedIn"
            />
          </MenuItem>
        </div>
      </div>
      <div className="flex h-[56px] flex-nowrap border-b border-[#E9EAEB] border-solid overflow-x-scroll md:overflow-hidden">
        <MenuItem typeLink url="/">
          INICIO
        </MenuItem>
        <MenuItem url="/#tecnologias">TECNOLOGÍAS</MenuItem>
        <MenuItem url="/#proyectos">PROYECTOS</MenuItem>
        <MenuItem url="/#sobremi">SOBRE MI</MenuItem>
        <MenuItem url="/#contacto">CONTACTO</MenuItem>
      </div>
    </header>
  );
};

export default Header;
