import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";
import HeaderArticulo from "../../components/Articulo/HeaderArticulo";
import { SeparatorCSS } from "../../components/Separador";
import ContentArticulo from "../../components/Articulo/ContentArticulo";

const BlogsUpc = () => {
  return (
    <Container>
      <Head>
        <title>Colaboración Blog UPC | Davis Pérez</title>
        <meta name="description" content="Colaboración en el Blog UPC: migración de artículos y script de imágenes por defecto con WordPress." />
        <meta name="author" content="Davis Pérez" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://davisperez.com/colaboraciones/blogs-upc/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="es_PE" />
        <meta property="og:url" content="https://davisperez.com/colaboraciones/blogs-upc/" />
        <meta property="og:site_name" content="Davis Pérez - Portafolio" />
        <meta property="og:title" content="Colaboración Blog UPC | Davis Pérez" />
        <meta property="og:description" content="Colaboración en el Blog UPC: migración de artículos y script de imágenes por defecto con WordPress." />
        <meta property="og:image" content="https://i.ibb.co/r5DBxVz/image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Colaboración Blog UPC | Davis Pérez" />
        <meta name="twitter:description" content="Colaboración en el Blog UPC: migración de artículos y script de imágenes por defecto con WordPress." />
        <meta name="twitter:image" content="https://i.ibb.co/r5DBxVz/image.png" />
      </Head>
      <article>
        <HeaderArticulo>Colaboración para Blogs UPC</HeaderArticulo>
        <figure>
          <Image
            src="/assets/img/proyectos/blog_upc.png"
            width={700}
            height={500}
            alt="Blogs UPC"
            // sizes="(max-width: 1170px) 1170px"xl:max-w-[1170px]
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
              Trabajé para la empresa CSTI Corp por un corto tiempo ya que
              estaban en etapas finales. En su cartera de clientes tienen a UPC,
              me derivaron a la página Blogs UPC que está hecho en{" "}
              <strong>wordpress</strong>. Mi apoyo fue transferir todos los
              artículos del blog a un blog de prueba, tambien implementé un
              script para que todos los artículos tengan una imagen por defecto.
            </p>
            <SeparatorCSS />
            <p>
              <strong>
                En la página se puede observar la imagen por defecto:
              </strong>{" "}
              <a
                href="https://blogs.upc.edu.pe/administracion-y-marketing/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://blogs.upc.edu.pe/administracion-y-marketing/
              </a>
            </p>
            <p>Adjunto imagen</p>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/blogs/ss_blog_upc.png"
                alt="Blogs UPC"
              />
              <figcaption>
                Las imágenes que dicen BLOGS UPC de cada artículo son las
                imágenes por defecto
              </figcaption>
            </figure>
          </div>
        </ContentArticulo>
      </article>
    </Container>
  );
};

export default BlogsUpc;
