import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ContentArticulo = ({ children }: Props) => {
  return (
    <section className="sm:p-[60px_5vw_50px_5vw] relative m-[0_auto] min-h-[230px] text-[2rem] leading-[1.6em] bg-[#fff]">
      {children}
    </section>
  );
};

export default ContentArticulo;
