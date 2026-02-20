import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/Container";
import HeaderArticulo from "../../components/Articulo/HeaderArticulo";
import { Separador, SeparatorCSS } from "../../components/Separador";
import ContentArticulo from "../../components/Articulo/ContentArticulo";

const Sintraunna = () => {
  return (
    <Container>
      <Head>
        <title>Sistema SINTRAUNNA - Control de Aportantes | Davis Pérez</title>
        <meta name="description" content="Sistema web para la asociación de sindicatos SINTRAUNNA: control de aportantes, egresos y reportes. React, NestJS, MongoDB." />
        <meta name="author" content="Davis Pérez" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://davisperez.com/apps/sintraunna/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="es_PE" />
        <meta property="og:url" content="https://davisperez.com/apps/sintraunna/" />
        <meta property="og:site_name" content="Davis Pérez - Portafolio" />
        <meta property="og:title" content="Sistema SINTRAUNNA - Control de Aportantes | Davis Pérez" />
        <meta property="og:description" content="Sistema web para la asociación de sindicatos SINTRAUNNA: control de aportantes, egresos y reportes. React, NestJS, MongoDB." />
        <meta property="og:image" content="https://i.ibb.co/r5DBxVz/image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sistema SINTRAUNNA - Control de Aportantes | Davis Pérez" />
        <meta name="twitter:description" content="Sistema web para la asociación de sindicatos SINTRAUNNA: control de aportantes, egresos y reportes. React, NestJS, MongoDB." />
        <meta name="twitter:image" content="https://i.ibb.co/r5DBxVz/image.png" />
      </Head>
      <article>
        <HeaderArticulo>
          Sistema de control para los aportantes de SINTRAUNNA
        </HeaderArticulo>
        <figure>
          <Image
            src="/assets/img/proyectos/sintraunna.png"
            width={700}
            height={500}
            alt="Sintraunna"
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
              <li>MaterialUI</li>
              <li>Nodejs</li>
              <li>Nestjs</li>
              <li>Express</li>
              <li>Mongodb</li>
            </ul>
            <p>
              La asociación de sindicatos SINTRAUNNA querian tener un control
              sobre las personas que aportan y las que no, controlar sus egresos
              y asi tener reporte detallado de cuanto esta sobrando en caja de
              secretaria. El la parte backend del sistema tiene un log para
              saber el movimiento que pueda hacer el usuario por ejemplo que
              cosa modificó, eliminó o ingresó + un historial para alguna
              auditoria a futuro.
            </p>
            <p>
              Para mi facilidad agregé la parte backend del sistema{" "}
              <Link
                href="/apps/rpumv2"
                className="underline hover:text-[#1759A6]"
              >
                <strong>RPUM</strong>
              </Link>
              (Roles, Permisos, Usuarios, Modulos) y asi poder enfocarme en
              solamente los requerimientos del cliente. El sistema RPUM es un
              sistema creado por mi, que se basa en el control de permisos x
              roles(esto en la v1). En la v2 se adicionó el control de permisos
              x roles y x usuarios como tambien otras opciones más. Actualmente
              el sistema de sintraunna cuenta con RPUM v2.
            </p>

            <SeparatorCSS />
            <p>
              <strong>
                Para la alta del proyecto utilice las siguientes herramientas
              </strong>
              :
            </p>
            <ul>
              <li>Namecheap.</li>
              <li>Droplet en digitalocean.</li>
              <li>
                Configuración en droplet(una de ellas instalar y configurar pm2
                para las apps.)
              </li>
            </ul>
            <SeparatorCSS />
            <p>
              <strong>Repositorio frontend:</strong>{" "}
              <a
                href="https://github.com/davisperezg/frontend-sintraunna"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://github.com/davisperezg/frontend-sintraunna
              </a>
            </p>
            <p>
              <strong>Repositorio backend:</strong>{" "}
              <a
                href="https://github.com/davisperezg/backend_sintraunna"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://github.com/davisperezg/backend_sintraunna
              </a>
            </p>
            <p>Adjunto imágenes del proyecto</p>
            <p>Algunos datos de las capturas estan ocultos por privacidad</p>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/sintraunna/ss_sintraunna_adm.png"
                alt="Administración de sistema"
              />
              <figcaption>Administración de sistema</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/sintraunna/ss_sintraunna_modulosdis.png"
                alt="Modulos principales"
              />
              <figcaption>Modulos principales</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/sintraunna/ss_sintraunna_admmod.png"
                alt="Administración de sistema"
              />
              <figcaption>
                Menus disponibles del modulo administración
              </figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/sintraunna/afiliados_lista.png"
                alt="Lista de afiliados"
              />
              <figcaption>Lista de afiliados</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/sintraunna/consulta_general.png"
                alt="Consulta de generales"
              />
              <figcaption>Consulta de generales</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/sintraunna/consulta_xpagos.png"
                alt="Consulta x pagos"
              />
              <figcaption>Consulta x pagos</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/sintraunna/egresos.png"
                alt="Egresos"
              />
              <figcaption>Egresos</figcaption>
            </figure>
          </div>
        </ContentArticulo>
      </article>
    </Container>
  );
};

export default Sintraunna;
