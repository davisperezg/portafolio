import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HeaderArticulo = ({ children }: Props) => {
  return (
    <header className="py-8">
      <h1 className="text-[22px] sm:text-[26px] font-bold text-[#273043] leading-snug">
        {children}
      </h1>
      <div className="mt-4 border-b border-[#eaeff1]" />
    </header>
  );
};

export default HeaderArticulo;