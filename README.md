# Intro

Created to use as a starter/skeleton project for reactjs projects. Aim is to be **simple** and **scalable**.

## Project Structure

- Feature/Modular based approach (recommended for scalability)
- Dictionary index files in folders
- Import `component`, `hook` and `type` from a module and use when necessary
- Module and Component folders/files use **PascalCase** names
- Other folders/files use **camelCase** names
- Both human and editor/IDE should be able to find files easily
- Avoid too much nesting
- Feel free to reorganize or change structure totally if you want

```text
/src
    /atoms (for Jotai atoms)
    /components (for shared components)
        /common
        /header (use semantic names)
        /template
    /config (for any config eg: axios instance)
    /modules
        /ModuleA
            /pages
            index.ts
        /ModuleB
            /components (sub-component for the module)
            api.ts (api for the module)
            hooks.ts (custom hooks for the module)
            index.ts
            types.ts (types for the module)
    /utils (helper functions, shared functions etc)
App.tsx (routes inside)
index.tsx
```

## Installed Packages

- [mantine v3.1.9](https://mantine.dev/)
- [typescript](https://www.typescriptlang.org/)
- [react-icons v4.3.1](https://react-icons.github.io/react-icons)
- [react-router v6](https://reactrouter.com/)
- [react-query v3.33.2](https://react-query.tanstack.com/)
- [jotai v1.4.4](https://jotai.org/)
- [faker v5.5.3](https://github.com/Marak/Faker.js)
- [axios v0.24.0](https://axios-http.com/)

## Services

- [faker api](https://fakerapi.it/en)

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
