import Head from "next/head";
import Container from "../components/Container";
import { useState } from "react";
import DropdownCV from "../components/DropdownCV";
import Image from "next/image";
import SkillsItem from "../components/SkillsItem";
import ProyectoItem from "../components/ProyectoItem";
import { Separador } from "../components/Separador";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Davis Pérez Guzmán - Desarrollador Web</title>
        <meta name="description" content="Mi portafolio - Davis Perez Guzman" />
        <meta property="og:title" content="Davis Pérez Guzmán" />
        <meta
          property="og:description"
          content="Actualmente estoy en busqueda de una oportunidad laboral,
          estuve como desarrollador freelance trabajando de Full Stack
          JavaScript momentaneamente doy mantenimiento e implementando
          nuevos requerimientos de mis clientes. A pesar de que tengo +2
          años como freelance aun me siento como un junior porque
          entiendo que siempre nos encontramos en desarrollo y que mejor
          que aprenderlo de los demás. Me enseñaron como base JAVA, SPRING, MAVEN y de forma
          autodidacta me llamó mucho la atención JAVASCRIPT. Encontré
          una libreria llamada REACTJS y me encantó 💖 por ello todos
          mis proyectos estan desarrollado en dicho lenguaje. Busco una
          empresa para explotar mis conocimientos ya que siento que
          estoy para más!🚀. Me especializo en la creación de aplicaciones Front End que se
          conectan con API y otras tecnologías de Back End. Me apasiona
          aprender nuevas tecnologías y entiendo que hay más de una
          manera de realizar una tarea. Aprendo rápido y puedo aprender nuevas pilas tecnológicas
          según sea necesario.🔨"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/r5DBxVz/image.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative w-full h-[450px] flex justify-center items-center text-[64px] bg-[url(https://static.ghost.org/v3.0.0/images/publication-cover.png)] bg-[#0a0b0c] bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:z-10 before:content-[''] before:block before:bg-[rgba(0,0,0,.18)] after:content-[''] after:absolute after:top-0 after:right-0 after:left-0 after:bottom-auto after:z-10 after:h-[140px] after:bg-[linear-gradient(rgba(0,0,0,.15),transparent)] after:content-[''] after:block
          "
      >
        <div className="sm:h-[300px] h-[350px] z-[11] flex flex-col w-[650px] justify-center relative">
          <h1 className="sm:leading-[9rem] leading-[64px] text-[#F2F2F2] font-extrabold text-[55px] text-center">
            Desarrollador Web
          </h1>
          <span className="sm:p-[0px] sm:text-[16px] text-[14px] p-[30px]  text-[#F2F2F2] text-center">
            Centrado en la creación de aplicaciones web. Apto para aprender
            nuevas pilas tecnológicas según sea necesario.
          </span>

          <DropdownCV isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      <Container>
        <div id="tecnologias" className="mb-[30px] mt-[30px] scroll-my-[27ex]">
          <div className="bg-white flex flex-col">
            <div className="mb-[50px]">
              <h1 className="text-[15px] font-semibold uppercase">
                Tecnologías con las que estuve trabajando 🚧
              </h1>
              <div className="sm:grid-cols-[repeat(5,_1fr)] grid grid-cols-[repeat(3,_1fr)] gap-[30px] mt-[50px]">
                <SkillsItem url="/assets/icons/html.webp" title="HTML5" />
                <SkillsItem url="/assets/icons/css.png" title="CSS3" />
                <SkillsItem
                  url="/assets/icons/wordpress.png"
                  title="Wordpress"
                />
                <SkillsItem
                  url="/assets/icons/javascript.webp"
                  title="JavaScript"
                />
                <SkillsItem
                  url="/assets/icons/typescript.png"
                  title="TypeScript"
                />
                <SkillsItem url="/assets/icons/react.webp" title="Reactjs" />
                <SkillsItem
                  url="/assets/icons/materialui.png"
                  title="Material UI"
                />
                <SkillsItem
                  url="/assets/icons/tailwind.webp"
                  title="Tailwind"
                />
                <SkillsItem
                  url="/assets/icons/bootstrap.png"
                  title="Bootstrap"
                />
                <SkillsItem url="/assets/icons/git.png" title="Git" />
                <SkillsItem url="/assets/icons/node.webp" title="Nodejs" />
                <SkillsItem url="/assets/icons/nestjs.svg" title="Nestjs" />
                <SkillsItem
                  url="/assets/icons/expressjs.png"
                  title="ExpressJs"
                />
                <SkillsItem url="/assets/icons/graphql.png" title="Graphql" />
                <SkillsItem url="/assets/icons/mongodb.png" title="MongoDB" />
                <SkillsItem url="/assets/icons/mysql.png" title="MySQL" />
              </div>
            </div>
            <div className="mb-[50px]">
              <h1 className="text-[15px] font-semibold uppercase">
                Tecnologías que estoy aprendiendo... 🤓
              </h1>
              <div className="sm:grid-cols-[repeat(5,_1fr)] grid grid-cols-[repeat(3,_1fr)] gap-[30px] mt-[50px]">
                <SkillsItem url="/assets/icons/nextjs.webp" title="Nextjs" />
                <SkillsItem url="/assets/icons/angular.webp" title="Angular" />
                <SkillsItem url="/assets/icons/netcore.svg" title="NetCore" />
              </div>
            </div>
            <div className="">
              <h1 className="text-[15px] font-semibold uppercase">
                Tecnologías que me gustaria aprender 💻
              </h1>
              <div className="sm:grid-cols-[repeat(5,_1fr)] grid grid-cols-[repeat(3,_1fr)] gap-[30px] mt-[50px]">
                <SkillsItem url="/assets/icons/python.png" title="Python" />
                <SkillsItem url="/assets/icons/Laravel.svg" title="Laravel" />
                <SkillsItem url="/assets/icons/PHP.svg" title="Php" />
              </div>
            </div>
          </div>
        </div>

        <Separador />

        <div id="proyectos" className="mb-[30px] mt-[30px] scroll-my-[27ex]">
          <div className="bg-white flex flex-col">
            <h1 className="text-[15px] font-semibold uppercase">Proyectos</h1>
            <div className="sm:grid-cols-[repeat(3,_1fr)] grid grid-cols-[repeat(1,_1fr)] gap-[30px] mt-[50px]">
              <ProyectoItem
                urlContent="/kemay/sistema"
                urlGithub="https://github.com/davisperezg/frontend-kemaytechnology"
                url="/assets/img/proyectos/appkemay.png"
                titleImage="App Kemay"
                titleBackground="Desarrollo de sistema web para Kemay GPS"
              >
                <div className="flex flex-row mt-[20px]">
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/html.webp"
                    alt="HTML5"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/css.png"
                    alt="CSS3"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/javascript.webp"
                    alt="Javascript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/typescript.png"
                    alt="TypeScript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/react.webp"
                    alt="Reactjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/materialui.png"
                    alt="Material UI"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/node.webp"
                    alt="Node"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/nestjs.svg"
                    alt="Nestjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/expressjs.png"
                    alt="Expressjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/graphql.png"
                    alt="Graphql"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/mongodb.png"
                    alt="Mongodb"
                  />
                </div>
              </ProyectoItem>

              <ProyectoItem
                urlContent="/kemay/gps"
                urlGithub="https://github.com/davisperezg/frontend-kemaytechnology"
                url="/assets/img/proyectos/page_kemaygps.png"
                titleImage="KemayGPS"
                titleBackground="Diseño de página para Kemay GPS"
              >
                <div className="flex flex-row mt-[20px]">
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/html.webp"
                    alt="HTML5"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/css.png"
                    alt="CSS3"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/javascript.webp"
                    alt="Javascript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/wordpress.png"
                    alt="Wordpress"
                  />
                </div>
              </ProyectoItem>

              <ProyectoItem
                urlContent="/kemay/tecnologia"
                url="/assets/img/proyectos/page_kemaytech.png"
                titleImage="KemayTech"
                titleBackground="Diseño de página para Kemay Technology"
              >
                <div className="flex flex-row mt-[20px]">
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/html.webp"
                    alt="HTML5"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/css.png"
                    alt="CSS3"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/javascript.webp"
                    alt="Javascript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/typescript.png"
                    alt="TypeScript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/react.webp"
                    alt="Javascript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/nextjs.webp"
                    alt="Nextjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/node.webp"
                    alt="Nodejs"
                  />
                </div>
              </ProyectoItem>

              <ProyectoItem
                urlContent="/campeonmundial"
                urlGithub="https://github.com/davisperezg/web-intranet-campeon-mundial"
                url="/assets/img/proyectos/campeonmundial.png"
                titleImage="Campeon Mundial"
                titleBackground="Desarollo de sistema web para Campeon Mundial Escuela de Conductores"
              >
                <div className="flex flex-row mt-[20px]">
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/html.webp"
                    alt="HTML5"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/css.png"
                    alt="CSS3"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/javascript.webp"
                    alt="Javascript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/typescript.png"
                    alt="TypeScript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/react.webp"
                    alt="ReactJs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/bootstrap.png"
                    alt="Bootstrap"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/node.webp"
                    alt="Nodejs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/expressjs.png"
                    alt="Expressjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/mongodb.png"
                    alt="Mongodb"
                  />
                </div>
              </ProyectoItem>

              <ProyectoItem
                urlContent="/colaboraciones/blogs-upc"
                url="/assets/img/proyectos/blog_upc.png"
                titleImage="Blog UPC"
                titleBackground="Colaboración para Blogs UPC"
              >
                <div className="flex flex-row mt-[20px]">
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/html.webp"
                    alt="HTML5"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/css.png"
                    alt="CSS3"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/javascript.webp"
                    alt="Javascript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/wordpress.png"
                    alt="Wordpress"
                  />
                </div>
              </ProyectoItem>

              <ProyectoItem
                urlContent="/apps/comercial-sarai"
                urlGithub="https://github.com/davisperezg/frontend-facturacion-sisvilla"
                url="/assets/img/proyectos/comercial_sarai.png"
                titleImage="Comercial SARAI"
                titleBackground="Desarollo de sistema web para Comercial SARAI"
              >
                <div className="flex flex-row mt-[20px]">
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/html.webp"
                    alt="HTML5"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/css.png"
                    alt="CSS3"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/javascript.webp"
                    alt="Javascript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/typescript.png"
                    alt="TypeScript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/react.webp"
                    alt="Reactjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/bootstrap.png"
                    alt="Bootstrap"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/node.webp"
                    alt="Nodejs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/nestjs.svg"
                    alt="Nestjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/expressjs.png"
                    alt="Expressjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/mongodb.png"
                    alt="Mongodb"
                  />
                </div>
              </ProyectoItem>

              <ProyectoItem
                urlContent="/apps/sintraunna"
                urlGithub="https://github.com/davisperezg/frontend-sintraunna"
                url="/assets/img/proyectos/sintraunna.png"
                titleImage="Sintraunna"
                titleBackground="Desarollo de sistema web para Asociación de sindicatos - SINTRAUNNA"
              >
                <div className="flex flex-row mt-[20px]">
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/html.webp"
                    alt="HTML5"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/css.png"
                    alt="CSS3"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/javascript.webp"
                    alt="Javascript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/typescript.png"
                    alt="TypeScript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/react.webp"
                    alt="Reactjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/materialui.png"
                    alt="Material UI"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/node.webp"
                    alt="Nodejs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/nestjs.svg"
                    alt="Nestjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/expressjs.png"
                    alt="Expressjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/mongodb.png"
                    alt="Mongodb"
                  />
                </div>
              </ProyectoItem>

              <ProyectoItem
                urlContent="/apps/rpumv2"
                urlGithub="https://github.com/davisperezg/backend-adm-rpum"
                url="/assets/img/proyectos/rpumv2/ss_rpumv2_modulosdis.png"
                titleImage="RPUMv2"
                titleBackground="Desarollo de sistema web RPUM"
              >
                <div className="flex flex-row mt-[20px]">
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/html.webp"
                    alt="HTML5"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/css.png"
                    alt="CSS3"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/javascript.webp"
                    alt="Javascript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/typescript.png"
                    alt="TypeScript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/react.webp"
                    alt="Reactjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/materialui.png"
                    alt="Material UI"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/node.webp"
                    alt="Nodejs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/nestjs.svg"
                    alt="Nestjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/expressjs.png"
                    alt="Expressjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/mongodb.png"
                    alt="Mongodb"
                  />
                </div>
              </ProyectoItem>

              <ProyectoItem
                urlContent="/apps/portafolio"
                urlGithub="https://github.com/davisperezg/portafolio"
                url="/assets/img/proyectos/portal_portafolio.png"
                titleImage="Mi portafolio"
                titleBackground="DISEÑO DE PÁGINA PARA MI PORTAFOLIO"
              >
                <div className="flex flex-row mt-[20px]">
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/html.webp"
                    alt="HTML5"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/css.png"
                    alt="CSS3"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/javascript.webp"
                    alt="Javascript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/typescript.png"
                    alt="TypeScript"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/react.webp"
                    alt="Reactjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/nextjs.webp"
                    alt="Nextjs"
                  />
                  <Image
                    width={25}
                    height={25}
                    src="/assets/icons/tailwind.webp"
                    alt="Tailwind"
                  />
                </div>
              </ProyectoItem>
            </div>
          </div>
        </div>

        <Separador />

        <div id="sobremi" className="mb-[30px] mt-[30px] scroll-my-[27ex]">
          <div className="bg-white flex flex-col">
            <h1 className="text-[15px] font-semibold uppercase">Sobre mi</h1>

            <div className="grid md:grid-cols-[3fr,_1fr] gap-[30px] mt-[50px]">
              <div className="flex flex-col">
                <h1 className="uppercase font-bold text-[28px]">
                  DAVIS PÉREZ GUZMÁN
                </h1>
                <p className="mb-4">
                  Actualmente estoy en busqueda de una oportunidad laboral,
                  estuve como desarrollador freelance trabajando de Full Stack
                  JavaScript momentaneamente doy mantenimiento e implementando
                  nuevos requerimientos de mis clientes. A pesar de que tengo +2
                  años como freelance aun me siento como un junior porque
                  entiendo que siempre nos encontramos en desarrollo y que mejor
                  que aprenderlo de los demás.
                </p>
                <p className="mb-4">
                  Me enseñaron como base JAVA, SPRING, MAVEN y de forma
                  autodidacta me llamó mucho la atención JAVASCRIPT. Encontré
                  una libreria llamada REACTJS y me encantó 💖 por ello todos
                  mis proyectos estan desarrollado en dicho lenguaje. Busco una
                  empresa para explotar mis conocimientos ya que siento que
                  estoy para más!🚀.
                </p>
                <p className="mb-4">
                  Me especializo en la creación de aplicaciones Front End que se
                  conectan con API y otras tecnologías de Back End. Me apasiona
                  aprender nuevas tecnologías y entiendo que hay más de una
                  manera de realizar una tarea.
                </p>
                <p className="mb-4">
                  Aprendo rápido y puedo aprender nuevas pilas tecnológicas
                  según sea necesario.🔨
                </p>
              </div>
              <div className="relative min-h-[450px]">
                <Image
                  className="grayscale"
                  src="/assets/img/profile/davisperezg2.jpg"
                  fill
                  alt="Mi Perfil"
                />
              </div>
            </div>
          </div>
        </div>

        <Separador />

        <div id="contacto" className="mb-[30px] mt-[30px] scroll-my-[27ex]">
          <div className="bg-white flex flex-col">
            <h1 className="text-[15px] font-semibold uppercase">Contacto</h1>

            <div className="flex flex-col gap-[30px] mt-[50px]">
              <h1 className="uppercase font-bold text-[28px]">
                PONERSE EN CONTACTO
              </h1>
              <p className="mb-4">
                Estoy disponible para puestos independientes o de tiempo
                completo. Contáctame y hablemos.
              </p>
              <div className="flex flex-row gap-5">
                <a
                  href="https://github.com/davisperezg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="invert-[1] object-cover"
                    width={25}
                    height={25}
                    src="/assets/img/github.svg"
                    alt="Github"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/davisperezg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="invert-[1] object-contain"
                    width={25}
                    height={25}
                    src="/assets/img/linkedin.svg"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  href="https://wa.link/zwvtjb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="object-contain"
                    width={25}
                    height={25}
                    src="/assets/img/whatsapp.svg"
                    alt="Whatsapp"
                  />
                </a>
                <a href="mailto:davisperezg@gmail.com">
                  <Image
                    className="object-contain"
                    width={25}
                    height={25}
                    src="/assets/img/email.svg"
                    alt="Email"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
