class GuaParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }
    static new(game) {
        return new this(game)
    }

    setup() {
        this.x = 150
        this.y = 200
        this.numberOfParticles = 100
        this.particles = []
        this.duration = 30
    }

    update() {
        if (this.particles.length < this.numberOfParticles) {
            var p = new GuaParticle(this.game)
            var vx = Math.random()

            var vy = Math.sqrt(1 - vx * vx)

            var ax = vx * 0.1
            var ay = vy * 0.1
            if (randomBetween(0, 1) == 1) {
                vx = -vx
                ax = -ax
            }
            if (randomBetween(0, 1) == 1) {
                vy = -vy
                ay = -ay
            }
            p.init(this.x, this.y, vx, vy, ax, ay)
            this.particles.push(p)

        }

        for (var p of this.particles) {
            p.update()
        }


        this.particles = this.particles.filter(p => p.life > 0)

        this.duration --
    }

    draw() {
        if (this.duration <= 0) {
            return
        }
        for (var p of this.particles) {
            p.draw()
        }
    }
}

class GuaParticle extends GuaElement {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }

    setup() {
        this.life = 15
    }

    init(x, y, vx, vy, ax, ay) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.ax = ax
        this.ay = ay
    }

    update() {
        this.life --
        this.x += this.vx
        this.y += this.vy
        this.vx += this.ax
        this.vy += this.ay
    }
}
