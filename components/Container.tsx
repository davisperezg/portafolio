import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className="p-[0_5vw] w-full">
      <div
        className={`${
          className ? className + " " : ""
        }sm:p-[0px] sm:max-w-[1040px] w-full ml-auto mr-auto`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
