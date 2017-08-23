class GuaElement {
    constructor(game, name) {
        this.game = game
        this.img = new GuaImage(game, name)
        this.w = this.img.w
        this.h = this.img.h
        this.x = 0
        this.y = 0
    }

    setup() {

    }

    draw(x, y) {
        if (x == null) {
            x = 0
        }
        if (y == null) {
            y = 0
        }
        this.game.drawImage(this, x, y)
    }

    update() {

    }
}
