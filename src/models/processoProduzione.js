import { isProcesso } from "./types";
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
            console.log(`Prodotto ID ${prodotto.ID} NON aggiunto al processo di produzione in quanto esaurito`);
            return;
        }
        this.prodottiInProduzione.push(prodotto);
        console.log(`Prodotto con ID ${prodotto.ID} aggiunto al processo di produzione "${this.nomeProcesso}".\n` +
            `Descrizione: ${this.descrizioneProcesso}.\n` +
            `Tipo prodotto: ${prodotto.tipo} ${prodotto.sottotipo}`);
    }
}
//# sourceMappingURL=processoProduzione.js.map