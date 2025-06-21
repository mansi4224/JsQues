function is_weekend(date) {
  let day = new Date(date).getDay();
  return (day === 0 || day === 6) ? "weekend" : undefined;
}
