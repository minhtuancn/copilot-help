# 🚀 Tính Năng Nâng Cao - Copilot Chat & Multi-File

**Thời gian: 20 phút**

---

## 🎯 Copilot Chat là Gì?

Copilot Chat là **interactive conversational interface** để hỏi đáp code thay vì dùng inline completion.

**So sánh:**

| Tính năng | Inline Completion | Copilot Chat |
|-----------|---|---|
| **Trigger** | Ctrl+/ | Ctrl+I |
| **Use case** | Viết function nhanh | Debug, refactor, hỏi đáp |
| **Context** | Local | Cả file + selected code |
| **Iteration** | 1 lần | Multi-turn (hỏi nhiều lần) |
| **Complexity** | Simple tasks | Complex logic |

---

## 💬 Copilot Chat Commands

### /explain - Giải Thích Code

```bash
# Bấn Ctrl+I
# Gõ: /explain
# Chọn code
# Copilot giải thích chi tiết
```

**Ví dụ:**

```javascript
// Code để giải thích:
const result = users
  .filter(u => u.active)
  .map(u => ({ name: u.name, role: u.role }))
  .sort((a, b) => a.name.localeCompare(b.name));

// Chat: /explain
// Copilot trả lời:
// 1. Filter lấy active users
// 2. Map trích name và role
// 3. Sort theo tên alphabetically
// 4. Return mảng sorted
```

---

### /fix - Fix Lỗi

```bash
# Ctrl+I → /fix → Select code
```

**Ví dụ:**

```python
# Code có bug:
def divide(a, b):
    return a / b  # Không check b = 0!

# Chat: /fix
# Copilot gợi ý:
# - Add check if b == 0
# - Throw ValueError
# - Handle edge cases
```

**Copilot sinh:**
```python
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b
```

---

### /generate - Tạo Code Mới

```bash
# Ctrl+I → /generate → Mô tả cần tạo
```

**Ví dụ:**

```
Chat: /generate
Prompt: "Tạo function pagination cho array"

Output:
function paginate(items, page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    items: items.slice(start, end),
    total: items.length,
    page,
    pageSize
  };
}
```

---

### /doc - Tạo Documentation

```bash
# Ctrl+I → /doc → Select function
```

**Ví dụ - JavaScript:**

```javascript
// Function:
function calculateBMI(height, weight) {
  return weight / (height / 100) ** 2;
}

// Chat: /doc
// Copilot sinh JSDoc:
/**
 * Calculate Body Mass Index (BMI)
 * @param {number} height - Height in centimeters
 * @param {number} weight - Weight in kilograms
 * @returns {number} BMI value
 * @throws {Error} If height or weight is invalid
 * @example
 * const bmi = calculateBMI(175, 70);
 * console.log(bmi); // 22.86
 */
```

---

### /tests - Tạo Unit Tests

```bash
# Ctrl+I → /tests → Select function
```

**Ví dụ:**

```javascript
// Function:
function isValidPassword(password) {
  return password.length >= 8 && /[A-Z]/.test(password);
}

// Chat: /tests
// Copilot sinh tests:
describe('isValidPassword', () => {
  it('should return true for valid password', () => {
    expect(isValidPassword('MyPass123')).toBe(true);
  });
  
  it('should return false if too short', () => {
    expect(isValidPassword('Short1')).toBe(false);
  });
  
  it('should return false without uppercase', () => {
    expect(isValidPassword('password123')).toBe(false);
  });
});
```

---

### /refactor - Cải Thiện Code

```bash
# Ctrl+I → /refactor → Select code
```

**Ví dụ:**

```javascript
// Trước (Callback hell):
function getUser(id) {
  database.connect(err => {
    if (!err) {
      database.query(`SELECT * FROM users WHERE id=${id}`, (err, row) => {
        if (row) {
          console.log(row);
        }
      });
    }
  });
}

// Chat: /refactor
// Prompt: "Convert to async/await"

// Copilot sinh:
async function getUser(id) {
  try {
    await database.connect();
    const row = await database.query(
      'SELECT * FROM users WHERE id = ?',
      [id]
    );
    return row;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
```

---

## 🔗 Symbol & File References

Trong Chat, reference code từ các files khác.

### @symbol - Reference Symbol

```bash
Chat: /explain @getUserById
# Copilot focus vào function getUserById
```

### #function - Reference Function

```bash
Chat: #calculateTotal /fix
# Fix function calculateTotal
```

### @filename - Reference File

```bash
Chat: /analyze @UserService.ts
# Analyze toàn bộ UserService file
```

---

## 🎬 Multi-Turn Conversation

Chat cho phép hỏi nhiều lần để refine kết quả.

### Ví Dụ: Build Function Từng Bước

```
Lần 1:
You: "Viết function tính average array"
Copilot: [Sinh basic code]

Lần 2:
You: "Thêm input validation"
Copilot: [Thêm checks]

Lần 3:
You: "Thêm error handling"
Copilot: [Thêm try/catch]

Lần 4:
You: "Thêm unit tests"
Copilot: [Sinh tests]
```

---

## 📝 Copilot Chat Best Practices

### ✅ Tốt: Rõ Ràng & Cụ Thể

```bash
Chat: "Create function to validate user input
       - Check email format
       - Check password strength (min 8 chars, 1 uppercase)
       - Return {valid: bool, errors: []}"
```

### ❌ Không Tốt: Quá Mơ Hồ

```bash
Chat: "Make it better"
Chat: "Fix this"
Chat: "Do something"
```

---

## 🔑 Advanced Prompt Patterns

### Pattern 1: Context + Constraints

```bash
Chat: "Using TypeScript and async/await,
       write function to:
       1. Fetch user from API
       2. Validate response
       3. Save to database
       4. Return formatted user object"
```

### Pattern 2: Example-Based

```bash
Chat: "Write similar function to getUserById
       but for getting users by email.
       Follow same error handling pattern."
```

### Pattern 3: Iterative Refinement

```
1st: "Generate API endpoint for CRUD users"
2nd: "Add authentication check"
3rd: "Add rate limiting"
4th: "Add logging"
```

---

## 🎓 Real-World Examples

### Example 1: API Service

```bash
Chat: "Create UserService class with methods:
       - getUser(id)
       - createUser(userData)
       - updateUser(id, userData)
       - deleteUser(id)
       
       Use async/await, proper error handling,
       and TypeScript types."
```

**Copilot sinh:**
```typescript
class UserService {
  constructor(private apiUrl: string) {}

  async getUser(id: number): Promise<User> {
    try {
      const response = await fetch(`${this.apiUrl}/users/${id}`);
      if (!response.ok) throw new Error('User not found');
      return response.json();
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw error;
    }
  }
  
  // ... other methods
}
```

---

### Example 2: React Component

```bash
Chat: "@Button.tsx /refactor

       Improve this component:
       - Add loading state with spinner
       - Add disabled state styling
       - Add accessibility attributes (aria-*)"
```

**Copilot refactor component...**

---

### Example 3: Data Processing

```bash
Chat: "Create data pipeline function:
       1. Read CSV file
       2. Parse and validate data
       3. Transform to objects
       4. Filter invalid records
       5. Save to database
       
       Include error handling and logging."
```

---

## 💡 Pro Tips

### 1️⃣ Use Context Efficiently
```bash
# ✅ GOOD: Reference relevant file
Chat: "@database.ts /fix - This query is slow"

# ❌ BAD: No context
Chat: "Fix the slow query"
```

### 2️⃣ Ask for Explanation
```bash
# ✅ GOOD: Understand the suggestion
Chat: "Why did you use map() instead of filter()?"
Copilot: [Explains the choice]

# ❌ BAD: Just accept without understanding
```

### 3️⃣ Iterative Approach
```bash
# ✅ GOOD: Build gradually
1. Generate basic function
2. Add validation
3. Add error handling
4. Add tests

# ❌ BAD: Ask for everything at once
"Do everything"
```

### 4️⃣ Be Specific About Requirements
```bash
# ✅ GOOD: Clear requirements
Chat: "Return success/error response with:
       - statusCode: number
       - message: string
       - data: T (generic)"

# ❌ BAD: Vague
Chat: "Return response"
```

---

## 🚀 Workflow: Using Chat for Refactoring

### Before:
```javascript
function processUsers(users) {
  let results = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].active) {
      results.push({
        name: users[i].name,
        email: users[i].email
      });
    }
  }
  return results;
}
```

### Chat Workflow:
```
1. Open Chat (Ctrl+I)
2. Gõ: "/refactor"
3. Select code
4. Add instruction: "Use modern array methods, add TypeScript types"
5. Copilot refactor

// Result:
function processUsers(users: User[]): UserInfo[] {
  return users
    .filter(u => u.active)
    .map(u => ({ name: u.name, email: u.email }));
}
```

---

## 🐛 Debugging with Chat

```bash
Chat: "This function returns wrong results
       for edge cases.
       @myFunction.js
       
       Why might this be wrong?
       How to fix?"

Copilot: [Analyzes code and suggests fixes]
```

---

## 📚 Tài Liệu Tiếp Theo

1. **[05-agents-and-extensions.md](05-agents-and-extensions.md)** - Copilot CLI & Agents
2. **[06-best-practices.md](06-best-practices.md)** - Best practices
3. **[examples/](../examples/)** - Code examples

---

**Sẵn sàng nâng cao hơn? 👉 [05-agents-and-extensions.md](05-agents-and-extensions.md)**
