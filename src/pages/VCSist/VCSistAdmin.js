/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../VCSist/VCSistAdmin.css'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const VCSistAdmin = () => {
    const sidenavRef = useRef(null);
    const [textIconMenu, setTextIconMenu] = useState('close');
    const dispatch = useDispatch();
    useEffect(() => {
        document.body.classList.add('has-fixed-sidenav');

        // Função de abrir e fechar o sideNav
        const elemsidenav = document.querySelectorAll('.sidenav');
        const instSideNav = M.Sidenav.init(elemsidenav);
        sidenavRef.current = instSideNav[0];

        //
        const elementCollapsible = document.querySelectorAll('.collapsible');
        const instancesCollapsible = M.Collapsible.init(elementCollapsible);

        // Inicializa todos os componentes JavaScript do Materialize
        M.AutoInit();
    }, []);

    const toggleSidenav = () => {

        if (sidenavRef.current.isOpen) {
            setTextIconMenu("menu")
            sidenavRef.current.close();
            document.body.classList.remove('has-fixed-sidenav');
        } else {
            sidenavRef.current.open();
            setTextIconMenu("close")
            document.body.classList.add('has-fixed-sidenav');
        }
    };

    return (<>
        <header>
            <div className="navbar-fixed">
                <nav className="navbar white">
                    <div className='nav-wrapper'>
                        <Link onClick={toggleSidenav}>
                            <i className="material-icons black-text">{textIconMenu}</i>
                        </Link>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <Link><i className="material-icons">settings</i></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ul id="sidenav-left" className="sidenav sidenav-fixed">
                <li>
                    <Link to={`/vcsist`} className="logo-container">VCSist<i className="material-icons left">spa</i></Link>
                </li>
                <li className="no-padding">
                    <ul className="collapsible">
                        <li>
                            <div className="collapsible-header"><i className="material-icons">folder</i>Cadastros</div>
                            <div className="collapsible-body">
                                <ul>
                                    <li><Link><i className="material-icons">person_outline</i>Cliente</Link></li>
                                    <li><Link><i className="material-icons">business</i>Fornecedor</Link></li>
                                    <li><Link><i className="material-icons">inventory_2</i>Estoque</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to={'/'} onClick={() => { document.body.classList.remove('has-fixed-sidenav'); dispatch(logout()) }}><i className="material-icons">exit_to_app</i>Sair</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </header>
    </>);
};

export default VCSistAdmin;