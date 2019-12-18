const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

const pokemon = [
	{ name: 'raflesia', type: 'plante'},
	{ name: 'dracaufeu', type: 'feu'},
	{ name: 'carapuce', type: 'eau'},
]

const removeType = type => array => array.filter(value => value.type !== type)
const removeEau = array => removeType('type','eau')(array)

// Equivalent pour les humain

//	function removeType(type) {
// 		return function (array) {
//			return array.filter(value => value.type !== type)
// 		}
// 	}

const pikachu = { name: 'pikachu', type: 'electric' }
const leviator = { name: 'leviator', type: 'eau' }

const addPokemon = pokemon => array => [...array, pokemon]

console.log(pokemon)

const keepOnlyPlante = pipe(
	removeType('eau'),
	removeType('feu'),
)

const addPokemons = pipe(
	addPokemon(pikachu),
	addPokemon(leviator),
)

const filteredPokemon = keepOnlyPlante(pokemon)

console.log('-----------------------\n');

console.log(filteredPokemon)
