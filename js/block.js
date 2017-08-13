$(document).ready(function(){
    var log = console.log.bind(console);

    var imageFromPath = function(path) {
        var img = new Image();
        img.src = path;
        return img;
    };

    var Paddle = function(canvas) {
        var image = imageFromPath('pic/paddle.png');
        var o = {
            image: image,
            canvas: canvas.width,
            x: 150,
            y: 476,
            speed: 5,
            fired: false,
        };

        o.putBack = function() {
            o.x = 150;
            o.y = 476;
            o.speed = 5;
        };

        o.moveLeft = function() {
            if (o.fired) {
                o.x -= o.speed;
            }
        };
        o.moveRight = function() {
            if (o.fired) {
                o.x += o.speed;
            }
        };

        o.fire = function() {
            o.fired = true;
        };


        o.clampX = function() {
            if (o.x < 0) o.x = 0;
            if (o.x + o.image.width > o.canvas) o.x = o.canvas - o.image.width;
        };

        o.insideX = function(x, y, sx, sy) {
            if (!(x >= o.x && x <= o.x + o.image.width && y >= o.y && y <= o.y + o.image.height)) {
                return false;
            }

            while (x != o.x && x != o.x + o.image.width && y != o.y && y != o.y + o.image.height) {
                x -= sx;
                y -= sy;
            }

            if (x == o.x || x == o.x + o.image.width) return true;

            return false;
        };

        o.insideY = function(x, y, sx, sy) {
            if (!(x >= o.x && x <= o.x + o.image.width && y >= o.y && y <= o.y + o.image.height)) {
                return false;
            }

            while (x != o.x && x != o.x + o.image.width && y != o.y && y != o.y + o.image.height) {
                x -= sx;
                y -= sy;
            }

            if (y == o.y) return true;

            return false;
        };

        o.collideX = function(ball) {
            if (o.insideX(ball.x, ball.y, ball.speedX / Math.abs(ball.speedX), ball.speedY / Math.abs(ball.speedY))) {
                return true;
            }
            if (o.insideX(ball.x + ball.image.width, ball.y, ball.speedX / Math.abs(ball.speedX), ball.speedY / Math.abs(ball.speedY))) {
                return true;
            }
            if (o.insideX(ball.x, ball.y + ball.image.height, ball.speedX / Math.abs(ball.speedX), ball.speedY / Math.abs(ball.speedY))) {
                return true;
            }
            if (o.insideX(ball.x + ball.image.width, ball.y + ball.image.height, ball.speedX / Math.abs(ball.speedX), ball.speedY / Math.abs(ball.speedY))) {
                return true;
            }
            return false;
        };

        o.collideY = function(ball) {
            if (o.insideY(ball.x, ball.y, ball.speedX / Math.abs(ball.speedX), ball.speedY / Math.abs(ball.speedY))) {
                return true;
            }
            if (o.insideY(ball.x + ball.image.width, ball.y, ball.speedX / Math.abs(ball.speedX), ball.speedY / Math.abs(ball.speedY))) {
                return true;
            }
            if (o.insideY(ball.x, ball.y + ball.image.height, ball.speedX / Math.abs(ball.speedX), ball.speedY / Math.abs(ball.speedY))) {
                return true;
            }
            if (o.insideY(ball.x + ball.image.width, ball.y + ball.image.height, ball.speedX / Math.abs(ball.speedX), ball.speedY / Math.abs(ball.speedY))) {
                return true;
            }
            return false;
        };


        return o;
    };

    var Ball = function(canvas, game, paddle) {
        var image = imageFromPath('pic/ball.png');
        var o = {
            image: image,
            game: game,
            paddle: paddle,
            canvasWidth: canvas.width,
            canvasHeight: canvas.height,
            x: 191,
            y: 457,
            speedX: 5,
            speedY: -5,
            fired: false,
        };

        o.putBack = function() {
            o.x = 191;
            o.y = 457;
            o.speedX = 5;
            o.speedY = -5;
            o.fired = false;
        };

        o.fire = function() {
            o.fired = true;
        };

        o.move = function() {
            if (o.fired) {
                o.x += o.speedX;
                o.y += o.speedY;
            }
        };

        o.clampX = function() {
            if (o.x < 0) {
                o.speedX *= -1;
                o.x = 0;
            }
            if (o.y < 0) {
                o.speedY *= -1;
                o.y = 0;
            }
            if (o.x + o.image.width > o.canvasWidth) {
                o.speedX *= -1;
                o.x = o.canvasWidth - o.image.width;
            }
            if (o.y + o.image.height > o.canvasHeight) {
                o.fired = false;
                o.paddle.fired = false;
                o.game.GameOver();
                o.speedY *= -1;
                o.y = o.canvasHeight - o.image.height;
            }
        };


        return o;
    };

    var Game = function() {
        var g = {
            actions: {},
            keydowns: {},
            gameover: false,
        };
        var canvas = document.querySelector('#game-canvas');
        var context = canvas.getContext('2d');
        g.canvas = canvas;
        g.context = context;

        window.addEventListener('keydown', function(event) {
            g.keydowns[event.key] = true;
        });

        window.addEventListener('keyup', function(event) {
            g.keydowns[event.key] = false;
        });

        g.registerAction = function(key, callback) {
            g.actions[key] = callback;
        };

        g.clearCanvas = function() {
            g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
        };

        g.drawImage = function(paddle) {
            g.context.drawImage(paddle.image, paddle.x, paddle.y);
        };

        g.GameOver = function() {
            g.gameover = true;
            log('game over');
        };

        setInterval(function() {
            var actions = Object.keys(g.actions);

            for (var i = 0; i < actions.length; i++) {
                var key = actions[i];
                if (g.keydowns[key]) {
                    g.actions[key]();
                }
            }

            g.update();
            g.clampX();
            g.draw();
        }, 1000 / 48);

        return g;
    };

    var __main = function() {
        game = Game();

        paddle = Paddle(game.canvas);

        ball = Ball(game.canvas, game, paddle);

        game.registerAction('a', function() {
            paddle.moveLeft();
        });
        game.registerAction('d', function() {
            paddle.moveRight();
        });
        game.registerAction(' ', function() {
            if (game.gameover == false) {
                ball.fire();
                paddle.fire();
            }
        });
        game.registerAction('r', function() {
            ball.putBack();
            paddle.putBack();
            game.gameover = false;
        });

        game.clampX = function() {
            paddle.clampX();
            ball.clampX();
        };

        game.update = function() {
            ball.move();
            if (paddle.collideY(ball)) {
                ball.speedY *= -1;
            }
        }

        game.draw = function() {
            game.clearCanvas();
            game.drawImage(paddle);
            game.drawImage(ball);
        };
    };

    __main()



});
