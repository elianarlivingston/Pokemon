import api from './services/services.js'
import Draw from './draw/draw.js'
import { updatedProperties } from './utils/dom.js'

const $form = document.querySelector('#form')
const $canvas = document.querySelector('#canvas')
const $container = document.querySelector('.grid-layout')

const { getPokemon } = api()
const draw = new Draw($canvas)

async function handlerSubmit(event) {
    event.preventDefault()
    const data = new FormData($form)
    const id = data.get('id')

    const pokemon = await getPokemon(id)
    const pokemonDrawed = await renderPokemon(pokemon)
    const colors = draw.colorPalette()
    updatedProperties(colors, $container)
}

async function renderPokemon(pokemon) {
    return await draw.render(pokemon.sprites.front_default)
}

$form.addEventListener('submit', handlerSubmit)