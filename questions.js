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

// Завдання: 12

/**
 * Функція convertArrayToObj приймає масив масивів, де кожний підмасив має два елементи - ключ та значення.
 * Функція перетворює масив у об'єкт за допомогою методу Object.fromEntries().
 * Якщо у масиві є дубльовані ключі, функція видасть повідомлення про це.
 *
 *  arr - Масив масивів, де кожний підмасив має два елементи - ключ та значення.
 * Повертаємо - Об'єкт, створений з масиву.
 */
function convertArrayToObj(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо пустий об'єкт
  if (!Array.isArray(arr)) {
    return [];
  }
  // Створюємо пустий об'єкт який записуємо в змінну
  const fullObject = {};
  // Проходимося по кожному підмасиву в масиві за допопмогою циклу for, лічильник від нуля до довжини масиву
  for (let i = 0; i < arr.length; i++) {
    // Розпаковуємо підмасив за допомогою деструктурізації на окремі змінні для ключа та значення
    const [key, value] = arr[i];
    // Перевіряємо, чи існує вже ключ в об'єкті,якщо так виводимо в консоль повідомлення `У масиві є дубльований ключ: ${key}`
    if (fullObject.hasOwnProperty(key)) {
      console.log(`У масиві є дубльований ключ: ${key}`);
    }
    // Додаємо ключ та значення до об'єкта
    fullObject[key] = value;
  }

  // Застосовуємо метод Object.fromEntries() для створення об'єкта
  return fullObject;
}

console.log("Завдання: 12 ==============================");
const arr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["a", 4],
];
console.log(convertArrayToObj(arr)); // Виведе {a: 4, b: 2, c: 3}
