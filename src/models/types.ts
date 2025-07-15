export type TipiProdotto = "costume da bagno" | "pareo" | "cappello";
export type TipiCostume = "bikini" | "intero" | "monospalla";
export type TipiCappello = "panama" | "berretto" | "cappellino da sole";
export type TipiPareo = "classico" | "fantasia" | "liscio";
export type TotaleSottotipi = TipiCostume | TipiCappello | TipiPareo;

const tipiValidi: TipiProdotto[] = ["costume da bagno", "pareo", "cappello"];

export function isTipo(x: any): x is TipiProdotto {
  return (typeof x === 'string') && tipiValidi.includes(x as TipiProdotto);
}

const tipiCostumeValidi: TipiCostume[] = ["bikini", "intero", "monospalla"];
const tipiCappelloValidi: TipiCappello[] = [
  "panama",
  "berretto",
  "cappellino da sole",
];
const tipiPareoValidi: TipiPareo[] = ["classico", "fantasia", "liscio"];

export type TipiStato = "disponibile" | "esaurito" | "ordinato";

const tipiStati: TipiStato[] = ["disponibile", "esaurito", "ordinato"];

export function isStato(x: any): x is TipiStato {
  return (typeof x === 'string') && tipiStati.includes(x as TipiStato);
}

export function controlloSottotipo(
  tipo: TipiProdotto,
  sottotipo: TotaleSottotipi
): boolean {
  if (tipo === "costume da bagno") {
    return tipiCostumeValidi.includes(sottotipo as TipiCostume);
  } else if (tipo === "cappello") {
    return tipiCappelloValidi.includes(sottotipo as TipiCappello);
  } else if (tipo === "pareo") {
    return tipiPareoValidi.includes(sottotipo as TipiPareo);
  }
  return false;
}

export type TipiPagamento = "mastercard" | "postepay" | "bonifico";

const pagamentiValidi: TipiPagamento[] = ["mastercard", "postepay", "bonifico"];

export function isPagamento(x: any): x is TipiPagamento {
  return (typeof x === 'string') && pagamentiValidi.includes(x as TipiPagamento);
}

export type TipiProcesso =
  | "minimizzazione dell'inquinamento"
  | "gestione degli scarti"
  | "riciclo acqua";

export const processiValidi: TipiProcesso[] = [
  "minimizzazione dell'inquinamento",
  "gestione degli scarti",
  "riciclo acqua",
];

export function isProcesso(x: any): x is TipiProcesso {
  return (typeof x === 'string') && processiValidi.includes(x as TipiProcesso);
}