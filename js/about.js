const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Constants
const gravity = 1

class Player {
    constructor () {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 100
        this.height = 100
    }

    draw() {
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){

    }

    move(){

    }
}

const player = new Player()
player.draw()