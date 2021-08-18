function sayTheWeather(isSunny: boolean) {
  const message = (isSunny: boolean) => {
    if (isSunny == true) {
      return "it is sunny today";
    } else {
      return "its not sunny today";
    }
  };
}

const name = "hello";
console.log(sayTheWeather(true));

export = {};
