import Head from "next/head";
import Container from "../components/Container";
import { useState } from "react";
import DropdownCV from "../components/DropdownCV";
import Image from "next/image";
import SkillsItem from "../components/SkillsItem";
import ProyectoItem from "../components/ProyectoItem";
import { Separador } from "../components/Separador";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Davis Pérez - Desarrollador Web Full Stack JavaScript</title>
        <meta
          name="description"
          content="Portafolio de Davis Pérez, desarrollador web Full Stack JavaScript especializado en React, Node.js, NestJS y TypeScript. +2 años de experiencia freelance."
        />
        <meta name="author" content="Davis Pérez" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://davisperez.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_PE" />
        <meta property="og:url" content="https://davisperez.com/" />
        <meta property="og:site_name" content="Davis Pérez - Portafolio" />
        <meta
          property="og:title"
          content="Davis Pérez - Desarrollador Web Full Stack JavaScript"
        />
        <meta
          property="og:description"
          content="Portafolio de Davis Pérez, desarrollador web Full Stack JavaScript especializado en React, Node.js, NestJS y TypeScript. +2 años de experiencia freelance."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/r5DBxVz/image.png"
        />
        <meta
          property="og:image:alt"
          content="Davis Pérez - Desarrollador Web Full Stack"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Davis Pérez - Desarrollador Web Full Stack JavaScript"
        />
        <meta
          name="twitter:description"
          content="Portafolio de Davis Pérez, desarrollador web Full Stack JavaScript especializado en React, Node.js, NestJS y TypeScript."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/r5DBxVz/image.png"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Davis Pérez",
              url: "https://davisperez.com",
              jobTitle: "Desarrollador Web Full Stack",
              email: "davisperezg@gmail.com",
              knowsAbout: [
                "React",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "NestJS",
                "MongoDB",
                "GraphQL",
                "Next.js",
                "TailwindCSS",
              ],
              sameAs: [
                "https://github.com/davisperezg",
                "https://www.linkedin.com/in/davisperezg",
              ],
            }),
          }}
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
          <div className="bg-white flex flex-col gap-10">
            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#273043]/50 border-l-[3px] border-[#273043] pl-3">
                Tecnologías con las que estuve trabajando
              </h2>
              <div className="sm:grid-cols-[repeat(5,_1fr)] grid grid-cols-[repeat(4,_1fr)] gap-3 mt-6">
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
            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#273043]/50 border-l-[3px] border-[#273043] pl-3">
                Aprendiendo actualmente
              </h2>
              <div className="sm:grid-cols-[repeat(5,_1fr)] grid grid-cols-[repeat(4,_1fr)] gap-3 mt-6">
                <SkillsItem url="/assets/icons/nextjs.webp" title="Nextjs" />
                <SkillsItem url="/assets/icons/angular.webp" title="Angular" />
                <SkillsItem url="/assets/icons/netcore.svg" title="NetCore" />
              </div>
            </div>
            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#273043]/50 border-l-[3px] border-[#273043] pl-3">
                Me gustaría aprender
              </h2>
              <div className="sm:grid-cols-[repeat(5,_1fr)] grid grid-cols-[repeat(4,_1fr)] gap-3 mt-6">
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
            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#273043]/50 border-l-[3px] border-[#273043] pl-3">
              Proyectos
            </h2>
            <div className="sm:grid-cols-3 grid grid-cols-1 gap-5 mt-6">
              <ProyectoItem
                urlContent="/kemay/sistema"
                urlGithub="https://github.com/davisperezg/frontend-kemaytechnology"
                url="/assets/img/proyectos/appkemay.png"
                titleImage="App Kemay"
                titleBackground="Desarrollo de sistema web para Kemay GPS"
                techs={[
                  { src: "/assets/icons/html.webp", alt: "HTML5" },
                  { src: "/assets/icons/css.png", alt: "CSS3" },
                  { src: "/assets/icons/javascript.webp", alt: "Javascript" },
                  { src: "/assets/icons/typescript.png", alt: "TypeScript" },
                  { src: "/assets/icons/react.webp", alt: "Reactjs" },
                  { src: "/assets/icons/materialui.png", alt: "Material UI" },
                  { src: "/assets/icons/node.webp", alt: "Nodejs" },
                  { src: "/assets/icons/nestjs.svg", alt: "Nestjs" },
                  { src: "/assets/icons/expressjs.png", alt: "Expressjs" },
                  { src: "/assets/icons/graphql.png", alt: "Graphql" },
                  { src: "/assets/icons/mongodb.png", alt: "Mongodb" },
                ]}
              />

              <ProyectoItem
                urlContent="/kemay/tecnologia"
                url="/assets/img/proyectos/page_kemaytech.png"
                titleImage="KemayTech"
                titleBackground="Diseño de página para Kemay Technology (Rediseñando)"
                techs={[
                  { src: "/assets/icons/html.webp", alt: "HTML5" },
                  { src: "/assets/icons/css.png", alt: "CSS3" },
                  { src: "/assets/icons/javascript.webp", alt: "Javascript" },
                  { src: "/assets/icons/typescript.png", alt: "TypeScript" },
                  { src: "/assets/icons/react.webp", alt: "Reactjs" },
                  { src: "/assets/icons/nextjs.webp", alt: "Nextjs" },
                  { src: "/assets/icons/node.webp", alt: "Nodejs" },
                ]}
              />

              <ProyectoItem
                urlContent="/colaboraciones/blogs-upc"
                url="/assets/img/proyectos/blog_upc.png"
                titleImage="Blog UPC"
                titleBackground="Colaboración para Blogs UPC"
                techs={[
                  { src: "/assets/icons/html.webp", alt: "HTML5" },
                  { src: "/assets/icons/css.png", alt: "CSS3" },
                  { src: "/assets/icons/javascript.webp", alt: "Javascript" },
                  { src: "/assets/icons/wordpress.png", alt: "Wordpress" },
                ]}
              />

              <ProyectoItem
                urlContent="/apps/comercial-sarai"
                urlGithub="https://github.com/davisperezg/frontend-facturacion-sisvilla"
                url="/assets/img/proyectos/comercial_sarai.png"
                titleImage="Comercial SARAI"
                titleBackground="Desarrollo de sistema web para Comercial SARAI"
                techs={[
                  { src: "/assets/icons/html.webp", alt: "HTML5" },
                  { src: "/assets/icons/css.png", alt: "CSS3" },
                  { src: "/assets/icons/javascript.webp", alt: "Javascript" },
                  { src: "/assets/icons/typescript.png", alt: "TypeScript" },
                  { src: "/assets/icons/react.webp", alt: "Reactjs" },
                  { src: "/assets/icons/bootstrap.png", alt: "Bootstrap" },
                  { src: "/assets/icons/node.webp", alt: "Nodejs" },
                  { src: "/assets/icons/nestjs.svg", alt: "Nestjs" },
                  { src: "/assets/icons/expressjs.png", alt: "Expressjs" },
                  { src: "/assets/icons/mongodb.png", alt: "Mongodb" },
                ]}
              />

              <ProyectoItem
                urlContent="/apps/rpumv2"
                urlGithub="https://github.com/davisperezg/backend-adm-rpum"
                url="/assets/img/proyectos/rpumv2/ss_rpumv2_modulosdis.png"
                titleImage="RPUMv2"
                titleBackground="Desarrollo de sistema web RPUM"
                techs={[
                  { src: "/assets/icons/html.webp", alt: "HTML5" },
                  { src: "/assets/icons/css.png", alt: "CSS3" },
                  { src: "/assets/icons/javascript.webp", alt: "Javascript" },
                  { src: "/assets/icons/typescript.png", alt: "TypeScript" },
                  { src: "/assets/icons/react.webp", alt: "Reactjs" },
                  { src: "/assets/icons/materialui.png", alt: "Material UI" },
                  { src: "/assets/icons/node.webp", alt: "Nodejs" },
                  { src: "/assets/icons/nestjs.svg", alt: "Nestjs" },
                  { src: "/assets/icons/expressjs.png", alt: "Expressjs" },
                  { src: "/assets/icons/mongodb.png", alt: "Mongodb" },
                ]}
              />

              <ProyectoItem
                urlContent="/apps/portafolio"
                urlGithub="https://github.com/davisperezg/portafolio"
                url="/assets/img/proyectos/portal_portafolio.png"
                titleImage="Mi portafolio"
                titleBackground="Diseño de página para mi portafolio"
                techs={[
                  { src: "/assets/icons/html.webp", alt: "HTML5" },
                  { src: "/assets/icons/css.png", alt: "CSS3" },
                  { src: "/assets/icons/javascript.webp", alt: "Javascript" },
                  { src: "/assets/icons/typescript.png", alt: "TypeScript" },
                  { src: "/assets/icons/react.webp", alt: "Reactjs" },
                  { src: "/assets/icons/nextjs.webp", alt: "Nextjs" },
                  { src: "/assets/icons/tailwind.webp", alt: "Tailwind" },
                ]}
              />
            </div>
          </div>
        </div>

        <Separador />

        <div id="sobremi" className="mb-[30px] mt-[30px] scroll-my-[27ex]">
          <div className="bg-white flex flex-col">
            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#273043]/50 border-l-[3px] border-[#273043] pl-3">
              Sobre mí
            </h2>

            <div className="grid md:grid-cols-[2fr,_1fr] gap-8 mt-6">
              <div className="flex flex-col">
                <h3 className="font-bold text-[20px] tracking-wide text-[#273043] mb-4">
                  Davis Pérez
                </h3>
                <p className="text-[14px] text-[#273043]/75 leading-relaxed mb-3">
                  Actualmente en búsqueda de una oportunidad laboral. Estuve
                  como desarrollador freelance Full Stack JavaScript, dando
                  mantenimiento e implementando nuevos requerimientos para mis
                  clientes. Con +2 años de experiencia freelance, me mantengo en
                  constante aprendizaje porque entiendo que siempre hay algo
                  nuevo por descubrir.
                </p>
                <p className="text-[14px] text-[#273043]/75 leading-relaxed mb-3">
                  Mi base académica fue JAVA, SPRING y MAVEN, pero de forma
                  autodidacta me enamoré de JavaScript y React. Todos mis
                  proyectos están construidos sobre este ecosistema. Busco una
                  empresa donde pueda seguir creciendo y aportar valor real.
                </p>
                <p className="text-[14px] text-[#273043]/75 leading-relaxed">
                  Me especializo en aplicaciones Front End conectadas con APIs y
                  Back End. Aprendo rápido, me adapto a nuevas tecnologías y
                  entiendo que siempre hay más de una manera de resolver un
                  problema.
                </p>
              </div>
              <div className="relative w-full aspect-[3/4] border border-[#eaeff1] overflow-hidden">
                <Image
                  className="grayscale object-cover object-[center_15%]"
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
            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#273043]/50 border-l-[3px] border-[#273043] pl-3">
              Contacto
            </h2>

            <div className="flex flex-col gap-4 mt-6">
              <p className="text-[14px] text-[#273043]/75 leading-relaxed">
                Disponible para puestos independientes o de tiempo completo.
                Contáctame y hablemos.
              </p>
              <div className="flex flex-row gap-3">
                <a
                  href="https://github.com/davisperezg"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 border border-[#eaeff1] hover:border-[#273043]/30 hover:shadow-sm transition-all duration-200"
                >
                  <FaGithub className="w-[18px] h-[18px]" />

                  <span className="text-[12px] font-medium text-[#273043]/70">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/davisperezg"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 border border-[#eaeff1] hover:border-[#273043]/30 hover:shadow-sm transition-all duration-200"
                >
                  <FaLinkedin className="w-[18px] h-[18px]" />

                  <span className="text-[12px] font-medium text-[#273043]/70">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://wa.link/zwvtjb"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 border border-[#eaeff1] hover:border-[#273043]/30 hover:shadow-sm transition-all duration-200"
                >
                  <Image
                    className="object-contain"
                    width={18}
                    height={18}
                    src="/assets/img/whatsapp.svg"
                    alt="Whatsapp"
                  />
                  <span className="text-[12px] font-medium text-[#273043]/70">
                    WhatsApp
                  </span>
                </a>
                <a
                  href="mailto:davisperezg@gmail.com"
                  className="flex items-center gap-2 px-3 py-2 border border-[#eaeff1] hover:border-[#273043]/30 hover:shadow-sm transition-all duration-200"
                >
                  <Image
                    className="object-contain"
                    width={18}
                    height={18}
                    src="/assets/img/email.svg"
                    alt="Email"
                  />
                  <span className="text-[12px] font-medium text-[#273043]/70">
                    Email
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
