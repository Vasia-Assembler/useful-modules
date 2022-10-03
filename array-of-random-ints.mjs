import randomInt from "./random-int.mjs"

export default function randomInts(length, min, max, unique) {
  if (unique) {
    let nums = new Set()
    do {
      nums.add(randomInt({ min, max }))
    } while (nums.size !== length)
    return Array.from(nums)
  } else {
    return Array.from({length}, () => randomInt({ min, max }))
  }
}