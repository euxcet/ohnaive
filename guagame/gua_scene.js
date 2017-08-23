class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    draw() {
        for(var e of this.elements) {
            e.draw()
        }
    }
    update() {
        for (var e of this.elements) {
            e.update()
        }
    }

    addElement(e) {
        e.scene = this
        this.elements.push(e)
    }
}
