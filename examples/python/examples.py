# ============================================
# Copilot Python Examples
# ============================================

# Example 1: Basic Function with Docstring
# ============================================

def is_palindrome(text):
    """
    Kiểm tra xem chuỗi có phải palindrome không
    
    Args:
        text (str): Chuỗi cần kiểm tra
        
    Returns:
        bool: True nếu là palindrome, False nếu không
        
    Example:
        >>> is_palindrome("A man, a plan, a canal: Panama")
        True
    """
    cleaned = text.lower()
    cleaned = ''.join(c for c in cleaned if c.isalnum())
    return cleaned == cleaned[::-1]


# Test
print(is_palindrome("A man, a plan, a canal: Panama"))  # True
print(is_palindrome("hello"))  # False


---

# Example 2: List Comprehension with Comment
# ============================================

# Lọc danh sách users: chỉ lấy admin
users = [
    {"id": 1, "name": "Alice", "role": "admin"},
    {"id": 2, "name": "Bob", "role": "user"},
    {"id": 3, "name": "Charlie", "role": "admin"}
]

# Filter role = 'admin'
# Copilot sẽ gợi ý list comprehension
admins = [user for user in users if user["role"] == "admin"]
print(admins)


---

# Example 3: Dictionary Operations
# ============================================

def select_fields(obj, fields):
    """
    Tạo dict mới với chỉ những field chỉ định
    
    Args:
        obj (dict): Object gốc
        fields (list): Danh sách field names
        
    Returns:
        dict: Dict mới với chỉ selected fields
        
    Example:
        >>> user = {"id": 1, "name": "Alice", "email": "alice@test.com"}
        >>> select_fields(user, ["name", "email"])
        {"name": "Alice", "email": "alice@test.com"}
    """
    return {field: obj[field] for field in fields if field in obj}


# Test
user = {"id": 1, "name": "Alice", "email": "alice@test.com", "password": "***"}
selected = select_fields(user, ["name", "email"])
print(selected)  # {"name": "Alice", "email": "alice@test.com"}


---

# Example 4: String Manipulation
# ============================================

def parse_name(full_name):
    """
    Chia full name thành first name, last name
    
    Args:
        full_name (str): Full name (ví dụ: "John Doe")
        
    Returns:
        dict: {"first_name": str, "last_name": str}
    """
    parts = full_name.strip().split()
    return {
        "first_name": parts[0] if parts else "",
        "last_name": " ".join(parts[1:]) if len(parts) > 1 else ""
    }


print(parse_name("John Doe"))  # {"first_name": "John", "last_name": "Doe"}
print(parse_name("Mary Jane Watson"))  # {"first_name": "Mary", "last_name": "Jane Watson"}


---

# Example 5: Async Function with Error Handling
# ============================================

import requests
import asyncio
from typing import Dict

async def fetch_user(user_id: int) -> Dict:
    """
    Fetch user từ API, xử lý lỗi
    
    Args:
        user_id (int): User ID
        
    Returns:
        dict: User data
        
    Raises:
        Exception: Nếu fetch fail
    """
    try:
        response = requests.get(f"https://api.example.com/users/{user_id}")
        response.raise_for_status()
        return response.json()
    except requests.RequestException as error:
        print(f"Error fetching user: {error}")
        raise


# Usage
# asyncio.run(fetch_user(1))


---

# Example 6: Email Validation
# ============================================

import re

def is_valid_email(email: str) -> bool:
    """
    Kiểm tra email có hợp lệ không
    
    Pattern: xxx@xxx.xxx
    
    Args:
        email (str): Email string
        
    Returns:
        bool: True nếu valid, False nếu invalid
    """
    pattern = r"^[^\s@]+@[^\s@]+\.[^\s@]+$"
    return re.match(pattern, email) is not None


print(is_valid_email("test@example.com"))  # True
print(is_valid_email("invalid.email"))  # False


---

# Example 7: Class with Methods
# ============================================

class User:
    """User class with validation methods"""
    
    def __init__(self, user_id: int, name: str, email: str):
        """
        Initialize User
        
        Args:
            user_id (int): User ID
            name (str): User name
            email (str): User email
        """
        self.id = user_id
        self.name = name
        self.email = email
    
    def validate_email(self) -> bool:
        """Check if email is valid"""
        pattern = r"^[^\s@]+@[^\s@]+\.[^\s@]+$"
        return re.match(pattern, self.email) is not None
    
    def to_dict(self) -> dict:
        """Return user as dictionary"""
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email
        }
    
    def __repr__(self) -> str:
        return f"User(id={self.id}, name='{self.name}', email='{self.email}')"


# Usage
user = User(1, "Alice", "alice@test.com")
print(user.validate_email())  # True
print(user.to_dict())  # {"id": 1, "name": "Alice", "email": "..."}
print(user)  # User(id=1, name='Alice', email='alice@test.com')


---

# Example 8: List Operations with Functions
# ============================================

def get_numbers_in_range(numbers: list, min_val: int, max_val: int) -> list:
    """
    Lọc mảng numbers, chỉ lấy những số trong range [min_val, max_val]
    
    Args:
        numbers (list): Danh sách số
        min_val (int): Min value (inclusive)
        max_val (int): Max value (inclusive)
        
    Returns:
        list: Filtered numbers
    """
    return [n for n in numbers if min_val <= n <= max_val]


def get_unique_values(items: list) -> list:
    """
    Lấy unique values từ list (loại bỏ duplicates)
    
    Returns:
        list: Unique values
    """
    return list(set(items))


# Test
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(get_numbers_in_range(numbers, 3, 7))  # [3, 4, 5, 6, 7]
print(get_unique_values([1, 2, 2, 3, 3, 3]))  # [1, 2, 3]


---

# Example 9: Data Processing Pipeline
# ============================================

from typing import List

class DataProcessor:
    """Process data with multiple transformations"""
    
    @staticmethod
    def filter_active_users(users: List[Dict]) -> List[Dict]:
        """Lọc users có status = active"""
        return [u for u in users if u.get("status") == "active"]
    
    @staticmethod
    def map_to_usernames(users: List[Dict]) -> List[str]:
        """Extract usernames từ users"""
        return [u["name"] for u in users]
    
    @staticmethod
    def sort_by_name(users: List[Dict]) -> List[Dict]:
        """Sort users by name alphabetically"""
        return sorted(users, key=lambda u: u["name"])


# Usage
users = [
    {"id": 1, "name": "Alice", "status": "active"},
    {"id": 2, "name": "Bob", "status": "inactive"},
    {"id": 3, "name": "Charlie", "status": "active"}
]

active_users = DataProcessor.filter_active_users(users)
print(active_users)
# [{"id": 1, "name": "Alice", ...}, {"id": 3, "name": "Charlie", ...}]


---

# Example 10: Retry Decorator
# ============================================

import functools
import time

def retry(max_attempts=3, delay=1):
    """
    Decorator: retry function N lần nếu fail
    
    Args:
        max_attempts (int): Max retry times
        delay (int): Delay seconds giữa retries
    """
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            attempts = 0
            while attempts < max_attempts:
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    attempts += 1
                    if attempts >= max_attempts:
                        raise
                    print(f"Retry {attempts}/{max_attempts-1}, waiting {delay}s...")
                    time.sleep(delay)
        return wrapper
    return decorator


@retry(max_attempts=3, delay=1)
def unstable_function():
    """Hàm có thể fail, retry 3 lần"""
    import random
    if random.random() < 0.7:
        raise Exception("Random failure!")
    return "Success!"


---

# Example 11: Unit Tests with pytest
# ============================================

import pytest

class Calculator:
    """Simple calculator"""
    
    @staticmethod
    def add(a, b):
        """Cộng hai số"""
        return a + b
    
    @staticmethod
    def multiply(a, b):
        """Nhân hai số"""
        return a * b
    
    @staticmethod
    def divide(a, b):
        """Chia hai số, raise error nếu b = 0"""
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a / b


# Test cases
def test_add():
    """Test add function"""
    assert Calculator.add(2, 3) == 5
    assert Calculator.add(-1, 1) == 0
    assert Calculator.add(0, 0) == 0


def test_multiply():
    """Test multiply function"""
    assert Calculator.multiply(3, 4) == 12
    assert Calculator.multiply(-2, 5) == -10


def test_divide():
    """Test divide function"""
    assert Calculator.divide(10, 2) == 5
    
    with pytest.raises(ValueError):
        Calculator.divide(10, 0)


---

# Example 12: Context Manager Pattern
# ============================================

class Database:
    """Simple database connection manager"""
    
    def __init__(self, connection_string):
        self.connection_string = connection_string
        self.conn = None
    
    def __enter__(self):
        """Connect when entering context"""
        print(f"Connecting to {self.connection_string}")
        self.conn = f"Connected to {self.connection_string}"
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """Close connection when exiting context"""
        print("Closing connection")
        self.conn = None
    
    def query(self, sql):
        """Execute query"""
        if not self.conn:
            raise RuntimeError("Not connected")
        return f"Result of: {sql}"


# Usage
# with Database("postgresql://localhost/mydb") as db:
#     result = db.query("SELECT * FROM users")
#     print(result)
# # Automatically closes connection


---

# Example 13: Environment Variables & Config
# ============================================

import os
from typing import Optional

class Config:
    """Application configuration"""
    
    # Database
    DB_HOST = os.getenv("DB_HOST", "localhost")
    DB_PORT = int(os.getenv("DB_PORT", 5432))
    DB_NAME = os.getenv("DB_NAME", "mydb")
    
    # API
    API_URL = os.getenv("API_URL", "https://api.example.com")
    API_KEY = os.getenv("API_KEY")
    
    # App settings
    DEBUG = os.getenv("DEBUG", "False").lower() == "true"
    SECRET_KEY = os.getenv("SECRET_KEY")
    
    @classmethod
    def validate(cls) -> bool:
        """Validate required config"""
        required = ["API_KEY", "SECRET_KEY"]
        missing = [k for k in required if not os.getenv(k)]
        
        if missing:
            raise ValueError(f"Missing config: {missing}")
        return True


# Usage
# Config.validate()
# print(Config.DB_HOST)  # localhost


---

# Example 14: API Service Class
# ============================================

import requests
from typing import List, Dict, Optional

class UserAPIService:
    """Service to interact with User API"""
    
    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url
        self.api_key = api_key
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
    
    def get_users(self) -> List[Dict]:
        """Get all users"""
        response = requests.get(
            f"{self.base_url}/users",
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()
    
    def get_user(self, user_id: int) -> Dict:
        """Get user by ID"""
        response = requests.get(
            f"{self.base_url}/users/{user_id}",
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()
    
    def create_user(self, user_data: Dict) -> Dict:
        """Create new user"""
        response = requests.post(
            f"{self.base_url}/users",
            json=user_data,
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()
    
    def update_user(self, user_id: int, user_data: Dict) -> Dict:
        """Update user"""
        response = requests.put(
            f"{self.base_url}/users/{user_id}",
            json=user_data,
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()
    
    def delete_user(self, user_id: int) -> bool:
        """Delete user"""
        response = requests.delete(
            f"{self.base_url}/users/{user_id}",
            headers=self.headers
        )
        response.raise_for_status()
        return True


# Usage
# service = UserAPIService("https://api.example.com", "your-api-key")
# users = service.get_users()
# new_user = service.create_user({"name": "John", "email": "john@test.com"})


---

# ============================================
# TIPS FOR COPILOT WITH PYTHON:
# ============================================
# 1. Dùng docstrings chi tiết (Args, Returns, Raises, Example)
# 2. Type hints (def func(name: str) -> bool:)
# 3. Comments mô tả ý tưởng trước code
# 4. PEP8 naming: snake_case for functions, UPPER_CASE for constants
# 5. Imports rõ ràng ở đầu file
# 6. Sử dụng List/Dict comprehensions
# 7. Context managers (__enter__, __exit__)
# ============================================
