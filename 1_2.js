// #1
function validateAge(age) {
  if (age >= 18) {
    console.log("You are of legal age");
  } else {
    console.log("You are too young");
  }
}

// #2
function filterMostOftenNumber(numsArr) {
  if (numsArr.length === 0) {
    return [];
  }

  const counts = {};
  for (const num of numsArr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  let mostFrequentNumber;
  let maxCount = 0;
  for (const num in counts) {
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mostFrequentNumber = Number(num);
    }
  }

  return numsArr.filter(num => num !== mostFrequentNumber);
}

// #3
function primeNumbers(numsArr) {
  const divisors = [3, 5, 7, 11, 13];
  return numsArr.filter(num => {
    for (const divisor of divisors) {
      if (num % divisor === 0) {
        return true;
      }
    }
    return false;
  });
}

// #4
function triangleArea(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Incorrect data";
  }

  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return Number(area.toFixed(3));
}

// #5
function getGreeting(time) {
  if (time >= 23 || time < 5) {
    return "Good night";
  } else if (time >= 5 && time < 11) {
    return "Good morning";
  } else if (time >= 11 && time < 17) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}