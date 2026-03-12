# 💡 Kỹ Thuật & Skills - Viết Prompt Hiệu Quả

**Thời gian: 30 phút**

Đây là chìa khóa để dùng Copilot hiệu quả! Cách bạn viết prompt/comment quyết định chất lượng gợi ý.

---

## 🎯 Skill 1: Comment-Driven Development

Viết **comment chi tiết** trước code → Copilot sinh code đúng.

### ❌ SAI: Comment quá ngắn

```javascript
// Hàm kiểm tra email
function isValidEmail(email) {
  
}
```

**Vấn đề:** Copilot không biết cách làm chi tiết.

---

### ✅ ĐÚNG: Comment chi tiết & cụ thể

```javascript
// Kiểm tra email hợp lệ
// Format: xxx@example.com
// Return: boolean (true = valid, false = invalid)
function isValidEmail(email) {
  // Copilot sinh code chính xác
}
```

**Copilot sinh:**
```javascript
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

---

## 📋 Mẫu Comment Tốt

### JavaScript

```javascript
// Tính tổng mảng số
// Tham số: numbers (array of numbers)
// Return: số tổng (number)
// Ví dụ: sumArray([1,2,3]) = 6
function sumArray(numbers) {
  // Copilot sẽ sinh: return numbers.reduce((a,b) => a+b, 0);
}
```

### Python

```python
# Lấy tên từ full name string
# Tham số:
#   - full_name: str (ví dụ: "John Doe")
# Return:
#   - dict với keys: first_name, last_name
# Ví dụ: parse_name("John Doe") = {first: "John", last: "Doe"}
def parse_name(full_name):
    # Copilot sẽ sinh logic chia tên
    pass
```

### TypeScript

```typescript
// Lọc mảng users theo role
// Tham số:
//   - users: User[] - array of user objects
//   - role: string - vai trò cần lọc
// Return: User[] - mảng user có role matching
function filterUsersByRole(users: User[], role: string): User[] {
  // Copilot hiểu clear type hints
}
```

---

## 🔥 Skill 2: Ví Dụ Trong Code (Few-Shot Prompting)

Cho Copilot ví dụ → Nó học pattern → Sinh code theo pattern.

### ❌ SAI: Không ví dụ

```javascript
function convertCurrency(amount, from, to) {
  // Copilot không biết API dùng cái nào, format response
}
```

---

### ✅ ĐÚNG: Có ví dụ

```javascript
// Ví dụ cách sử dụng:
// convertCurrency(100, "USD", "EUR") → {amount: 92.5, from: "USD", to: "EUR"}

// Sử dụng API: exchangerate-api.com
// Response format: { rates: {EUR: 0.925, GBP: 0.79} }

function convertCurrency(amount, from, to) {
  // Copilot học từ ví dụ và tạo code đúng
}
```

**Copilot sinh:**
```javascript
async function convertCurrency(amount, from, to) {
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
  const data = await response.json();
  const rate = data.rates[to];
  return {
    amount: amount * rate,
    from,
    to
  };
}
```

---

## 💪 Skill 3: Ngữ Cảnh (Context Management)

Copilot hiểu rõ context → Gợi ý tốt hơn.

### ✅ VÍ DỤ: Khai báo biến/type trước

```typescript
// Khai báo type trước
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// Giờ Copilot biết structure của User
function getUserById(id: number): User {
  // Copilot sẽ sinh code return đúng type User
}
```

### ✅ VÍ DỤ: Import statement

```javascript
// Copilot biết từ import
import axios from 'axios';
import { useEffect, useState } from 'react';

// Function dùng axios, React hooks
function fetchUserData() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Copilot sẽ dùng axios + React pattern
    axios.get('/api/user').then(res => setUser(res.data));
  }, []);
}
```

---

## 🎬 Skill 4: Slash Commands (Chat Mode)

Dùng Commands trong Chat để hỏi cụ thể.

### /explain - Giải thích code

```bash
# Bấn Ctrl+I → gõ:
/explain

# Copilot giải thích code hiện tại chi tiết
```

**Ví dụ:**
```javascript
// Bạn gõ /explain cho code:
const result = users
  .filter(u => u.active)
  .map(u => u.name)
  .sort();

// Copilot trả lời:
// 1. Filter lấy users có active=true
// 2. Map lấy field name từ mỗi user
// 3. Sort tên alphabetically
// 4. Return mảng tên sorted
```

### /fix - Fix lỗi

```javascript
// Code có bug:
function divide(a, b) {
  return a / b;
}

// Chat: /fix
// Copilot gợi ý thêm:
// - Check b !== 0
// - Throw error nếu b === 0
```

### /generate - Tạo code mới

```bash
# Chat: /generate
# Prompt: "Tạo function xử lý pagination cho array"

# Copilot sinh:
function paginate(items, page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return items.slice(start, end);
}
```

### /doc - Tạo documentation

```bash
# Chat: /doc
# Select: function calculateBMI(height, weight)

# Copilot sinh:
/**
 * Tính chỉ số BMI
 * @param {number} height - Chiều cao (cm)
 * @param {number} weight - Cân nặng (kg)
 * @returns {number} BMI value
 */
```

---

## 🧪 Skill 5: Test-Driven Prompting (TDD)

Viết test trước → Copilot sinh code đáp ứng test.

### ✅ VÍ DỤ: JavaScript

```javascript
// Viết test trước:
test('isValidEmail returns true for valid email', () => {
  expect(isValidEmail('test@example.com')).toBe(true);
  expect(isValidEmail('invalid.email')).toBe(false);
  expect(isValidEmail('')).toBe(false);
});

// Giờ viết function với Ctrl+I
// Chat: "Implement function đáp ứng test này"
// Copilot sinh code đúng
```

### ✅ VÍ DỤ: Python

```python
import pytest

def test_factorial():
    assert factorial(0) == 1
    assert factorial(5) == 120
    assert factorial(1) == 1
    with pytest.raises(ValueError):
        factorial(-1)

# Chat: /generate
# Prompt: "Implement factorial function for tests"
# Copilot sinh code
```

---

## 🎨 Skill 6: Refactoring Prompts

Yêu cầu cải thiện code cụ thể.

### ✅ VÍ DỤ

```javascript
// Code cũ (nested callbacks):
function getUser(id) {
  database.connect(err => {
    if (!err) {
      database.query(`SELECT * FROM users WHERE id=${id}`, (err, row) => {
        if (!row) {
          console.log('User not found');
        } else {
          console.log(row);
        }
      });
    }
  });
}

// Chat: /refactor
// Prompt: "Convert to async/await with proper error handling"
// Copilot sinh:
async function getUser(id) {
  try {
    await database.connect();
    const row = await database.query(`SELECT * FROM users WHERE id = ?`, [id]);
    return row || null;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}
```

---

## 🔗 Skill 7: Symbol/File References (Chat)

Trong Chat, reference code từ files khác.

```bash
# Chat: Ctrl+I
# Gõ: "@UserController.ts /fix"

# Copilot có full context của UserController
# Gợi ý fix chính xác hơn
```

**Syntax:**
```
@filename.ext    - Reference file
#functionName    - Reference function
@ClassName       - Reference class
```

---

## 🚀 Skill 8: Prompt Chaining (Multi-turn Chat)

Hỏi nhiều lần để refine kết quả.

### ✅ VÍ DỤ

```
Lần 1:
You: "Viết function calc average"
Copilot: [sinh code basic]

Lần 2:
You: "Thêm input validation"
Copilot: [thêm validation]

Lần 3:
You: "Thêm unit tests"
Copilot: [sinh tests]
```

---

## 📊 Ví Dụ Thực Tế: API Endpoint

### ❌ SAI: Comment quá ngắn

```javascript
// Get user
app.get('/users/:id', (req, res) => {
  // Copilot không biết cần gì
});
```

---

### ✅ ĐÚNG: Chi tiết

```javascript
// GET /users/:id
// Lấy user theo ID
// Parameters: id (number) - User ID
// Response: {id, name, email, role}
// Error: 404 nếu user không tồn tại
// Error: 500 nếu database error
app.get('/users/:id', async (req, res) => {
  // Copilot sinh code hoàn chỉnh với error handling
});
```

**Copilot sinh:**
```javascript
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});
```

---

## 📚 Ví Dụ Thực Tế: React Component

### ✅ ĐÚNG: Comment chi tiết

```typescript
// Button Component
// Props:
// - label (string): nút text
// - onClick (function): callback khi click
// - disabled (boolean): disable state
// - loading (boolean): show spinner khi loading
// 
// Ví dụ: <Button label="Submit" onClick={handleSubmit} loading={isLoading} />
function Button({ label, onClick, disabled, loading }) {
  // Copilot sẽ sinh JSX hoàn chỉnh
}
```

**Copilot sinh:**
```typescript
function Button({ label, onClick, disabled, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="btn"
    >
      {loading ? <Spinner /> : label}
    </button>
  );
}
```

---

## ⚡ Pro Tips & Tricks

### 1️⃣ Dùng Type Hints

```typescript
// ✅ Tốt (Copilot hiểu type)
function processData(data: User[], filter: string): User[] {
  // ...
}

// ❌ Không tốt
function processData(data, filter) {
  // Copilot khó hiểu
}
```

### 2️⃣ Naming Conventions

```javascript
// ✅ Tốt (consistent naming)
function getUserById(id) { }
function getUserByEmail(email) { }
function getUserByRole(role) { }

// Copilot học pattern → sinh tương tự
```

### 3️⃣ Code Formatting

```javascript
// ✅ Format đẹp → Copilot hiểu tốt hơn
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3
};

// ❌ Format xấu
const config = {
  apiUrl:'https://api.example.com',timeout:5000,retries:3
};
```

### 4️⃣ Lập Trình Theo Blocks

```javascript
// ✅ Tốt (rõ ràng từng phần)
// 1. Validate input
if (!email || !email.includes('@')) {
  return null;
}

// 2. Query database
const user = await db.find({email});

// 3. Return result
return user;
```

---

## 🎓 Bài Tập Thực Hành

### Bài 1: Viết Comment Chi Tiết

Viết comment cho function:
```javascript
function calculateDiscount(price, category) {
  // TODO: Viết comment chi tiết
  // Copilot sẽ sinh code
}
```

**Giải pháp:**
```javascript
// Tính discount dựa trên giá và loại sản phẩm
// Categories: 'premium' (10%), 'standard' (5%), 'basic' (0%)
// Return: {originalPrice, discount, finalPrice}
function calculateDiscount(price, category) {
  // Copilot sẽ sinh logic
}
```

### Bài 2: Dùng Chat để Debug

Code có bug:
```javascript
function reverseString(str) {
  return str.split('').reverse().join();
}
```

Chat: `/fix` → Copilot gợi ý thêm error handling

---

## 📚 Tài Liệu Tiếp Theo

1. **[04-advanced-features.md](04-advanced-features.md)** - Copilot Chat nâng cao
2. **[examples/](../examples/)** - Mã ví dụ chi tiết
3. **[06-best-practices.md](06-best-practices.md)** - Best practices

---

**Sẵn sàng xem ví dụ code? 👉 [examples/](../examples/)**
