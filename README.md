# VueAvonova

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Testing

## Unit testing components with [Vitest](https://vitest.dev/)

The following command will run unit tests for all component tests in the `src/components` directory.

```sh
npm run test:unit
```

-**Test Coverage:**

Unit testing of code is done to ensure that the smaller pieces of code behaves as expected ie. components, functions, etc.

Isolation of Units: Testing units in isolation from other components helps in identifying and debugging failures more effectively. It also promotes modular design and improves maintainability.

Clear Naming: Well-named tests convey their purpose and expected outcome, making it easier to understand their intent and identify failures.

Assertion of Expected Behavior: Each test should include assertions that verify the expected behavior of the code being tested. These assertions define the criteria for passing or failing the test, this includes error messages, checking of conditions and that props are being passed correctly.

**Requirements for testing:**

- Check that all components are working and children nodes are rendering as expected
- That all props and data are being passed correctly
- That all functions are working as expected

## Integration testing

For integration testing we use [vue-test-utils](https://test-utils.vuejs.org/)

## End to end testing
