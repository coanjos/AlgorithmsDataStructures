function nestedEvenSum (obj) {
  let result = 0;
  // base case
  // ver as chaves obj.keys
  // iterar
  // iterar vendo se é obj ou numero
  // cavucar

  let keys = Object.keys(obj)

  const iterate = (obj) => {
    Object.keys(obj).forEach(key => {
  
    console.log(`key: ${key}, value: ${obj[key]}`)
  
    if (typeof obj[key] === 'object' && obj[key] !== null) {
            iterate(obj[key])
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
          result += obj[key]
        }
    })
  }

  iterate(obj)

  return result
}  

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj2))