export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest

  describe('#roundNumbers', () => {
    it('returns dashed if space included', () => {
      expect(slugify('test test')).toBe('test-test')
    })
    it('returns joined if alphanumeric included', () => {
      expect(slugify('test&test')).toBe('testtest')
    })
    it('returns ontouched if underscore included', () => {
      expect(slugify('test_test')).toBe('test_test')
    })
    it('returns dashed if dash included', () => {
      expect(slugify('test-test')).toBe('test-test')
    })
  })
}
