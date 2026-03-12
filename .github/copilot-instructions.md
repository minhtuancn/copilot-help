# GitHub Copilot Instructions for Copilot-Help Repository

This is an educational repository dedicated to teaching developers how to use GitHub Copilot effectively. Provides comprehensive guides, examples, and best practices for all skill levels.

## Project Overview

Copilot-Help is a complete educational resource for mastering GitHub Copilot. It includes:
- 8 detailed documentation guides (from getting started to advanced)
- Real code examples in JavaScript, Python, TypeScript, and other languages
- Templates and configurations for various projects
- Best practices and troubleshooting guides
- FAQ and wiki resources

---

## Build, Test & Lint Commands

This is an educational documentation repository - no build/test commands needed.

### Documentation
```bash
# No build step needed - markdown is the final format
# Documents are in: docs/, examples/, templates/, wiki/
```

### Development
```bash
# No dependencies to install
# Edit markdown files directly in IDE
# Use VS Code, GitHub web editor, or any markdown editor
```

---

## High-Level Architecture

### Repository Structure
```
copilot-help/
├── README.md                          # Main entry point
├── docs/                              # 8 main documentation files
│   ├── 00-getting-started.md         # Intro to Copilot
│   ├── 01-installation-setup.md      # Cài đặt & cấu hình
│   ├── 02-basic-commands.md          # Lệnh cơ bản & shortcuts
│   ├── 03-skills-techniques.md       # Kỹ thuật viết prompt
│   ├── 04-advanced-features.md       # Tính năng cao cấp
│   ├── 05-agents-and-extensions.md   # Agents & CLI
│   ├── 06-best-practices.md          # Best practices
│   ├── 07-troubleshooting.md         # Troubleshooting & debug
│   └── 08-faq.md                     # FAQ
├── examples/                          # Code examples by language
│   ├── javascript/                   # JS/Node.js examples
│   ├── python/                       # Python examples
│   ├── typescript/                   # TypeScript examples
│   └── other-languages/              # Rust, Go, Java, C++, etc.
├── templates/                         # Config templates
│   ├── copilot-instructions-template.md
│   ├── .cursorrules-example
│   └── prompt-templates.md
├── wiki/                              # Additional resources
│   ├── Glossary.md
│   ├── Copilot-VS-Others.md
│   └── Resources.md
└── .github/
    └── copilot-instructions.md        # This file
```

### Content Organization
- **Docs (docs/)**: Linear learning path from beginner to advanced
- **Examples (examples/)**: Real code patterns by language
- **Templates (templates/)**: Ready-to-use configs and prompts
- **Wiki (wiki/)**: Reference materials and comparisons

### Target Audience
- Developers of all skill levels
- People new to AI-assisted coding
- Advanced users optimizing Copilot usage
- Language-agnostic (examples in multiple languages)

---

## Key Conventions

### Documentation Style
- **Primary Language**: Vietnamese with English alongside
- **Format**: Markdown with clear structure
- **Learning Path**: Linear progression (00→01→02→...→08)
- **Each Doc**: Includes theory + practical examples + tips
- **Examples**: Show common patterns and best practices

### Code Examples
- **Comments First**: Extensive comments showing Copilot usage
- **Docstrings**: Detailed with Args, Returns, Examples
- **Real-World**: Practical scenarios developers face
- **Error Handling**: Always include error cases
- **Tests**: Show unit test patterns
- **Language Style**: Follow idioms of each language

### Writing Conventions
- Use ❌ WRONG / ✅ CORRECT pattern for comparisons
- Show problem → solution → explanation flow
- Include code snippets, not just text
- Use tables for comparing options/features
- Add emojis for visual organization
- Be beginner-friendly but detailed

### File Naming
- Docs: `NN-topic-name.md` (00-getting-started.md)
- Examples: `examples.js`, `examples.py`, `examples.ts`
- Templates: Descriptive with extension (.cursorrules-example)
- Code files: English names, comments in Vietnamese

---

## Framework/Language-Specific Notes

### JavaScript Examples
- Show both ES6+ and async/await patterns
- Include examples with npm/Node.js
- Show React, Express, and vanilla JS patterns
- Include Jest test examples

### Python Examples
- Use type hints consistently
- Show both procedural and OOP patterns
- Include docstring examples with Args/Returns
- Show async patterns (asyncio, requests)

### TypeScript Examples
- Always include proper type definitions
- Show interface vs type usage
- Include generic patterns
- Show class and function patterns

### Other Languages
- Rust, Go, Java, C++, C#, PHP examples
- Follow language-specific idioms
- Show how Copilot handles each language
- Include language-specific patterns

### IDE-Specific Examples
- VS Code focus (default) but mention JetBrains
- Show keyboard shortcuts for both
- Copilot Chat examples (Ctrl+I pattern)
- Extension setup for each IDE

---

## Environment & Configuration

### Getting Started (Contributors)
```bash
# No special setup needed!
# 1. Clone the repository
git clone https://github.com/minhtuancn/copilot-help.git

# 2. Open in your editor
code . 
# or any markdown editor / GitHub web editor

# 3. Start editing markdown files in docs/ or examples/
```

### Adding New Content
- Docs: Create in `docs/` folder following NN-topic-name.md pattern
- Examples: Add code files in `examples/[language]/`
- Templates: Add in `templates/` folder
- Wiki: Add reference files in `wiki/` folder

### Preview Markdown
- GitHub.com: View directly (auto-renders)
- VS Code: Use "Markdown Preview" extension
- Local: Use any markdown viewer

### No Build/Test Required
This is pure documentation - no compilation or testing needed!

---

## Useful Resources

- 📖 [GitHub Copilot Official](https://github.com/features/copilot)
- 📚 [Copilot Documentation](https://docs.github.com/en/copilot)
- 🎥 [GitHub Blog - Copilot](https://github.blog/category/copilot/)
- 💬 [Copilot Discussions](https://github.com/orgs/github/discussions/categories/copilot)
- 🤖 [GitHub Copilot CLI](https://github.com/github/github-copilot-cli)

---

## Notes for Contributors

### When Adding New Documentation
1. Keep examples practical and real-world
2. Include extensive comments showing Copilot patterns
3. Show both right (✅) and wrong (❌) approaches
4. Add code examples, not just text
5. Use consistent formatting and structure
6. Include links to related docs
7. Consider multiple programming languages

### When Adding Code Examples
1. Use detailed comments Copilot can learn from
2. Include function signatures with types/docstrings
3. Show error handling patterns
4. Include unit test examples
5. Add comments explaining WHY code is written that way
6. Make examples realistic and useful

### Quality Checklist
- ✅ Content focused on Copilot usage
- ✅ Code examples are complete and working
- ✅ Comments follow language conventions
- ✅ Examples are beginner-friendly but not oversimplified
- ✅ Links to related content included
- ✅ No generic software engineering advice (stay focused!)
- ✅ Language is clear and accessible (Vietnamese primary)

---

_Last Updated: 2025-03-12_  
_Purpose: Guide AI assistants in contributing to this educational Copilot resource_
