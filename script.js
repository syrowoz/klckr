let clickCount = 0;
let upgradeLevel = 0;
let upgrades = [
    { name: "Upgrade 1", cost: 10, multiplier: 2 },
    { name: "Upgrade 2", cost: 25, multiplier: 3 },
    { name: "Upgrade 3", cost: 50, multiplier: 5 },
    { name: "Upgrade 4", cost: 100, multiplier: 10 },
    { name: "Upgrade 5", cost: 250, multiplier: 20 },
    { name: "Upgrade 6", cost: 500, multiplier: 50 },
];

const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeLevelDisplay = document.getElementById('upgradeLevel');
const upgradeList = document.getElementById('upgradeList');

clickButton.addEventListener('click', () => {
    clickCount += 1 + upgradeLevel;
    clickCountDisplay.textContent = clickCount;
});

upgradeButton.addEventListener('click', () => {
    const currentUpgrade = upgrades[upgradeLevel];
    
    if (clickCount >= currentUpgrade.cost) {
        clickCount -= currentUpgrade.cost;
        upgradeLevel++;
        clickCountDisplay.textContent = clickCount;
        upgradeLevelDisplay.textContent = upgradeLevel;
        upgradeButton.textContent = `Upgrade ${upgradeLevel + 1} (Price: ${upgrades[upgradeLevel].cost})`;

        const upgradeListItem = document.createElement('li');
        upgradeListItem.textContent = `${currentUpgrade.name} (multiplier: x${currentUpgrade.multiplier})`;
        upgradeList.appendChild(upgradeListItem);
    }
});
