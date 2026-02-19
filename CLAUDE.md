# CLAUDE.md

This file provides guidance to AI assistants working with this repository.

## Repository Overview

This is a minimal static HTML project. It contains two standalone HTML pages with no build system, dependencies, or server-side components.

## Project Structure

```
egakuTest/
├── hello.html        # Simple "Hello, world!" page
├── goodmorning.html  # "Good morning everyone!" page
└── CLAUDE.md         # This file
```

## Files

### hello.html
A minimal HTML5 page that displays "Hello, world!" in the browser body. Uses `lang="ja"` and UTF-8 encoding.

### goodmorning.html
A minimal HTML5 page that displays "Good morning everyone!" as an `<h1>` heading. Uses `lang="ja"` and UTF-8 encoding.

## Conventions

- **Language attribute**: All HTML files use `lang="ja"` (Japanese locale).
- **Encoding**: All files use `<meta charset="UTF-8">`.
- **Indentation**: Tabs are used for indentation inside `<head>` and `<body>`.
- **DOCTYPE**: All files begin with `<!DOCTYPE html>` (HTML5 standard).
- **Structure**: Each file follows the standard `html > head > body` structure with `<title>` inside `<head>`.

## Development Workflow

There is no build step, package manager, test suite, or linter configured. This is a purely static project.

To view a page locally, open the HTML file directly in a browser:

```
open hello.html
open goodmorning.html
```

## Git History

| Commit | Author | Message |
|--------|--------|---------|
| `a68dcd8` | Nozomi Wada | add new file (`hello.html`) |
| `b13c93d` | Nozomi Wada | add file goodmorning (`goodmorning.html`) |

## Notes for AI Assistants

- This repository has no framework, no dependencies, and no CI/CD configuration.
- When adding new HTML files, follow the same structure and conventions as the existing files (DOCTYPE, `lang="ja"`, UTF-8 charset, tab indentation).
- There are no tests to run before committing.
- Keep changes minimal and consistent with the existing simple, flat file layout.
