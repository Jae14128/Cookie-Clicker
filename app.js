console.log("This works")

//First store global variables 
let cookieCount= 0;
let cookiesPerSecond= 0;
//you can start with no cookies in your total each second or 1 cookie

let gameData={
    cookieCount:0,
    cookiesPerSecond:0,
};
//these values can also be stored in a neat and tidy object containing all the game data

//add upgrades to the array, do it with upgrads from our API
const shopUgradesArray = [
    {upgradeOne:"Muffins"},
    {upgradeTwo:"Donoughts"},
    {upgradeThree:"Cheesecake"},
    {upgradeFour:"Cherry Pie"},
    {upgradeFive:"Super Mega Chip"}

];

//dom
const buttonincrease= document.getElementById("increase");
const pcookiesowned= document.getElementById("cookies-owned");
const pcookiegains= document.getElementById("cookie-gains");
const buttonreset= document.getElementById("reset");
const divupgradeshop= document.getElementById("upgradeshop");

//retrieve and display upgrades from the API

