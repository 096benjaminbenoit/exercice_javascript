let table17 = [1, 2, 3, 4, 5]

function reverse(table17) {
    var output = [];
    while (table17.length) {
      output.push(table17.pop());
    }
  
    return output;
  }

  console.log(reverse([1, 2, 3, 4, 5]))