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

function createPokemonCard(pokemonName) {
    const div = document.createElement("div");
    div.setAttribute("class", "pokemon-card");
    const p = document.createElement("p");
    p.setAttribute("class", "pokemon-name");
    p.innerHTML = capitalizeString(pokemonName);
    div.appendChild(p);
    return div;
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
    return myTeam.selectedPokemon.map(pokemon => pokemon.name);
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
        versions = ["ruby", "sapphire", "emerald"]
    } else if (game === "gsc") {
        versions = ["gold", "silver", "crystal"]
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
