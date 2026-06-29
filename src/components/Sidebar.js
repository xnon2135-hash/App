export class Sidebar {
  constructor() {
    this.imageUpload = document.getElementById('img-upload');
    this.addTextBtn = document.getElementById('add-text');
    this.addRectBtn = document.getElementById('add-rect');
    this.addCircleBtn = document.getElementById('add-circle');
    this.filterGrayscaleBtn = document.getElementById('filter-grayscale');
    this.filterSepiaBtn = document.getElementById('filter-sepia');
    this.filterBlurBtn = document.getElementById('filter-blur');
    this.filterNoneBtn = document.getElementById('filter-none');
    this.bringFrontBtn = document.getElementById('bring-front');
    this.sendBackBtn = document.getElementById('send-back');
    this.deleteBtn = document.getElementById('delete');
  }

  onImageUpload(callback) {
    this.imageUpload.addEventListener('change', callback);
  }

  onAddText(callback) {
    this.addTextBtn.addEventListener('click', callback);
  }

  onAddRect(callback) {
    this.addRectBtn.addEventListener('click', callback);
  }

  onAddCircle(callback) {
    this.addCircleBtn.addEventListener('click', callback);
  }

  onFilterGrayscale(callback) {
    this.filterGrayscaleBtn.addEventListener('click', callback);
  }

  onFilterSepia(callback) {
    this.filterSepiaBtn.addEventListener('click', callback);
  }

  onFilterBlur(callback) {
    this.filterBlurBtn.addEventListener('click', callback);
  }

  onFilterNone(callback) {
    this.filterNoneBtn.addEventListener('click', callback);
  }

  onBringFront(callback) {
    this.bringFrontBtn.addEventListener('click', callback);
  }

  onSendBack(callback) {
    this.sendBackBtn.addEventListener('click', callback);
  }

  onDelete(callback) {
    this.deleteBtn.addEventListener('click', callback);
  }
}
