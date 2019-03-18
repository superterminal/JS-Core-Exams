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

      let currEdForm = $('#educationForm input:checked').val();

      selected.forEach(el => {
         currPrice += prices[el];
      })

      if (selected.includes('js-advanced') && selected.includes('js-fundamentals')) {
         currPrice -= 18;
         prices['js-advanced'] = 162;
      }

      if (selected.includes('js-advanced') && selected.includes('js-fundamentals') && selected.includes('js-applications')) {
         currPrice -= 32.4;
      }

      if (currEdForm === 'online') {
         if (prices['js-advanced'] === 162) {
            prices = {
               'js-fundamentals': 159.8,
               'js-advanced': 169.2,
               'js-applications': 178.6,
               'js-web': 460.6
            }
         } else {
            prices = {
               'js-fundamentals': 159.8,
               'js-advanced': 159.04,
               'js-applications': 178.6,
               'js-web': 460.6
            }
         }
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

      currPrice = Math.round(currPrice);      
      $price.text(`Cost: ${currPrice + '.00'} BGN`)
   });
}

solve();