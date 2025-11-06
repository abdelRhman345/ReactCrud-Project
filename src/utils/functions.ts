/**
 * * Truncates a given text to a specified maximum length.
 *
 * If the text length is greater than or equal to the maximum limit,
 * the function returns a sliced version of the text with only the first `max` characters.
 * Otherwise, it returns the original text unchanged.
 * 
 * @param {string} txt - The text to slice if it exceeds the maximum length.
 * @param {number} [max=50] - The maximum number of characters to keep. Defaults to 50.
 * @returns {string} The sliced text if it exceeds `max`, otherwise the original text.
*/


// Function
export function txtSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) return txt.slice(0, max);
  return txt
}