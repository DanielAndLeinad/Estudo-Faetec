/* import { getClientes } from "./clientesRepository";

async function start() {
  const clientes = await getClientes();
  console.log(clientes);
}

start(); 
import { addCliente } from "./clientesRepository";

async function start() {
    const result = await addCliente({
        id: 4,
        nome: "Renato Rocha",
        idade: 36,
        uf: "SP"
    })
    console.log(result);
}

start();
import { updateCliente } from "./clientesRepository";


async function start() {

  const cliente = await updateCliente(4, {
    nome: "Dinho", idade: 36, uf: "SC",
  });

  console.log(cliente);
 
}

start(); */
import { deleteCliente } from "./clienteRepository";

async function start() {
  const cliente = await deleteCliente(4);
  console.log(cliente);
}

start();

