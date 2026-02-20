import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";
import HeaderArticulo from "../../components/Articulo/HeaderArticulo";
import { Separador, SeparatorCSS } from "../../components/Separador";
import ContentArticulo from "../../components/Articulo/ContentArticulo";

const Sistema = () => {
  return (
    <Container>
      <Head>
        <title>Sistema GPS Kemay Technology | Davis Pérez</title>
        <meta name="description" content="Sistema web Full Stack para gestión de clientes GPS con planes ANUAL y MENSUAL. React, NestJS, GraphQL y MongoDB." />
        <meta name="author" content="Davis Pérez" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://davisperez.com/kemay/sistema/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="es_PE" />
        <meta property="og:url" content="https://davisperez.com/kemay/sistema/" />
        <meta property="og:site_name" content="Davis Pérez - Portafolio" />
        <meta property="og:title" content="Sistema GPS Kemay Technology | Davis Pérez" />
        <meta property="og:description" content="Sistema web Full Stack para gestión de clientes GPS con planes ANUAL y MENSUAL. React, NestJS, GraphQL y MongoDB." />
        <meta property="og:image" content="https://i.ibb.co/r5DBxVz/image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sistema GPS Kemay Technology | Davis Pérez" />
        <meta name="twitter:description" content="Sistema web Full Stack para gestión de clientes GPS con planes ANUAL y MENSUAL. React, NestJS, GraphQL y MongoDB." />
        <meta name="twitter:image" content="https://i.ibb.co/r5DBxVz/image.png" />
      </Head>
      <article>
        <HeaderArticulo>
          Sistema de gestión y control de clientes con GPS
        </HeaderArticulo>
        <figure>
          <Image
            src="/assets/img/proyectos/appkemay.png"
            width={700}
            height={500}
            alt="App Kemay"
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
              <li>JavaScript</li>
              <li>TypesScript</li>
              <li>React</li>
              <li>MaterialUI</li>
              <li>Nodejs</li>
              <li>Nestjs</li>
              <li>Express</li>
              <li>Graphql</li>
              <li>MongoDB</li>
            </ul>
            <p>
              La empresa Kemay Technology que brinda{" "}
              <strong>servicio e instalación de GPS</strong> solicitaba tener el
              control de sus clientes en base a la fecha de vencimiento por
              planes que tiene con sus clientes contratados. Los planes más
              usados son <strong>ANUAL, MENSUAL</strong>. Tambien querian
              mantener la informacion del cliente, consulta de las
              instalaciones, renovaciones, vencidos y un historial de
              renovaciones x cliente segun sus planes.
            </p>
            <p>
              El sistema detecta los clientes que estan{" "}
              <strong>ACTIVOS, VENCIDOS y POR VENCER</strong>(en un plazo de 7
              días). Optimizando asi el papeleo que hacian antes por file. Este
              proceso les facilitó mucho porque los{" "}
              <strong>&apos;POR VENCER&apos;</strong> son clientes a quienes se
              les llama para advertirle que su servicio va a caducar y asi
              anticipando la renovación para la empresa.
            </p>

            <SeparatorCSS />
            <p>
              <strong>Servicio adicional:</strong> Creación y configuración de
              correos coorporativo en base a su dominio.
            </p>
            <strong>
              Para la alta del proyecto utilice las siguientes herramientas:
            </strong>
            <ul>
              <li>Namecheap.</li>
              <li>Buzon de namecheap(correos coorporativos).</li>
              <li>Droplet en digitalocean.</li>
              <li>
                Configuración en droplet(una de ellas instalar y configurar pm2
                para las apps.)
              </li>
            </ul>
            <SeparatorCSS />
            <p>
              <strong>Repositorio frontend</strong>:{" "}
              <a
                href="https://github.com/davisperezg/frontend-kemaytechnology"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://github.com/davisperezg/frontend-kemaytechnology
              </a>
            </p>
            <p>
              <strong>Repositorio backend:</strong>{" "}
              <a
                href="https://github.com/davisperezg/api-ktech"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://github.com/davisperezg/api-ktech
              </a>
            </p>
            <p>Adjunto imagenes del proyecto.</p>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/dashboard.png"
                alt="Dashboard"
              />
              <figcaption>Dashboard</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/clientes.png"
                alt="Clientes"
              />
              <figcaption>
                Listado de clientes + editar cliente(seleccionar para editar) +
                elimina cliente(solo cambia de estado)
              </figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/registro_clientes_api_dniruc.png"
                alt="Registro de clientes"
              />
              <figcaption>
                Crear cliente + uso de api externa para obtener dni o ruc
              </figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/dispositivos.png"
                alt="Dispositivos"
              />
              <figcaption>
                Listado de dispositivos + editar dispositivos(seleccionar para
                editar) + elimina dispositivos(solo cambia de estado)
              </figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/registro_dispositivo.png"
                alt="Registro de Dispositivos"
              />
              <figcaption>Crear dispositivos</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/planes.png"
                alt="Planes"
              />
              <figcaption>
                Listado de planes + editar planes(seleccionar para editar) +
                elimina planes(solo cambia de estado)
              </figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/registro_planes.png"
                alt="Planes"
              />
              <figcaption>Crear Planes</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/vehiculos.png"
                alt="Vehículos"
              />
              <figcaption>
                Listado de vehículos + editar vehículos, renovar, obtener
                historial(seleccionar para editar) + elimina vehículos(solo
                cambia de estado)
              </figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/crear_vehiculos.png"
                alt="Crear Vehículos"
              />
              <figcaption>Crear Vehículos</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/renovar_vencidos.png"
                alt="Renovación"
              />
              <figcaption>Crear o ver renovación</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/historial_renovaciones.png"
                alt="Historial"
              />
              <figcaption>Historial renovación</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/c_instalaciones.png"
                alt="Consulta de instalaciones"
              />
              <figcaption>Consulta de instalaciones</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/c_renovaciones.png"
                alt="Consulta de renovaciones"
              />
              <figcaption>Consulta de renovaciones</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/kemay/c_vencidos.png"
                alt="Consulta de vencidos"
              />
              <figcaption>Consulta de vencidos</figcaption>
            </figure>
          </div>
        </ContentArticulo>
      </article>
    </Container>
  );
};

export default Sistema;
