/**
 * @param {string[]} emails
 * @return {number}
 */
let numUniqueEmails = function(emails) {
  let uniqueEmails = [];

  for (let i = 0; i < emails.length; i++) {
    let localName = emails[i].split('@')[0].replace(/\./g, '').split('+')[0];
    let domain = emails[i].split('@')[1];
    let email = `${localName}@${domain}`;

    if (!uniqueEmails.includes(email)) {
      uniqueEmails.push(email);
    }
  }

  return uniqueEmails.length;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));