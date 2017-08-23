class GuaGame {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        //
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.keyups = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        this.width = this.canvas.width
        this.height = this.canvas.height

        // events
        var self = this
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', event => {
            self.keydowns[event.key] = false
            self.keyups[event.key] = true
        })
        this.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    drawImage(e, ax, ay) {
        if (ax == null) ax = 0
        if (ay == null) ay = 0
        this.context.drawImage(e.img.texture, e.x + ax, e.y + ay)
        //this.context.drawImage(e.img.texture, e.sx, e.sy, e.swidth, e.sheight, e.x, e.y, e.width, e.height)
    }

    drawCombination(e, ax, ay, flipX) {
        if (ax == null) ax = 0
        if (ay == null) ay = 0
        if (flipX == null) flipX = 0

        var context = this.context



        var w = e.where
        var imgs = e.imgs
        // w : [ [img, sx, sy, swidth, sheight, px, py],... ]
        for (var i = 0; i < w.length; i++) {
            var img = imgs[w[i][0]]
            var sx = w[i][1]
            var sy = w[i][2]
            var swidth = w[i][3]
            var sheight = w[i][4]
            var x = ax + w[i][5]
            var y = ay + w[i][6]

            if (flipX) {
                context.save()
                context.translate(x + swidth / 2, 0)
                context.scale(-1, 1)
                context.translate(-(x + swidth / 2), 0)

                log(x, y)

                context.drawImage(img.texture, sx, sy, swidth, sheight, x, y, swidth, sheight)

                context.restore()
            }

            else {
                context.drawImage(img.texture, sx, sy, swidth, sheight, x, y, swidth, sheight)
            }
        }

    }

    // update
    update() {
        this.scene.update()
    }
    // draw
    draw() {
        this.scene.draw()
    }
    //
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    runloop() {
        // events
        var g = this
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                // 如果按键被按下, 调用注册的 action
                g.actions[key]('keydown')
            }
            if (g.keyups[key]) {
                g.actions[key]('keyup')
                g.keyups[key] = false
            }
        }
        // update
        g.update()
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.draw()
        // next run loop
        setTimeout(function(){
            g.runloop()
        }, 1000/window.fps)
    }
    textureByName(name) {
        var g = this
        var img = g.images[name]
        return img
    }
    runWithScene(scene) {
        var g = this
        g.scene = scene
        // 开始运行程序
        setTimeout(function(){
            g.runloop()
        }, 1000/window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    __start(scene) {
        this.runCallback(this)
    }

    init() {
        var g = this
        var loads = []
        // 预先载入所有图片
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function() {
                // 存入 g.images 中
                g.images[name] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                if (loads.length == names.length) {
                    g.__start()
                }
            }
        }
    }
}
