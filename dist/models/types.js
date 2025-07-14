const tipiValidi = ["costume da bagno", "pareo", "cappello"];
export function isTipo(x) {
    return (typeof x === 'string') && tipiValidi.includes(x);
}
const tipiCostumeValidi = ["bikini", "intero", "monospalla"];
const tipiCappelloValidi = [
    "panama",
    "berretto",
    "cappellino da sole",
];
const tipiPareoValidi = ["classico", "fantasia", "liscio"];
const tipiStati = ["disponibile", "esaurito", "ordinato"];
export function isStato(x) {
    return (typeof x === 'string') && tipiStati.includes(x);
}
export function controlloSottotipo(tipo, sottotipo) {
    if (tipo === "costume da bagno") {
        return tipiCostumeValidi.includes(sottotipo);
    }
    else if (tipo === "cappello") {
        return tipiCappelloValidi.includes(sottotipo);
    }
    else if (tipo === "pareo") {
        return tipiPareoValidi.includes(sottotipo);
    }
    return false;
}
const pagamentiValidi = ["mastercard", "postepay", "bonifico"];
export function isPagamento(x) {
    return (typeof x === 'string') && pagamentiValidi.includes(x);
}
const processiValidi = [
    "utilizzo tessuti riciclati",
    "gestione degli scarti",
    "riciclo acqua",
];
export function isProcesso(x) {
    return (typeof x === 'string') && processiValidi.includes(x);
}
//# sourceMappingURL=types.js.map