import { describe, test, expect } from 'vitest'
import { isUppercase } from '..'

describe("isUppercase", () => {
  test.each([
    ["FOO", true],
    ["Foo", true],
    ["foo", false],
  ])("%s => %s", (input, expected) => {
    expect(isUppercase(input)).toBe(expected);
  })
})
