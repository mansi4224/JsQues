function internet_time(dt) {
  // UTC+1 offset in milliseconds (3600000)
  const utcSeconds = dt.getUTCHours() * 3600 + dt.getUTCMinutes() * 60 + dt.getUTCSeconds();
  const beat = Math.floor(((utcSeconds + 3600) / 86.4) % 1000);
  return String(beat).padStart(3, '0');
}

const dt3 = new Date(1989, 10, 1);
console.log(internet_time(dt3)); // e.g., "812"
