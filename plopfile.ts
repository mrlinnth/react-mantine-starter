module.exports = (plop) => {
  plop.setGenerator("module", {
    description: "Generate a module",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter module name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/modules/{{name}}/pages/index.tsx",
        templateFile: "stubs/modules/pages/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/modules/{{name}}/hooks.ts",
        templateFile: "stubs/modules/hooks.ts.hbs",
      },
      {
        type: "add",
        path: "src/modules/{{name}}/index.ts",
        templateFile: "stubs/modules/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/modules/{{name}}/services.ts",
        templateFile: "stubs/modules/services.ts.hbs",
      },
      {
        type: "add",
        path: "src/modules/{{name}}/types.ts",
        templateFile: "stubs/modules/types.ts.hbs",
      },
    ],
  });
};
