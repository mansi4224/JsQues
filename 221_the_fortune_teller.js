function tellFortune(numChildren, partnerName, location, jobTitle) {
  const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
  console.log(fortune);
}

tellFortune(2, "Alex", "Paris", "Chef");
tellFortune(4, "Jordan", "Tokyo", "Software Engineer");
tellFortune(1, "Taylor", "New York", "Designer");
