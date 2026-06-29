import { fabric } from 'fabric';

export class Canvas {
  constructor(canvasElement) {
    this.canvas = new fabric.Canvas(canvasElement, {
      backgroundColor: '#fff',
    });
  }

  getCanvas() {
    return this.canvas;
  }

  getActiveObject() {
    return this.canvas.getActiveObject();
  }

  add(object) {
    this.canvas.add(object);
    this.canvas.setActiveObject(object);
    this.render();
  }

  remove(objects = null) {
    const toRemove = objects || this.canvas.getActiveObjects();
    if (Array.isArray(toRemove)) {
      toRemove.forEach(obj => this.canvas.remove(obj));
    } else {
      this.canvas.remove(toRemove);
    }
    this.canvas.discardActiveObject();
    this.render();
  }

  clear() {
    this.canvas.clear();
    this.canvas.backgroundColor = '#fff';
    this.render();
  }

  render() {
    this.canvas.renderAll();
  }

  export(filename = 'photoforge-design.png') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = this.canvas.toDataURL({ format: 'png' });
    link.click();
  }
}
