/*
 * Complete a função 'vezesLetraAparece' abaixo.
 *
 * É esperado que a função retorne um número inteiro.
 * A função aceita os seguintes parâmetros:
 *  1. frase (string)
 *  2. letra (string)
 */

function vezesLetraAparece(frase, letra) {
    var vezes = 0;
    for (var c = 0; c < frase.length; c++) {
        if (frase[c] === letra) {
            vezes++;
        }
    }
    return vezes;
}
