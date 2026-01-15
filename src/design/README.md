# Design System

This folder contains the **design system** - a collection of foundations, themes, utilities, and UI components.

## Purpose

The design system provides:
- **Foundations** - Primitive design values (base colors, spacing scales, typography)
- **Themes** - Semantic tokens that reference foundations (primary, success, error, etc.)
- **Utils** - SCSS mixins, functions, and CSS reset
- **Components** - Reusable, accessible UI components (Button, Modal, etc.)

## Structure

```
design/
├── _index.scss           # Entry point - imports foundations + active theme
│
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
│   ├── default/          # Blue primary theme
│   │   ├── index.ts
│   │   └── _default.scss
│   └── brand-a/          # Yellow primary theme
│       ├── index.ts
│       └── _brand-a.scss
│
├── utils/                # SCSS utilities
│   ├── _reset.scss       # CSS reset
│   ├── _mixins.scss      # Reusable mixins (flex-center, breakpoint, etc.)
│   ├── _functions.scss   # Helper functions (px-to-rem, shade, tint)
│   └── _index.scss       # Forwards all utilities
│
├── components/           # UI components
│   ├── Button/
│   ├── Modal/
│   └── index.ts
│
└── index.ts              # TypeScript exports
```

## Usage

### Importing the Design System

```scss
// In your app entry (e.g., index.scss)
@use './design';
```

### Switching Themes

Edit `design/_index.scss`:
```scss
@use 'foundations';
@use 'themes/default';    // or 'themes/brand-a'
```

### Using Semantic Tokens

```scss
.my-component {
  color: var(--color-text-primary);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  padding: var(--spacing-4);
}

.button {
  background: var(--color-primary);
  color: var(--color-primary-contrast);
}
```

### TypeScript Tokens

```typescript
import { baseColors, spacing } from '@/design';

const blue500 = baseColors.blue[500]; // '#3b82f6'
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
