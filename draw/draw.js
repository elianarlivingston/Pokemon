export default class Draw {
    constructor(canvasElement) {
        this.canvas = canvasElement
        this.ctx = this.canvas.getContext('2d')
        this.image = new Image()
        this.image.setAttribute('crossOrigin', 'anonymous')
    }

    render(urlImage) {
        this.ctx.fillText('loading...', 0, 0)
        this.image.setAttribute('src', urlImage)

        return new Promise((resolve, reject) => {
            this.image.addEventListener('load', () => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height)
                resolve('')
            })
        })
    }

    colorPalette( quality = 90 ) {
        const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data
        const colors = []
    
        for (let i = 0; i < (this.canvas.width * this.canvas.height); i = i + quality) {
            const offset = i * 4
            const alpha = imageData[offset + 3]
    
            if(alpha > 0) {
                const red = imageData[offset]
                const green = imageData[offset + 1]
                const blue = imageData[offset + 2]
    
                colors.push({ red, green, blue })

                console.log('%c color', `background: rgb(${red}, ${green}, ${blue})`)
            }
        }
    
        return colors
    }
}
