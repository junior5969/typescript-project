import { isProcesso } from "./types.js";
export class ProcessoProduzione {
    constructor(nomeProcesso, descrizioneProcesso, prodottiInProduzione = []) {
        this.prodottiInProduzione = [];
        if (!isProcesso(nomeProcesso)) {
            throw new Error(`Nome processo "${nomeProcesso}" non valido`);
        }
        this.nomeProcesso = nomeProcesso;
        this.descrizioneProcesso = descrizioneProcesso;
        this.prodottiInProduzione = prodottiInProduzione;
    }
    aggiungiProdotto(prodotto) {
        if (prodotto.stato === "esaurito") {
            console.log(`Prodotto con ID ${prodotto.ID} NON aggiunto al processo di produzione in quanto esaurito`);
            return;
        }
        this.prodottiInProduzione.push(prodotto);
        console.log(`Prodotto con ID ${prodotto.ID} aggiunto al processo di produzione "${this.nomeProcesso}".\n` +
            `Descrizione: ${this.descrizioneProcesso}.\n` +
            `Tipo prodotto: ${prodotto.tipo} ${prodotto.sottotipo}`);
    }
    resoconto() {
        console.log(`Resoconto del processo di produzione "${this.nomeProcesso}":`);
        console.log(`Numero di prodotti: ${this.prodottiInProduzione.length}`);
        if (this.prodottiInProduzione.length === 0) {
            console.log("Nessun prodotto presente in questo processo.");
            return;
        }
        this.prodottiInProduzione.forEach((prodotto, index) => {
            console.log(`\n${index + 1}. ID: ${prodotto.ID} - Tipo: ${prodotto.tipo} - ` +
                `Sottotipo: ${prodotto.sottotipo} - Stato: ${prodotto.stato}`);
        });
    }
}
//# sourceMappingURL=processoProduzione.js.map