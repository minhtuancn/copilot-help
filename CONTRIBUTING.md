# 🤝 Hướng Dẫn Đóng Góp (Contributing)

Cảm ơn bạn quan tâm đến dự án Copilot-Help! Dự án này được xây dựng bởi cộng đồng, và bạn có thể giúp cải thiện nó.

---

## 🎯 Cách Đóng Góp

### 1. Báo Cáo Bug hoặc Vấn Đề

Tìm thấy lỗi trong documentation? Có ý kiến cải thiện?

1. **Mở Issue** trên GitHub
2. **Mô tả rõ ràng** vấn đề hoặc ý kiến
3. **Include screenshot/link** nếu cần

**Ví dụ Issue:**
```
Title: Fix typo in docs/02-basic-commands.md

Description:
Page 15: "Ctrl + /" should be "Ctrl + \" for inline completion
```

---

### 2. Thêm / Cải Thiện Nội Dung

#### ✏️ Fix Typos hoặc Cải Thiện Từ Ngữ

```
1. Tìm file cần sửa (trong docs/ hoặc examples/)
2. Fork repository
3. Edit file
4. Submit Pull Request
```

#### 📝 Thêm Ví Dụ Code Mới

**Quy trình:**
1. Tạo branch: `git checkout -b add/python-examples`
2. Thêm file: `examples/python/new-examples.py`
3. Làm theo conventions (xem bên dưới)
4. Push & Open PR

**Example PR Title:**
```
Add advanced async/await examples in Python
```

#### 📚 Thêm Tài Liệu Mới

1. Tạo file trong `docs/` với format: `NN-topic-name.md`
2. Follow style guide (xem dưới)
3. Include code examples
4. Update README.md links

---

## 📋 Style Guide & Conventions

### Documentation Style

#### Heading Structure
```markdown
# Main Title (H1 - một lần duy nhất)
## Section (H2)
### Subsection (H3)
#### Small section (H4)
```

#### Code Examples
```markdown
# Ví Dụ Với Copilot

**Trước (❌ SAI):**
```javascript
function test() {
  // Quá ngắn
}
```

**Sau (✅ ĐÚNG):**
```javascript
// Hàm kiểm tra email, return boolean
function isEmail(str) {
  // Copilot hiểu rõ hơn
}
```
```

#### Tips & Notes
```markdown
> **💡 Tip:** Dùng type hints để Copilot hiểu type

⚠️ **Cảnh báo:** Không paste sensitive data
```

---

### Code Examples Conventions

#### JavaScript/TypeScript
```javascript
// ✅ Tốt: Chi tiết comment
// Kiểm tra email hợp lệ
// Input: email (string)
// Output: boolean (true = valid, false = invalid)
// Ví dụ: isValidEmail("test@example.com") => true
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

#### Python
```python
def is_valid_email(email: str) -> bool:
    """
    Kiểm tra email hợp lệ
    
    Args:
        email (str): Email string
        
    Returns:
        bool: True nếu valid, False nếu không
        
    Example:
        >>> is_valid_email("test@example.com")
        True
    """
    import re
    pattern = r"^[^\s@]+@[^\s@]+\.[^\s@]+$"
    return re.match(pattern, email) is not None
```

#### Principles
- ✅ Detailed comments showing Copilot usage
- ✅ Real-world, practical code
- ✅ Proper error handling
- ✅ Include type hints/docstrings
- ✅ Test/usage examples
- ❌ Generic boilerplate
- ❌ Overly complex examples
- ❌ Vague comments

---

## 🚀 Git Workflow

### 1. Fork & Clone
```bash
# Fork repo on GitHub (click Fork button)

# Clone your fork
git clone https://github.com/YOUR_USERNAME/copilot-help.git
cd copilot-help

# Add upstream remote
git remote add upstream https://github.com/minhtuancn/copilot-help.git
```

### 2. Create Branch
```bash
# Create feature branch
git checkout -b add/new-feature

# Naming convention:
# - add/feature-name (new content)
# - fix/issue-description (fix bugs)
# - improve/improvement-name (enhance existing)
# - docs/documentation-update (doc changes)
```

### 3. Make Changes
```bash
# Edit files
# Test changes (view markdown locally)
# Commit frequently with clear messages
```

### 4. Commit Message
```bash
# Good commit messages
git commit -m "Add Python async examples with Copilot patterns"
git commit -m "Fix typo in troubleshooting guide"
git commit -m "Improve JavaScript validation examples"

# Format: [Type] Verb: Description
# Types: Add, Fix, Improve, Update, Refactor, Docs
```

### 5. Push & Create PR
```bash
# Push to your fork
git push origin add/new-feature

# Create Pull Request on GitHub
# Fill in PR template (if exists)
```

### 6. PR Description Template
```markdown
## What
Brief description of changes

## Why
Why these changes are needed

## Changes
- Change 1
- Change 2
- Change 3

## Related Issues
Fixes #123
Related to #456

## Checklist
- [ ] Follow style guide
- [ ] Code examples work
- [ ] Links are correct
- [ ] No typos
```

---

## 📊 Content Ideas

### Documentation Needed
- [ ] More language examples (Go, Rust, Java, C#, PHP)
- [ ] Copilot with specific frameworks (React, Vue, Django, FastAPI)
- [ ] Integration with CI/CD workflows
- [ ] Advanced prompt engineering techniques
- [ ] Company/team best practices

### Code Examples Needed
- [ ] Web scraping examples
- [ ] Data processing pipelines
- [ ] API design patterns
- [ ] Authentication/authorization examples
- [ ] Database query examples
- [ ] Testing patterns

### Wiki Pages Needed
- [ ] Copilot vs ChatGPT vs Claude comparison
- [ ] Copilot performance tips & tricks
- [ ] Copilot with specific IDEs (Vim, Neovim, Emacs)
- [ ] Team productivity tips

---

## ✅ Review Process

### Your PR Will Be Reviewed For:

**Content Quality:**
- ✅ Accuracy of information
- ✅ Relevance to Copilot usage
- ✅ Real-world practicality
- ✅ Clear & accessible language

**Code Quality:**
- ✅ Working code examples
- ✅ Proper error handling
- ✅ Language conventions followed
- ✅ Comments are clear

**Documentation Quality:**
- ✅ Consistent style
- ✅ Proper formatting
- ✅ Links are correct
- ✅ No typos or grammar issues

**No Blockers:**
- ❌ Unrelated changes (keep focused)
- ❌ Generic software engineering advice
- ❌ Promotional content
- ❌ AI tool comparisons (unless balanced)

---

## 🎓 Questions?

### Resources
- 📖 [GitHub - Collaborating with Pull Requests](https://docs.github.com/en/pull-requests)
- 🎬 [Git & GitHub Tutorial](https://www.youtube.com/watch?v=w3jLJU7DT5E)
- 💬 [GitHub Discussions](https://github.com/minhtuancn/copilot-help/discussions)

### Getting Help
1. Check existing Issues/Discussions
2. Open a Discussion (not an issue) for questions
3. Ask in PR comments if unclear about feedback

---

## 🌟 Recognition

Contributors will be:
- ✨ Listed in README.md "Contributors" section
- 📝 Credited in specific file comments
- 🎖️ Recognized in project documentation

---

## 📜 License

By contributing, you agree that your contributions will be licensed under the **MIT License**.

---

## 💪 Big Thanks!

Dù là fix một typo hay thêm 10 file mới, mọi đóng góp đều quý giá!

**Thank you for helping make Copilot-Help better! 🎉**

---

**Questions?** 👉 Open a Discussion or Issue on GitHub!
