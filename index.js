const mainForm = document.querySelector("#main-form");
const gameSelect = document.querySelector("#game-select");
const versionSelect = document.querySelector("#version-select");
const difficultySelect = document.querySelector("#difficulty-select");
const monotypeInput = document.querySelectorAll('input[name="monotype"]');
const selectTypeSection = document.querySelector("#select-type-section");
const typeSelect = document.querySelector("#type-select");
const teamSize = document.querySelector("#team-size");

mainForm.addEventListener("submit", event => {
    event.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
    populateVersionSelect(gameSelect.value);
    attachChangeEventToRadio();
});

function populateVersionSelect(game) {
    emptyVersionSelect();
    let versions = []
    if (game === "rse") {
        versions = ["ruby", "sapphire", "emerald"]
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
    for (radioInput of monotypeInput) {
        if (!radioInput.checked) {
            continue
        }
        return radioInput.value
    }
}
