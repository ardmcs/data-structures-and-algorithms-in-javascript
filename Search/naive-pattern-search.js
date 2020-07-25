/**
 *
 * @param {string} txt
 * @param {string} pat
 */
function naivePatternSearch(txt, pat) {
  let m = pat.length;
  let n = txt.length;

  /*
    Iterate O(n-m) times
    Because each time it goes through 1 loop at n, it checks for m times
  */
  for (let i = 0; i <= n - m; i++) {
    let j;

    for (j = 0; j < m; j++) {
      if (txt[i + j] !== pat[j]) {
        break;
      }
    }

    if (j === m) {
      console.log(`Pattern found at ${i}`);
    }
  }
}

naivePatternSearch("AABAACAADAABAAABAA", "AABA");
