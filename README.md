# Intro

Created to use as a starter/skeleton project for reactjs projects. Aim is to be **simple** and **scalable**.

## Project Structure

- Feature/Modular based approach (recommended for scalability)
- Dictionary index files in sub-folders
- First level `components`, `hooks`, `types` and `services` are for common functions
- Module level `components`, `hooks`, `types` and `services` are for module specific
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
    /hooks (for shared hooks)
    /modules
        /ModuleA
            /pages
            index.ts
        /ModuleB
            /components (sub-components for the module)
            services.ts (services for the module)
            hooks.ts (hooks for the module)
            index.ts
            types.ts (types for the module)
    /services (for shared services)
        /api (for shared APIs)
    /types (for shared types)
    /utils (helper functions, shared functions etc)
App.tsx (routes inside)
index.tsx
```

## Generator

Use [Plop](https://plopjs.com/)

- `plop module` : to generate a skeleton module

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

## To Do

- [ ] Add requirements to README
- [x] Add plop commands

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
