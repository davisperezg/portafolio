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
        <title>Página Web Kemay Technology | Davis Pérez</title>
        <meta name="description" content="Desarrollo de página web informativa para Kemay Technology (cámaras de seguridad y cercos eléctricos) con React, Next.js y Node.js." />
        <meta name="author" content="Davis Pérez" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://davisperez.com/kemay/tecnologia/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="es_PE" />
        <meta property="og:url" content="https://davisperez.com/kemay/tecnologia/" />
        <meta property="og:site_name" content="Davis Pérez - Portafolio" />
        <meta property="og:title" content="Página Web Kemay Technology | Davis Pérez" />
        <meta property="og:description" content="Desarrollo de página web informativa para Kemay Technology (cámaras de seguridad y cercos eléctricos) con React, Next.js y Node.js." />
        <meta property="og:image" content="https://i.ibb.co/r5DBxVz/image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Página Web Kemay Technology | Davis Pérez" />
        <meta name="twitter:description" content="Desarrollo de página web informativa para Kemay Technology con React, Next.js y Node.js." />
        <meta name="twitter:image" content="https://i.ibb.co/r5DBxVz/image.png" />
      </Head>
      <article>
        <HeaderArticulo>
          Desarrollo y diseño de pagína Kemay Technology
        </HeaderArticulo>
        <figure>
          <Image
            src="/assets/img/proyectos/page_kemaytech.png"
            width={700}
            height={500}
            alt="Kemay Technology"
          />
        </figure>
        <ContentArticulo>
          <div className="flex flex-col items-center text-[20px] leading-[32px]">
            <p>
              <strong>Herramientas utilizadas</strong>:
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Reactjs</li>
              <li>Nextjs</li>
              <li>Nodejs</li>
            </ul>
            <p>
              La empresa Kemay Technology que brinda{" "}
              <strong>
                servicio de venta e instalación de camaras de seguridad y cercos
                electricos
              </strong>{" "}
              solicitaba tener un pagína web informativa y tamien usarla como
              una alternativa más de venta.
            </p>
            <p>
              La página se creo desde un inicio para mostrar información sobre
              el servicio de GPS que luego se cambio para{" "}
              <a
                href="https://kemaygps.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                kemaygps
              </a>{" "}
              y en kemaytechnology mostrar data sobre servicio de venta e
              instalación de camaras de seguridad y cercos electricos pero este
              ultimo no se dio más.
            </p>
            <SeparatorCSS />
            <p>
              <strong>Repositorio:</strong>{" "}
              <a
                href="https://github.com/davisperezg/pagina-kemaytech"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://github.com/davisperezg/pagina-kemaytech
              </a>
            </p>
            <p>
              <strong>Pagina web:</strong>{" "}
              <a
                href="https://kemaytechnology.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://kemaytechnology.com/
              </a>
            </p>
            <p>Adjunto imagenes de la página</p>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemaytechnology/ss_kemaytechnology_inicio.png"
                alt="Inicio"
              />
              <figcaption>Inicio</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemaytechnology/ss_kemaytechnology_precios.png"
                alt="Precios"
              />
              <figcaption>Precios</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemaytechnology/ss_kemaytechnology_contacto.png"
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
