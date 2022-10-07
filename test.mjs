import randomInts from "./array-of-random-ints.mjs";
import generateForSorting from "./generate-for-sorting.mjs";
import randomInt from "./random-int.mjs";
import { randomString } from "./random-string.mjs";
import round from './round-float.mjs'

const a = generateForSorting(3, 0, 10**9, false, ' ')[1]
console.log(a)

function getRandomFloat(min, max, decimals) {
  //const str = (Math.random() * (max - min) + min)

  //return parseFloat(str);
  // console.log(round)
  const n = Math.random() * (max - min) + min
  return n.toFixed(2)
}

console.log(randomInt({ min: 1, max: 10**3}).toString(2))

console.log(randomString(100000, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'))

// console.log(Array.from({length: 9999}, () => getRandomFloat(0, 10**6, 2)).join(' '))