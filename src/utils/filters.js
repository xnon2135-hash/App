import { fabric } from 'fabric';

export function applyGrayscale(fabricImage) {
  if (!fabricImage || fabricImage.type !== 'image') return;
  fabricImage.filters.push(new fabric.Image.filters.Grayscale());
  fabricImage.applyFilters();
}

export function applySepia(fabricImage) {
  if (!fabricImage || fabricImage.type !== 'image') return;
  fabricImage.filters.push(new fabric.Image.filters.Sepia());
  fabricImage.applyFilters();
}

export function applyBlur(fabricImage, blurAmount = 0.3) {
  if (!fabricImage || fabricImage.type !== 'image') return;
  fabricImage.filters.push(new fabric.Image.filters.Blur({ blur: blurAmount }));
  fabricImage.applyFilters();
}

export function removeFilters(fabricImage) {
  if (!fabricImage || fabricImage.type !== 'image') return;
  fabricImage.filters = [];
  fabricImage.applyFilters();
}
