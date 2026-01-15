# Models

This folder contains **TypeScript models** that map API responses to typed interfaces.

## Purpose

Models here:
- Define the shape of data coming from the API
- Provide type safety for API responses
- Serve as a contract between frontend and backend
- Can include transformation utilities (API → App format)

## Structure

```
models/
├── User.ts               # User model
├── Product.ts            # Product model
├── Order.ts              # Order model
├── common/               # Shared types (pagination, errors, etc.)
│   ├── Pagination.ts
│   ├── ApiResponse.ts
│   └── index.ts
└── index.ts
```

## Model Structure

Each model file typically contains:

```typescript
// User.ts

// API response shape (what the backend sends)
export interface UserDTO {
  id: string;
  first_name: string;
  last_name: string;
  email_address: string;
  created_at: string;
  updated_at: string;
}

// App model (what the app uses)
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// Transformer (optional - converts API format to app format)
export const mapUserDTO = (dto: UserDTO): User => ({
  id: dto.id,
  firstName: dto.first_name,
  lastName: dto.last_name,
  email: dto.email_address,
  createdAt: new Date(dto.created_at),
  updatedAt: new Date(dto.updated_at),
});
```

## Usage

```typescript
import { User, UserDTO, mapUserDTO } from '@/models';

// In API service
const fetchUser = async (id: string): Promise<User> => {
  const response = await api.get<UserDTO>(`/users/${id}`);
  return mapUserDTO(response.data);
};

// In components
import type { User } from '@/models';

const UserCard = ({ user }: { user: User }) => {
  return <div>{user.firstName} {user.lastName}</div>;
};
```

## Guidelines

1. **DTO suffix** - Use `DTO` suffix for raw API response types
2. **Transformers** - Include mappers when API format differs from app format
3. **One file per entity** - Keep related types together
4. **Export from index** - Re-export all models from `index.ts`
5. **Immutable** - Models should be plain data, no methods
