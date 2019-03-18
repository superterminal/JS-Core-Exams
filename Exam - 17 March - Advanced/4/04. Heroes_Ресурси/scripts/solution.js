function solve(){
   let $kingdomName = $('#kingdom div input:nth-child(1)');
   let $kingName = $('#kingdom div input:nth-child(2)');

   let weapons = {
      'TANKS': 0,
      'FIGHTERS': 0,
      'MAGES': 0
   };

   $('#kingdom div button').on('click', function() {
      if (($kingdomName.val().toUpperCase() === 'CASTLE' ||
          $kingdomName.val().toUpperCase() === 'DUNGEON' ||
          $kingdomName.val().toUpperCase() === 'FORTRESS' ||
          $kingdomName.val().toUpperCase() === 'INFERNO' ||
          $kingdomName.val().toUpperCase() === 'NECROPOLIS' ||
          $kingdomName.val().toUpperCase() === 'RAMPART' ||
          $kingdomName.val().toUpperCase() === 'STRONGHOLD' ||
          $kingdomName.val().toUpperCase() === 'TOWER' ||
          $kingdomName.val().toUpperCase() === 'CONFLUX') && $kingName.val().length >= 2) {
         
         $kingdomNameAsID = '#' + $kingdomName.val().toLowerCase();

         $($kingdomNameAsID).attr('style', 'display: inline-block;')

         $($kingdomNameAsID).append(`
         <h1>${$kingdomName.val().toUpperCase()}</h1>
         <div class = "castle"></div>
         <h2>${$kingName.val().toUpperCase()}</h2>
         <fieldset>
            <legend>Army</legend>
            <p>TANKS - 0</p>
            <p>FIGHTERS - 0</p>
            <p>MAGES - 0</p>
            <div class = "armyOutput"></div>
         </fieldset>
         `);
      }
   });

   $('#characters button').on('click', function() {
      let inputClicked = $('#characters input:checked').val();
      
      let character = $('#characters input[type="text"]:nth-child(1)').val();
      let kingdom = $('#characters input[type="text"]:nth-child(2)').val();

      let kingdoms = Array.from($('#workField').find('h1'));
      let checkForKingdom = [];
      kingdoms.forEach(el => {
         checkForKingdom.push($(el).text());
      });

      if (inputClicked !== undefined && character.length >= 2 && 
         (kingdom.toUpperCase() === 'CASTLE' ||
         kingdom.toUpperCase() === 'DUNGEON' ||
         kingdom.toUpperCase() === 'FORTRESS' ||
         kingdom.toUpperCase() === 'INFERNO' ||
         kingdom.toUpperCase() === 'NECROPOLIS' ||
         kingdom.toUpperCase() === 'RAMPART' ||
         kingdom.toUpperCase() === 'STRONGHOLD' ||
         kingdom.toUpperCase() === 'TOWER' ||
         kingdom.toUpperCase() === 'CONFLUX') && checkForKingdom.includes(kingdom.toUpperCase())) {
            
            let nchild = 0;
            let weapon = '';
            if (inputClicked === 'tank') {
               nchild = 0;
               weapon = 'TANKS';
            } else if (inputClicked === 'fighter') {
               nchild = 1;
               weapon = 'FIGHTERS';
            } else if (inputClicked === 'mage'){
               nchild = 2;
               weapon = 'MAGES';
            }
            weapons[weapon]++
            let kingdomJ = '#' + kingdom.toLowerCase();
            $(`${kingdomJ} fieldset p:eq(${nchild})`).text(`${weapon} - ${weapons[weapon]}`);

            $(`${kingdomJ} .armyOutput`).append(character + ' ');
         }
   });

   $('#actions button').on('click', function() {
      let $attacker = $('#actions input:nth-child(2)').val().toLowerCase();
      let $defender = $('#actions input:nth-child(3)').val().toLowerCase();

      let $attackerWithoutParent = $('#map').find(`h1:contains(${$attacker.toUpperCase()})`);
      let $defenderWithoutParent = $('#map').find(`h1:contains(${$defender.toUpperCase()})`);

      let $attackerCastle = $('#map').find(`h1:contains(${$attacker.toUpperCase()})`).parent();
      let $defenderCastle = $('#map').find(`h1:contains(${$defender.toUpperCase()})`).parent();

      if (($attacker.toUpperCase() === $attackerWithoutParent.text() || $defender.toUpperCase() === $defenderWithoutParent.text()) &&
         ($defender.toUpperCase() === $attackerWithoutParent.text() || $attacker.toUpperCase() === $defenderWithoutParent.text())) {

         let attackingPointsTanks = Number($($attackerCastle).find(`p:contains('TANKS')`).text().split(' - ')[1]);
         let attackingPointsMages = Number($($attackerCastle).find(`p:contains('MAGES')`).text().split(' - ')[1]);
         let attackingPointsFighters = Number($($attackerCastle).find(`p:contains('FIGHTERS')`).text().split(' - ')[1]);
   
         let totalAttack = attackingPointsFighters * 50;
         totalAttack += attackingPointsMages * 70;
         totalAttack += attackingPointsTanks * 20;
   
         let defensePointsTanks = Number($($defenderCastle).find(`p:contains('TANKS')`).text().split(' - ')[1]);
         let defensePointsMages = Number($($defenderCastle).find(`p:contains('MAGES')`).text().split(' - ')[1]);
         let defensePointsFighters = Number($($defenderCastle).find(`p:contains('FIGHTERS')`).text().split(' - ')[1]);
   
         let totalDefense = defensePointsTanks * 80;
         totalDefense += defensePointsMages * 30;
         totalDefense += defensePointsFighters * 50;
   

         if (totalAttack > totalDefense) {
            let currKing = $attackerCastle.find('h2').text();
            $defenderCastle.find('h2').text(currKing);
         }
      } else {
         $('#actions input:nth-child(2)').val('');
         $('#actions input:nth-child(3)').val('');
      }
   });
}
solve();


