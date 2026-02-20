import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="justify-center items-center w-full flex flex-[0_1_105px] sm:bg-white bg-[#0A0B0C]">
      <Container className="flex items-center">
        <div className="sm:text-black text-white flex flex-col sm:flex-row sm:gap-0 sm:mt-[20px] items-center  sm:justify-between text-[13px] gap-[10px] w-full">
          <section className="sm:text-[#222D39] text-white">
            <Link href="/" className="hover:text-[#1759A6]">
              Davis Pérez
            </Link>{" "}
            © 2026
          </section>
          <nav className="flex relative">
            <a
              href="mailto:davisperezg@gmail.com"
              className="hover:text-[#1759A6] relative"
            >
              Envíame un correo
            </a>
            <a
              href="https://github.com/davisperezg"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1759A6] before:content-[''] before:bg-white before:absolute before:block before:w-[2px] before:h-[2px] sm:before:bg-[#222D39] before:rounded-[100%] before:top-[8px] before:left-[-11px] ml-[20px] relative"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/davisperezg"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1759A6] before:content-[''] before:absolute before:block before:w-[2px] before:h-[2px]
              before:bg-white sm:before:bg-[#222D39] before:rounded-[100%] before:top-[8px] before:left-[-11px] ml-[20px] relative"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
