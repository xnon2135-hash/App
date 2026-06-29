export class Toolbar {
  constructor() {
    this.exportBtn = document.getElementById('export');
    this.clearBtn = document.getElementById('clear');
  }

  onExport(callback) {
    this.exportBtn.addEventListener('click', callback);
  }

  onClear(callback) {
    this.clearBtn.addEventListener('click', callback);
  }
}
