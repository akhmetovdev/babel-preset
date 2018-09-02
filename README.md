# @akhmetovdev/babel-preset

> Babel preset for hipsters

## Description

**This preset requires babel 7.x**

Included presets:

- @babel/preset-env

Included plugins:

- @babel/plugin-proposal-async-generator-functions

```javascript
async function* example() {
  await 'example';
  yield 'example';
}
```

- @babel/plugin-proposal-class-properties

```javascript
class Example {
  example = 'example';
}
```

- @babel/plugin-proposal-decorators

```javascript
@example
class Example {}
```

- @babel/plugin-proposal-do-expressions

```javascript
const example = do {
  if (true) 'example';
};
```

- @babel/plugin-proposal-export-default-from

```javascript
export example from './example';
```

- @babel/plugin-proposal-export-namespace-from

```javascript
export * as example from './example';
```

- @babel/plugin-proposal-function-bind

```javascript
::example
```

- @babel/plugin-proposal-function-sent

```javascript
function* example() {
  console.log(function.sent);
}
```

- @babel/plugin-proposal-logical-assignment-operators

```javascript
a &&= b;
a ||= b;
a ??= b;
```

- @babel/plugin-proposal-nullish-coalescing-operator

```javascript
a = b ?? 'example';
```

- @babel/plugin-proposal-numeric-separator

```javascript
example = 1_000_000;
```

- @babel/plugin-proposal-object-rest-spread

```javascript
a = { b, c, ...d };
```

- @babel/plugin-proposal-optional-catch-binding

```javascript
try {
  a();
} catch {
  b();
} finally {
  c();
}
```

- @babel/plugin-proposal-optional-chaining

```javascript
a?.b?.c;
```

- @babel/plugin-proposal-pipeline-operator

```javascript
'example' |> a |> b |> c;
```

- @babel/plugin-proposal-throw-expressions

```javascript
function example(a = throw new Error('REQUIRED')) {}
```

- @babel/plugin-proposal-unicode-property-regex

```javascript
/\u{0}/u;
```

- @babel/plugin-transform-runtime

## Setup

Install with npm:

```bash
npm install --save-dev @akhmetovdev/babel-preset
```

Or install with yarn:

```bash
yarn add --dev @akhmetovdev/babel-preset
```

In your .babelrc:

```json
{
  "presets": ["@akhmetovdev/babel-preset"]
}
```

## License

[MIT](https://github.com/akhmetovdev/babel-preset/blob/master/LICENSE)
