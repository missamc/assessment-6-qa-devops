const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('return an array', () =>{
    let result = shuffle(['Self-Aware Garbage Android', 'Beta', 'The Hammer', 'Nozzle', 'Rusty', 'Mechi', 'Crowbar', 'Globotron', 'Brobot', 'Prime Information Drone'])
    expect(result).toEqual([])
  })

  test('return an array of the same length as the arguement sent in', () => {
    let result = shuffle(['Self-Aware Garbage Android', 'Beta', 'The Hammer', 'Nozzle', 'Rusty', 'Mechi', 'Crowbar', 'Globotron', 'Brobot', 'Prime Information Drone'])
    expect(reesult.length).toEqual([0, 9])
  })
  


});
