class GuaLabel {
    constructor(game, text, x, y) {
        this.game = game
        this.text = text
        this.x = x
        this.y = y
    }

    draw() {
        this.game.context.fillText(this.text, this.x, this.y)
    }

    update() {

    }
}
