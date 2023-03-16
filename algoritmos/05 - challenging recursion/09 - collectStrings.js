function collectStrings (obj) {
    let result = []
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
          } else if (typeof obj[key] === 'string') {
            result.push(obj[key])
          }
      })
    }
  
    iterate(obj)
  
    return result
  }  