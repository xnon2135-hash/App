import { fabric } from 'fabric';
import { Canvas } from './components/Canvas';
import { Sidebar } from './components/Sidebar';
import { Toolbar } from './components/Toolbar';
import { createRectangle, createCircle, createText } from './utils/shapes';
import { applyGrayscale, applySepia, applyBlur, removeFilters } from './utils/filters';
import { uploadImage } from './utils/export';

// Initialize components
const canvas = new Canvas(document.getElementById('canvas'));
const sidebar = new Sidebar();
const toolbar = new Toolbar();
const fabricCanvas = canvas.getCanvas();

// Image upload
sidebar.onImageUpload((e) => {
  uploadImage(e.target.files[0], (imageUrl) => {
    fabric.Image.fromURL(imageUrl, (img) => {
      img.scaleToWidth(400);
      canvas.add(img);
    });
  });
});

// Add text
sidebar.onAddText(() => {
  const text = createText();
  canvas.add(text);
});

// Add shapes
sidebar.onAddRect(() => {
  canvas.add(createRectangle());
});

sidebar.onAddCircle(() => {
  canvas.add(createCircle());
});

// Apply filters
sidebar.onFilterGrayscale(() => {
  const obj = canvas.getActiveObject();
  applyGrayscale(obj);
  canvas.render();
});

sidebar.onFilterSepia(() => {
  const obj = canvas.getActiveObject();
  applySepia(obj);
  canvas.render();
});

sidebar.onFilterBlur(() => {
  const obj = canvas.getActiveObject();
  applyBlur(obj);
  canvas.render();
});

sidebar.onFilterNone(() => {
  const obj = canvas.getActiveObject();
  removeFilters(obj);
  canvas.render();
});

// Layer controls
sidebar.onBringFront(() => {
  const obj = canvas.getActiveObject();
  if (obj) {
    fabricCanvas.bringObjectToFront(obj);
    canvas.render();
  }
});

sidebar.onSendBack(() => {
  const obj = canvas.getActiveObject();
  if (obj) {
    fabricCanvas.sendObjectToBack(obj);
    canvas.render();
  }
});

sidebar.onDelete(() => {
  canvas.remove();
});

// Toolbar controls
toolbar.onExport(() => {
  canvas.export();
});

toolbar.onClear(() => {
  canvas.clear();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Delete' || e.key === 'Backspace') {
    e.preventDefault();
    canvas.remove();
  }
});
