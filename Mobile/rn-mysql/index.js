// (async () =>{
//     const db = require("./bd");
//     console.log("Iniciando o servidor...");
//     console.log('SELECT * FROM clientes;');
//     const clientes = await db.consultarCliente();
//     console.log(clientes);
// })();


//  (async () =>{
//    const db = require("./bd");
//    const result = await db.insertCustomer({
//        nome: "Lucas",
//        idade: 25,
//        uf: "SP"});
//    console.log(result);
//    const cliente = await db.consultarCliente();
//    console.log(cliente);

//  })();

// (async () => {
//     const db = require("./bd");
//     const result2 = await db.updateCustomer({
//         id: 4,
//         nome: "Lucas Broxao",
//         idade: 25,
//         uf: "SP"
//     });
//     console.log(result2);


// })();


// index.js
(async () => {
    const db = require("./bd");
    console.log('Apagar registros');
    const result3 = await db.deleteCustomer(1); // inserir o id do cliente que deseja apagar
    console.log(result3);
})();

