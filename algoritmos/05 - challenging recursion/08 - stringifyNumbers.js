let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers (obj) {
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
        } else if (typeof obj[key] === 'number') {
            obj[key] = String(obj[key])
        }
      })
    }
  
    iterate(obj)
  
  }
  
  stringifyNumbers(obj1)


