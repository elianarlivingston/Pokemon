const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export default function api() {
    return {
        async getPokemon(id){
            const url = `${BASE_URL}/${id}`
            const response = await fetch(url)
            const pokemon = await response.json()
            return pokemon
        }
    }
}