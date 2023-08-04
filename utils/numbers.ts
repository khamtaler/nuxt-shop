export const roundNumber = (number: number): number => {
  if (number) {
    return Number((Math.round(number * 100) / 100).toFixed(2))
  }
  return 0
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest

  describe('#roundNumbers', () => {
    it('returns rounded to 2 decimals number floored', () => {
      expect(roundNumber(1.111)).toBe(1.11)
    })
    it('returns rounded to 2 decimals number rounded up', () => {
      expect(roundNumber(1.777)).toBe(1.78)
    })
  })
}
