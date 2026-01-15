# Components

This folder contains **shared application components** that are used across multiple features.

## Purpose

Components here are:
- **Shared** - Used by multiple features
- **Generic enough** - Not tied to a specific feature's business logic
- **App-specific** - Built for this app (not design system primitives)

> **Note:** Feature-specific components should live in `src/features/<feature>/components/`

## Structure

```
components/
├── core/                   # Logic-heavy components
│   ├── ErrorBoundary/
│   ├── ProtectedRoute/
│   └── index.ts
│
├── ui/                     # Presentational shared components
│   ├── PageHeader/
│   ├── Sidebar/
│   └── index.ts
│
└── index.ts
```

### Core Components
Container components, HOCs, providers, and logic-heavy components that handle:
- Error handling
- Route protection
- Data fetching wrappers
- Context providers

### UI Components
Shared presentational components that are app-specific but used across features:
- Layout components (PageHeader, Sidebar, Footer)
- Composed components built from design primitives

## Guidelines

1. **Shared only** - If a component is only used by one feature, keep it in that feature
2. **Use design tokens** - Always use CSS custom properties
3. **Compose from design system** - Build on top of `@/design` primitives
4. **No feature-specific logic** - Keep business logic in features
