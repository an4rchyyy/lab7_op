'use strict';

const difference = (array1, array2) => {
  const res = [];
  for (const item of array1) {
    if (!array2.includes(item)) res.push(item);
  }
  return res;
};

module.exports = { difference };