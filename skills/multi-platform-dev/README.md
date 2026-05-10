# Multi-Platform Development Skill

**Version:** 1.0.0  
**Status:** Active  
**License:** MIT

## Overview

Comprehensive guide for developing applications that work across Windows, Linux, and macOS. Covers shell command differences, path handling, line endings, file permissions, package managers, environment detection, and testing strategies.

## When to Use

- Writing shell scripts that must run on Windows, Linux, and macOS
- Handling file paths across different operating systems
- Managing line endings (CRLF vs LF) in cross-platform projects
- Setting file permissions portably
- Detecting the current platform in code
- Configuring cross-platform CI/CD pipelines

## What It Covers

| Section | Topics |
|---------|--------|
| Platform Detection | Node.js, Python, Shell, PowerShell detection patterns |
| Shell Commands | ls, cd, cp, rm, mkdir, grep equivalents across platforms |
| Path Handling | path.join, pathlib, cross-platform patterns |
| Line Endings | CRLF vs LF, .gitconfig, .gitattributes configuration |
| File Permissions | chmod, icacls, cross-platform solutions |
| Package Managers | npm/pnpm, pip, apt, brew, chocolatey |
| CI/CD | GitHub Actions matrix builds for all platforms |
| Testing | Platform detection in tests, skip patterns |

## Quick Start

```javascript
// Cross-platform path handling (Node.js)
const path = require('path');
const filePath = path.join('data', 'files', 'document.txt');
// Windows: data\files\document.txt
// Linux/macOS: data/files/document.txt

// Platform detection
if (process.platform === 'win32') {
  console.log('Windows-specific logic');
} else if (process.platform === 'darwin') {
  console.log('macOS-specific logic');
} else {
  console.log('Linux/Unix-specific logic');
}
```

```python
# Cross-platform path handling (Python)
from pathlib import Path
file_path = Path('data') / 'files' / 'document.txt'

# Platform detection
import sys
if sys.platform == 'win32':
    print("Windows")
elif sys.platform == 'darwin':
    print("macOS")
else:
    print("Linux")
```

## Examples

- **Bash with Windows Support** - Git Bash/WSL compatible scripts
- **PowerShell Cross-Platform** - PowerShell Core for all platforms
- **Node.js Cross-Platform** - cross-env, cross-spawn usage
- **Package Manager Setup** - Development environment for each OS
- **GitHub Actions Matrix** - Multi-platform CI/CD configuration

## References

- [Node.js process.platform](https://nodejs.org/api/process.html#processplatform)
- [Python sys.platform](https://docs.python.org/3/library/sys.html#sys.platform)
- [Git Line Endings](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)
- [PowerShell Cross-Platform](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell)

## Related Skills

- [docker-containerization](../docker-containerization/SKILL.md) - For containerized cross-platform deployment
- [github-actions-cicd](../github-actions-cicd/SKILL.md) - For cross-platform CI/CD pipelines
- [devops-pipeline](../devops-pipeline/SKILL.md) - For deployment automation
- [testing-strategy](../testing-strategy/SKILL.md) - For cross-platform test coverage

---

**Contributing:** Open an issue or PR for improvements  
**License:** MIT License
