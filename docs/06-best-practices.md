# 💪 Best Practices & Tối Ưu Sử Dụng Copilot

**Thời gian: 15 phút**

---

## 🎯 Best Practice 1: Comment-First Development

Viết **comment chi tiết trước** → Copilot sinh code chính xác.

### ❌ SAI

```javascript
function processData(arr) {
  // Process
}
```

### ✅ ĐÚNG

```javascript
// Lọc mảng, lấy items có status = 'active'
// Sau đó map thành object {id, name}
// Sort theo name alphabetically
// Input: items (array of objects with status, id, name)
// Output: sorted array of {id, name} objects
function processData(arr) {
  return arr
    .filter(item => item.status === 'active')
    .map(item => ({ id: item.id, name: item.name }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
```

---

## 🎓 Best Practice 2: Type-Driven Development

Dùng **type hints** → Copilot hiểu type → Code đúng.

### JavaScript (JSDoc)

```javascript
/**
 * Calculate user age
 * @param {Date} birthDate - User birth date
 * @param {Date} currentDate - Reference date (default: now)
 * @returns {number} Age in years
 */
function calculateAge(birthDate, currentDate = new Date()) {
  const ageMs = currentDate - birthDate;
  return Math.floor(ageMs / (365.25 * 24 * 60 * 60 * 1000));
}
```

### Python

```python
def calculate_age(birth_date: datetime, current_date: datetime = None) -> int:
    """
    Calculate user age
    
    Args:
        birth_date (datetime): User birth date
        current_date (datetime): Reference date (default: now)
        
    Returns:
        int: Age in years
    """
    if current_date is None:
        current_date = datetime.now()
    
    return (current_date - birth_date).days // 365
```

### TypeScript

```typescript
function calculateAge(
  birthDate: Date,
  currentDate: Date = new Date()
): number {
  const ageMs = currentDate.getTime() - birthDate.getTime();
  return Math.floor(ageMs / (365.25 * 24 * 60 * 60 * 1000));
}
```

---

## 🧪 Best Practice 3: Test-Driven Prompting

Viết **test trước** → Copilot sinh code đáp ứng test.

### Example

```javascript
// 1. Viết test
describe('validateEmail', () => {
  it('should accept valid emails', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user.name@domain.co.uk')).toBe(true);
  });
  
  it('should reject invalid emails', () => {
    expect(validateEmail('invalid')).toBe(false);
    expect(validateEmail('test@')).toBe(false);
  });
  
  it('should reject empty string', () => {
    expect(validateEmail('')).toBe(false);
  });
});

// 2. Copilot chat: /generate
// "Implement validateEmail function for these tests"

// 3. Copilot sinh code:
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

---

## ⚡ Best Practice 4: Context Management

Copilot hiểu **context tốt hơn** → Gợi ý tốt hơn.

### ✅ TỐT: Rõ Context

```typescript
// Import dependencies
import { User } from './models/User';
import { Database } from './database';

// Define interface
interface UserData {
  id: number;
  email: string;
  name: string;
}

// Class có full context
class UserRepository {
  constructor(private db: Database) {}

  // Copilot biết: db là Database, return là Promise<User>
  async findById(id: number): Promise<User> {
    // Copilot sinh code đúng type
  }
}
```

### ❌ SAI: Mơ Hồ Context

```javascript
// Không import
// Không type

class UserRepository {
  constructor(db) {} // Mơ hồ

  async findById(id) { // Không biết return type
    // Copilot khó gợi ý
  }
}
```

---

## 🔄 Best Practice 5: Iterative Refinement

Hỏi **nhiều lần** để refine kết quả.

### Workflow

```
Lần 1: Generate basic function
Lần 2: Add input validation
Lần 3: Add error handling
Lần 4: Add logging
Lần 5: Add unit tests
```

### Ví Dụ

```
Chat 1:
You: "Create function to fetch users from API"
Copilot: [Sinh basic code]

Chat 2:
You: "Add error handling for network failures"
Copilot: [Thêm try/catch]

Chat 3:
You: "Add timeout after 5 seconds"
Copilot: [Thêm AbortController]

Chat 4:
You: "Add logging for debugging"
Copilot: [Thêm console.log]
```

---

## 🚀 Best Practice 6: Prompt Engineering

Viết prompt **rõ ràng & cụ thể**.

### ✅ GOOD Prompt

```
"Create an async function that:
1. Takes array of user IDs
2. Fetches each user from /api/users/{id}
3. Validates response structure
4. Returns array of User objects
5. Throws error if any fetch fails
6. Uses Promise.all for parallel requests"
```

### ❌ BAD Prompt

```
"Create a function to get users"
"Make it work"
"Do something with API"
```

---

## 📊 Best Practice 7: Know When to Use Copilot

### ✅ COPILOT EXCELS AT

- 🔄 **Boilerplate code** (imports, getters/setters)
- 🧪 **Unit tests** (test cases, assertions)
- 📝 **Documentation** (comments, docstrings)
- 🔧 **Repetitive patterns** (CRUD, API endpoints)
- 🐛 **Bug fixes** (common issues, error handling)
- 📖 **Code explanations** (understand existing code)

### ⚠️ NEED CAUTION

- 🤔 **Complex algorithms** (verify suggestions)
- 🔐 **Security code** (review carefully)
- 💾 **Data processing** (test with real data)
- 🏗️ **Architecture** (use as suggestions only)

---

## 🎯 Best Practice 8: Code Review Process

**Luôn review Copilot code!** Đừng blind accept.

### Review Checklist

```javascript
// ✅ Does it match the requirement?
// ✅ Does it handle edge cases?
// ✅ Are there security issues?
// ✅ Is error handling proper?
// ✅ Does it follow project conventions?
// ✅ Is performance acceptable?
// ✅ Are comments clear?

function myFunction() {
  // Before accepting, check above points
}
```

---

## 🔗 Best Practice 9: Maintain Consistency

Copilot **học từ codebase**.

### ✅ Consistent Naming

```javascript
// Pattern 1: Getters
getUserById()
getUserByEmail()
getUserByName()

// Copilot learns: next getter = getUserBy...

// Pattern 2: API endpoints
POST /api/users
GET /api/users/:id
PUT /api/users/:id
DELETE /api/users/:id

// Copilot learns REST pattern
```

---

## 💡 Best Practice 10: Optimize for Performance

### Comment Performance Notes

```javascript
// Efficient O(1): Use Map for ID lookups
const userMap = new Map(users.map(u => [u.id, u]));

// Inefficient O(n): Linear search
const user = users.find(u => u.id === targetId);

// When Copilot sees comment about performance,
// it suggests better solutions
```

---

## 🎬 Best Practice 11: Real-World Workflow

### Complete Example: API Endpoint

```javascript
// Step 1: Comment with requirements
// POST /api/users
// Create new user
// Required fields: name, email
// Validate: email format, name length > 2
// Return: new user object with id
// Error: 400 if invalid, 409 if email exists

// Step 2: Use Chat to implement
// Ctrl+I → "Create Express POST endpoint following above comments"

// Step 3: Copilot suggests
app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Validate
    if (!name || name.length < 2) {
      return res.status(400).json({ error: 'Invalid name' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    // Check if exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'Email exists' });
    }

    // Create and return
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Step 4: Review & test
// ✅ Check logic
// ✅ Check error handling
// ✅ Check validation
// ✅ Write tests
```

---

## 🚨 Best Practice 12: Avoid Common Mistakes

### ❌ Mistake 1: Copy-Paste Without Review

```javascript
// BAD: Don't just accept everything
// Copy first suggestion without review
```

### ❌ Mistake 2: No Context

```javascript
// BAD: Write code without imports/types
function process() {
  // Copilot confused - missing context
}
```

### ❌ Mistake 3: Vague Prompts

```javascript
// BAD: Chat "do something"
// GOOD: Chat "Create validation function that checks:
//        - Email format
//        - Password length >= 8"
```

### ❌ Mistake 4: Ignoring Edge Cases

```javascript
// BAD: Accept simple version
function divide(a, b) {
  return a / b;
}

// GOOD: Ask for edge case handling
// Chat: "/fix - Add check for b = 0"
```

---

## ✅ Productivity Tips

### Tip 1: Keyboard Mastery
```bash
Ctrl+I      # Quick chat (most used)
Ctrl+/      # Inline completion
Tab         # Accept suggestion
Esc         # Dismiss suggestion
Alt+[/]     # Next/prev suggestion
```

### Tip 2: Template Functions
Save common patterns as snippets → Copilot recognizes them.

### Tip 3: Batch Operations
Instead of:
```
Generate function A
Generate function B
Generate function C
```

Do:
```
"Create module with functions A, B, C
following these patterns..."
```

### Tip 4: Learning Mode
Read Copilot suggestions → Learn new patterns → Apply them.

---

## 📈 Measuring Productivity Gains

### Metrics to Track
- ⏱️ Time to write function (before/after Copilot)
- 🧪 Number of bugs in first iteration
- 📝 Test coverage improvement
- 🚀 Code review cycles needed

### Expected Gains
- 40-50% faster writing boilerplate
- 25-30% faster test creation
- Better documentation quality
- Reduced code review cycles

---

## 🎓 Continuous Learning

### How to Improve Copilot Skills

1. **Review suggestions** - Understand why they work
2. **Learn patterns** - Recognize Copilot patterns
3. **Experiment** - Try different prompts
4. **Read feedback** - Learn from code reviews
5. **Teach others** - Explain patterns to teammates

---

## 📚 Related Documentation

1. **[03-skills-techniques.md](03-skills-techniques.md)** - Kỹ thuật viết prompt
2. **[04-advanced-features.md](04-advanced-features.md)** - Copilot Chat
3. **[06-best-practices.md](06-best-practices.md)** - More patterns

---

## 🎯 Quick Reference Checklist

Before committing code with Copilot:

- [ ] Comments describe intent clearly
- [ ] Code has type hints/docstrings
- [ ] Edge cases handled
- [ ] Error handling present
- [ ] Tests written
- [ ] Code reviewed for security
- [ ] Follows project conventions
- [ ] Performance acceptable
- [ ] Consistent with existing code
- [ ] Documentation updated

---

**Sẵn sàng level up? Thực hành với ví dụ code! 👉 [examples/](../examples/)**
