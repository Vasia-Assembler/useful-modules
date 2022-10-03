import randomInts from "./array-of-random-ints.mjs";

export default function generateForSorting(len, min, max, unique, sep) {
  const arr = randomInts(len, min, max, unique)
  return `${arr.length}` + '\n' + arr.join(sep) + '\n'
}