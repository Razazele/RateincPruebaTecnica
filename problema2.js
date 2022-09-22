/*
    Author: Pablo Verdugo Jana
    Email: pablo_verdugoj@hotmail.com
*/

'use strict';

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
 * Completa la funcion 'miniMaxSum' de abajo.
 *
 * La funcion acepta un INTEGER_ARRAY arr como unico parametro.
 */

function miniMaxSum(arr) {
    //MIN VALUES
    const sortedMin = [...arr]
    sortedMin.sort(function(a, b) {
        return a - b;
      });

    sortedMin.pop()
    let min = 0
    let max = 0
    // GET MIN VAL
    sortedMin.map((a) => {
        min = min + a
    })
    //max values
    const sortedMax = [...arr]

    sortedMax.sort(function(a, b) {
        return a - b;
      }).reverse();
    sortedMax.pop()
    // GET MIN VAL
    sortedMax.map((a) => {
        max = max + a
    })

    //GET MAX VAL

    console.log(min + " " + max)


}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}