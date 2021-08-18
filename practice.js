function sayTheWeather(isSunny) {
    var message = function (isSunny) {
        if (isSunny == true) {
            return "it is sunny today";
        }
        else {
            return "its not sunny today";
        }
    };
}
var name = "hello";
console.log(sayTheWeather(true));
