class GuaCombination {
    // w : [ [img, sx, sy, swidth, sheight, px, py],... ]
    constructor(game, name, count, where) {
        this.game = game
        this.imgs = []
        for (var i = 0; i < count; i++) {
            var n = 'combination_'+name+'_'+name+'_'+ i
            var img = new GuaImage(this.game, n)
            this.imgs.push(img)
        }

        this.where = where
    }

    draw(x, y, flipX) {
        if (x == null) x = 0
        if (y == null) y = 0
        if (flipX == null) flipX = 0
        this.game.drawCombination(this, x, y, flipX)
    }

    update() {

    }
}
