function formatted_string(base, value, padDirection) {
  let valStr = value.toString();
  const padding = base.length - valStr.length;
  if (padDirection === 'l') {
    return base.slice(0, padding) + valStr;
  } else {
    return valStr + base.slice(valStr.length);
  }
}
console.log(formatted_string('0000',123,'l'));  // "0123"
console.log(formatted_string('00000000',123,'')); // "12300000"
