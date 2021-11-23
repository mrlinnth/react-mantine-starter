module.exports = (plop) => {
  // module generator
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
        path: "src/modules/{{name}}/index.ts",
        templateFile: "stubs/modules/index.ts.hbs",
      },
    ],
  });
};
