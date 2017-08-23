class isaacCombination {
    constructor(game) {
        this.game = game

        // w : [ [img, sx, sy, swidth, sheight, px, py],... ]
        this.face = {
            'front': [0, 2,  2, 28, 25, 0, 0],
            'back': [0, 130, 2, 28, 25, 0, 0],
            'right': [0, 66, 2, 28 ,25, 0, 0],
        }

        this.body = {
            'stand': [0, 7, 44, 18, 13, 5, 21],

            'front_walk_0': [0, 7, 44, 18, 13, 5, 21],
            'front_walk_1': [0, 39, 44, 18, 13, 5, 21],
            'front_walk_2': [0, 72, 44, 18, 13, 5, 21],
            'front_walk_3': [0, 103, 44, 18, 15, 5, 21],
            'front_walk_4': [0, 135, 44, 18, 14, 5, 21],
            'front_walk_5': [0, 167, 44, 18, 13, 5, 21],
            'front_walk_6': [0, 199, 44, 18, 13, 5, 21],
            'front_walk_7': [0, 230, 44, 18, 13, 5, 21],
            'front_walk_8': [0, 199, 12, 18, 15, 5, 21],
            'front_walk_9': [0, 231, 12, 18, 14, 5, 21],


            'right_walk_0': [0, 8, 76, 16, 13, 5, 21],
            'right_walk_1': [0, 40, 76, 15, 13, 5, 21],
            'right_walk_2': [0, 71, 76, 16, 13, 5, 21],
            'right_walk_3': [0, 103, 76, 17, 15, 5, 21],
            'right_walk_4': [0, 135, 76, 17, 14, 5, 21],
            'right_walk_5': [0, 168, 76, 17, 14, 5, 21],
            'right_walk_6': [0, 200, 76, 17, 14, 5, 21],
            'right_walk_7': [0, 231, 76, 17, 14, 5, 21],
        }

        // combinations:  game, name, count, x, y, where
        this.combinations = {
            'front': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.stand,
                    this.face.front,
                ]),

            'back': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.stand,
                    this.face.back,
                ]),

            'front_walk_0': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_0,
                    this.face.front,
                ]),

            'front_walk_1': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_1,
                    this.face.front,
                ]),

            'front_walk_2': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_2,
                    this.face.front,
                ]),

            'front_walk_3': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_3,
                    this.face.front,
                ]),

            'front_walk_4': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_4,
                    this.face.front,
                ]),

            'front_walk_5': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_5,
                    this.face.front,
                ]),

            'front_walk_6': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_6,
                    this.face.front,
                ]),

            'front_walk_7': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_7,
                    this.face.front,
                ]),

            'front_walk_8': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_8,
                    this.face.front,
                ]),



            'right_walk_0': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.right_walk_0,
                    this.face.right,
                ]),

            'right_walk_1': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.right_walk_1,
                    this.face.right,
                ]),

            'right_walk_2': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.right_walk_2,
                    this.face.right,
                ]),

            'right_walk_3': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.right_walk_3,
                    this.face.right,
                ]),

            'right_walk_4': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.right_walk_4,
                    this.face.right,
                ]),

            'right_walk_5': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.right_walk_5,
                    this.face.right,
                ]),

            'right_walk_6': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.right_walk_6,
                    this.face.right,
                ]),

            'right_walk_7': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.right_walk_7,
                    this.face.right,
                ]),

            'back_walk_0': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_0,
                    this.face.back,
                ]),

            'back_walk_1': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_1,
                    this.face.back,
                ]),

            'back_walk_2': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_2,
                    this.face.back,
                ]),

            'back_walk_3': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_3,
                    this.face.back,
                ]),

            'back_walk_4': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_4,
                    this.face.back,
                ]),

            'back_walk_5': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_5,
                    this.face.back,
                ]),

            'back_walk_6': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_6,
                    this.face.back,
                ]),

            'back_walk_7': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_7,
                    this.face.back,
                ]),

            'back_walk_8': new GuaCombination(
                game, 'isaac', 1,
                [
                    this.body.front_walk_8,
                    this.face.back,
                ]),

        }
    }

    draw(x, y) {
        if (x == null) x = 0
        if (y == null) y = 0
        var c = this.combinations
        for (var e in c) {
            this.game.drawCombination(c[e], x, y)
        }
    }

    update() {

    }
}
