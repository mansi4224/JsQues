function numeric_month(dt) {
  // getMonth() returns 0–11 → +1 for 1–12; prepend '0' if <10
  return (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1);
}

const dt = new Date(2015, 10, 1);
console.log(numeric_month(dt)); // "11"
