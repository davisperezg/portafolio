import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ContentArticulo = ({ children }: Props) => {
  return (
    <section className="relative bg-white text-[14px] text-[#273043]/80 leading-relaxed">
      {children}
    </section>
  );
};

export default ContentArticulo;