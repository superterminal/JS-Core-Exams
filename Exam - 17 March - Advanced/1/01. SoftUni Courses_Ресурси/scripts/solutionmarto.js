function solve(){
    $('button[value="signMeUp"]').click(function () {
        let price = 0;
        let fund = false;
        let adv = false;
        let app = false;
        let web = false;
        $('input[type=checkbox]').each(function () {
            let sThisVal = (this.checked ? $(this).val() : "");
            if (sThisVal === "js-fundamentals") {
                fund = true;
                $('.courseBody ul').append('<li>JS-Fundamentals</li>')
                price += 170;
            }
            if (sThisVal === "js-advanced") {
                $('.courseBody ul').append('<li>JS-Advanced</li>')
                adv = true;
                if (fund) {
                    price += 162;
                } else {
                    price += 180;
                }
            }
            if (sThisVal === "js-applications") {
                app = true;
                $('.courseBody ul').append('<li>JS-Applications</li>')
                price += 190;
    
                if(fund&&adv){
                    price*=0.94;
                }
            }
            if (sThisVal === 'js-web') {
                web = true;
                $('.courseBody ul').append('<li>JS-Web</li>')
                price += 490;
            }
        });
        $('input[type=radio]').each(function () {
            let temp = (this.checked ? $(this).val() : "");
        if(temp==='online'){
            price*=0.94;
        }})
        price = Math.floor(price)
        price = price + ".00";
        $("p").text(`Cost: ${price} lv.`);
        if(fund&&app&&adv&&web){
            $('.courseBody ul').append('<li>HTML and CSS</li>')
        }
    });
}