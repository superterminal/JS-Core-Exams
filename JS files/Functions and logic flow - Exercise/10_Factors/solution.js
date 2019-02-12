function solve() {
   let number = Number(document.getElementById('num').value);

    document.getElementById('result').textContent = findFactors(number).join(' ');


   function findFactors(n) {

       let primeFactors = [];

       for (let i = 1; i <= n; i++) {
           if (n % i === 0) {
               primeFactors.push(i);
           }
       }

       return primeFactors;
   }
}