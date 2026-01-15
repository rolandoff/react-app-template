# Common

This folder contains **shared utilities, hooks, and constants** used across the application.

## Structure

```
common/
├── constants/          # App-wide constants
│   ├── routes.ts       # Route paths
│   ├── config.ts       # App configuration
│   ├── enums.ts        # Shared enums
│   └── index.ts
│
├── hooks/              # Global custom hooks
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   ├── useMediaQuery.ts
│   └── index.ts
│
├── utils/              # Shared utilities
│   ├── formatters.ts   # Date, currency, number formatters
│   ├── validators.ts   # Validation functions
│   ├── helpers.ts      # General helper functions
│   └── index.ts
│
└── index.ts
```

## Usage

```typescript
// Import from common
import { ROUTES, useDebounce, formatDate } from '@/common';

// Or import from specific submodule
import { ROUTES } from '@/common/constants';
import { useDebounce } from '@/common/hooks';
import { formatDate } from '@/common/utils';
```

## Examples

### Constants
```typescript
// constants/routes.ts
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile/:id',
} as const;

// constants/config.ts
export const CONFIG = {
  API_URL: import.meta.env.VITE_API_URL,
  APP_NAME: 'My App',
  DEFAULT_LOCALE: 'en-US',
} as const;
```

### Hooks
```typescript
// hooks/useDebounce.ts
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
};
```

### Utils
```typescript
// utils/formatters.ts
export const formatDate = (date: Date, locale = 'en-US'): string => {
  return new Intl.DateTimeFormat(locale).format(date);
};

export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};
```

## Guidelines

1. **Generic only** - No feature-specific code here
2. **Pure functions** - Utils should be pure, no side effects
3. **Well-tested** - All utilities should have unit tests
4. **Tree-shakeable** - Export individual functions, not objects
