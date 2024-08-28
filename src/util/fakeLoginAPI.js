
const fakeLoginAPI = (credentials) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simula a validação de credenciais
            if (credentials.email === "victor-campos@outlook.com" && credentials.password === "123") {
                resolve({
                    isAuthenticated: true, usuario: { nome: 'Victor', email: 'victor-campos@outlook.com' }, empresas: [
                        { cnpj: '24879861000150', nome: "VICTOR BRUNO PEDROZO CAMPOS", inscricao: "1356845623" }
                        , { cnpj: '14953277000143', nome: "SORRISO SUPERMERCADOS LTDA", inscricao: "1456845623" }
                        , { cpf: '40770893953', nome: "JURACI JORGE CAMICIA", inscricao: "1556845623" }
                    ]
                });
            } else {
                reject("Dados de acesso inválidos");
            }
        }, 2000); // Simula um delay de rede de 2 segundo
    });
};

export default fakeLoginAPI;