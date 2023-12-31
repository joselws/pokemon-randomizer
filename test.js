const PokemonRandomizer = require("./pokemon_randomizer.js");

data = [
    {
        "name": "sceptile",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["grass"],
        "rating": "good",
        "isPossibleStarter": true,
        "isGameStarter": true,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "blaziken",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["fire", "fighting"],
        "rating": "good",
        "isPossibleStarter": true,
        "isGameStarter": true,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "swampert",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water", "ground"],
        "rating": "good",
        "isPossibleStarter": true,
        "isGameStarter": true,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "mightyena",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["dark"],
        "rating": "bad",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "linoone",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["normal"],
        "rating": "bad",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "beautifly",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["bug", "flying"],
        "rating": "bad",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "dustox",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["bug", "poison"],
        "rating": "bad",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "ludicolo",
        "games": ["sapphire", "emerald"],
        "types": ["grass", "water"],
        "rating": "good",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "shiftry",
        "games": ["ruby", "emerald"],
        "types": ["grass", "dark"],
        "rating": "normal",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "swellow",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["flying", "normal"],
        "rating": "good",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "pelipper",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["flying", "water"],
        "rating": "bad",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "gardevoir",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["psychic"],
        "rating": "good",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "masquerain",
        "games": ["ruby", "sapphire"],
        "types": ["bug", "flying"],
        "rating": "bad",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "breloom",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["grass", "fighting"],
        "rating": "normal",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "vigoroth",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["normal"],
        "rating": "normal",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "slaking",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["normal"],
        "rating": "good",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "kadabra",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["psychic"],
        "rating": "normal",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "ninjask",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["bug", "flying"],
        "rating": "bad",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "shedinja",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["bug", "ghost"],
        "rating": "normal",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "exploud",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["normal"],
        "rating": "normal",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "hariyama",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["fighting"],
        "rating": "normal",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "seaking",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water"],
        "rating": "normal",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "gyarados",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water", "flying"],
        "rating": "good",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "azumarill",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water"],
        "rating": "normal",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "graveler",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["rock", "ground"],
        "rating": "bad",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "nosepass",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["rock"],
        "rating": "bad",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "delcatty",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["normal"],
        "rating": "bad",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "crobat",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["flying", "poison"],
        "rating": "good",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "tentacruel",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["poison", "water"],
        "rating": "good",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "sableye",
        "games": ["sapphire", "emerald"],
        "types": ["dark", "ghost"],
        "rating": "bad",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "aggron",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["steel", "rock"],
        "rating": "good",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "mawile",
        "games": ["ruby", "emerald"],
        "types": ["steel"],
        "rating": "normal",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "machoke",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["fighting"],
        "rating": "bad",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "medicham",
        "games": ["ruby", "sapphire"],
        "types": ["fighting", "psychic"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "manectric",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["electric"],
        "rating": "good",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "minun",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["electric"],
        "rating": "bad",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "plusle",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["electric"],
        "rating": "bad",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "magneton",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["steel", "electric"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "electrode",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["electric"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "volbeat",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["bug"],
        "rating": "bad",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "illumise",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["bug"],
        "rating": "bad",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "vileplume",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["grass", "poison"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "bellossom",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["grass"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "dodrio",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["normal", "flying"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "roselia",
        "games": ["ruby", "sapphire"],
        "types": ["grass", "poison"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "swalot",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["poison"],
        "rating": "normal",
        "isPossibleStarter": true,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "sharpedo",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water", "dark"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "wailord",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "camerupt",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["ground", "fire"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "magcargo",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["fire", "rock"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "torkoal",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["fire"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "muk",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["poison"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "weezing",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["poison"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "grumpig",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["psychic"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "sandslash",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["ground"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "spinda",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["normal"],
        "rating": "bad",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "skarmory",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["flying", "steel"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "flygon",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["dragon", "ground"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "cacturne",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["dark", "grass"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "altaria",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["dragon", "flying"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "zangoose",
        "games": ["ruby"],
        "types": ["normal"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "seviper",
        "games": ["sapphire", "emerald"],
        "types": ["poison"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "lunatone",
        "games": ["sapphire"],
        "types": ["psychic", "rock"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "solrock",
        "games": ["ruby", "emerald"],
        "types": ["psychic", "rock"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "whiscash",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["ground", "water"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "crawdaunt",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["dark", "water"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "claydol",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["ground", "psychic"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "cradily",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["rock", "grass"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": true
    },
    {
        "name": "armaldo",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["rock", "bug"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": true
    },
    {
        "name": "wigglytuff",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["normal"],
        "rating": "bad",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "milotic",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "castform",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["normal"],
        "rating": "bad",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "starmie",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water", "psychic"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "kecleon",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["normal"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "banette",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["ghost"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "dusclops",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["ghost"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "tropius",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["flying", "grass"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "chimecho",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["psychic"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "absol",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["dark"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "ninetales",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["fire"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "raichu",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["electric"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "golduck",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "wobbuffet",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["psychic"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "xatu",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["flying", "psychic"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "girafarig",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["normal", "psychic"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "donphan",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["ground"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "pinsir",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["bug"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "heracross",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["bug", "fighting"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "rhydon",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["ground", "rock"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "glalie",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["ice", "dark"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "walrein",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["ice", "water"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "clamperl",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water"],
        "rating": "bad",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "relicanth",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water", "rock"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "corsola",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["rock", "water"],
        "rating": "bad",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "lanturn",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water", "electric"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "luvdisc",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water"],
        "rating": "bad",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "seadra",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["water"],
        "rating": "normal",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "regirock",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["rock"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "regice",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["ice"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    },
    {
        "name": "registeel",
        "games": ["ruby", "sapphire", "emerald"],
        "types": ["steel"],
        "rating": "good",
        "isPossibleStarter": false,
        "isGameStarter": false,
        "isEeveelution": false,
        "isFossil": false
    }
]

function main() {
    const myTeam = new PokemonRandomizer("rse");
    myTeam.availablePokemon = data;
    // myTeam.filterByVersion("emerald");
    // myTeam.filterByDifficulty("hard");
    // myTeam.filterByType("water");
    // myTeam.selectRandomTeam(4);

    goodPokemon = myTeam.availablePokemon.filter(pokemon => pokemon.rating === "good")
    normalPokemon = myTeam.availablePokemon.filter(pokemon => pokemon.rating === "normal")
    badPokemon = myTeam.availablePokemon.filter(pokemon => pokemon.rating === "bad")
    console.log("Good pokemon:", goodPokemon.length)
    goodPokemon.forEach(pokemon => console.log(pokemon.name));
    
    console.log("Normal pokemon:", normalPokemon.length)
    normalPokemon.forEach(pokemon => console.log(pokemon.name));

    console.log("Bad Pokemon:", badPokemon.length)
    badPokemon.forEach(pokemon => console.log(pokemon.name));
}

main();