import { describe, expect, it } from 'vitest'
import { camelCase, kebabCase, pascalCase, snakeCase, splitByCase } from '..'

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

describe('camelCase', () => {
  it.each([
    ['FooBarBaz', 'fooBarBaz'],
    ['FOO_BAR', 'fooBar'],
  ])('%s => %s', (input, expected) => {
    expect(camelCase(input)).toMatchObject(expected)
  })
})

describe('kebabCase', () => {
  it.each([
    ['', ''],
    ['foo', 'foo'],
    ['foo/Bar', 'foo-bar'],
    ['foo-bAr', 'foo-b-ar'],
    ['foo--bar', 'foo-bar'],
    ['FooBAR', 'foo-bar'],
    ['ALink', 'a-link'],
    ['FOO_BAR', 'foo-bar'],
  ])('%s => %s', (input, expected) => {
    expect(kebabCase(input)).toMatchObject(expected)
  })
})

describe('snakeCase', () => {
  it.each([
    ['FooBarBaz', 'foo_bar_baz'],
    ['FOO_BAR', 'foo_bar'],
  ])('%s => %s', (input, expected) => {
    expect(snakeCase(input)).toMatchObject(expected)
  })
})
