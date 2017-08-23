class GuaImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.w = this.texture.width
        this.h = this.texture.height
    }
}
