function reverse(str) {
  if (str <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

reverse("hello");
