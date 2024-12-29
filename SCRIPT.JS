// Initialize the game with default values
let diamondCount = 10000;
let goldCount = 5000;

// Update the displayed currency
function updateCurrency() {
    document.getElementById('diamondCount').innerText = diamondCount;
    document.getElementById('goldCount').innerText = goldCount;
}

// Function to simulate opening a pack
function openPack() {
    if (diamondCount >= 3000) {
        // Deduct 3000 diamonds
        diamondCount -= 3000;

        // Generate a random player card
        const playerCard = generateRandomPlayerCard();
        
        // Update the market and team sections
        addPlayerToMarket(playerCard);
        alert(`You opened a pack and received ${playerCard.name}!`);

        // Update currency display
        updateCurrency();
    } else {
        alert("Not enough diamonds to open the pack!");
    }
}

// Function to generate a random player card
function generateRandomPlayerCard() {
    const players = [
        { name: "Lionel Messi", rating: 93, position: "RW" },
        { name: "Cristiano Ronaldo", rating: 92, position: "ST" },
        { name: "Kylian Mbappé", rating: 89, position: "CF" },
        { name: "Neymar", rating: 88, position: "LW" },
        { name: "Kevin De Bruyne", rating: 90, position: "CM" }
    ];

    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    return randomPlayer;
}

// Function to add a player to the market (display the card)
function addPlayerToMarket(player) {
    const cardGrid = document.querySelector('.card-grid');
    
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    
    cardDiv.innerHTML = `
        <h3>${player.name}</h3>
        <p>Rating: ${player.rating}</p>
        <p>Position: ${player.position}</p>
    `;

    cardGrid.appendChild(cardDiv);
}

// Event listener for the "Open Pack" button
document.getElementById('openPack').addEventListener('click', openPack);

// Initial call to update the currency display
updateCurrency();
