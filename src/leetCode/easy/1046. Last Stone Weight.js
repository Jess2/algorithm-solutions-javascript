/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function(stones) {
  let newStones = [...stones];

  while (newStones.length !== 1) {

    let heaviestStone = 0;
    let secondHeaviestStone = 0;

    for (let i = 0; i < newStones.length; i++) {
      if (i === 0 || newStones[i] >= heaviestStone) {
        secondHeaviestStone = heaviestStone;
        heaviestStone = newStones[i];
      } else if (newStones[i] > secondHeaviestStone && newStones[i] < heaviestStone) {
        secondHeaviestStone = newStones[i];
      }
    }

    newStones.splice(newStones.indexOf(heaviestStone), 1);
    newStones.splice(newStones.indexOf(secondHeaviestStone), 1);

    if (heaviestStone !== secondHeaviestStone) {
      let newStone = heaviestStone - secondHeaviestStone;
      newStones.push(newStone);
    }
  }

  return newStones[0];
};

console.log(lastStoneWeight([2,8,4,1,7,1]));