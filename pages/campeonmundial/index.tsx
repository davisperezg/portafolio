import Image from "next/image";
import Container from "../../components/Container";
import HeaderArticulo from "../../components/Articulo/HeaderArticulo";
import { Separador, SeparatorCSS } from "../../components/Separador";
import ContentArticulo from "../../components/Articulo/ContentArticulo";

const CampenMundial = () => {
  return (
    <Container>
      <article>
        <HeaderArticulo>Sistema de control de tramites y alumno</HeaderArticulo>
        <figure>
          <Image
            src="/assets/img/proyectos/campeonmundial.png"
            width={700}
            height={500}
            alt="Campeon Mundial"
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
              <li>Bootstrap</li>
              <li>Nodejs</li>
              <li>Express</li>
              <li>Mongoose</li>
            </ul>
            <p>
              La Escuela de Conductores Campeón Mundial que brinda{" "}
              <strong>
                servicio de clases teoricas de manejo, certificado medico,
                clases de manejo y etc...
              </strong>{" "}
              solicitaba tener un sistema donde pueda obtener los tramites de
              cada alumno x cada sede y asi poder calcular las ganancias, deudas
              o perdidas de la escuela, generar citas a los alumnos, estado de
              los alumnos ejemplo: por si &quot;jaló o no&quot; el curso, subida
              de notas para los profesores, contenido audiovisual para los
              alumnos y ver la cantidad de clases manejo que obtuvo el alumno.
            </p>

            <SeparatorCSS />
            <p>
              <strong>Repositorio:</strong>{" "}
              <a
                href="https://github.com/davisperezg/web-intranet-campeon-mundial"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://github.com/davisperezg/web-intranet-campeon-mundial
              </a>
            </p>

            <p>Las imágenes del proyecto se encuentran en el repositorio</p>
          </div>
        </ContentArticulo>
      </article>
    </Container>
  );
};

export default CampenMundial;
