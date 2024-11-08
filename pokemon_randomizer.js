export class PokemonRandomizer {
    constructor() {
        this.availablePokemon = [];
        this.selectedPokemon = [];
        this.gameVersion = ""
    }

    async readPokemonFromFile(game) {
        try {
            const response = await fetch(`./data/${game}.json`)
            const data = await response.json()
            this.availablePokemon = data;
        } catch(err) {
            console.error("Error reading from file.", err);
        }
    }

    filterByVersion(gameVersion) {
        if (gameVersion === "any") {
            return;
        }
        this.gameVersion = gameVersion;
        this.availablePokemon = this.availablePokemon.filter(pokemon => {
            return pokemon.games.includes(gameVersion)
        });
    }

    filterByDifficulty(difficulty) {
        if (difficulty === "random") {
            const options = ["veryEasy", "easy", "normal", "hard", "veryHard"]
            const randomIndex = Math.floor(Math.random() * options.length);
            difficulty = options[randomIndex];
        }
        switch (difficulty) {
            case "veryEasy":
                this.availablePokemon = this.availablePokemon.filter(pokemon => {
                    return pokemon.rating == "good"
                });
                break;
            case "easy":
                this.availablePokemon = this.availablePokemon.filter(pokemon => {
                    return pokemon.rating != "bad"
                });
                break;
            case "normal":
                break;
            case "hard":
                this.availablePokemon = this.availablePokemon.filter(pokemon => {
                    return pokemon.rating != "good"
                });
                break;
            case "veryHard":
                this.availablePokemon = this.availablePokemon.filter(pokemon => {
                    return pokemon.rating == "bad"
                });
                break;
        }
    }

    filterByType(type) {
        if (type === "random") {
            const types = [
                "normal",
                "fire",
                "water",
                "grass",
                "electric",
                "ice",
                "fighting",
                "poison",
                "ground",
                "flying",
                "psychic",
                "bug",
                "rock",
                "ghost",
                "dragon",
                "dark",
                "steel"
            ]
            const randomIndex = Math.floor(Math.random() * types.length);
            type = types[randomIndex];
        }
        this.availablePokemon = this.availablePokemon.filter(pokemon => {
            return pokemon.types.includes(type)
        });
    }

    selectRandomTeam(teamSize) {
        this.selectedPokemon = [];

        if (teamSize >= this.availablePokemon.length) {
            this.selectedPokemon = this.availablePokemon
            return
        }

        const starterPokemons = this.availablePokemon.filter(pokemon => {
            return pokemon.isPossibleStarter;
        });
        if (starterPokemons.length !== 0) {
            let randomStarterIndex = Math.floor(Math.random() * starterPokemons.length);
            let rolledStarterPokemon = starterPokemons[randomStarterIndex];
            this.addPokemonToTeam(rolledStarterPokemon);
        }

        while(this.selectedPokemon.length < teamSize) {
            let randomIndex = Math.floor(Math.random() * this.availablePokemon.length);
            let rolledPokemon = this.availablePokemon[randomIndex];
            this.addPokemonToTeam(rolledPokemon);
        }
    }

    addPokemonToTeam(newPokemon) {
        this.selectedPokemon.push(newPokemon);
        if (newPokemon.isGameStarter && this.gameVersion !== "yellow") {
            this.filterByCustomDataAttribute("isGameStarter");
        } else if (newPokemon.isEeveelution) {
            this.filterByCustomDataAttribute("isEeveelution");
        } else if (newPokemon.isFossil) {
            this.filterByCustomDataAttribute("isFossil");
        } else {
            this.removePokemonFromPool(newPokemon);
        }
    }

    filterByCustomDataAttribute(attribute) {
        this.availablePokemon = this.availablePokemon.filter(pokemon => {
            return !pokemon[attribute];
        });
    }

    removePokemonFromPool(pokemonToRemove) {
        this.availablePokemon = this.availablePokemon.filter(pokemon => {
            return pokemon.name !== pokemonToRemove.name;
        });
    }
}

// module.exports = PokemonRandomizer;