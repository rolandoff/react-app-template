# Features

This folder contains **feature modules** - self-contained units that group all related code for a specific feature.

## Purpose

Each feature is a vertical slice of the application containing:
- Components (both logic and UI)
- State management (Redux reducers, sagas, selectors)
- Types
- Utils specific to the feature

## Structure

```
features/
└── featureName/
    ├── components/           # Feature-specific components
    │   ├── FeatureComponent.tsx
    │   ├── FeatureComponent.scss
    │   ├── FeatureComponent.test.tsx
    │   └── index.ts
    │
    ├── redux/                # State management
    │   ├── reducer.ts        # Redux reducer/slice
    │   ├── sagas.ts          # Redux sagas (side effects)
    │   ├── selectors.ts      # State selectors
    │   ├── actions.ts        # Action creators (if not using slices)
    │   └── index.ts
    │
    ├── hooks/                # Feature-specific hooks
    │   └── index.ts
    │
    ├── utils/                # Feature-specific utilities
    │   └── index.ts
    │
    ├── types.ts              # TypeScript types for the feature
    ├── constants.ts          # Feature constants
    └── index.ts              # Public exports
```

## Example Feature

```
features/
└── auth/
    ├── components/
    │   ├── LoginForm/
    │   ├── SignupForm/
    │   └── index.ts
    │
    ├── redux/
    │   ├── reducer.ts        # authSlice
    │   ├── sagas.ts          # loginSaga, logoutSaga
    │   ├── selectors.ts      # selectUser, selectIsAuthenticated
    │   └── index.ts
    │
    ├── hooks/
    │   ├── useAuth.ts
    │   └── index.ts
    │
    ├── types.ts              # User, AuthState, LoginCredentials
    └── index.ts
```

## Usage

```typescript
// Import from feature
import { LoginForm, useAuth } from '@/features/auth';
import { selectUser } from '@/features/auth/redux';

// In store configuration
import { authReducer } from '@/features/auth/redux';
import { authSagas } from '@/features/auth/redux';
```

## Guidelines

1. **Self-contained** - Each feature should be as independent as possible
2. **Single responsibility** - One feature = one business domain
3. **Explicit exports** - Only export what's needed via `index.ts`
4. **Use design system** - Import UI primitives from `@/design`
5. **Colocation** - Keep related code together (tests, styles, types)
