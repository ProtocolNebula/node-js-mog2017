const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

canvas.width = window.innerWidth
canvas.height = window.innerHeight

/**
 * Asset interface
 */
class Asset {
    draw() { console.log("You must define 'draw' in each context") }
}

/**
 * Game controller
 */
class Game extends Asset {
    constructor() {
        super()
        this.player = new Player()

        this.render()
    }

    render() {
        ctx.fillStyle = '#ff00ff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        this.player.draw()
    }
}

/**
 * Player controller
 */
class Player extends Asset {
    constructor () {
        super()
        this.posx = 0
        this.posy = 0

        this.width = 50
        this.height = 50

        this.speedx = 0
        this.speedy = 0

        this.step = 1 // Desplazamiento pasos

        document.addEventListener('keydown', (event) => {
            event.preventDefault()
            // Movemos al jugador
            switch (event.keyCode) {
                case 38: // ArrowUp
                    this.speedy -= this.step
                    break;
                case 40: // ArrowDown
                    this.speedy += this.step
                    break;
                case 37: // ArrowLeft
                    this.speedx -= this.step
                    break;
                case 39: // ArrowRight
                    this.speedx += this.step
                    break
            }
        })
    }

    draw() {
        ctx.fillStyle = '#00ffff'
        ctx.fillRect(this.posx, this.posy, this.width, this.height)
    }
}


const game = new Game()