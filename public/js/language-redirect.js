document.addEventListener("DOMContentLoaded", function () {
  const userLang = navigator.language || navigator.userLanguage; // Язык системы
  const defaultLang = "en"; // Язык по умолчанию
  const availableLangs = ["en", "ru"]; // Доступные языки

  // Получаем текущий путь
  const currentPath = window.location.pathname;

  // Проверка, если путь начинается с /en/ или /ru/ — не делаем редирект
  const isLangInPath = availableLangs.some((lang) => currentPath.startsWith(`/${lang}/`));

  // Если язык уже в URL, не делаем редирект
  if (isLangInPath) return;

  // Если это главная страница, перенаправляем на язык системы
  if (currentPath === "/") {
    const lang = userLang.substring(0, 2); // Определяем язык системы

    // Если язык доступен, перенаправляем на него, иначе на язык по умолчанию
    if (availableLangs.includes(lang)) {
      window.location.href = `/${lang}/`;
    } else {
      window.location.href = `/${defaultLang}/`;
    }
  }
});
