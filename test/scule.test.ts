import { describe, test, expect } from 'vitest'
import { splitByCase } from '..'

describe("splitByCase", () => {
  test.each([
    ["", []],
    ["foo", ["foo"]],
    ["fooBar", ["foo", "Bar"]],
    ["FooBarBaz", ["Foo", "Bar", "Baz"]],
    ["FooBARb", ["Foo", "BA", "Rb"]],
    ["foo_bar-baz/qux", ["foo", "bar", "baz", "qux"]],
    ["foo--bar-Baz", ["foo", "bar", "Baz"]],
    ["FOO_BAR", ["FOO", "BAR"]],
    ["foo123-bar", ["foo123", "bar"]],
    ["FOOBar", ["FOO", "Bar"]],
    ["ALink", ["A", "Link"]],
  ])("%s => %s", (input, expected) => {
    expect(splitByCase(input)).toMatchObject(expected);
  });
});