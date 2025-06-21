function days_passed(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  return Math.floor((date - start) / (1000 * 60 * 60 * 24)) + 1;
}
