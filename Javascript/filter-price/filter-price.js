const rangeMin = document.getElementById("rangeMin");
const rangeMax = document.getElementById("rangeMax");
const inputMin = document.getElementById("inputMin");
const inputMax = document.getElementById("inputMax");
const trackFill = document.getElementById("trackFill");

function updateSlider() {
  const min = parseInt(rangeMin.value);
  const max = parseInt(rangeMax.value);
  const total = 24000000;

  // Không cho 2 thumb vượt nhau
  if (min >= max) {
    rangeMin.value = max - 1;
    return;
  }

  // Cập nhật input số
  inputMin.value = min;
  inputMax.value = max;

  // Cập nhật màu track
  const leftPercent = (min / total) * 100;
  const rightPercent = (max / total) * 100;
  trackFill.style.left = leftPercent + "%";
  trackFill.style.width = rightPercent - leftPercent + "%";
}

rangeMin.addEventListener("input", updateSlider);
rangeMax.addEventListener("input", updateSlider);

// Khi sửa số thủ công
inputMin.addEventListener("change", () => {
  rangeMin.value = inputMin.value;
  updateSlider();
});
inputMax.addEventListener("change", () => {
  rangeMax.value = inputMax.value;
  updateSlider();
});

// Khởi tạo ban đầu
updateSlider();

function formatVND(n) {
  return parseInt(n).toLocaleString("vi-VN");
}

function parseVND(str) {
  return parseInt(str.replace(/\./g, "")) || 0;
}

function updateSlider() {
  const min = parseInt(rangeMin.value);
  const max = parseInt(rangeMax.value);
  const total = 24000000;

  if (min >= max) {
    rangeMin.value = max - 1;
    return;
  }

  // Hiển thị có dấu chấm
  inputMin.value = formatVND(min);
  inputMax.value = formatVND(max);

  const leftPercent = (min / total) * 100;
  const rightPercent = (max / total) * 100;
  trackFill.style.left = leftPercent + "%";
  trackFill.style.width = rightPercent - leftPercent + "%";
}

// Khi sửa số thủ công
inputMin.addEventListener("change", () => {
  rangeMin.value = parseVND(inputMin.value); // bỏ dấu chấm trước khi gán
  updateSlider();
});
inputMax.addEventListener("change", () => {
  rangeMax.value = parseVND(inputMax.value);
  updateSlider();
});
