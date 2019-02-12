function solve() {

  let keyword = document.getElementById('str').value;
  let inputStr = document.getElementById('text').value;
  let htmlResult = document.getElementById('result');

  let pattern = /(north|east).*?([0-9]{2})[^,]*?\,[^,]*?([0-9]{6})/gmi;

  let messagePattern = new RegExp(`(?<=${keyword}).*?(?=${keyword})`);

  let dirPattern = /north|east/gmi;

  let secretMessage = inputStr.match(messagePattern)[0];

  let result = inputStr.match(pattern);
  
  let m;

  let eastTxt = '';
  let northTxt = '';
  
  while ((m = pattern.exec(inputStr)) !== null) {

    m.forEach((match, groupIndex) => {

        if (m[1].toLowerCase() === 'north'){
            northTxt = `${m[2]}.${m[3]} N`;
        } else if (m[1].toLowerCase() === 'east') {
            eastTxt = `${m[2]}.${m[3]} E`;            
        }
      
    //   if (groupIndex === 0) {
    //     let tempMatches = match.match(dirPattern);        
    //     if (tempMatches.length < 2) {
    //       result.push(tempMatches);
    //     } else {
    //       resultArr.push('invalid');
    //     }
    //   }
      
    //   if (resultArr[resultArr.length - 1] != 'invalid') {
    //     matchesArr.push(match);
    //   }
    });
  }

//   for (let i = 0; i < matchesArr.length / 4; i++) {
//     let tempMatches = matchesArr[i * 4].match(dirPattern);    
//     if (tempMatches[0].toLowerCase() === 'east') {
//       eastCounter = i;
//     } else if(tempMatches[0].toLowerCase() === 'north') {
//       northCounter = i;
//     }
//   }
  // console.log(matchesArr);
  // console.log(northCounter);
  
  
//   let eastCoord = `${matchesArr[(eastCounter * 4) + 2]}.${matchesArr[(eastCounter * 4) + 3]} E`;
//   let northCoord = `${matchesArr[(northCounter * 4) + 2]}.${matchesArr[(northCounter * 4) + 3]} N`;
  
  let msg = `Message: ${secretMessage}`;

  printResult(northTxt);
  printResult(eastTxt);
  printResult(msg);

  function printResult(currRes) {
      let tempP = document.createElement('p');
      tempP.textContent = currRes;
      htmlResult.appendChild(tempP);
  }
}
