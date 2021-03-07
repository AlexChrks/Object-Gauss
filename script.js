function randn_bm() { 
  let u = 0, v = 0; 
  while (u === 0) u = Math.random(); 
  while (v === 0) v = Math.random(); 
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0; 
};

function createGaussObject() {
  let obj = {};
  for (let i = 0; i < 10; i++) {
    let temp = randn_bm();
    if (obj.hasOwnProperty(temp)) {
      obj[temp]++;
    } else {
      obj[temp] = 1;
    }
  }

  console.log(obj);

  for (let key in obj) {
    if (+key >= 0) {
      console.log(`|    ${key}    |    ${obj[key]}    |`);
    } else {
      console.log(`|   ${key}    |    ${obj[key]}    |`);
    }
  }
}

createGaussObject();

