import React, { useEffect, useState } from 'react';
import "../Login/UserLogin.css"
import { useDispatch, useSelector } from 'react-redux';
import { login, selectEmpresa } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { load } from '../../features/section/empresaSlice';
const UserLogin = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const { isAuthenticated, error, loading, isEmpresaSelected, listEmpresas } = useSelector(state => state.auth);
    const { data } = useSelector(state => state.empresa);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        if (isAuthenticated && isEmpresaSelected) {
            navigate('/vcsist'); // Navega para '/vcsist' se autenticado
        }
    }, [isAuthenticated, listEmpresas, isEmpresaSelected, data, navigate]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(formData));
    };

    const selecionarEmpresa = (empresa) => {
        dispatch(load(empresa));
        dispatch(selectEmpresa());
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card card-login">
                        <div className='card-login-splash'>
                            <div className="wrapper">
                                <h3>VCInf</h3>
                            </div>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Login do Usuario</span>
                            <form onSubmit={handleSubmit}>
                                <div className="input-field">
                                    <input id="username" type="email" className="validate" name="email" value={formData.email} onChange={handleChange} />
                                    <label htmlFor="username" className="">E-mail :</label>
                                </div>
                                <div className="input-field">
                                    <input id="password" type="password" className="validate" name="password" value={formData.password} onChange={handleChange} />
                                    <label htmlFor="password">Senha :</label>

                                </div>
                                {error && <span className="helper-text" data-error="wrong">{error}</span>}
                                {(!error && !loading) && <span className="helper-text" data-error="wrong" data-success="right">&nbsp;</span>}
                                {loading && <div className="progress"><div className="indeterminate"></div></div>}
                                <div>
                                    <button type="submit" className="btn right">
                                        <i className="material-icons left">input</i>
                                        Autenticar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card card-select-empresa">


                        {listEmpresas ? <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CNPJ/CPF</th>
                                    <th>Inscrição Estadual</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listEmpresas.map((item, index) => (<tr key={index} className="empresa-item" onClick={() => selecionarEmpresa(item)} >
                                    <td>{item.nome}</td>
                                    <td>{item.cnpj || item.cpf}</td>
                                    <td>{item.inscricao}</td>
                                </tr>))}
                            </tbody>
                        </table> : <></>}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;