class Isaac extends GuaAnimal {
    constructor(game) {
        super(game)

        this.x = 0
        this.y = 0

        this.flipX = false

        this.speed = 5

        this.isaac_com = new isaacCombination(game)


        this.stand = [
            this.isaac_com.combinations.front,
        ]

        this.front_walk = [
            this.isaac_com.combinations.front_walk_0,
            this.isaac_com.combinations.front_walk_1,
            this.isaac_com.combinations.front_walk_2,
            this.isaac_com.combinations.front_walk_3,
            this.isaac_com.combinations.front_walk_4,
            this.isaac_com.combinations.front_walk_5,
            this.isaac_com.combinations.front_walk_6,
            this.isaac_com.combinations.front_walk_7,
            this.isaac_com.combinations.front_walk_8,
        ]

        this.back_walk = [
            this.isaac_com.combinations.back_walk_0,
            this.isaac_com.combinations.back_walk_1,
            this.isaac_com.combinations.back_walk_2,
            this.isaac_com.combinations.back_walk_3,
            this.isaac_com.combinations.back_walk_4,
            this.isaac_com.combinations.back_walk_5,
            this.isaac_com.combinations.back_walk_6,
            this.isaac_com.combinations.back_walk_7,
            this.isaac_com.combinations.back_walk_8,
        ]


        this.right_walk = [
            this.isaac_com.combinations.right_walk_0,
            this.isaac_com.combinations.right_walk_1,
            this.isaac_com.combinations.right_walk_2,
            this.isaac_com.combinations.right_walk_3,
            this.isaac_com.combinations.right_walk_4,
            this.isaac_com.combinations.right_walk_5,
            this.isaac_com.combinations.right_walk_6,
            this.isaac_com.combinations.right_walk_7,
        ]

        this.left_walk = this.right_walk

        //this.w = new GuaAnimation(game, this.frames)

        this.animations = {
            stand: new GuaAnimation(game, this.stand),
            front_walk: new GuaAnimation(game, this.front_walk),
            back_walk: new GuaAnimation(game, this.back_walk),
            right_walk: new GuaAnimation(game, this.right_walk),
            left_walk: new GuaAnimation(game, this.left_walk),
        }

        this.animation = 'stand'

    }

    update() {
        this.animations[this.animation].update()
    }

    draw() {
        if (this.flipX) {
            this.animations[this.animation].draw(this.x, this.y, this.flipX)
        }
        else {
            this.animations[this.animation].draw(this.x, this.y)
        }
    }

    changeAnimation(name) {
        this.animation = name
    }

    moveDown(event) {
        if (event == 'keydown') {
            this.y += this.speed
            this.changeAnimation('front_walk')
        }
        else if (event == 'keyup') {
            this.changeAnimation('stand')
        }
    }

    moveUp(event) {
        if (event == 'keydown') {
            this.y -= this.speed
            this.changeAnimation('back_walk')
        }
        else if (event == 'keyup') {
            this.changeAnimation('stand')
        }
    }

    moveRight(event) {
        if (event == 'keydown') {
            this.x += this.speed
            this.changeAnimation('right_walk')
        }
        else if (event == 'keyup') {
            this.changeAnimation('stand')
        }
    }

    moveLeft(event) {
        if (event == 'keydown') {
            this.x -= this.speed
            this.changeAnimation('left_walk')
            this.flipX = true
        }
        else if (event == 'keyup') {
            this.changeAnimation('stand')
            this.flipX = false
        }
    }
}
