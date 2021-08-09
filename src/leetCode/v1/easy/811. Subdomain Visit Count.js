/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
let subdomainVisits = function(cpdomains) {
  let domains = {};
  let resultArr = [];

  for (let i = 0; i < cpdomains.length; i++) {
    let keys = cpdomains[i].split(' ')[1].split('.');
    let value = Number(cpdomains[i].split(' ')[0]);

    for (let j = 0; j < keys.length; j++) {
      let key = keys.slice(j, keys.length).join('.');

      if (domains[key]) {
        domains[key] += value;
      } else {
        domains[key] = value;
      }
    }
  }

  for (let key in domains) {
    resultArr.push(domains[key] + " " + key);
  }

  return resultArr;
};

console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));