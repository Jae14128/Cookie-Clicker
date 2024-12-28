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
 
];

//dom
const buttonincrease= document.getElementById("increase");
const pcookiesowned= document.getElementById("cookies-owned");
const pcookiegains= document.getElementById("cookie-gains");
const buttonreset= document.getElementById("reset");
const divupgradeshop= document.getElementById("upgradeshop");

//retrieve and display upgrades from the API
const upgradesContainer= document.getElementById("upgrade-shop");
async function getShopUgrades () {
    const result = await fetch (
"https://cookie-upgrade-api.vercel.app/api/upgrades"
);

//translate the work that'll be received from JSON
const data=await response.json();
return [data];

////push to upgrades

};


async function provideShopUpgrades() {
    const getShopItems= await getShopUpgrades();
    getShopItems.forEach(function (upgrade) {
        const upgradeName= document.getElementById("upgrade-shop");
        const upgradeCost= document.getElementById("cookie-gains");
        const upgradeCPSIncrease= document.getElementById("increase");

        upgradeName.setAttribute("upgrade-shop", "Get an upgrade");
        upgradeCost.setAttribute("cookie-gains", "Gain an extra cookie");
        upgradeCPSIncrease.setAttribute("increase", "Increase your score");

        shopUgradesArray.appendChild(upgradeName);
        shopUgradesArray.appendChild(upgradeCost);
        shopUgradesArray.appendChild(upgradeCPSIncrease);

        cookies-owned.addEventListener('click', handleClick);
        cookies-gains.addEventListener('click', handleClick);
        shop-upgrade.addEventListener('click', handleClick);

        function handleButtonClick() {
         const buttonincrease=document.getElementById("increase");
            buttonincrease.addEventListener("click", handleButtonClick);
        }
    })};

    renderShopUpgrades();

const pcookiesowned= document.getElementById("cookies-owned");
pcookies.addEventListener("click", handleClick);


const pcookiegains= document.getElementById("cookie-gains");
pcookiegains.addEventListener("click", handleClick);


const buttonreset= document.getElementById("reset");
buttonreset.addEventListener("click", handleClick);


const divupgradeshop= document.getElementById("upgradeshop");
divupgradeshop.addEventListener("click", handleClick);


function handleUpgradeClick() {
    if upgrade ==5;
    console.log("You have received an upgrade!")

}

setinterval (function() {


}, 1000)