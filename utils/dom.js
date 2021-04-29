export function updatedProperties(colors, element) {
    element.style.setProperty('--primary', `rgb(${colors[0].red}, ${colors[0].green}, ${colors[0].blue})`)
    element.style.setProperty('--secondary', `rgb(${colors[1].red}, ${colors[1].green}, ${colors[1].blue})`)
    element.style.setProperty('--tertiary', `rgb(${colors[2].red}, ${colors[2].green}, ${colors[2].blue})`)
}