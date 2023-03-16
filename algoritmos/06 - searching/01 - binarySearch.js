function binarySearch(arr, val){
    // add whatever parameters you deem necessary - good luck!
      var left = 0
      var right = arr.length - 1

      while(left < right) {
          var middle = Math.floor((left + right) / 2)

          if (arr[middle] == val) {
              return middle
          } else if (arr[middle] < val) {
              left = middle + 1
          } else if (arr[middle] > val) {
              right = middle - 1
          }
      }

      return -1;
  }

  console.log(binarySearch([1,2,3,4,5,6,7], 8))