import { describe, expect, it } from 'vitest'
import { pascalCase, splitByCase } from '..'

describe('splitByCase', () => {
  it.each([
    ['', []],
    ['foo', ['foo']],
    ['fooBar', ['foo', 'Bar']],
    ['FooBarBaz', ['Foo', 'Bar', 'Baz']],
    ['FooBARb', ['Foo', 'BA', 'Rb']],
    ['foo_bar-baz/qux', ['foo', 'bar', 'baz', 'qux']],
    ['foo--bar-Baz', ['foo', 'bar', 'Baz']],
    ['FOO_BAR', ['FOO', 'BAR']],
    ['foo123-bar', ['foo123', 'bar']],
    ['FOOBar', ['FOO', 'Bar']],
    ['ALink', ['A', 'Link']],
  ])('%s => %s', (input, expected) => {
    expect(splitByCase(input)).toMatchObject(expected)
  })
})

describe('pascalCase', () => {
  it.each([
    ['', ''],
    ['foo', 'Foo'],
    ['foo-bAr', 'FooBAr'],
    ['FooBARb', 'FooBaRb'],
    ['foo_bar-baz/qux', 'FooBarBazQux'],
    ['FOO_BAR', 'FooBar'],
    ['foo--bar-Baz', 'FooBarBaz'],
  ])('%s => %s', (input, expected) => {
    expect(pascalCase(input)).toMatchObject(expected)
  })
})
