module.exports = function toReadable(numb) {
  const ED = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  const DE = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  if (numb < 20) return ED[numb];

  if (numb < 100) {
    const tens = Math.floor(numb / 10);
    const ones = numb % 10;

    return ones === 0 ? DE[tens] : `${DE[tens]} ${ED[ones]}`;
  }

  if (numb < 1000) {
    const hundreds = Math.floor(numb / 100);
    const remainder = numb % 100;

    if (remainder === 0) {
      return `${ED[hundreds]} hundred`;
    }

    if (remainder < 20) {
      return `${ED[hundreds]} hundred ${ED[remainder]}`;
    }

    const tens = Math.floor(remainder / 10);
    const ones = remainder % 10;

    return ones === 0
      ? `${ED[hundreds]} hundred ${DE[tens]}`
      : `${ED[hundreds]} hundred ${DE[tens]} ${ED[ones]}`;
  }
  return '';
};
