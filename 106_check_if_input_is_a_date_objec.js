function is_date(input) {
  return input instanceof Date && !isNaN(input);
}

console.log(is_date('Nov 15, 2014'))