function diff_weeks(dt1, dt2) {
  const diffMs = dt2 - dt1;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
}

const dt47a = new Date("June 13, 2014 08:11:00");
const dt47b = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt47a, dt47b)); // 18
