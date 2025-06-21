function sortByTitle(arr) {
  return arr.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  });
}

const sortedLibrary = sortByTitle(library);
console.log(sortedLibrary);
