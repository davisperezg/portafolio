import Image from "next/image";
import Link from "next/link";
import Container from "../../components/Container";
import HeaderArticulo from "../../components/Articulo/HeaderArticulo";
import { Separador, SeparatorCSS } from "../../components/Separador";
import ContentArticulo from "../../components/Articulo/ContentArticulo";

const Comercial = () => {
  return (
    <Container>
      <article>
        <HeaderArticulo>
          Sistema control de ventas y productos - Comercial SARAI
        </HeaderArticulo>
        <figure>
          <Image
            src="/assets/img/proyectos/comercial_sarai.png"
            width={700}
            height={500}
            alt="Comercial SARAI"
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
              <li>Bootstrap</li>
              <li>Nodejs</li>
              <li>Nestjs</li>
              <li>Express</li>
              <li>Mongodb</li>
            </ul>
            <p>
              Uno de mis clientes como freelance es COMERCIAL SARAI una tienda
              de abarrotes, ellos deseaban generar boleta o ticket electrónico
              solo de forma local, controlar sus productos, consultas y reportes
              de las ventas, productos vencidos o cantidad de stock y etc...
              tambien tiene la opción de multisede es decir que los productos
              registrados o las ventas son independientemente x sede.
            </p>
            <p>
              En la de registro de clientes y usuarios use una{" "}
              <a
                href="https://apis.net.pe/"
                target="_blank"
                rel="noreferrer"
                className="underline cursor-pointer"
              >
                API externa
              </a>{" "}
              para la consulta x DNI o RUC.
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
              el sistema de <strong>SARAI</strong> cuenta con RPUM v1.
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
                href="https://github.com/davisperezg/frontend-facturacion-sisvilla"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://github.com/davisperezg/frontend-facturacion-sisvilla
              </a>
            </p>
            <p>
              <strong>Repositorio backend:</strong>{" "}
              <a
                href="https://github.com/davisperezg/backend-facturacion"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://github.com/davisperezg/backend-facturacion
              </a>
            </p>
            <p>Las imágenes se encuentran en el repositorio frontend</p>
          </div>
        </ContentArticulo>
      </article>
    </Container>
  );
};

export default Comercial;
