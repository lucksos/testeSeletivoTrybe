/*
 * Complete a função 'tripleTheChances' abaixo.
 *
 * O retorno da função é uma variável do tipo INTEGER_ARRAY.
 * A função aceita o parâmetro chances do tipo INTEGER_ARRAY.
 */

function tripleTheChances(chances) {
    var chancesMultiplicadas = [];
    for (var c = 0; c < chances.length; c++) {
        chancesMultiplicadas.push(chances[c] * 3);
    }
    return chancesMultiplicadas;
}
