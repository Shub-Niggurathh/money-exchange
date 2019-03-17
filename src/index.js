// PLEASE DON'T change function name
module.exports = function makeExchange(currency) { 
    if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
        
    if (currency <= 0 ) {
        return {};
    }

    var result = {};
    var huiSobachiy = { H:50, Q:25, D:10, N:5, P:1 };

    for (var key in huiSobachiy){
        var sobaka = Math.floor(currency / huiSobachiy[key]);

        if (sobaka) {
            result[key] = sobaka;
        }

        currency = currency % huiSobachiy[key];
        
        if (currency === 0) {
            return result;
        }
    }
}