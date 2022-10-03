import randomInt from "./random-int"

export default function randomInts(length, min, max, unique) {
  if (unique) {
    let nums = new Set()
    do {
      nums.add(randomInt({ min, max }))
    } while (nums.size !== length)
  } else {
    return Array.from({length}, () => randomInt({ min, max }))
  }
}