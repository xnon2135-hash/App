import { fabric } from 'fabric';

export function createRectangle(options = {}) {
  return new fabric.Rect({
    left: options.left || 100,
    top: options.top || 100,
    width: options.width || 100,
    height: options.height || 100,
    fill: options.fill || '#ff6b6b',
    ...options,
  });
}

export function createCircle(options = {}) {
  return new fabric.Circle({
    left: options.left || 100,
    top: options.top || 100,
    radius: options.radius || 50,
    fill: options.fill || '#4ecdc4',
    ...options,
  });
}

export function createText(text = 'Edit me', options = {}) {
  return new fabric.Textbox(text, {
    left: options.left || 100,
    top: options.top || 100,
    fontSize: options.fontSize || 32,
    fill: options.fill || '#000',
    ...options,
  });
}
