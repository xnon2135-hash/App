export function uploadImage(file, onLoad) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    onLoad(e.target.result);
  };
  reader.readAsDataURL(file);
}
