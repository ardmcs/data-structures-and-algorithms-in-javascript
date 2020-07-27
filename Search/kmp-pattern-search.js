/**
 * Constructs Pattern Table
 * @param {string} word
 * @returns {number[]}
 */
function buildPatternTable(word) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < word.length) {
    if (word[prefixIndex] === word[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex += 1;
      prefixIndex += 1;
    } else if (prefixIndex === 0) {
      // Defaults to unmatch, set 0 in table and move suffix pointer by 1
      patternTable[suffixIndex] = 0;
      suffixIndex += 1;
    } else {
      // Reset to the value 1 before prefix pointer
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }

  return patternTable;
}

/**
 * The implementation of KMP Pattern Substring Search
 * @param {string} txt
 * @param {string} pat
 * @returns {number}
 */
function KnuthMorrisPratt(txt, pat) {
  if (pat.length === 0) {
    return 0;
  }

  let textIndex = 0;
  let patternIndex = 0;

  const patternTable = buildPatternTable(pat);

  while (textIndex < txt.length) {
    if (txt[textIndex] === pat[patternIndex]) {
      // Matched full pattern
      if (patternIndex === pat.length - 1) {
        return textIndex - pat.length + 1;
      }
      // Move pointer for both text and pattern by 1
      patternIndex += 1;
      textIndex += 1;
    } else if (patternIndex > 0) {
      // Moved on with saved progress pointer index
      // (Omits the need to compare prefix, suffix again if any)
      patternIndex = patternTable[patternIndex - 1];
    } else {
      // Reset pattern pointer
      patternIndex = 0;
      // Increase text pointer by 1
      textIndex += 1;
    }
  }

  return -1;
}

const index = KnuthMorrisPratt("adsgwadsgxdsgwadsgz", "dsgwadsgz");
console.log(index);
