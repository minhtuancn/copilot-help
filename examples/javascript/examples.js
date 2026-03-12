// ============================================
// Copilot JavaScript Examples
// ============================================

// Example 1: Basic Function with Copilot
// ============================================

// Hàm kiểm tra xem chuỗi có phải palindrome không
// Input: string - chuỗi cần kiểm tra
// Output: boolean - true nếu là palindrome, false nếu không
// Ví dụ: isPalindrome("racecar") => true
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Test
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false

---

// Example 2: Array Methods with Comments
// ============================================

// Lọc mảng users, chỉ lấy những user có role = 'admin'
// Input: users (array), role (string)
// Output: filtered array
const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'admin' }
];

function filterUsersByRole(users, role) {
  return users.filter(user => user.role === role);
}

const admins = filterUsersByRole(users, 'admin');
console.log(admins); // [{id:1, name:'Alice', role:'admin'}, {id:3, ...}]

---

// Example 3: Object Methods
// ============================================

// Tạo object mới với chỉ selected fields
// Input: user object, array of field names
// Output: new object với chỉ selected fields
// Ví dụ: selectFields(user, ['name', 'email']) => {name: '...', email: '...'}
function selectFields(obj, fields) {
  return fields.reduce((acc, field) => {
    acc[field] = obj[field];
    return acc;
  }, {});
}

const user = { id: 1, name: 'Alice', email: 'alice@test.com', password: '***' };
const selected = selectFields(user, ['name', 'email']);
console.log(selected); // {name: 'Alice', email: 'alice@test.com'}

---

// Example 4: String Manipulation
// ============================================

// Chia full name thành first name, last name
// Input: fullName (string) - ví dụ "John Doe"
// Output: object {firstName, lastName}
function parseName(fullName) {
  const parts = fullName.trim().split(/\s+/);
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' ') || ''
  };
}

console.log(parseName("John Doe")); // {firstName: 'John', lastName: 'Doe'}
console.log(parseName("Mary Jane Watson")); // {firstName: 'Mary', lastName: 'Jane Watson'}

---

// Example 5: Async/Await with Error Handling
// ============================================

// Fetch user data từ API, xử lý lỗi
// Input: userId (number)
// Output: Promise<user object>
// Error: throw error nếu fetch fail
async function fetchUser(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}

// Usage
// fetchUser(1).then(user => console.log(user))
//   .catch(error => console.error(error));

---

// Example 6: Validation Function
// ============================================

// Kiểm tra email có hợp lệ không
// Pattern: xxx@xxx.xxx
// Return: boolean
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid.email")); // false
console.log(isValidEmail("test@domain")); // false

---

// Example 7: Class with Methods
// ============================================

class User {
  // Constructor: tạo user với id, name, email
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Validate email format
  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  // Return object dạng JSON
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email
    };
  }
}

const user = new User(1, 'Alice', 'alice@test.com');
console.log(user.validateEmail()); // true
console.log(user.toJSON()); // {id: 1, name: 'Alice', email: '...'}

---

// Example 8: Map/Reduce/Filter Chain
// ============================================

const products = [
  { id: 1, name: 'Laptop', price: 1000, inStock: true },
  { id: 2, name: 'Mouse', price: 25, inStock: false },
  { id: 3, name: 'Keyboard', price: 75, inStock: true }
];

// Lấy sản phẩm còn hàng, tính giá giảm 10%, map thành {name, finalPrice}
const discountedProducts = products
  .filter(p => p.inStock)
  .map(p => ({ name: p.name, finalPrice: p.price * 0.9 }));

console.log(discountedProducts);
// [{name: 'Laptop', finalPrice: 900}, {name: 'Keyboard', finalPrice: 67.5}]

---

// Example 9: Debounce/Throttle Function
// ============================================

// Debounce: chạy function sau N ms khi user dừng gõ
// Input: function, delay (ms)
// Output: debounced function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Usage: search field
const handleSearch = debounce((query) => {
  console.log(`Searching for: ${query}`);
  // Call API
}, 500);

---

// Example 10: Promise with Error Handling
// ============================================

// Retry function N lần nếu fail
// Input: asyncFunc, maxRetries
// Output: Promise
function retryAsync(asyncFunc, maxRetries = 3) {
  return asyncFunc().catch(error => {
    if (maxRetries > 0) {
      console.log(`Retry... (${maxRetries} left)`);
      return retryAsync(asyncFunc, maxRetries - 1);
    }
    throw error;
  });
}

// Usage
// retryAsync(() => fetch('/api/data'), 3)
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

---

// Example 11: Utility Functions
// ============================================

// Delay execution N milliseconds
// Return: Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Deep clone object
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Check if object is empty
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// Get unique values from array
function getUnique(arr) {
  return [...new Set(arr)];
}

console.log(getUnique([1, 2, 2, 3, 3, 3])); // [1, 2, 3]

---

// Example 12: Event Emitter Pattern
// ============================================

class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Subscribe to event
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  // Emit event
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }

  // Unsubscribe from event
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }
}

// Usage
const emitter = new EventEmitter();
emitter.on('message', (msg) => console.log(`Got: ${msg}`));
emitter.emit('message', 'Hello!'); // Got: Hello!

---

// Example 13: Unit Test Example (Jest)
// ============================================

describe('Calculator Functions', () => {
  // Hàm cộng hai số
  const add = (a, b) => a + b;

  // Test hàm add
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  // Hàm nhân hai số
  const multiply = (a, b) => a * b;

  it('should multiply two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 5)).toBe(-10);
  });
});

---

// Example 14: Module Export Pattern
// ============================================

// Các utility functions để export
const mathUtils = {
  // Tính tổng array
  sum: (arr) => arr.reduce((a, b) => a + b, 0),

  // Tính average
  average: (arr) => mathUtils.sum(arr) / arr.length,

  // Tìm max value
  max: (arr) => Math.max(...arr),

  // Tìm min value
  min: (arr) => Math.min(...arr)
};

// Export
// module.exports = mathUtils;

// Usage:
// const utils = require('./mathUtils');
// utils.sum([1, 2, 3]); // 6

---

// Example 15: Real-world API Service
// ============================================

class UserService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  // Get all users
  async getUsers() {
    try {
      const response = await fetch(`${this.apiUrl}/users`);
      if (!response.ok) throw new Error('Failed to fetch');
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  // Get user by ID
  async getUserById(id) {
    try {
      const response = await fetch(`${this.apiUrl}/users/${id}`);
      if (!response.ok) throw new Error('User not found');
      return await response.json();
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw error;
    }
  }

  // Create new user
  async createUser(userData) {
    try {
      const response = await fetch(`${this.apiUrl}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      if (!response.ok) throw new Error('Failed to create user');
      return await response.json();
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  // Update user
  async updateUser(id, userData) {
    try {
      const response = await fetch(`${this.apiUrl}/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      if (!response.ok) throw new Error('Failed to update user');
      return await response.json();
    } catch (error) {
      console.error(`Error updating user ${id}:`, error);
      throw error;
    }
  }

  // Delete user
  async deleteUser(id) {
    try {
      const response = await fetch(`${this.apiUrl}/users/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete user');
      return { success: true };
    } catch (error) {
      console.error(`Error deleting user ${id}:`, error);
      throw error;
    }
  }
}

// Usage
// const userService = new UserService('https://api.example.com');
// const users = await userService.getUsers();
// const newUser = await userService.createUser({name: 'John', email: 'john@test.com'});

---

// ============================================
// TIPS FOR COPILOT:
// ============================================
// 1. Viết comment chi tiết trước function
// 2. Dùng type hints (JSDoc comments)
// 3. Cho ví dụ cách sử dụng
// 4. Import/dependencies rõ ràng
// 5. Naming conventions consistent
// 6. Comments định nghĩa input/output/errors
// ============================================
