class Marker {
  #color;
  _inkLevel;

  constructor(color) {
    this.#color = color;
    this._inkLevel = 100;
  }

  get color() {
    return this.#color;
  }

  get inkLevel() {
    return this._inkLevel;
  }

  print(text) {
    let output = '';
    for (const char of text) {
      if (char !== ' ') {
        if (this._inkLevel > 0) {
          output += char;
          this._inkLevel -= 10;
        } else {
          console.log("Чорнило закінчилось");
          break;
        }
      } else {
        output += char;
      }
    }
    console.log(output);
  }
}

class RefillableMarker extends Marker {
  constructor(color) {
    super(color);
  }

  refill() {
    this._inkLevel = 100;
    console.log("Маркер перезаправлено до 100%.");
  }
}


console.log("\nПеревірка Маркера");

const greenMarker = new RefillableMarker('зелений');
console.log(`Створено маркер кольору: ${greenMarker.color}`);
console.log(`Початковий рівень чорнила: ${greenMarker.inkLevel}%`);

console.log("\nДрукуємо довгий рядок:");
greenMarker.print("Hello World! This is a test.");

console.log(`Рівень чорнила після друку: ${greenMarker.inkLevel}%`);

console.log("\nПерезаправляємо маркер");
greenMarker.refill();

console.log(`Рівень чорнила після заправки: ${greenMarker.inkLevel}%`);

console.log("\nДрукуємо знову:");
greenMarker.print("Another short text.");
console.log(`Фінальний рівень чорнила: ${greenMarker.inkLevel}%`);