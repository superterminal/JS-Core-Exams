function solve() {

   let prices = {
      'js-fundamentals': 170,
      'js-advanced': 180,
      'js-applications': 190,
      'js-web': 490
   };

   $('.courseFoot button').on('click', function() {
      let selected = [];
      let currPrice = 0;

      $.each($('input[type="checkbox"]:checked'), function() {
         selected.push($(this).val());
      });

      selected.forEach(el => {
         currPrice += prices[el];
      });

      if (selected.includes('js-advanced') && selected.includes('js-fundamentals')) {
         currPrice -= 18;
      }

      if (selected.includes('js-advanced') && selected.includes('js-fundamentals') && selected.includes('js-applications')) {
         currPrice *= 0.94;
      }

      let currEdForm = $('#educationForm input:checked').val();

      if (currEdForm === 'online') {
         currPrice *= 0.94;
      }

      let bonusCourse = false;
      
      if (selected.length === 4) {
         bonusCourse = true;
      }

      let $ul = $('#myCourses .courseBody ul');

      selected.forEach(el => {
         if (el === 'js-advanced') {
            $ul.append(`<li>JS-Advanced</li>`);         
         } else if (el === 'js-applications') {
            $ul.append(`<li>JS-Applications</li>`);         
         } else if (el === 'js-fundamentals') {
            $ul.append(`<li>JS-Fundamentals</li>`);         
         } else if (el === 'js-web') {
            $ul.append(`<li>JS-Web</li>`);         
         }
      });
      
      if (bonusCourse) {
         $ul.append(`<li>HTML and CSS</li>`);         
      }

      let $price = $('#myCourses .courseFoot p');

      currPrice = Math.floor(currPrice);      
      $price.text(`Cost: ${currPrice + '.00'} BGN`);
   });
}
solve();