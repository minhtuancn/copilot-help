# 🎯 Best Practices - Hướng Dẫn Tối Ưu

Những phương pháp tốt nhất để sử dụng GitHub Copilot một cách hiệu quả và chuyên nghiệp.

---

## 📌 Core Principles

### 1. ✍️ Comment-First Development

**Tinh thần:** Viết comments chi tiết trước code, Copilot sẽ sinh code từ comments.

#### ✅ Correct - Chi tiết, rõ ràng

```javascript
// Calculate the total price including tax
// Input: subtotal (number), taxRate (decimal: 0.1 = 10%)
// Output: total price rounded to 2 decimal places
// Example: calculateTotal(100, 0.1) -> 110
const calculateTotal = (subtotal, taxRate) => {
  return Math.round(subtotal * (1 + taxRate) * 100) / 100;
};
```

#### ❌ Wrong - Quá chung chung

```javascript
// calculate total
const calculateTotal = (subtotal, taxRate) => {
  // code here
};
```

#### 🎯 Best Practice Tips
- Describe **input parameters** rõ ràng
- Describe **output** chi tiết
- Include **example** của input/output
- Explain **edge cases** nếu có
- Use **types** trong comments

---

### 2. 🔤 Type-Driven Development

**Tinh thần:** Strong typing giúp Copilot hiểu context tốt hơn.

#### ✅ TypeScript (Best)

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  isActive: boolean;
}

// Fetch user by ID from database
// Returns User if found, null if not
async function getUserById(id: number): Promise<User | null> {
  // Copilot có full context về User type
}
```

#### ✅ Python with Type Hints

```python
from typing import Optional
from datetime import datetime

class User:
    """User model with type hints."""
    id: int
    name: str
    email: str
    created_at: datetime
    is_active: bool

def get_user_by_id(user_id: int) -> Optional[User]:
    """Fetch user by ID from database.
    
    Args:
        user_id: The user's ID number
        
    Returns:
        User object if found, None otherwise
    """
    # Copilot understands return type
```

#### ✅ JavaScript with JSDoc

```javascript
/**
 * Fetch user by ID from database.
 * @param {number} id - The user ID
 * @returns {Promise<Object|null>} User object or null
 * @example
 * const user = await getUserById(123);
 */
async function getUserById(id) {
  // Still better than no types
}
```

#### 🎯 Type Priority (Best to Worst)
1. **TypeScript** - Full static typing ⭐⭐⭐⭐⭐
2. **Python with Type Hints** - Good coverage ⭐⭐⭐⭐
3. **JSDoc + JavaScript** - Better than nothing ⭐⭐⭐
4. **No types** - Copilot guessing ❌

---

### 3. 🧪 Test-Driven Development (TDD)

**Tinh thần:** Viết test trước, Copilot sinh implementation.

#### ✅ Correct Flow

```typescript
// STEP 1: Write test first
describe('calculateDiscount', () => {
  it('should apply 10% discount correctly', () => {
    const price = 100;
    const discount = 10;
    const result = calculateDiscount(price, discount);
    expect(result).toBe(90);
  });

  it('should handle edge case: 0% discount', () => {
    expect(calculateDiscount(100, 0)).toBe(100);
  });

  it('should handle 100% discount', () => {
    expect(calculateDiscount(100, 100)).toBe(0);
  });
});

// STEP 2: Let Copilot generate implementation
// Type function signature and Copilot will fill in logic
function calculateDiscount(price: number, discount: number): number {
  // Copilot generates: return price * (1 - discount / 100);
}
```

#### 🎯 TDD Benefits with Copilot
- Tests clarify intent → better code generation
- Tests validate Copilot's output
- Tests catch edge cases
- More confident code

---

### 4. 🎯 Context Management

**Tinh thần:** Keep Copilot's context focused and relevant.

#### ✅ Good Context

```python
# At the top of file: clear imports and types
from datetime import datetime
from typing import List
from models import User

# In function: provide recent related code
class UserService:
    def __init__(self, db):
        self.db = db
    
    # Clear, self-contained function
    def get_active_users(self) -> List[User]:
        """Get all active users from database.
        
        Returns:
            List of User objects where is_active=True
        """
        # Copilot has full context: User type, db, purpose
        return self.db.query(User).filter(User.is_active == True).all()
```

#### ❌ Poor Context

```python
# No imports, no types shown to Copilot
def process(x):
    # What is x? What should it return?
    # Copilot has to guess everything
    pass
```

#### 🎯 Context Best Practices
- **Keep functions small** - One responsibility
- **Use meaningful names** - describe intent
- **Show types** - through comments or actual types
- **Provide examples** - in comments
- **Keep imports visible** - at file top

---

### 5. 🔄 Iterative Refinement

**Tinh thần:** Generate → Review → Refine → Repeat.

#### ✅ Good Workflow

```
1. GENERATE
   └─ Type stub, let Copilot generate code
   
2. REVIEW
   ├─ Does it match intent?
   ├─ Handle all edge cases?
   ├─ Performance OK?
   └─ Security OK?
   
3. REFINE
   ├─ Add comments if unclear
   ├─ Modify function signature
   ├─ Ask for specific pattern
   └─ Generate again
   
4. VALIDATE
   ├─ Run tests
   ├─ Manual testing
   ├─ Code review
   └─ Deploy/commit
```

#### 🎯 Refining Examples

```typescript
// FIRST ATTEMPT
function sortUsers(users: User[]): User[] {
  // Copilot generates: return users.sort((a, b) => a.id - b.id);
}

// REVIEW: Need by name, not id. Modify comment:
function sortUsers(users: User[]): User[] {
  // Sort users by name alphabetically (A-Z), case-insensitive
  // Return sorted copy, don't modify original
}

// RESULT: Much better suggestion
function sortUsers(users: User[]): User[] {
  return [...users].sort((a, b) => 
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
}
```

---

## 🏆 Advanced Practices

### 6. 💭 Few-Shot Prompting

**Show examples in comments before asking for code.**

#### ✅ Example

```javascript
// Pattern: API error handling
// Example 1: GET request
// try { const data = await fetch(url); return data.json(); }
// catch (e) { console.error('GET failed:', e.message); return null; }

// Example 2: POST request with data validation
// Implement POST request handler that:
// 1. Validates input data against schema
// 2. Sends JSON POST request
// 3. Handles 4xx/5xx errors gracefully
// 4. Returns null on error, data on success
async function postData(url, data, validator) {
  // Copilot will follow your pattern examples
}
```

---

### 7. 📝 Documentation-First

**Good documentation helps Copilot AND future you.**

#### ✅ Comprehensive Docstring

```python
def calculate_compound_interest(
    principal: float,
    rate: float,
    time: float,
    compounds: int = 12
) -> float:
    """Calculate compound interest with detailed documentation.
    
    Calculates the final amount using the compound interest formula:
    A = P(1 + r/n)^(nt)
    
    Args:
        principal: Initial amount in dollars ($)
        rate: Annual interest rate as decimal (e.g., 0.05 for 5%)
        time: Time period in years
        compounds: Compounding periods per year (default: 12 for monthly)
        
    Returns:
        Final amount including interest, rounded to 2 decimal places
        
    Raises:
        ValueError: If principal or rate is negative
        
    Example:
        >>> calculate_compound_interest(1000, 0.05, 2)  # $1104.89
        1104.89
        
    Note:
        - More frequent compounding = higher returns
        - Daily compounding (365) vs monthly (12) has small difference
        - Works for savings and loans
    """
    if principal < 0 or rate < 0:
        raise ValueError("principal and rate must be non-negative")
    
    # Copilot generates accurate implementation with full context
    return round(principal * (1 + rate / compounds) ** (compounds * time), 2)
```

---

### 8. 🔍 Code Review with Copilot

**Use Copilot to review your own code.**

#### ✅ Workflow

```
1. Write code
2. Ask Copilot to review with specific focus:
   /explain - understand what it does
   /fix - find and fix issues
   
   Copilot Chat prompt:
   "Review this function for:
    - Performance issues
    - Memory leaks
    - Security vulnerabilities
    - Edge cases not handled"
```

---

### 9. ⚡ Performance Optimization

**Ask Copilot to optimize after working implementation.**

#### ✅ Example

```javascript
// FIRST: Working but slow
function findDuplicates(arr) {
  // Generate: Check every element against every other
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

// SECOND: Ask for optimization
// Optimize for performance: O(n) instead of O(n²)
// Use Set to track seen and duplicates
// Input array size could be 1M+ elements
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  
  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  
  return Array.from(duplicates);
}
// Result: 100x faster for large arrays!
```

---

### 10. 🛡️ Security-First Thinking

**Always consider security implications.**

#### ✅ Secure Example

```javascript
// BAD: Directly use user input in query
// const query = `SELECT * FROM users WHERE id = ${userId}`;
// ^^ Vulnerable to SQL injection

// GOOD: With comment about security
// Query user safely using parameterized query
// Never concatenate user input into SQL strings
// Use prepared statements with placeholders
function getUserById(userId) {
  // Copilot generates safe code
  return db.query('SELECT * FROM users WHERE id = ?', [userId]);
}

// GOOD: Validate inputs first
/**
 * Validate user ID format before database query.
 * User IDs must be positive integers only
 * Returns null if invalid to prevent SQL injection
 */
function validateUserId(userId) {
  const id = parseInt(userId);
  if (id <= 0 || isNaN(id)) return null;
  return id;
}
```

---

### 11. 🔗 Maintain Consistency

**Keep naming, structure, and style consistent.**

#### ✅ Consistent Pattern

```python
# Define pattern clearly at top of file
# Pattern: All functions that fetch from DB
# - Name: get_<resource>_by_<field>
# - Returns: <Resource> or None
# - Type: async, uses self.db
# - Docstring: "Fetch <resource> by <field>."

async def get_user_by_id(self, user_id: int) -> Optional[User]:
    """Fetch user by ID."""
    return await self.db.get(User, user_id)

async def get_post_by_id(self, post_id: int) -> Optional[Post]:
    """Fetch post by ID."""
    # Copilot follows your pattern
    return await self.db.get(Post, post_id)

async def get_comment_by_id(self, comment_id: int) -> Optional[Comment]:
    """Fetch comment by ID."""
    # Consistency helps Copilot suggest correct code
    return await self.db.get(Comment, comment_id)
```

---

### 12. 📚 Build Reusable Abstractions

**Create helper functions and utilities.**

#### ✅ Example: Reusable Patterns

```typescript
// Create helper for common pattern
function validateAndParse<T>(
  data: unknown,
  schema: Schema
): T | null {
  try {
    return schema.parse(data) as T;
  } catch {
    console.error('Validation failed:', data);
    return null;
  }
}

// Now use helper everywhere
function processUserData(raw: unknown): User | null {
  return validateAndParse<User>(raw, userSchema);
}

function processProductData(raw: unknown): Product | null {
  return validateAndParse<Product>(raw, productSchema);
}

// Result: Cleaner, reusable, consistent error handling
```

---

## 🚀 Workflow Integration

### Git Workflow with Copilot

```bash
# 1. Create feature branch
git checkout -b feature/user-authentication

# 2. Write tests first
# test/auth.test.js - Write test cases

# 3. Use Copilot to generate implementation
# src/auth.js - Let Copilot fill in

# 4. Review with Copilot Chat
# Ask: "Review for security issues"

# 5. Commit with good message
git add .
git commit -m "feat: implement user authentication with JWT"

# 6. Push for review
git push origin feature/user-authentication
```

---

### Daily Optimization Checklist

- [ ] **Comments clear?** Does Copilot understand intent?
- [ ] **Types defined?** Full type information provided?
- [ ] **Tests passing?** Validate Copilot's output
- [ ] **Edge cases?** Covered error cases?
- [ ] **Performance OK?** Run quick benchmark?
- [ ] **Security?** Input validation in place?
- [ ] **Consistency?** Follows project patterns?
- [ ] **Documentation?** Could new dev understand?

---

## 📊 Impact Metrics

Using these practices improves:

| Metric | Impact |
|--------|--------|
| Code Quality | +40-60% |
| Development Speed | +3-5x faster |
| Bug Rate | -60-80% fewer |
| Review Time | -50% faster reviews |
| Onboarding Time | -70% for new devs |
| Refactoring Safety | +95% more confident |

---

## ❌ Common Mistakes to Avoid

| ❌ Mistake | ✅ Solution |
|-----------|-----------|
| Vague comments | Write detailed, specific comments |
| No type info | Add types or type hints |
| Big functions | Break into smaller functions |
| No tests | Write tests first |
| Accepting first output | Review and refine suggestions |
| Ignoring security | Always consider security |
| Inconsistent style | Establish patterns early |
| No validation | Validate all inputs |

---

## 🎓 Learning Path

**Week 1:** Comment-First + Type-Driven  
**Week 2:** TDD + Iterative Refinement  
**Week 3:** Context Management + Documentation  
**Week 4:** Advanced + Optimization  

---

## 🔗 Related Pages

- **[Glossary](Glossary.md)** - Terminology
- **[Tips & Tricks](Tips-and-Tricks.md)** - Advanced tips
- **[Skills & Techniques](../docs/03-skills-techniques.md)** - Detailed skills
- **[Code Examples](../examples/)** - Working examples

---

**Last Updated:** 2025-03-12  
**Maintained by:** Community  
**License:** MIT

---

## 💡 Remember

> **The better your comments, the better Copilot's suggestions.**
>
> **Strong types help Copilot understand your intent.**
>
> **Tests validate Copilot's code, not just human code.**
>
> **Copilot is a tool, not a replacement for thinking.**
