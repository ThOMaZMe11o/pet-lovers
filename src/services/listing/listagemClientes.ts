import Cliente from "../../models/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes:\n`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.getNome()}`);
            console.log(`Nome social: ${cliente.getNomeSocial()}`);
            console.log(`CPF: ${cliente.getCpf().getValor()}`);
            console.log(`--------------------------------------`);
        });
        console.log();
    }
}
