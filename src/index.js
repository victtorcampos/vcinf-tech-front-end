import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import VCSistAdmin from './pages/VCSist/VCSistAdmin';
import UserLogin from './pages/Login/UserLogin';
import ProtectedRoute from './services/ProtectedRoute';
import { store } from './store';

createRoot(document.getElementById('root')).render(<React.StrictMode> <Provider store={store}><RouterProvider router={createBrowserRouter([
    {
        path: "/", element: (<>
            <div className="had-container">
                <nav>
                    <div className="nav-wrapper blue">
                        <ul>
                            <li>
                                <Link to={`/`}>Início</Link>
                            </li>
                            <li>
                                <Link to={`/contato`}>Contato</Link>
                            </li>
                        </ul>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link className="waves-effect waves-light btn-large" to={`/vcsist`}>vcsist</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Outlet />
            </div>
        </>), children: [
            { path: "/", element: <><h4>Pagina Inicial</h4></> }
            , { path: "/contato", element: <><h4>Dados de Contato</h4></> }
        ]
    }, {
        path: '/vcsist',
        element: <ProtectedRoute><VCSistAdmin /></ProtectedRoute>,
    }, { path: '/login', element: <UserLogin /> }
    , { path: '/novocadastro', element: <><h4>Janela de cadastro</h4></> }
])} /></Provider></React.StrictMode>);
