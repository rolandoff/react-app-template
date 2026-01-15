# React App Template

A modern React starter template with TypeScript, Vite, SASS, and Storybook.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool with HMR
- **SASS** - CSS preprocessor
- **Storybook** - Component development and documentation
- **Jest** + **React Testing Library** - Component testing
- **ESLint** - Code linting

## Getting Started

### Use this template

Click **"Use this template"** on GitHub to create a new repository based on this template.

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Storybook

```bash
npm run storybook
```

### Testing

```bash
npm test              # Run tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/        # Static assets
├── stories/       # Storybook stories
├── test/          # Test setup and mocks
├── App.tsx        # Main app component
├── App.test.tsx   # App component tests
├── App.scss       # App styles
├── main.tsx       # Entry point
└── index.scss     # Global styles
```

## Customization

1. Update `package.json` with your project name
2. Replace the default App component with your own
3. Add your components and stories in `src/`
