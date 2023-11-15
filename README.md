# Vite React/ TypeScript starter project

### Date of creation: 9 Novenmer 2023

This project is a preconfigured starting point for creating a React project with TypeScript with TailwindCSS, eslint and prettier preconfigured. 

The following steps were taken to create it:
1. Create the vite app:
> ```
> $ npm create vite@latest [projectname]
> $ cd [projectname]
> $ npm install
> ```

2. install the vite-eslint plugin
> ``` 
> $ npm install vite-plugin-eslint --save-dev
> ```
> change ```vite.config.ts``` according to the instructions [here](https://www.robinwieruch.de/vite-eslint/).

3. install eslint and prettier
> ```
> $ npm install eslint eslint-config-airbnb prettier eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev
> $ touch .eslintrc .eslintignore .prettierrc .prettierignore
> ```
4. Add content to the files just created using the instructions [here](https://dev.to/marcosdiasdev/adding-eslint-and-prettier-to-a-vitejs-react-project-2kkj).

5. Install TailwindCSS
> ```
> $ npm install -D tailwindcss postcss autoprefixer
> $ npx tailwindcss init -p
> ```

6. Add Tailwind links to ```/src/App.css``` (see [here](https://tailwindcss.com/docs/guides/vite) for more details):
> ```
> @tailwind base;
> @tailwind components;
> @tailwind utilities;
> ```

7. Make the changes detailed below:

---

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
