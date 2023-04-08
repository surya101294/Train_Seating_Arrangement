
  const arr = [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0];
  
  let n = 6;

  let indexes = [];
  
  for (let i = 0; i <= arr.length - n; i++) {
    let window = arr.slice(i, i + n);
    if (window.every(num => num === 0)) {
        for(let j=i;j<i+n;j++){
            indexes.push(j);
            
        }
    }
  }
  
  if (indexes.length > 0) {
    console.log(indexes);
  } else {
    console.log(`No ${n} consecutive zeros found in the array`);
  }