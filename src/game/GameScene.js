const PIXI = require('pixi.js');
const GameUtils = require('../utils/GameUtils.js');
const Constant = require('../utils/Constants.js');

class GameScene {
    constructor() {
        this.field = null;
        this.stage = null;
    }

    displayWinMessage() {
        let basicText = new PIXI.Text('You win!');
        basicText.x = 30;
        basicText.y = 90;
        // this.stage.addChild(basicText);
    }

    initBackground(app) {
        let bgSize = {x: this.width, y: this.height};

        const container = new PIXI.Container();

        app.stage.addChild(container);

        PIXI.loader.add("./images/background.png").load(function () {
            let slide = GameUtils
                .setBackground(bgSize,
                    new PIXI.Sprite.fromImage('./images/background.png'),
                    'cover');
            container.addChild(slide);

        });
    }

    /**
     * Scales coordinates from initial to final resolution, rounding to the nearest whole number
     *
     * Coordinates / resolution format: [x, y] / [width, height]
     *
     * @param {Number[]} coords Coordinates to scale
     * @param {Number[]} [initialRes=[1920, 1080]] Initial resolution
     * @return {Number[]} Scaled coordinates
     */
    scaleCoords(coords, initialRes = Constant.INITIAL_RES) {
        const x = coords[0];
        const y = coords[1];

        const xScale = this.width / initialRes[0];
        const yScale = this.height / initialRes[1];

        return [Math.round(x * xScale), Math.round(y * yScale)];
    }
}


module.exports = GameScene;