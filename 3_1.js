function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

console.log("--- Перевірка Email ---");
console.log(`test@example.com: ${validateEmail('test@example.com')}`); // true
console.log(`user.name+alias@domain.co.uk: ${validateEmail('user.name+alias@domain.co.uk')}`); // true
console.log(`123@sub-domain.io: ${validateEmail('123@sub-domain.io')}`); // true

console.log(`test@example: ${validateEmail('test@example')}`); // false
console.log(`@example.com: ${validateEmail('@example.com')}`); // false
console.log(`test@.com: ${validateEmail('test@.com')}`); // false
console.log(`test@example.c: ${validateEmail('test@example.c')}`); // false