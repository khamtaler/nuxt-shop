export const roundNumber = (number: number): number => {
  return Number((Math.round(number * 100) / 100).toFixed(2))
}
