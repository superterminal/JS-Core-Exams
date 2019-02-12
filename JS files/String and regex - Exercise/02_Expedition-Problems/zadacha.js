function solve() {

  // let keyword = '<>';
  let keyword = '4ds';

  // let inputStr = 'o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b';
  let inputStr = 'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532';

  let pattern = /(north|east).*?([0-9]{2}).*?\,.*?([0-9]{6})/gmi;

  let messagePattern = new RegExp(`(?<=${keyword}).*(?=${keyword})`);

  let dirPattern = /north|east/gmi;

  let secretMessage = inputStr.match(messagePattern)[0];

  let m;

  let eastCounter;
  let northCounter;

  let resultArr = [];
  let matchesArr = [];
  
  while ((m = pattern.exec(inputStr)) !== null) {

    m.forEach((match, groupIndex) => {
      
      if (groupIndex === 0) {
        let tempMatches = match.match(dirPattern);        
        if (tempMatches.length > 1)
          resultArr.push('invalid');
        else 
          resultArr.push(tempMatches)
      }

      if (resultArr[resultArr.length - 1] != 'invalid')
        matchesArr.push(match);
    });
  }
  for (let i = 0; i < matchesArr.length / 4; i++) {
    let tempMatches = matchesArr[i * 4].match(dirPattern);        
    if (tempMatches[0].toLowerCase() === 'east') {
      eastCounter = i;
    } else if(tempMatches[0].toLowerCase() === 'north') {
      northCounter = i;
    }
  }
  
  console.log(matchesArr);
  console.log(northCounter);
  
  let eastCoord = `${matchesArr[(eastCounter * 4) + 2]}.${matchesArr[(eastCounter * 4) + 3]} E`;
  let northCoord = `${matchesArr[(northCounter * 4) + 2]}.${matchesArr[(northCounter * 4) + 3]} N`;
  
  let msg = `Message: ${secretMessage}`;

  console.log(northCoord);
  console.log(eastCoord);

  console.log(msg);

//   42.645746 N
//   23.987324 E
//   Message: ThE sanDwich is iN the refrIGErator
  

//   47.874532 N
//   19.432567 E
//   Message: Not all those who wander are lost.
}
solve()
