# 🔧 Cài Đặt & Cấu Hình GitHub Copilot

**Thời gian: 20 phút**

---

## 📋 Bước Chuẩn Bị

### 1. Kiểm Tra Yêu Cầu Hệ Thống

```bash
# Windows
- OS: Windows 10 Build 18362+ hoặc Windows 11
- IDE: VS Code 1.82+, JetBrains 2022.1+
- RAM: 4GB+ (8GB recommended)

# macOS
- OS: macOS 10.15 (Catalina)+
- IDE: VS Code 1.82+, JetBrains 2022.1+
- RAM: 4GB+ (8GB recommended)

# Linux
- OS: Ubuntu 18.04+, Debian 10+, Fedora 33+
- IDE: VS Code 1.82+, JetBrains 2022.1+
- RAM: 4GB+ (8GB recommended)
```

### 2. Tạo/Kiểm Tra GitHub Account

- Có GitHub account (miễn phí hoặc Pro)
- Account phải xác thực email
- Không bị ban hoặc suspended

👉 Tạo tài khoản: https://github.com/signup

---

## 📦 Cài Đặt GitHub Copilot

### **Option 1: VS Code (Recommended)**

#### Bước 1: Cài đặt Extension

```
1. Mở VS Code
2. Bấm Ctrl+Shift+X (hoặc Command+Shift+X trên Mac)
3. Gõ "GitHub Copilot"
4. Nhấp vào extension "GitHub Copilot" (chính thức từ GitHub)
5. Bấm "Install"
6. Chờ cài đặt xong (2-3 phút)
7. Khởi động lại VS Code
```

**Hoặc dùng CLI:**
```bash
code --install-extension GitHub.copilot
```

#### Bước 2: Xác Thực GitHub

```
1. Bấm Ctrl+Shift+P (Command Palette)
2. Gõ "Copilot: Authorize"
3. VS Code mở browser GitHub để xác thực
4. Nhấp "Authorize GitHub Copilot"
5. Copilot sẽ được kích hoạt trong VS Code
6. Trở lại VS Code - bạn đã sẵn sàng!
```

#### Bước 3: Kiểm Tra Hoạt Động

Tạo file `test.js`:
```javascript
// Hàm kiểm tra số chẵn
function isEven(num) {
  
}
```

- Để con trỏ sau dấu `{`
- Bấn **Ctrl+/** để trigger Copilot
- Nếu thấy gợi ý → ✅ Hoạt động!

---

### **Option 2: JetBrains IDEs**

*(IntelliJ IDEA, PyCharm, WebStorm, Rider, ...)*

#### Bước 1: Cài đặt Plugin

**Via IDE Marketplace:**
```
1. Mở Settings/Preferences:
   - Mac: IntelliJ → Preferences
   - Windows: File → Settings
   - Linux: File → Settings

2. Tìm "Plugins" → "Marketplace"

3. Gõ "GitHub Copilot" trong search

4. Nhấp "Install" trên plugin chính thức

5. Khởi động lại IDE

6. Sẽ được yêu cầu xác thực GitHub
```

**Hoặc cài từ trang chính:**
```
1. Truy cập: https://plugins.jetbrains.com/plugin/17718-github-copilot
2. Nhấp "Get"
3. Chọn IDE của bạn
4. IDE sẽ mở → Nhấp "Install"
```

#### Bước 2: Xác Thực GitHub

```
1. Mở IDE
2. Một notification sẽ xuất hiện
3. Nhấp "Sign in with GitHub"
4. Browser mở → Authorize
5. Copilot hoạt động ngay!
```

---

### **Option 3: Vim / Neovim**

#### Cài đặt Copilot.vim

```bash
# Sử dụng vim-plug:
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

# Thêm vào ~/.vimrc:
call plug#begin()
Plug 'github/copilot.vim'
call plug#end()

# Rồi chạy trong Vim:
:PlugInstall

# Xác thực:
:Copilot setup
```

**Neovim:**
```bash
# Sử dụng packer.nvim hoặc lazy.nvim
# Xem: https://github.com/github/copilot.vim
```

---

### **Option 4: GitHub.dev (Web Editor)**

Không cần cài đặt! Dùng trực tiếp trên GitHub:

```
1. Mở repository trên GitHub.com
2. Bấn "." (dấu chấm)
3. Copilot sẵn sàng dùng
4. Dùng giống VS Code
```

---

## ⚙️ Cấu Hình Copilot

### VS Code Settings

Mở Settings (Ctrl+,) → Gõ "Copilot":

```json
// settings.json
{
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": false
  },
  
  // Bật suggestions tự động
  "github.copilot.inlineCompletion.enabled": true,
  
  // Bây giờ suggestion hiện ra ngay
  "editor.inlineCompletionDelay": 0,
  
  // Copilot Chat panel position
  "github.copilot.chatPanelPosition": "right",
  
  // Tắt cho ngôn ngữ nhất định (nếu cần)
  // "github.copilot.enable": {
  //   "*": true,
  //   "markdown": false
  // }
}
```

### JetBrains IDE Settings

```
Settings/Preferences → Tools → GitHub Copilot
```

Key settings:
- ✅ Enable suggestions: ON
- ✅ Show inline suggestions: ON
- ⏱️ Delay (ms): 0 (giảm delay)
- 🎨 Appearance: Chọn theme yêu thích

### Keyboard Shortcuts Tùy Chỉnh

**VS Code** - `keybindings.json`:
```json
[
  {
    "key": "tab",
    "command": "editor.action.inlineSuggest.commit",
    "when": "inlineSuggestionsVisible"
  },
  {
    "key": "alt+]",
    "command": "editor.action.inlineSuggest.showNext",
    "when": "inlineSuggestionsVisible"
  }
]
```

---

## 🔐 Xác Thực & Bảo Mật

### GitHub Token

Copilot tự động xử lý authentication. Nó:
- ✅ Lưu GitHub token an toàn
- ✅ Không truy cập source code của bạn
- ✅ Không dùng code để training

### Kiểm Tra Xác Thực

**VS Code:**
```
Ctrl+Shift+P → "Copilot: Sign Out" (nếu muốn đăng xuất)
Hoặc: "Copilot: Authorize" (để xác thực lại)
```

**JetBrains:**
```
Settings → Tools → GitHub Copilot → [Email] Button
```

---

## 🚀 Cài Đặt Copilot Chat (Nâng Cao)

Copilot Chat là interface tương tác để hỏi đáp:

```
1. Mở Copilot Chat:
   - VS Code: Ctrl+I (hoặc ⌘I Mac)
   - JetBrains: cmd+I (hoặc ⌘I)
   
2. Gõ câu hỏi về code
3. Copilot trả lời và gợi ý fix
```

### Cài đặt Copilot Chat (nếu cần bật)

**VS Code:**
```
Ctrl+Shift+X → Tìm "GitHub Copilot Chat"
→ Install
```

**JetBrains:**
```
Settings → Plugins → Marketplace
→ Tìm "GitHub Copilot Chat"
→ Install
```

---

## 🐛 Troubleshooting

### ❌ Copilot không hoạt động sau cài đặt

**Giải pháp:**

1. **Kiểm tra extension đã cài chưa:**
   ```
   VS Code: Ctrl+Shift+X → Tìm "GitHub Copilot"
   → Nên thấy "GitHub Copilot" (từ GitHub official)
   ```

2. **Khởi động lại IDE:**
   ```
   Đóng hoàn toàn IDE → Mở lại
   ```

3. **Kiểm tra xác thực:**
   ```
   Ctrl+Shift+P → "Copilot: Authorize"
   → Xác thực GitHub lại
   ```

4. **Kiểm tra subscription:**
   ```
   Truy cập: https://github.com/settings/copilot
   → Nên thấy "Copilot enabled"
   ```

5. **Kiểm tra firewall:**
   ```
   Copilot cần kết nối tới:
   - api.github.com
   - copilot-proxy.githubusercontent.com
   
   Nếu dùng proxy, cấu hình trong VS Code:
   Settings → http.proxy
   ```

---

### ❌ "No suitable servers found" Error

**Giải pháp:**
```
1. Kiểm tra kết nối internet
2. Thử logout & login lại:
   Ctrl+Shift+P → "Copilot: Sign Out"
   Rồi: "Copilot: Authorize"
3. Kiểm tra firewall/proxy
4. Nếu vẫn lỗi, report issue: github.com/github/copilot.vim/issues
```

---

### ❌ Extension cài nhưng không hoạt động

**Giải pháp:**
```
1. Xóa cache VS Code:
   - Windows: %APPDATA%\Code\User\globalStorage\
   - Mac: ~/Library/Application Support/Code/User/globalStorage/
   - Linux: ~/.config/Code/User/globalStorage/
   
   Xóa folder: GitHub.copilot

2. Cài lại extension:
   - Ctrl+Shift+X → Tìm Copilot
   - Uninstall → Install lại

3. Khởi động lại VS Code
```

---

### ❌ Xác thực GitHub không thành công

**Giải pháp:**
1. Kiểm tra 2FA (Two-Factor Authentication):
   - Nếu bật 2FA, GitHub sẽ yêu cầu xác thực
   - Kiểm tra email hoặc app authenticator

2. Tạo Personal Access Token (PAT):
   ```
   GitHub → Settings → Developer settings
   → Personal access tokens → Generate token
   → Copy token
   
   Dán vào VS Code khi được hỏi
   ```

3. Kiểm tra quyền:
   ```
   PAT cần scope: repo, user, read:user
   ```

---

### ⏱️ Copilot chậm / không phản hồi

**Giải pháp:**
```
1. Kiểm tra kết nối internet
2. Khởi động lại IDE
3. Giảm số suggestions mỗi lần:
   Settings → Copilot → Max tokens: 50 (thay vì 100)
4. Tắt features không dùng:
   Settings → Copilot → Disable for languages bạn không dùng
5. Xem issue GitHub: github.com/github/copilot.vim/issues
```

---

### ✅ Kiểm Tra Health của Copilot

**VS Code:**
```
1. Ctrl+Shift+P
2. Gõ "Copilot: Open Diagnostics Panel"
3. Xem status & logs
```

---

## ✅ Xác Nhận Cài Đặt Thành Công

Thêm file `test.py`:

```python
# Hàm tính giai thừa
def factorial(n):
    # Copilot sẽ gợi ý hoàn thành
    pass
```

Nếu thấy gợi ý khi gõ → **Cài đặt thành công! 🎉**

---

## 📚 Bước Tiếp Theo

1. ✅ Cài đặt xong? Hãy học commands cơ bản
   👉 [02-basic-commands.md](02-basic-commands.md)

2. 🎓 Muốn dùng hiệu quả?
   👉 [03-skills-techniques.md](03-skills-techniques.md)

3. 🔧 Gặp vấn đề?
   👉 [07-troubleshooting.md](07-troubleshooting.md)

---

## 🔗 Links Hữu Ích

- 📖 [Official Installation Guide](https://docs.github.com/en/copilot/getting-started-with-github-copilot)
- 🐛 [GitHub Copilot Issues](https://github.com/github/copilot.vim/issues)
- 💬 [Copilot Discussions](https://github.com/orgs/github/discussions/categories/copilot)

---

**Xác thực xong chưa? Tới bước tiếp theo! 👉 [02-basic-commands.md](02-basic-commands.md)**
