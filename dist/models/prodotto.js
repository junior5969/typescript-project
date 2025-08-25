import { isTipo, isStato, controlloSottotipo } from "./types.js";
export class Prodotto {
    constructor(tipo, sottotipo, ID, taglia, colore, stato) {
        if (!isTipo(tipo)) {
            throw new Error(`Tipo "${tipo}" non valido`);
        }
        if (!controlloSottotipo(tipo, sottotipo)) {
            throw new Error(`Sottotipo "${sottotipo}" non valido per tipo "${tipo}"`);
        }
        if (!isStato(stato)) {
            throw new Error(`Stato "${stato}" non valido`);
        }
        this.tipo = tipo;
        this.sottotipo = sottotipo;
        this.ID = ID;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }
    assegnaCliente(cliente) {
        this.stato = "ordinato";
        this.clienteAssegnato = cliente;
        console.log(`Il prodotto con ID: ${this.ID}, scelto dal cliente ${cliente.nome} ${cliente.cognome}, risulta in stato: ${this.stato}.`);
        console.log(`Il cliente ${cliente.nome} ${cliente.cognome}, email: ${cliente.email}
ha scelto il prodotto ${this.tipo} ${this.sottotipo} con ID: ${this.ID}, di taglia ${this.taglia}, colore ${this.colore}
e metodo di pagamento ${cliente.metodoPagamento}`);
    }
}
//# sourceMappingURL=prodotto.js.map