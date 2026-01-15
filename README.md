# React App Template

A production-ready React starter template with TypeScript, Vite, SASS, Storybook, and a scalable architecture.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Fast build tool with HMR
- **SASS** - CSS preprocessor with design tokens
- **Storybook 10** - Component development and documentation
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

## Project Structure

```
src/
├── common/              # Shared utilities, hooks, constants
│   ├── constants/       # App-wide constants (routes, config)
│   ├── hooks/           # Global custom hooks
│   └── utils/           # Shared utility functions
│
├── components/          # Shared app components
│   ├── core/            # Logic-heavy components (ErrorBoundary, etc.)
│   └── ui/              # Presentational shared components
│
├── design/              # Design system
│   ├── tokens/          # Design tokens (colors, spacing, typography)
│   └── components/      # Reusable UI primitives (Button, Modal)
│
├── features/            # Feature modules (vertical slices)
│   └── <feature>/
│       ├── components/  # Feature-specific components
│       ├── redux/       # Reducers, sagas, selectors
│       ├── hooks/       # Feature-specific hooks
│       └── types.ts     # Feature types
│
├── models/              # API to TypeScript mappings
│   └── common/          # Shared API types (pagination, errors)
│
├── test/                # Test setup and mocks
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.scss           # Global styles
```

## Path Aliases

Import using `@/` prefix:

```typescript
import { Button } from '@/design';
import { formatDate } from '@/common';
import { User } from '@/models';
import { LoginForm } from '@/features/auth';
```

## Design System

### Design Tokens

CSS custom properties defined in `src/design/tokens/tokens.scss`:

```scss
// Colors
var(--color-primary-500)
var(--color-gray-200)

// Spacing
var(--spacing-4)

// Typography
var(--font-size-lg)
var(--font-weight-semibold)

// Radius & Transitions
var(--radius-md)
var(--transition-base)
```

### Components

- **Button** - Variants: primary, secondary, outline, ghost. Sizes: small, medium, large
- **Modal** - Compound pattern with Header, Body, Footer

```typescript
import { Button, Modal } from '@/design';

<Modal isOpen={isOpen} onClose={close} title="Confirm">
  <Modal.Body>Are you sure?</Modal.Body>
  <Modal.Footer>
    <Button variant="outline" onClick={close}>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </Modal.Footer>
</Modal>
```

## Architecture

| Folder | Purpose |
|--------|---------|
| `design/` | Reusable design system (tokens + primitives) |
| `components/` | Shared app components used across features |
| `features/` | Self-contained feature modules with own state |
| `models/` | TypeScript interfaces for API data |
| `common/` | Shared utilities, hooks, constants |

## Customization

1. Update `package.json` with your project name
2. Customize design tokens in `src/design/tokens/`
3. Add features in `src/features/`
4. Build app components using design system primitives

## License

MIT

---

**Created by [Rolando Fernandez](https://www.rolandoff.com)** · [rolandoff@gmail.com](mailto:rolandoff@gmail.com)

© 2025 Rolando Fernandez. All rights reserved.
