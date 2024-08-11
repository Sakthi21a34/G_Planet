
const games = [
    { name: "Carrom", url: "carrom.html" },
    { name: "FIFA", url: "fifa.html" },
    { name: "Zombie", url: "zombie.html" },
    { name: "Free Fire", url: "ff.html" },
    { name: "Jurassic World", url: "jw.html" },
    { name: "Marvel Fight", url: "marvel.html" },
    { name: "BGMI", url: "bmi.html" },
    { name: "Castle Crush", url: "castle.html" },
    { name: "Temple Run 2", url: "temple.html" },
    { name: "Subway Surfers", url: "subway.html" },
    { name: "Mordern Strike", url: "ms.html" },
    { name: "Mini Militia", url: "mini.html" },
    { name: "Lords Mobile", url: "lm.html" },
    { name: "Street Racing 3D",url:"sr.html"},
    { name: "Farm City",url:"town.html"},
    { name: "Town Ship", url: "town.html" },
    { name: "No Wifi Games", url: "off.html" },
    { name: "Jewels Classic", url: "jc.html" },
    { name: "Candy Crush", url: "jc.html" },
    { name: "Hunter Assassin", url: "hunter.html" },
    { name: "Hill Climb Racing", url: "hill.html" },
];

function filterFunction() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = '';
    if (input) {
        let filteredGames = games.filter(game => game.name.toLowerCase().includes(input));
        let displayedGames = filteredGames.slice(0, 4); // Show only the first 4 suggestions
        displayedGames.forEach(game => {
            let a = document.createElement('a');
            a.href = game.url;
            a.textContent = game.name;
            dropdown.appendChild(a);
        });
        dropdown.classList.add('show');
    } else {
        dropdown.classList.remove('show');
    }
}

function searchFunction() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let firstMatch = games.find(game => game.name.toLowerCase().includes(input));
    if (firstMatch) {
        window.location.href = firstMatch.url;
    }
}

document.addEventListener('click', function(event) {
    if (!event.target.matches('#searchInput')) {
        document.getElementById('dropdown').classList.remove('show');
    }
});