export default function randomInt(args) {
  const min = args.min ?? 0
  const max = args.max ?? 1
  const start_inclusive = args.inclusive?.start
  const end_inclusive = args.inclusive?.end
  return Math.floor(Math.random() * (max - min + 1) + min)
}
