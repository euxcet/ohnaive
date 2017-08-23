class GuaAnimation {
    constructor(game, frames) {
        this.game = game

        this.frames = frames

        this.setup()

    }

    setup() {
        this.texture = this.frames[0]

        this.frameIndex = 0
        this.frameCount = 2
    }

    update() {
        this.frameCount --
        if (this.frameCount == 0) {
            this.frameCount = 2
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
        }
    }

    draw(x, y, flipX) {
        //log(this.frameIndex)
        //log(this.frames)
        //log(this.texture)
        if (x == null) x = 0
        if (y == null) y = 0
        if (flipX == null) flipX = 0
        this.texture.draw(x, y, flipX)
    }
}
