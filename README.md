# Event Word App

A small keyboard built with **React**, **TypeScript**, and **Vite**.

This app allows users to enter a 5-letter word using a virtual keyboard. It checks whether the word is valid by calling a dictionary API and gives visual feedback on success or error.

## Features

- 🔠 On-screen keyboard input
- ✅ Word validation using [dictionaryapi.dev](https://dictionaryapi.dev/)
- 🎨 Dynamic border animations based on word status
- 💡 Clean component structure with custom hooks
- 📦 State managed using a lightweight event listener pattern (instead of Redux or Context)
- ✨ Styled with CSS Modules

## Tech Stack

- React + TypeScript
- Vite
- CSS Modules

## Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/EventWord.git
cd EventWord
npm install
npm run dev
```

## ESLint Configuration

If you're building a production app, enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Optional stricter rules:
    // ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

## License

MIT
