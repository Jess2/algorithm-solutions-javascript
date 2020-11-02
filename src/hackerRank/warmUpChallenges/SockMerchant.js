function sockMerchant(n, ar) {
  let socks = new Map();
  let pairsCount = 0;

  ar.forEach(sock => {
    if (socks.has(sock)) {
      const SOCKS_LENGTH = socks.get(sock) + 1;
      socks.set(sock, SOCKS_LENGTH);

      if (SOCKS_LENGTH % 2 === 0) {
        pairsCount++;
      }
    } else {
      socks.set(sock, 1);
    }
  });

  return pairsCount;
}

console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
