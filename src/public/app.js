const gamesList = document.getElementById('games-list');
const gameForm = document.getElementById('game-form');
const statusMessage = document.getElementById('status-message');
const clearButton = document.getElementById('clear-form');
const reloadButton = document.getElementById('reload-games');

const gameId = document.getElementById('game-id');
const nameInput = document.getElementById('name');
const minPlayersInput = document.getElementById('minPlayers');
const maxPlayersInput = document.getElementById('maxPlayers');
const avgDurationInput = document.getElementById('avgDuration');
const acqDateInput = document.getElementById('acqDate');
const conditionInput = document.getElementById('condition');

const apiUrl = '/api/games';

function showMessage(message) {
    statusMessage.textContent = message;
}

function clearForm() {
    gameId.value = '';
    gameForm.reset();
}

function fillForm(game) {
    gameId.value = game.id;
    nameInput.value = game.name || '';
    minPlayersInput.value = game.minPlayers || '';
    maxPlayersInput.value = game.maxPlayers || '';
    avgDurationInput.value = game.avgDuration || '';
    acqDateInput.value = game.acqDate || '';
    conditionInput.value = game.condition || '';
}

function renderGames(games) {
    gamesList.innerHTML = '';

    if (!games.length) {
        gamesList.innerHTML = '<li>No hay juegos registrados.</li>';
        return;
    }

    games.forEach((game) => {
        const item = document.createElement('li');
        item.innerHTML = `
            <strong>${game.name}</strong>
            <span> | Jugadores: ${game.minPlayers}-${game.maxPlayers}</span>
            <span> | Duración: ${game.avgDuration}</span>
            <span> | Fecha: ${game.acqDate}</span>
            <span> | Estado: ${game.condition}</span>
        `;

        const editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', () => fillForm(game));

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', async () => {
            await fetch(`${apiUrl}/${game.id}`, { method: 'DELETE' });
            showMessage('Juego eliminado.');
            loadGames();
        });

        item.appendChild(document.createElement('br'));
        item.appendChild(editButton);
        item.appendChild(deleteButton);
        gamesList.appendChild(item);
    });
}

async function loadGames() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    renderGames(data.games || []);
}

gameForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const payload = {
        name: nameInput.value.trim(),
        minPlayers: Number(minPlayersInput.value),
        maxPlayers: Number(maxPlayersInput.value),
        avgDuration: Number(avgDurationInput.value),
        acqDate: acqDateInput.value,
        condition: conditionInput.value.trim()
    };

    const id = gameId.value;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${apiUrl}/${id}` : apiUrl;

    await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    showMessage(id ? 'Juego actualizado.' : 'Juego creado.');
    clearForm();
    loadGames();
});

clearButton.addEventListener('click', clearForm);
reloadButton.addEventListener('click', loadGames);

loadGames();