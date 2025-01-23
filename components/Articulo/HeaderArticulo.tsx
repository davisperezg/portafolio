import { ReactNode } from "react";
import { Separador } from "../Separador";

interface Props {
  children: ReactNode;
}

const HeaderArticulo = ({ children }: Props) => {
  return (
    <header className="sm:p-[60px_5vw_50px_5vw] before:p-[20px_0_35px] m-[0_auto] relative">
      <div className="p-[20px_0_0px]">
        <h1 className="m-[0_0_.2em] text-[#0a0b0c] text-[4.2rem] font-[600] leading-[1.05em] mt-[0.2em]">
          {children}
        </h1>
        <Separador />
      </div>
    </header>
  );
};

export default HeaderArticulo;
