/**
 * @param {string} text
 * @return {number}
 */
let maxNumberOfBalloons = function(text) {
  let balloonStr = "balloon";
  let balloonSizeArr = [];
  let textSizeArr = [];
  let minCount = 0;

  for (let i = 0; i < balloonStr.length; i++) {
    let regex = new RegExp(balloonStr[i], "gi");
    balloonSizeArr.push(balloonStr.match(regex).length);
    textSizeArr.push(text.match(regex) ? text.match(regex).length : 0);
  }

  for (let i = 0; i < textSizeArr.length; i++) {
    let count = Math.floor(textSizeArr[i] / balloonSizeArr[i]);
    if (i === 0 || count < minCount) {
      minCount = count;
    }
  }

  return minCount;
};

console.log(maxNumberOfBalloons("krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"));