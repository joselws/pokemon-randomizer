import { PokemonRandomizer } from "./pokemon_randomizer.js";

const mainForm = document.querySelector("#main-form");
const gameSelect = document.querySelector("#game-select");
const versionSelect = document.querySelector("#version-select");
const difficultySelect = document.querySelector("#difficulty-select");
const monotypeInput = document.querySelectorAll('input[name="monotype"]');
const selectTypeSection = document.querySelector("#select-type-section");
const typeSelect = document.querySelector("#type-select");
const teamSize = document.querySelector("#team-size");
const pokemonCards = document.querySelector("#pokemon-cards");


mainForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const pokemonTeam = await getRandomPokemonTeam();
    populatePokemonCards(pokemonTeam);
});

function populatePokemonCards(pokemonTeam) {
    emptyPokemonCards();
    pokemonTeam.forEach(pokemon => {
        let pokemonCard = createPokemonCard(pokemon);
        pokemonCards.appendChild(pokemonCard);
    });
}

function createPokemonCard(pokemon) {
    const card = document.createElement("div");
    card.setAttribute("class", "pokemon-card");

    // Card Header with Name and Number
    const header = document.createElement("div");
    header.setAttribute("class", "pokemon-card-header");

    const nameElement = document.createElement("p");
    nameElement.setAttribute("class", "pokemon-name");
    nameElement.textContent = capitalizeString(pokemon.name);

    header.appendChild(nameElement);
    card.appendChild(header);

    // Pokemon Image Container
    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "pokemon-image-container");

    const image = document.createElement("img");
    image.setAttribute("class", "pokemon-image loading");
    image.setAttribute("alt", pokemon.name);

    // Use PokeAPI for sprites
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    // Fallback to default sprite if official artwork fails
    image.onerror = () => {
        image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    };

    image.onload = () => {
        image.classList.remove("loading");
    };

    imageContainer.appendChild(image);
    card.appendChild(imageContainer);

    // Type Badges
    const typesContainer = document.createElement("div");
    typesContainer.setAttribute("class", "pokemon-types");

    pokemon.types.forEach(type => {
        const typeBadge = document.createElement("span");
        typeBadge.setAttribute("class", `type-badge type-${type}`);
        typeBadge.textContent = capitalizeString(type);
        typesContainer.appendChild(typeBadge);
    });

    card.appendChild(typesContainer);

    return card;
}

function emptyPokemonCards() {
    const cards = document.querySelectorAll(".pokemon-card");
    cards.forEach(card => card.remove())
}

async function getRandomPokemonTeam() {
    const myTeam = new PokemonRandomizer()
    await myTeam.readPokemonFromFile(gameSelect.value);
    myTeam.filterByVersion(versionSelect.value);
    myTeam.filterByDifficulty(difficultySelect.value);
    if (isMonotypeChallenge()) {
        myTeam.filterByType(typeSelect.value);
    }
    myTeam.selectRandomTeam(Number(teamSize.value));
    return myTeam.selectedPokemon;
}

document.addEventListener("DOMContentLoaded", () => {
    populateVersionSelect(gameSelect.value);
    attachChangeEventToRadio();
});

gameSelect.addEventListener("change", () => {
    populateVersionSelect(gameSelect.value);
});

function populateVersionSelect(game) {
    emptyVersionSelect();
    let versions = []
    if (game === "rse") {
        versions = ["any", "ruby", "sapphire", "emerald"]
    } else if (game === "gsc") {
        versions = ["any", "gold", "silver", "crystal"]
    } else if (game === "rby") {
        versions = ["any", "red", "blue", "yellow"]
    }
    versions.forEach(version => {
        let newVersionOption = createVersionOption(version);
        versionSelect.appendChild(newVersionOption);
    });
}

function emptyVersionSelect() {
    const versionSelectOptions = document.querySelectorAll(".version-select-option");
    versionSelectOptions.forEach(option => option.remove());
}

function createVersionOption(version) {
    const versionName = capitalizeString(version);
    const option = document.createElement("option");
    option.innerHTML = versionName;
    option.setAttribute("class", "version-select-option");
    option.setAttribute("value", version);
    return option;
}

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function attachChangeEventToRadio() {
    monotypeInput.forEach(radio => {
        radio.addEventListener("change", radioChangeEvent)
    })
}

function radioChangeEvent() {
    const radioValue = getRadioValue()
    if (radioValue === "yes") {
        selectTypeSection.style.display = "flex";
    } else {
        selectTypeSection.style.display = "none";
    }
}

function getRadioValue() {
    for (let radioInput of monotypeInput) {
        if (!radioInput.checked) {
            continue
        }
        return radioInput.value
    }
}

function isMonotypeChallenge() {
    const radioValue = getRadioValue();
    if (radioValue === "yes") {
        return true;
    }
    return false;
}
