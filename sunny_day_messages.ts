function sunnyDayMessage(isSunny: boolean,numberOfSunnyDays: number): string
{
    if(isSunny)
    {
        return `its beautiful and sunny out  there! there are ${numberOfSunnyDays} here`;
    }
    else
    {
        return "its not sunny out today";
    }
}

console.log(sunnyDayMessage(true,5));
