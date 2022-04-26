let counter = str => {
    let name = str.split(" ").join("").toUpperCase();
    return name.split("").reduce((total, letter) => {
      total[letter] ? total[letter]++ : total[letter] = 1;
      return total;
    }, {});
  };
  
  const stringCount = counter("Amolya Sharma");

  for (const property in stringCount) {
    console.log(`${property}-${stringCount[property]}`);
  }
