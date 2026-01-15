# Design System

This folder contains the **design system** - reusable UI primitives, tokens, and components that are project-agnostic.

## Purpose

Everything here should be:
- **Reusable** - Can be used across different projects
- **Generic** - No application-specific business logic
- **Consistent** - Follows design token standards

## Structure

```
design/
├── tokens/                 # Design tokens (single source of truth)
│   ├── tokens.scss         # CSS custom properties
│   ├── colors.ts           # Color tokens (JS)
│   ├── spacing.ts          # Spacing scale (JS)
│   ├── typography.ts       # Typography tokens (JS)
│   ├── radius.ts           # Border radius tokens (JS)
│   ├── transitions.ts      # Transition tokens (JS)
│   └── index.ts
│
├── components/             # Reusable UI components
│   ├── Button/
│   ├── Modal/
│   └── index.ts
│
└── index.ts                # Main exports
```

## Tokens

Design tokens are defined as CSS custom properties in `tokens/tokens.scss` and loaded globally via `index.scss`.

```scss
// Usage in any SCSS file
.my-component {
  color: var(--color-primary-500);
  padding: var(--spacing-4);
  font-size: var(--font-size-base);
}
```

TypeScript tokens are available for JS usage:

```typescript
import { colors, spacing } from '@/design';

const primaryColor = colors.primary[500]; // '#3b82f6'
```

## Component Structure

Each component follows this structure:

```
ComponentName/
├── ComponentName.tsx
├── ComponentName.scss
├── ComponentName.test.tsx
├── ComponentName.stories.tsx
├── ComponentName.fixtures.ts
├── types.ts
├── constants.ts
├── hooks/
│   └── index.ts
└── index.ts
```

## Guidelines

1. **No business logic** - Components should be generic UI primitives
2. **Use design tokens** - Always reference CSS custom properties
3. **Accessibility first** - Include ARIA attributes, keyboard navigation
4. **Document with Storybook** - Every component needs stories
5. **Test thoroughly** - Aim for high test coverage
