# scule-rs

🧵 String Case Utils, Rewritten [scule](https://github.com/unjs/scule) with Rust

## Install

```bash
npm i @tmg0/scule-rs
```

## Utils

### `pascalCase`

Splits string and joins by PascalCase convention:

```ts
pascalCase('foo-bar_baz')
// FooBarBaz
```

### `camelCase`

Splits string and joins by camelCase convention:

```ts
camelCase('foo-bar_baz')
// fooBarBaz
```

### `kebabCase`

Splits string and joins by kebab-case convention:

```ts
kebabCase('fooBar_Baz')
// foo-bar-baz
```

### `snakeCase`

Splits string and joins by snake_case convention:

```ts
snakeCase('foo-barBaz')
// foo_bar_baz
```

## License

[MIT](./LICENSE) License © 2024-PRESENT [Tamago](https://github.com/tmg0)
