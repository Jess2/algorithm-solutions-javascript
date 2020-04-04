/**
 * @param {string} address
 * @return {string}
 */
let defangIPaddr = function(address) {
  return address.replace(/\./gi, '[.]');
};

console.log(defangIPaddr("1.1.1.1"));