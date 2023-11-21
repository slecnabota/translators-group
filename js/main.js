function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function displayFileName() {
  // Получаем элементы
  var input = document.getElementById("custom-file-input");
  var label = document.getElementById("custom-file-label");
  var fileSelected = document.getElementById("file-selected");

  // Показываем имя выбранного файла
  fileSelected.textContent = "Выбран файл: " + input.files[0].name;

  // Скрытие стандартной надписи
  label.style.display = "none";
}

function openInfo(infoId) {
  if (window.innerWidth < 1024) {
    var infoElement = document.getElementById(`info${infoId}`);

    infoElement.classList.toggle("active");
  }
}
