for (let carType in statistics) {
    if (carType[0] === 'r' || statistics[carType] % 2 == 1) {
      console.log(statistics[carType]);
    }
}