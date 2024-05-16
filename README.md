# VueAvonova


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

-**Login page:**

Login is done with supabase where the user is already authenticated beforehand just like it would be in the case of a Avonova customer, and is then redirected to the home page if the user session is validated from supabase.
There are 5 customer email accounts in the DB;


sales@techsolutions.as
support@healthcorp.as
info@ecobuild.as
contact@novatech.no
password is **admin** for all of them.

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

<!-- TODO: add end to end testing -->

For end to end testing we use [cypress.io](https://www.cypress.io/)

## UseVue

--onClickOutside

## Prisma

## Supabase

##
