class Player extends GuaElement {
    constructor(game) {
        super(game, 'player')
        this.speed = 10
        this.cooldown = 0
    }

    fire() {
        if (this.cooldown == 0) {
            var b = new Bullet(this.game)
            b.x = this.x + this.w / 2
            b.y = this.y - 10
            this.scene.addElement(b)
            this.cooldown = 10 // set cooldown
        }
    }

    update() {
        if (this.cooldown > 0) {
            this.cooldown --
        }
        this.fire()
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
    }

    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }

}
