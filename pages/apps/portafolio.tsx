import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/Container";
import HeaderArticulo from "../../components/Articulo/HeaderArticulo";
import { Separador, SeparatorCSS } from "../../components/Separador";
import ContentArticulo from "../../components/Articulo/ContentArticulo";

const Portafolio = () => {
  return (
    <Container>
      <Head>
        <title>Mi Portafolio | Davis Pérez - Desarrollador Web</title>
        <meta name="description" content="Diseño y desarrollo del portafolio personal de Davis Pérez con Next.js, React y TailwindCSS." />
        <meta name="author" content="Davis Pérez" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://davisperez.com/apps/portafolio/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="es_PE" />
        <meta property="og:url" content="https://davisperez.com/apps/portafolio/" />
        <meta property="og:site_name" content="Davis Pérez - Portafolio" />
        <meta property="og:title" content="Mi Portafolio | Davis Pérez - Desarrollador Web" />
        <meta property="og:description" content="Diseño y desarrollo del portafolio personal de Davis Pérez con Next.js, React y TailwindCSS." />
        <meta property="og:image" content="https://i.ibb.co/r5DBxVz/image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mi Portafolio | Davis Pérez - Desarrollador Web" />
        <meta name="twitter:description" content="Diseño y desarrollo del portafolio personal de Davis Pérez con Next.js, React y TailwindCSS." />
        <meta name="twitter:image" content="https://i.ibb.co/r5DBxVz/image.png" />
      </Head>
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
