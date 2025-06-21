let x = 0, y = -1, z = 4;
let result;

if (x >= y && x >= z) {
  if (y >= z) {
    result = x + ", " + y + ", " + z;
  } else {
    result = x + ", " + z + ", " + y;
  }
} else if (y >= x && y >= z) {
  if (x >= z) {
    result = y + ", " + x + ", " + z;
  } else {
    result = y + ", " + z + ", " + x;
  }
} else {
  if (x >= y) {
    result = z + ", " + x + ", " + y;
  } else {
    result = z + ", " + y + ", " + x;
  }
}

alert(result); // Output: "4, 0, -1"
