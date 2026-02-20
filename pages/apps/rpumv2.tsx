import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";
import HeaderArticulo from "../../components/Articulo/HeaderArticulo";
import { Separador, SeparatorCSS } from "../../components/Separador";
import ContentArticulo from "../../components/Articulo/ContentArticulo";

const Rpumv2 = () => {
  return (
    <Container>
      <Head>
        <title>RPUM v2 - Sistema de Roles y Permisos | Davis Pérez</title>
        <meta name="description" content="Sistema web reutilizable de gestión de Roles, Permisos, Usuarios y Módulos (RPUM v2). Desarrollado con React, NestJS y MongoDB." />
        <meta name="author" content="Davis Pérez" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://davisperez.com/apps/rpumv2/" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="es_PE" />
        <meta property="og:url" content="https://davisperez.com/apps/rpumv2/" />
        <meta property="og:site_name" content="Davis Pérez - Portafolio" />
        <meta property="og:title" content="RPUM v2 - Sistema de Roles y Permisos | Davis Pérez" />
        <meta property="og:description" content="Sistema web reutilizable de gestión de Roles, Permisos, Usuarios y Módulos (RPUM v2). Desarrollado con React, NestJS y MongoDB." />
        <meta property="og:image" content="https://i.ibb.co/r5DBxVz/image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RPUM v2 - Sistema de Roles y Permisos | Davis Pérez" />
        <meta name="twitter:description" content="Sistema web reutilizable de gestión de Roles, Permisos, Usuarios y Módulos (RPUM v2). Desarrollado con React, NestJS y MongoDB." />
        <meta name="twitter:image" content="https://i.ibb.co/r5DBxVz/image.png" />
      </Head>
      <article>
        <HeaderArticulo>RPUMV2</HeaderArticulo>
        <figure>
          <Image
            src="/assets/img/proyectos/rpumv2/ss_rpumv2_modulosdis.png"
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
              Lo que más importa del sistema RPUM(Roles, Permisos, Usuarios,
              Modulos) es el backend ya que puede ser reutilizado para futuras
              implementaciones.
            </p>
            <p>El sistema:</p>
            <ul>
              <li>
                Crea un usuario, un rol y los permisos por defecto asignados a
                ello para controlar el sistema
              </li>
              <li>Desactivar usuarios, roles, modulos</li>
              <li>
                Lista de permisos con sus keys(esto ayuda al desarrollador a
                crear los permisos. Puede ser desactivado por el desarrollador)
              </li>
              <li>
                Crear modulos, editar modulo, asignar los menus estaticos a su
                respectivo modulo, desactiva modulos
              </li>
              <li>
                Crear roles, editar roles, asignar modulos a los roles y
                permisos, desactiva roles
              </li>
              <li>
                Crear usuario, cambiar contraseña, editar usuario, editar
                permisos que fueron asignados con el rol, editar servicios o
                modulos, desactiva usuarios
              </li>
              <li>
                Los permisos que pueda tener un rol seran asignados al usuario
                cuyo rol sea el mismo
              </li>
              <li>
                Se puede personalizar los permisos y servicios o modulos x
                usuarios
              </li>
              <li>
                Si un permiso es modificado en el usuario este ya no afecta el
                cambio desde el rol
              </li>
              <li>
                Al crear un rol por ejemplo administrador y este administrador
                crea a sus respectivos usuarios, los usuarios no podran ver
                quien los creo
              </li>
              <li>
                Si se desactiva al rol administrador esto desactivara a todos
                sus usuarios creados por el mismo administrador
              </li>
              <li>Solo los menus son estaticos</li>
            </ul>
            <SeparatorCSS />
            <p>
              <strong>Repositorio frontend:</strong>{" "}
              <a
                href="https://github.com/davisperezg/frontend-adm-rpum"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://github.com/davisperezg/frontend-adm-rpum
              </a>
            </p>
            <p>
              <strong>Repositorio backend:</strong>{" "}
              <a
                href="https://github.com/davisperezg/backend-adm-rpum/tree/rpumv2"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1759A6] cursor-pointer underline"
              >
                https://github.com/davisperezg/backend-adm-rpum/tree/rpumv2
              </a>
            </p>
            <p>Adjunto imágenes del proyecto</p>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/ss_rpumv2_modulosdis.png"
                alt="Modulos disponibles"
              />
              <figcaption>
                Modulos disponibles que puede tener un usuario
              </figcaption>
            </figure>

            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/ss_rpumv2_menusdis.png"
                alt="Menus disponibles"
              />
              <figcaption>
                Menus disponibles que puede tener un usuario
              </figcaption>
            </figure>

            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/ss_rpumv2_lista_permisos.png"
                alt="Permisos"
              />
              <figcaption>Lista de permisos</figcaption>
            </figure>

            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/new_permiso.png"
                alt="Crear permiso"
              />
              <figcaption>Crear permiso</figcaption>
            </figure>

            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/ss_rpumv2_lista_modulos.png"
                alt="Modulos"
              />
              <figcaption>Lista de modulos</figcaption>
            </figure>

            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/new_modulo.png"
                alt="Crear Modulo"
              />
              <figcaption>Crear modulo</figcaption>
            </figure>

            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/new_modulo2.png"
                alt="Crear Modulo con menus"
              />
              <figcaption>Crear modulo con menus</figcaption>
            </figure>

            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/ss_rpumv2_lista_roles.png"
                alt="Lista de roles"
              />
              <figcaption>Lista de roles</figcaption>
            </figure>

            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/new_rol_gen.png"
                alt="Crear rol"
              />
              <figcaption>Crear rol</figcaption>
            </figure>

            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/new_rol_modulos.png"
                alt="Crear roles con modulos"
              />
              <figcaption>Crear roles con modulos</figcaption>
            </figure>

            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/edit_rol_permisos.png"
                alt="Editar los permisos x rol"
              />
              <figcaption>Editar permisos x rol</figcaption>
            </figure>

            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/ss_rpumv2_lista_usu.png"
                alt="Lista de usuarios"
              />
              <figcaption>Lista de usuarios</figcaption>
            </figure>

            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/new_usu.png"
                alt="Crear usuario"
              />
              <figcaption>Crear usuario</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/view_usu_gen.png"
                alt="Editar usuario"
              />
              <figcaption>Editar usuario</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/view_usu_pass.png"
                alt="Lista de roles"
              />
              <figcaption>Cambiar contraseña</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/view_usu_services.png"
                alt="Editar servicios x usuario"
              />
              <figcaption>Editar servicios x usuario</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/view_usu_permisos.png"
                alt="Editar permisos x usuario"
              />
              <figcaption>Editar permisos x usuario</figcaption>
            </figure>
            <figure className="m-[.8em_0_2.3em]">
              <Image
                width={700}
                height={500}
                src="/assets/img/proyectos/rpumv2/ss_lista_other_usu.png"
                alt="Ejemplo de usuario con permisos denegado para la lista de roles"
              />
              <figcaption>
                Ejemplo de un usuario con permisos denegado para la lista de
                roles
              </figcaption>
            </figure>
          </div>
        </ContentArticulo>
      </article>
    </Container>
  );
};

export default Rpumv2;
