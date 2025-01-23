import Link from "next/link";
import Container from "../components/Container";

const FourOhFour = () => {
  return (
    <>
      <Container className="mt-[30px] flex flex-grow flex-col">
        <div className="flex flex-row">
          <Link
            href="/"
            className="text-[1.6rem] mt-5 text-[#1759A6] underline"
          >
            Regresar a inicio
          </Link>
        </div>
        <div className="flex flex-grow justify-center items-center select-none">
          <h1 className="text-[2.4rem] select-text">
            404 - Página no encontrada
          </h1>
        </div>
      </Container>
    </>
  );
};

export default FourOhFour;
