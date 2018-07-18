/**
Reverse Odd
Implementasikan function reverseOdd untuk membalikkan setiap elemen string dengan urutan genap
yang ada di dalamnya.
Contoh:
- input: ['awtian', 'raijin', 'thunderkeg']
  output: ['awtian', 'nijiar', 'thunderkeg']
- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['alisa', 'uyoaix', 'nina', 'ilil']
- input: []
  output: []
Aturan coding:
WAJIB MENYERTAKAN ALGORITHMA ATAU PSEUDOCODE
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/

/*

# PSEUDOCODE

STORE `data` with multiple data value (example: clinkz, jahrakal, kael)
STORE `data length` with total of `data`
STORE `counter` with 1

WHILE `counter` LESS THAN or EQUAL `data length` DO
  IF `counter` % 2 EQUAL with 0
    SET `data` indeks of `counter` with `data` indeks of `counter` reversed value
    DISPLAY `data`
  ENDIF
ENDWHILE

*/

function genap(input) {
  return (input % 2 === 0) ? true : false;
}

function reverseStr(input) {
  let str = '';

  for(let i = input.length - 1; i >= 0; i--) {
    str += input[i];
  }

  return str;
}

function reverseOdd (arr) {
  let results = arr;

  if(arr.length === 0) {
    return arr;
  }

  for(let i = 0; i < arr.length; i++) {
    if(genap(i + 1)) {
      let str = reverseStr(arr[i]);
      results[i] = str;
    }
  }
  return results;
}

console.log(reverseOdd(['clinkz', 'jahrakal', 'kael']));
// [ 'clinkz', 'lakarhaj', 'kael' ]

console.log(reverseOdd(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// [ 'moonfang', 'edahsthgin', 'lightbringer', 'rywgyrts' ]

console.log(reverseOdd([]));
// []
