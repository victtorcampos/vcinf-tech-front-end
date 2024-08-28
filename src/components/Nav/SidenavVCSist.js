/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

const SidenavVCSist = () => {
  useEffect(() => {
    // Inicializa o sidenav
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }, []);

  const openSidenav = () => {
    const elem = document.querySelector(".sidenav");
    const instance = M.Sidenav.getInstance(elem);
    instance.open();
  };

  return (
    <>
      <nav className="black">
        <div className="nav-wrapper" style={{ paddingLeft: "300px" }}>
          <Link className="brand-logo center" to={`/vcsist`}>
            VCSist
          </Link>
          <button className="sidenav-trigger" onClick={openSidenav}>
            <i className="material-icons" style={{ lineHeight: "40px" }}>
              menu
            </i>
          </button>

          <ul className="right hide-on-med-and-down">
            <li>
              <Link className="waves-effect waves-light btn-small red" to={`/`}>
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <li>
          <Link to={`/vcsist`}>Inicio</Link>
        </li>
        <li>
          <Link to={`/vcsist/cadastro`}>Cadastro</Link>
        </li>
        <li>
          <Link to={`/vcsist/config`}>Configurações</Link>
        </li>
        <li>
          <Link to={`/vcsist/info`}>Informação</Link>
        </li>
        <li>
          <Link to={`/novocadastro`}>Nova Empresa</Link>
        </li>
      </ul>
    </>
  );
};

export default SidenavVCSist;
