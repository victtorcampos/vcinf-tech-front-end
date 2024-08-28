import React from 'react';
import { Link } from 'react-router-dom';

const NavbarVCSist = () => {

    return (
        <>
            <nav className='black'>
                <div className="nav-wrapper" style={{ paddingLeft: "300px" }}>
                    <Link className='brand-logo center' to={`/vcsist`}>VCSist</Link>
                    <Link className="sidenav-trigger" style={{ display: "block" }}>
                        <i class="material-icons" style={{ lineHeight: "40px" }}>menu</i>
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link className="waves-effect waves-light btn-small red" to={`/`}>Sair</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavbarVCSist;