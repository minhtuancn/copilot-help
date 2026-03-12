# 🎮 Lệnh Cơ Bản & Shortcuts GitHub Copilot

**Thời gian: 5 phút**

---

## ⌨️ Keyboard Shortcuts

### Inline Completion (Gợi ý nhanh trong code)

| Hành động | Windows/Linux | Mac | IDE |
|-----------|---|---|---|
| **Trigger inline completion** | `Ctrl + /` | `Cmd + /` | VS Code |
| **Trigger inline completion** | `Alt + \` | `Option + \` | JetBrains |
| **Accept suggestion** | `Tab` | `Tab` | Tất cả |
| **Dismiss suggestion** | `Esc` | `Esc` | Tất cả |
| **Next suggestion** | `Alt + ]` | `Option + ]` | VS Code |
| **Previous suggestion** | `Alt + [` | `Option + [` | VS Code |

### Copilot Chat (Interactive mode)

| Hành động | Windows/Linux | Mac | IDE |
|-----------|---|---|---|
| **Open Copilot Chat** | `Ctrl + I` | `Cmd + I` | VS Code |
| **Open Chat in sidebar** | `Ctrl + Shift + I` | `Cmd + Shift + I` | VS Code |
| **Quick chat** | `Ctrl + I` | `Cmd + I` | JetBrains |
| **Inline chat** | `Alt + /` | `Option + /` | JetBrains |

---

## 📝 Cách Hoạt Động - Ví Dụ Thực Tế

### Example 1: Inline Completion Cơ Bản

**JavaScript - Viết hàm:**

```javascript
// File: utils.js

// Hàm kiểm tra email hợp lệ
function isValidEmail(email) {
  // Bấn Ctrl+/ hoặc chờ gợi ý
  // Copilot sẽ gợi ý:
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // return emailRegex.test(email);
}

// ✅ Accept với Tab
// ❌ Dismiss với Esc nếu không thích
```

**Gợi ý của Copilot:**
```javascript
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

---

### Example 2: Viết Unit Test

**Python - Jest style comment:**

```python
# File: test_calculator.py

# Hàm cộng hai số
def add(a, b):
    return a + b

# Test cho hàm add
# Bấn Ctrl+I để chat, hỏi: "Viết test cho hàm add"
```

**Gợi ý của Copilot:**
```python
import pytest

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
    assert add(100, 200) == 300

def test_add_floats():
    assert add(1.5, 2.5) == 4.0
    assert add(-0.5, 0.5) == 0.0
```

---

### Example 3: API Endpoint

**Node.js/Express:**

```javascript
// File: routes/users.js

const express = require('express');
const router = express.Router();

// GET endpoint để lấy tất cả users
// Bấn Ctrl+/ → Copilot gợi ý
router.get('/', async (req, res) => {
  // Copilot sẽ gợi ý logic hoàn chỉnh
});

// Gợi ý của Copilot:
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

---

### Example 4: Tạo Class TypeScript

**TypeScript:**

```typescript
// File: models/User.ts

class User {
  // Bấn Ctrl+I, gõ: "Tạo constructor với properties: id, name, email"
  constructor(id: number, name: string, email: string) {
    // Copilot sẽ hoàn thành
  }

  // Hàm validate email
  validateEmail(): boolean {
    // Copilot sẽ gợi ý
  }
}
```

**Gợi ý của Copilot:**
```typescript
class User {
  constructor(
    public id: number,
    public name: string,
    public email: string
  ) {}

  validateEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
}
```

---

## 💬 Copilot Chat Commands

### Slash Commands (Dùng trong Copilot Chat)

```
/explain    - Giải thích code hiện tại
/fix        - Sửa lỗi trong code
/generate   - Tạo code mới
/doc        - Tạo documentation
/tests      - Tạo unit tests
/refactor   - Refactor code
```

### Cách Dùng Slash Commands

**Mở Chat:**
```
Ctrl+I (hoặc Cmd+I trên Mac)
```

**Ví dụ 1: Giải thích code**
```
Bấn Ctrl+I
Gõ: /explain
Chọn code (hoặc toàn file)
Copilot giải thích
```

**Ví dụ 2: Fix lỗi**
```javascript
// Code có lỗi:
function divide(a, b) {
  return a / b; // Không check nếu b === 0
}

// Chat: /fix
// Copilot sẽ gợi ý thêm error handling
```

**Ví dụ 3: Tạo documentation**
```
Chat: /doc
Copilot tạo JSDoc/docstring
```

---

## 🎯 Best Practices for Inline Completion

### ✅ Khi Copilot Hiệu Quả Nhất

**1. Viết Comment Chi Tiết**

```javascript
// ❌ Không tốt (comment quá ngắn)
// Check if valid

// ✅ Tốt (chi tiết)
// Kiểm tra email hợp lệ với regex, trả về true/false
function isValidEmail(email) {
  // Copilot hiểu rõ và gợi ý tốt hơn
}
```

**2. Dùng Type Hints (TypeScript/Python)**

```typescript
// ✅ Tốt (có type)
function filterUsers(users: User[], role: string): User[] {
  // Copilot biết trả về mảng User
}

// ❌ Không tốt (không rõ type)
function filterUsers(users, role) {
  // Copilot khó biết output type
}
```

**3. Dùng Consistent Naming**

```javascript
// ✅ Tốt (naming pattern rõ)
function getUserById(id) { }
function getUserByEmail(email) { }
function getUserByUsername(username) { }

// Copilot học pattern và gợi ý theo cách nhất quán
```

---

### ❌ Khi Cần Cẩn Thận

**1. Logic Phức Tạp**
```javascript
// ❌ Không nên dùng inline completion
// Mà dùng Chat (Ctrl+I) để hỏi chi tiết
// Ví dụ: Algorithm complexity cao
function mergeSort(arr) {
  // Nên dùng Ctrl+I hỏi thay vì inline
}
```

**2. Security-Sensitive Code**
```javascript
// ❌ KHÔNG dùng inline cho mật khẩu/keys
// const apiKey = ""; // Không trigger Copilot
// 
// ✅ Load từ env variables:
const apiKey = process.env.API_KEY;
```

**3. Code Liên Quan Đến Data**
```python
# ❌ Không nên:
def process_sensitive_data(data):
    # Copilot có thể sinh sai cách xử lý

# ✅ Nên:
# Viết unit test trước (TDD)
# Rồi dùng Ctrl+I hỏi chi tiết
```

---

## 📊 Copilot Chat Advanced

### Opening Chat Panels

**VS Code:**
```
Ctrl+I        → Inline chat (tại cursor)
Ctrl+Shift+I  → Chat trong sidebar
@symbol       → Reference symbol (trong chat)
#file         → Reference file
```

**JetBrains:**
```
Cmd+I         → Inline chat
Option+/      → Quick chat
```

### Chat Syntax

```
Bạn: /explain
    @MyClass.js
    
    Tại sao đoạn code này lại chậm?

Copilot: [Giải thích + gợi ý tối ưu]
```

---

## 🔄 Workflow Thực Tế

### Workflow 1: Viết Function Nhanh

```
1. Comment mô tả function: "Hàm tính BMI từ height và weight"
2. Bấn Ctrl+/ → Copilot gợi ý
3. Accept với Tab (nếu đúng)
4. Bấn Ctrl+I để thêm validation nếu cần
5. Bấn Ctrl+I để tạo test
```

**Ví dụ:**
```javascript
// Tính BMI từ chiều cao (cm) và cân nặng (kg)
function calculateBMI(height, weight) {
  // Copilot tạo: return weight / (height / 100) ** 2;
}
```

### Workflow 2: Fix Bug

```
1. Thấy bug
2. Bấn Ctrl+I
3. Gõ: "/fix"
4. Copilot gợi ý fix
5. Review + accept
```

---

## 🎓 Học từ Suggestions

Copilot không chỉ tạo code, mà còn giúp bạn **học** syntax/patterns:

```javascript
// Bạn gõ:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = 

// Copilot gợi ý:
const evenNumbers = numbers.filter(n => n % 2 === 0);

// 💡 Bạn học được cách dùng .filter() !
```

---

## ⚡ Pro Tips

1. **Inline Completion tốt nhất cho boilerplate code**
   - Import statements
   - Function signatures
   - Getter/setter
   - CRUD operations

2. **Chat (Ctrl+I) tốt nhất cho complex logic**
   - Algorithms
   - Debug
   - Refactoring
   - Architecture decisions

3. **Combine Comments + Typing**
   ```typescript
   // Hàm async fetch users từ API
   async function fetchUsers(page: number): Promise<User[]> {
     // Copilot hiểu rõ: return Promise<User[]>
   }
   ```

4. **Use Context References in Chat**
   ```
   Bấn Ctrl+I
   Gõ: "/fix @MainComponent.tsx"
   Copilot có full context của file
   ```

---

## 📚 Tài Liệu Tiếp Theo

1. **[03-skills-techniques.md](03-skills-techniques.md)** - Kỹ thuật viết prompt chi tiết
2. **[examples/](../examples/)** - Ví dụ code cho từng ngôn ngữ
3. **[04-advanced-features.md](04-advanced-features.md)** - Tính năng nâng cao

---

**Sẵn sàng học thêm? 👉 [03-skills-techniques.md](03-skills-techniques.md)**
