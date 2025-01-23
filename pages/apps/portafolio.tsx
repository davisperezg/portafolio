import Image from "next/image";
import Link from "next/link";
import Container from "../../components/Container";
import HeaderArticulo from "../../components/Articulo/HeaderArticulo";
import { Separador, SeparatorCSS } from "../../components/Separador";
import ContentArticulo from "../../components/Articulo/ContentArticulo";

const Portafolio = () => {
  return (
    <Container>
      <article>
        <HeaderArticulo>Diseño de pagina web - MI PORTAFOLIO</HeaderArticulo>
        <figure>
          <Image
            src="/assets/img/proyectos/portal_portafolio.png"
            width={700}
            height={500}
            alt="Mi portafolio"
          />
        </figure>
        <ContentArticulo>
          <div className="flex flex-col items-center text-[20px] leading-[32px]">
            <p>
              {" "}
              <strong>Herramientas utilizadas</strong>:
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Reactjs</li>
              <li>Nextjs</li>
              <li>TailwindCSS</li>
            </ul>
            <p>
              Mi portafolio es un lugar donde presentare mis proyectos, skills y
              un poco de sobre mi. Estoy mejorando mi cartera y haciendo
              proyectos personales.
            </p>
            <SeparatorCSS />
            <p>
              <strong>Repositorio frontend:</strong>{" "}
              <a
                href="https://github.com/davisperezg/portafolio"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://github.com/davisperezg/portafolio
              </a>
            </p>

            <p>Adjunto imagen de mi portafolio.</p>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/portafolio/ss_portafolio.png"
                alt="Mi portafolio"
              />
              <figcaption>Mi portafolio</figcaption>
            </figure>
          </div>
        </ContentArticulo>
      </article>
    </Container>
  );
};

export default Portafolio;
