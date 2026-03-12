# 📚 Glossary - Thuật Ngữ & Định Nghĩa Copilot

Danh sách thuật ngữ quan trọng liên quan đến GitHub Copilot.

---

## A

### **AI-Assisted Coding**
Quá trình viết code với sự hỗ trợ của AI. GitHub Copilot tự động gợi ý code dựa trên comments, context, và pattern học được.

**Ví dụ:**
```javascript
// Hàm kiểm tra email
// Copilot sẽ gợi ý implementation
function isValidEmail(email) {
  // AI tự động hoàn thành
}
```

### **Autocomplete / Inline Completion**
Tính năng tự động hoàn thành code trực tiếp khi bạn gõ. Copilot gợi ý từng dòng code dựa trên context hiện tại.

**Trigger:** `Ctrl+/` (Windows/Linux) hoặc `Cmd+/` (Mac)

---

## C

### **Chat Interface**
Giao diện chat cho phép hỏi đáp interactive với Copilot. Khác với inline completion, chat cho phép multi-turn conversation.

**Trigger:** `Ctrl+I` (Windows/Linux) hoặc `Cmd+I` (Mac)

**Ví dụ commands:**
- `/explain` - Giải thích code
- `/fix` - Fix lỗi
- `/generate` - Tạo code mới
- `/doc` - Tạo documentation
- `/tests` - Tạo unit tests

### **Comment-Driven Development**
Phương pháp viết comments chi tiết trước code, để Copilot hiểu intent và sinh code chính xác hơn.

**Best Practice:**
```javascript
// ❌ SAI - Comment quá ngắn
// Validate email

// ✅ ĐÚNG - Comment chi tiết
// Kiểm tra email hợp lệ
// Input: email (string)
// Output: boolean (true = valid, false = invalid)
// Example: isValidEmail("test@example.com") => true
function isValidEmail(email) {
  // Copilot hiểu rõ và sinh code đúng
}
```

### **Context Window**
Lượng thông tin mà Copilot có thể "nhìn thấy" khi sinh code. Bao gồm file hiện tại, imported files, type definitions.

---

## E

### **Extension**
Công cụ mở rộng chức năng IDE để tích hợp Copilot. Có extensions cho VS Code, JetBrains, Vim, v.v.

---

## F

### **Few-Shot Prompting**
Cung cấp ví dụ trước để Copilot học pattern và sinh code tương tự.

**Ví dụ:**
```javascript
// Ví dụ cách sử dụng:
// convertCurrency(100, "USD", "EUR") => {amount: 92.5, from: "USD", to: "EUR"}

// Sử dụng API: exchangerate-api.com
// Response format: { rates: {EUR: 0.925, GBP: 0.79} }

function convertCurrency(amount, from, to) {
  // Copilot học từ ví dụ ở trên
}
```

---

## G

### **GitHub Copilot**
AI code completion tool được phát triển bởi GitHub và OpenAI. Nó học từ miliards dòng code công khai và sinh code tự động.

---

## I

### **IDE (Integrated Development Environment)**
Phần mềm soạn thảo code. GitHub Copilot hỗ trợ: VS Code, JetBrains, Vim, Visual Studio, GitHub.dev.

---

## J

### **JSDoc**
Cách viết comment trong JavaScript để định nghĩa types, parameters, return values.

**Ví dụ:**
```javascript
/**
 * Tính tổng mảng số
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Sum of all numbers
 */
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
```

---

## M

### **Model**
Mô hình AI được sử dụng bởi Copilot. GitHub Copilot sử dụng mô hình GPT-based được huấn luyện trên code công khai.

### **Multi-File Editing**
Tính năng cho phép Copilot chỉnh sửa/tạo code trong nhiều files cùng lúc.

### **Multi-Turn Conversation**
Chat với Copilot qua nhiều lần hỏi liên tiếp, có thể refine kết quả từng bước.

**Ví dụ workflow:**
```
Lần 1: "Viết function calculate average"
Lần 2: "Thêm input validation"
Lần 3: "Thêm error handling"
Lần 4: "Viết unit tests"
```

---

## P

### **Prompt**
Đầu vào cho Copilot - có thể là comment, code structure, hoặc chat message.

**Types:**
- **Implicit prompt:** Comments describe what code should do
- **Explicit prompt:** Chat message describe requirement
- **Context-based prompt:** Existing code pattern guides next suggestions

### **Prompt Engineering**
Kỹ thuật viết prompts (comments/questions) hiệu quả để Copilot sinh code đúng ý muốn.

**Best Practices:**
- Viết comments chi tiết
- Cung cấp ví dụ input/output
- Define types explicitly
- Mô tả edge cases

---

## R

### **Refactoring**
Cải thiện code mà không thay đổi chức năng. Copilot có thể giúp refactor via `/refactor` command.

**Ví dụ:**
```javascript
// Trước: Callback hell
function getUser(id) {
  database.connect(err => {
    if (!err) {
      database.query(..., (err, row) => { ... });
    }
  });
}

// Sau: Async/await (Copilot refactor)
async function getUser(id) {
  await database.connect();
  const row = await database.query(...);
  return row;
}
```

---

## S

### **Slash Commands**
Lệnh đặc biệt trong Copilot Chat bắt đầu với `/`:
- `/explain` - Giải thích code
- `/fix` - Fix bugs
- `/generate` - Tạo code mới
- `/doc` - Tạo documentation
- `/tests` - Tạo unit tests
- `/refactor` - Refactor code

### **Symbol**
Tên identifier trong code (function, variable, class). Có thể reference trong chat với `#functionName`.

---

## T

### **Test-Driven Development (TDD)**
Phương pháp viết tests trước, rồi viết code. Copilot có thể sinh code để pass tests.

**Copilot-friendly workflow:**
```
1. Viết tests
2. Chat: "/generate - Implement function for these tests"
3. Copilot sinh code
```

### **Type Hints / Type Definitions**
Định nghĩa kiểu dữ liệu của parameters, return values. Giúp Copilot hiểu rõ hơn.

**Ví dụ:**
```typescript
// TypeScript (dễ nhất cho Copilot)
function calculateBMI(height: number, weight: number): number {
  return weight / (height / 100) ** 2;
}

// Python
def calculate_bmi(height: float, weight: float) -> float:
    return weight / (height / 100) ** 2

// JavaScript (JSDoc)
/**
 * @param {number} height
 * @param {number} weight
 * @returns {number}
 */
function calculateBMI(height, weight) {
  return weight / (height / 100) ** 2;
}
```

---

## U

### **Unit Test**
Test cho một function/unit nhỏ. Copilot có thể sinh unit tests tự động.

**Frameworks:**
- JavaScript: Jest, Vitest, Mocha
- Python: pytest, unittest
- TypeScript: Jest, Vitest

---

## V

### **Validation**
Kiểm tra tính hợp lệ của dữ liệu (email format, password strength, v.v.). Copilot tốt để sinh validation code.

---

## W

### **Workflow**
Quy trình làm việc với Copilot. Ví dụ:
1. Viết comment chi tiết
2. Copilot gợi ý code
3. Accept hoặc modify
4. Add tests
5. Refactor nếu cần

---

## X-Z

*(Chỗ này có thể thêm nếu cần)*

---

## 📚 Liên Quan

- **[Best Practices](Best-Practices.md)** - Các thực hành tốt nhất
- **[Tips & Tricks](Tips-and-Tricks.md)** - Mẹo và thủ thuật
- **[Copilot vs Others](Copilot-VS-Others.md)** - So sánh với competitors

---

## 🔗 Links Hữu Ích

- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [OpenAI GPT Models](https://openai.com/)
- [VS Code Copilot Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

---

**Last Updated:** 2025-03-12  
**Maintained by:** Community
