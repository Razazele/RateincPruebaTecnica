/*
    Author: Pablo Verdugo Jana
    Email: pablo_verdugoj@hotmail.com
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Completa la funcion 'simpleArraySum' de abajo.
 *
 * Se espera que la funcion retorne un INTEGER.
 * La funcion acepta un INTEGER_ARRAY ar como parametro.
 */

function simpleArraySum(ar) {

    let total = 0

    ar.map((a) => {
        total = total + a
    })

    return total

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = simpleArraySum(ar);

    ws.write(result + '\n');

    ws.end();
}