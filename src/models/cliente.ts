

import { TipiPagamento, isPagamento } from "./types.js";
import { IProdotto } from "./prodotto.js";

export interface ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: TipiPagamento;

  ordinaProdotto(prodotto: IProdotto): void;
}

export class Cliente implements ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: TipiPagamento;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamento: TipiPagamento
  ) {
    if (!isPagamento(metodoPagamento)) {
      throw new Error(`Metodo di pagamento "${metodoPagamento}" non valido`);
    }

    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamento = metodoPagamento;
  }

  ordinaProdotto(prodotto: IProdotto): void {
    if (prodotto.stato !== "disponibile") {
      console.log(
        `Il prodotto con ID: ${prodotto.ID}, scelto dal cliente ${this.nome} ${this.cognome}, risulta in stato: ${prodotto.stato}.`
      );
      console.log(`Prodotto con ID: ${prodotto.ID}, ${prodotto.tipo} ${prodotto.sottotipo}, non disponibile`);
      return;
    }

    prodotto.assegnaCliente(this);
  }
}

