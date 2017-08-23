class Bullet extends GuaElement {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }

    setup() {
        this.speed = 5
    }

    update() {
        this.y -= this.speed
    }
}
