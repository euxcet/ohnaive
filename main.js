var __main = function() {
    var images = {
        isaac: 'img/isaac.png',
        combination_isaac_isaac_0: 'img/combination/isaac/isaac_0.png'
    }
    var game = GuaGame.instance(30, images, function(g){
        var s = Scene.new(g)
        g.runWithScene(s)
    })

}

__main()
