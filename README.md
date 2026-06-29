# PhotoForge

A modern, feature-rich photo editing web application built with Fabric.js.

## Features

- 🖼️ Image upload and editing
- ✏️ Add text with customizable fonts
- 📋 Add shapes (rectangles, circles)
- 🎨 Apply filters (grayscale, sepia, blur)
- 🔄 Layer management (bring to front, send to back)
- 💾 Export designs as PNG
- ⌨️ Keyboard shortcuts (Delete/Backspace)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
photoforge/
├── src/
│   ├── index.html
│   ├── index.js
│   ├── style.css
│   ├── components/
│   │   ├── Canvas.js
│   │   ├── Sidebar.js
│   │   ├── Toolbar.js
│   │   └── EventHandlers.js
│   └── utils/
│       ├── filters.js
│       ├── shapes.js
│       └── export.js
├── public/
├── package.json
└── vite.config.js
