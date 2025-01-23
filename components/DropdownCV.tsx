import Link from "next/link";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

interface Props {
  setIsOpen: (val: boolean) => void;
  isOpen: boolean;
}

const DropdownCV = ({ setIsOpen, isOpen }: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const nodeRef = useRef(null);

  // Allow for outside click
  useEffect(() => {
    function handleOutsideClick(event: any) {
      if (!container.current?.contains(event.target)) {
        if (!isOpen) return;
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, container, setIsOpen]);

  // Allow to use the `esc` key
  useEffect(() => {
    function handleEscape(event: any) {
      if (!isOpen) return;

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isOpen, setIsOpen]);

  return (
    <div className="flex items-center justify-center absolute bottom-0 left-0 right-0 m-auto">
      <div ref={container} className="flex">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="hover:opacity-[1] transition-[opacity] duration-[.35s] opacity-[.8] select-none cursor-pointer bg-transparent border border-[#F2F2F2] rounded-[2px] text-[12px] text-[#F2F2F2] p-[5px_10px] before:content-['\25be'] before:float-right before:text-[#F2F2F2] w-[60px]"
        >
          CV
        </button>

        <CSSTransition
          in={isOpen}
          nodeRef={nodeRef}
          timeout={300}
          unmountOnExit
          classNames="fade"
        >
          <div ref={nodeRef}>
            <div className="block hover:opacity-[1] transition-[opacity] duration-[.35s] opacity-[.8] select-none bg-transparent border border-[#F2F2F2] rounded-tl-[2px] rounded-bl-[2px] absolute top-[35px] left-[-50px] right-0 m-auto w-[70px] cursor-pointer ">
              <div className="flex items-center">
                <a
                  className="flex"
                  href="https://upcedupe-my.sharepoint.com/:b:/g/personal/u202021265_upc_edu_pe/EdVY-MjMzV5Hh_Lc96_I6JcBT1crhhpFJelbzwGDubx6jw?e=opbu50"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="cursor-pointer text-[12px] text-[#F2F2F2] p-[5px_10px]">
                    Vista
                  </span>
                  <i className="top-[4px] gg-eye-alt text-white absolute right-[0.25rem]"></i>
                </a>
              </div>
            </div>

            <div className="block hover:opacity-[1] transition-[opacity] duration-[.35s] opacity-[.8] select-none bg-transparent border border-[#F2F2F2] rounded-tr-[2px] rounded-br-[2px] absolute top-[35px] left-[109px] right-0 m-auto w-[91px] items-center cursor-pointer">
              <div className="flex items-center">
                <a
                  className="flex"
                  download
                  href="/file/CV_DAVIS_KEINER_PEREZ_GUZMAN.pdf"
                >
                  <span className="text-[12px] text-[#F2F2F2] p-[5px_10px]">
                    Descargar
                  </span>
                  <i className="gg-software-download text-white absolute right-[0.30rem] top-[8px]"></i>
                </a>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default DropdownCV;
