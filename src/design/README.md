# Design System

This folder contains the **design system** - a collection of foundations, themes, and UI components.

## Purpose

The design system provides:
- **Foundations** - Primitive design values (base colors, spacing scales, typography)
- **Themes** - Semantic tokens that reference foundations (primary, success, error, etc.)
- **Components** - Reusable, accessible UI components (Button, Modal, etc.)

## Structure

```
design/
├── foundations/          # Primitive tokens (raw values)
│   ├── colors.ts         # Base color palette (blue, gray, green, red, yellow)
│   ├── spacing.ts        # Spacing scale
│   ├── typography.ts     # Font families, sizes, weights
│   ├── radius.ts         # Border radius values
│   ├── transitions.ts    # Animation durations and easings
│   ├── _foundations.scss # CSS custom properties (--base-*)
│   └── index.ts
│
├── themes/               # Semantic tokens (meaningful names)
│   └── default/
│       ├── index.ts      # Theme TypeScript exports
│       └── _default.scss # CSS semantic tokens (--color-primary, etc.)
│
├── utils/                # SCSS utilities
│   ├── _reset.scss       # CSS reset
│   ├── _mixins.scss      # Reusable mixins (flex-center, breakpoint, etc.)
│   ├── _functions.scss   # Helper functions (px-to-rem, shade, tint)
│   └── _index.scss       # Forwards all utilities
│
├── tokens/               # Entry point for all tokens
│   └── tokens.scss       # Imports foundations + active theme
│
├── components/           # UI components
│   ├── Button/
│   ├── Modal/
│   └── index.ts
│
└── index.ts              # Main exports
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
