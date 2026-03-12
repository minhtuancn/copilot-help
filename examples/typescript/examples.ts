#!/usr/bin/env ts-node

// ============================================
// Copilot TypeScript Examples
// ============================================

// Example 1: Interface & Type Definitions
// ============================================

/**
 * User interface with validation
 * Describes user object structure
 */
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  active: boolean;
  createdAt: Date;
}

/**
 * Response wrapper for API calls
 * Generic type T for flexibility
 */
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode: number;
}

---

// Example 2: Class with Type Safety
// ============================================

/**
 * UserService - Manage user operations
 * All methods have full type safety
 */
class UserService {
  private users: Map<number, User> = new Map();
  private nextId: number = 1;

  /**
   * Create new user
   * @param name - User's full name
   * @param email - User's email
   * @returns Created user object
   */
  createUser(name: string, email: string): User {
    const user: User = {
      id: this.nextId++,
      name,
      email,
      role: 'user',
      active: true,
      createdAt: new Date()
    };
    this.users.set(user.id, user);
    return user;
  }

  /**
   * Get user by ID
   * @param id - User ID
   * @returns User object or undefined
   */
  getUserById(id: number): User | undefined {
    return this.users.get(id);
  }

  /**
   * Filter users by role
   * @param role - Role to filter by
   * @returns Array of users with matching role
   */
  getUsersByRole(role: string): User[] {
    return Array.from(this.users.values()).filter(u => u.role === role);
  }

  /**
   * Update user
   * @param id - User ID
   * @param updates - Partial user updates
   * @returns Updated user or undefined
   */
  updateUser(id: number, updates: Partial<User>): User | undefined {
    const user = this.users.get(id);
    if (!user) return undefined;

    const updated = { ...user, ...updates };
    this.users.set(id, updated);
    return updated;
  }

  /**
   * Delete user by ID
   * @param id - User ID
   * @returns true if deleted, false if not found
   */
  deleteUser(id: number): boolean {
    return this.users.delete(id);
  }

  /**
   * Get all users
   * @returns Array of all users
   */
  getAllUsers(): User[] {
    return Array.from(this.users.values());
  }
}

---

// Example 3: Generic Functions with Constraints
// ============================================

/**
 * Filter array by predicate
 * Generic type T with extends constraint
 * @param items - Array to filter
 * @param predicate - Filter function
 * @returns Filtered array
 */
function filterArray<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}

/**
 * Map array to new type
 * Uses two generic types: T (input), U (output)
 * @param items - Array to map
 * @param mapper - Transform function
 * @returns Mapped array
 */
function mapArray<T, U>(items: T[], mapper: (item: T) => U): U[] {
  return items.map(mapper);
}

/**
 * Find first item matching predicate
 * Generic type T with optional result
 * @param items - Array to search
 * @param predicate - Search condition
 * @returns First match or undefined
 */
function findFirst<T>(items: T[], predicate: (item: T) => boolean): T | undefined {
  return items.find(predicate);
}

// Usage example:
const numbers = [1, 2, 3, 4, 5];
const evens = filterArray(numbers, n => n % 2 === 0); // [2, 4]
const squared = mapArray(numbers, n => n * n); // [1, 4, 9, 16, 25]

---

// Example 4: Async/Await with Proper Error Handling
// ============================================

/**
 * Fetch user data with retry logic
 * Async function with error handling
 * @param userId - User ID to fetch
 * @param maxRetries - Number of retry attempts
 * @returns Promise with user data
 * @throws Error if all retries fail
 */
async function fetchUserWithRetry(
  userId: number,
  maxRetries: number = 3
): Promise<User> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json() as User;
    } catch (error) {
      if (attempt === maxRetries) throw error;
      // Wait before retry (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
  throw new Error('Failed to fetch user');
}

/**
 * Parallel data fetching
 * Fetch multiple users concurrently
 * @param userIds - Array of user IDs
 * @returns Promise with array of users
 */
async function fetchMultipleUsers(userIds: number[]): Promise<User[]> {
  const promises = userIds.map(id => fetchUserWithRetry(id));
  return Promise.all(promises);
}

---

// Example 5: Enum & Union Types
// ============================================

/**
 * User status enum
 * Restricted set of values
 */
enum UserStatus {
  Active = 'active',
  Inactive = 'inactive',
  Suspended = 'suspended',
  Pending = 'pending'
}

/**
 * Validation result - Union type
 * Either success or error, never both
 */
type ValidationResult = 
  | { success: true; data: User }
  | { success: false; errors: string[] };

/**
 * Validate user data
 * @param data - User data to validate
 * @returns ValidationResult (success or errors)
 */
function validateUser(data: Partial<User>): ValidationResult {
  const errors: string[] = [];

  if (!data.name?.trim()) errors.push('Name required');
  if (!data.email?.includes('@')) errors.push('Valid email required');
  if (!data.role) errors.push('Role required');

  if (errors.length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: data as User
  };
}

---

// Example 6: Decorators (Advanced)
// ============================================

/**
 * Method decorator for logging
 * Logs method calls with arguments and results
 */
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with args:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };

  return descriptor;
}

/**
 * Example class using decorator
 */
class UserRepository {
  @Log
  getUser(id: number): User | undefined {
    // Implementation
    return undefined;
  }
}

---

// Example 7: Utility Types
// ============================================

/**
 * Partial type: all properties optional
 * Useful for update operations
 */
type PartialUser = Partial<User>;

/**
 * Readonly type: all properties immutable
 */
type ReadonlyUser = Readonly<User>;

/**
 * Pick type: select specific properties
 * UserInfo has only name and email
 */
type UserInfo = Pick<User, 'name' | 'email'>;

/**
 * Omit type: exclude specific properties
 * PublicUser excludes sensitive fields
 */
type PublicUser = Omit<User, 'email' | 'role'>;

/**
 * Record type: key-value mapping
 * Map user IDs to User objects
 */
type UserMap = Record<number, User>;

---

// Example 8: Conditional Types (Advanced)
// ============================================

/**
 * Check if type is array
 * Returns element type if array, otherwise the type itself
 */
type ArrayElement<T> = T extends (infer E)[] ? E : T;

// Examples:
type A = ArrayElement<number[]>; // number
type B = ArrayElement<string>; // string

/**
 * Flatten nested arrays
 */
type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T;

// Examples:
type C = Flatten<number[][]>; // number
type D = Flatten<string[][][]>; // string

---

// Example 9: Rest & Spread Parameters
// ============================================

/**
 * Merge multiple user objects
 * Uses rest parameters for flexible arguments
 * @param users - User objects to merge
 * @returns Merged user with combined data
 */
function mergeUsers(...users: Partial<User>[]): Partial<User> {
  return Object.assign({}, ...users);
}

/**
 * Create array with custom elements
 * Uses spread operator
 * @param initial - Initial elements
 * @param additions - Additional elements
 * @returns Combined array
 */
function createUserArray(
  initial: User[],
  ...additions: User[]
): User[] {
  return [...initial, ...additions];
}

---

// Example 10: Module Export Pattern
// ============================================

/**
 * Export types
 */
export type { User, ApiResponse, UserStatus };

/**
 * Export classes
 */
export { UserService };

/**
 * Export functions
 */
export {
  fetchUserWithRetry,
  fetchMultipleUsers,
  validateUser,
  filterArray,
  mapArray,
  findFirst
};

/**
 * Export enums
 */
export { UserStatus };

---

// ============================================
// TYPESCRIPT TIPS FOR COPILOT:
// ============================================
// 1. Always use interface/type for objects
// 2. Use generics for reusable components
// 3. Define return types explicitly
// 4. Use union types for alternatives
// 5. Use conditional types for advanced patterns
// 6. Document with JSDoc comments
// 7. Use strict mode in tsconfig.json
// 8. Leverage type inference where appropriate
// ============================================
