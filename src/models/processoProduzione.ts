

import { TipiProcesso, isProcesso } from "./types.js";
import { IProdotto } from "./prodotto.js";

export interface IProcessoProduzione {
  nomeProcesso: TipiProcesso;
  descrizioneProcesso: string;
  prodottiInProduzione: IProdotto[];

  aggiungiProdotto(prodotto: IProdotto): void;
}

export class ProcessoProduzione implements IProcessoProduzione {
  nomeProcesso: TipiProcesso;
  descrizioneProcesso: string;
  prodottiInProduzione: IProdotto[] = [];

  constructor(
    nomeProcesso: TipiProcesso,
    descrizioneProcesso: string,
    prodottiInProduzione: IProdotto[] = []
  ) {
    if (!isProcesso(nomeProcesso)) {
      throw new Error(`Nome processo "${nomeProcesso}" non valido`);
    }

    this.nomeProcesso = nomeProcesso;
    this.descrizioneProcesso = descrizioneProcesso;
    this.prodottiInProduzione = prodottiInProduzione;
  }

  aggiungiProdotto(prodotto: IProdotto): void {
    if (prodotto.stato === "esaurito") {
      console.log(
        `Prodotto con ID ${prodotto.ID} NON aggiunto al processo di produzione in quanto esaurito`
      );
      return;
    }

    this.prodottiInProduzione.push(prodotto);

    console.log(
      `Prodotto con ID ${prodotto.ID} aggiunto al processo di produzione "${this.nomeProcesso}".\n` +
        `Descrizione: ${this.descrizioneProcesso}.\n` +
        `Tipo prodotto: ${prodotto.tipo} ${prodotto.sottotipo}`
    );
  }
}