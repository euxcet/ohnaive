class Scene extends GuaScene {

    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        var game = this.game

        this.isaac = new Isaac(game)

        this.addElement(this.isaac)

    }

    setupInputs() {
        var g = this.game
        var isaac = this.isaac
        //
        g.registerAction('a', function(event){
            isaac.moveLeft(event)
        })

        g.registerAction('d', function(event){
            isaac.moveRight(event)
        })

        g.registerAction('w', function(event){
            isaac.moveUp(event)
        })

        g.registerAction('s', function(event){
            isaac.moveDown(event)
        })
        //
        // g.registerAction('f', function(){
        //     p.fire()
        // })
    }

    update() {
        super.update()
    }
}
