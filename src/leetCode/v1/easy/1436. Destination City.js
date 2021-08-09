/**
 * @param {string[][]} paths
 * @return {string}
 */
let destCity = function(paths) {
  const fromGraph = new Set();

  for (const [from, to] of paths) {
    fromGraph.add(from);
  }

  for (const [from, to] of paths) {
    if (!fromGraph.has(to)) return to;
  }
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));