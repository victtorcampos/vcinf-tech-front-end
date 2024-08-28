
const fakeLoadEmpresaAPI = (empresa) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simula a validação de credenciais

            resolve({
                cnpj: '24879861000150'
                , nome: "VICTOR BRUNO PEDROZO CAMPOS"
                , inscricao: "1356845623"
                , clientes: null
                , fornecedor: null
                , estoque: null
            });


        }, 2000); // Simula um delay de rede de 2 segundo
    });
};

export default fakeLoadEmpresaAPI;