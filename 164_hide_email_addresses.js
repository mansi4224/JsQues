function protect_email(email) {
  let [user, domain] = email.split("@");
  return user.substring(0, user.indexOf('.') + 1) + "...@" + domain;
}
console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"
