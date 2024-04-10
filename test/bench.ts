import { bench, group, run } from 'mitata'
import * as scule from 'scule'
import * as sculeRs from '..'

group('splitByCase', () => {
  const cases = ['', 'foo', 'fooBar', 'FooBarBaz', 'FooBARb', 'foo_bar-baz/qux', 'foo--bar-Baz', 'FOO_BAR', 'foo123-bar', 'FOOBar', 'ALink']
  bench('scule', () => cases.map(c => scule.splitByCase(c)))
  bench('scule rs', () => cases.map(c => sculeRs.splitByCase(c)))
})

group('pascalCase', () => {
  const cases = ['', 'foo', 'foo-bAr', 'FooBARb', 'foo_bar-baz/qux', 'FOO_BAR', 'foo--bar-Baz']
  bench('scule', () => cases.map(c => scule.pascalCase(c)))
  bench('scule rs', () => cases.map(c => sculeRs.pascalCase(c)))
})

group('camelCase', () => {
  const cases = ['FooBarBaz', 'FOO_BAR']
  bench('scule', () => cases.map(c => scule.camelCase(c)))
  bench('scule rs', () => cases.map(c => sculeRs.camelCase(c)))
})

group('kebabCase', () => {
  const cases = ['', 'foo', 'foo/Bar', 'foo-bAr', 'foo--bar', 'FooBAR', 'ALink', 'FOO_BAR']
  bench('scule', () => cases.map(c => scule.kebabCase(c)))
  bench('scule rs', () => cases.map(c => sculeRs.kebabCase(c)))
})

group('snakeCase', () => {
  const cases = ['FooBarBaz', 'FOO_BAR']
  bench('scule', () => cases.map(c => scule.snakeCase(c)))
  bench('scule rs', () => cases.map(c => sculeRs.snakeCase(c)))
})

run()
