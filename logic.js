function findNConsecutiveSeats(array, n) {
    for (let i = 0; i < array.length; i++) {
      let row = array[i];
      let count = 0;
      for (let j = 0; j < row.length; j++) {
        if (row[j] === 0) {
          count++;
          if (count === n) {
            const indexes = [];
            for (let k = j - n + 1; k <= j; k++) {
              indexes.push([i, k]);
            }
            return indexes;
          }
        } else {
          count = 0;
        }
      }
    }
    return null;
  }
  
  const array = [
    0, 0, 0, 1, 0, 0, 1,
    0, 0, 0, 1, 0, 0, 1,
    0, 0, 0, 0, 1, 1, 1,
    0, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 1, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 1,
    0, 0, 0, 1, 0, 0, 1,
    0, 0, 0, 1, 0, 0, 1,
  ];
  
  const n = 4;
  
  const indexes = findNConsecutiveSeats(array, n);
  
  if (indexes) {
    console.log(`Indexes of ${n} consecutive seats: `);
    for (let i = 0; i < indexes.length; i++) {
      console.log(`(${indexes[i][0]}, ${indexes[i][1]})`);
    }
  } else {
    console.log(`No ${n} consecutive seats available`);
  }
  let arr = [
  {"a":1},
  {"a":1},
  {"a":1},
  {"a":1},
  {"a":1},
  {"a":1},
  {"a":1},
  {"a":1},
  {"a":1},
  {"a":1},
  {"a":1},
  {"a":1},
  {"a":1}]
