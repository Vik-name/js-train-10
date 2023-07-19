// Завдання: 3

/**
 * Функція `customObjectFromEntries` створює об'єкт з масиву записів, додатково обробляючи значення властивостей.
 * Значення числових властивостей перетворюються на рядки та замінюються пробіли на підкреслення.
 * Масив записів, кожен запис представлений як [key, value].
 * Повертаємо - Об'єкт, створений з записів з обробленими значеннями.
 */
function customObjectFromEntries(entries) {
  // Перевірка, чи вхідний аргумент є масивом,якщо ні повертаєм "Помилка: Вхідний аргумент має бути масивом."
  if (!Array.isArray(entries)) {
    return "Помилка: Вхідний аргумент має бути масивом.";
  }
  // Використання методу `map` для обробки значень властивостей
  // Перевірка, чи ключ  є числом
  const newEntries = entries.map(
    ([key, value]) => {
      if (typeof key === "number") {
        key = String(key).replace(/\s/g, "_");
      }
      return [key, value];
    }
    // Перетворення числового значення на рядок
    // Повернення обробленого запису [key, value]
    // Використання методу `fromEntries` для створення об'єкта з масиву записів
    // Повернення створеного об'єкта
  );
  const newObject = Object.fromEntries(newEntries);
  return newObject;
}

console.log("Завдання: 3 ==============================");

// Виведення результату в консоль
console.log(
  customObjectFromEntries([
    ["a", 1],
    [43, "Hello"],
    ["c", 3.14],
    ["d", "World"],
    [56, 42],
  ])
); //Виведе:{ '43': '43', '56': '56', a: 1, c: 3.14, d: 'World' }
