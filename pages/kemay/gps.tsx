import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";
import HeaderArticulo from "../../components/Articulo/HeaderArticulo";
import { Separador, SeparatorCSS } from "../../components/Separador";
import ContentArticulo from "../../components/Articulo/ContentArticulo";

const Tecnologia = () => {
  return (
    <Container>
      <Head>
        <title>Página Web Kemay GPS | Davis Pérez</title>
        <meta name="description" content="Diseño y desarrollo de página web informativa para Kemay GPS usando WordPress." />
        <meta name="author" content="Davis Pérez" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://davisperez.com/kemay/gps/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="es_PE" />
        <meta property="og:url" content="https://davisperez.com/kemay/gps/" />
        <meta property="og:site_name" content="Davis Pérez - Portafolio" />
        <meta property="og:title" content="Página Web Kemay GPS | Davis Pérez" />
        <meta property="og:description" content="Diseño y desarrollo de página web informativa para Kemay GPS usando WordPress." />
        <meta property="og:image" content="https://i.ibb.co/r5DBxVz/image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Página Web Kemay GPS | Davis Pérez" />
        <meta name="twitter:description" content="Diseño y desarrollo de página web informativa para Kemay GPS usando WordPress." />
        <meta name="twitter:image" content="https://i.ibb.co/r5DBxVz/image.png" />
      </Head>
      <article>
        <HeaderArticulo>Desarrollo y diseño de pagína Kemay GPS</HeaderArticulo>
        <figure>
          <Image
            src="/assets/img/proyectos/page_kemaygps.png"
            width={700}
            height={500}
            alt="Kemay GPS"
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
              <li>Wordpress</li>
            </ul>
            <p>
              La empresa Kemay Technology que brinda{" "}
              <strong>servicio e instalación de GPS</strong> solicitaba tener un
              pagína web informativa y tambien usarla como una alternativa más
              de venta ofreciendo un demo a los usuarios.
            </p>
            <SeparatorCSS />
            <p>
              <strong>Pagina web:</strong>{" "}
              <a
                href="https://kemaygps.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://kemaygps.com/
              </a>
            </p>
            <p>Adjunto imagenes de la página</p>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/gps/ss_kemaygps_inicio.png"
                alt="Inicio"
              />
              <figcaption>Inicio</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/gps/ss_kemaygps_precios.png"
                alt="Precios"
              />
              <figcaption>Precios</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/gps/ss_kemaygps_contacto.png"
                alt="Contacto"
              />
              <figcaption>Contacto</figcaption>
            </figure>
          </div>
        </ContentArticulo>
      </article>
    </Container>
  );
};

export default Tecnologia;
