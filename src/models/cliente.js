import { isPagamento } from "./types";
export class Cliente {
    constructor(nome, cognome, email, metodoPagamento) {
        if (!isPagamento(metodoPagamento)) {
            throw new Error(`Metodo di pagamento "${metodoPagamento}" non valido`);
        }
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    ordinaProdotto(prodotto) {
        if (prodotto.stato !== "disponibile") {
            console.log(`Il prodotto con ID: ${prodotto.ID}, scelto dal cliente ${this.nome} ${this.cognome}, risulta in stato: ${prodotto.stato}.`);
            console.log(`Prodotto ${prodotto.tipo} ${prodotto.sottotipo} non disponibile`);
            return;
        }
        prodotto.assegnaCliente(this);
    }
}
//# sourceMappingURL=cliente.js.map