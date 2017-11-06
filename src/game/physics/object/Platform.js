const PhysicsEntitiy = require('./primitive/PhysicsEntity.js');
const PIXI = require('pixi.js');
const Constants = require('../../../utils/Constants.js');
const Point = require('./primitive/Point.js');


const basicPlatformTexture = PIXI.Texture.fromImage('./images/platform.png');

class Platform extends PhysicsEntitiy {
    constructor(context, circle) {
        const basicPlatformSprite = new PIXI.Sprite(basicPlatformTexture);
        super(basicPlatformSprite, context);
        this.circle = circle;
    }

    getEdgePoints() {
        const coord = this.getCoords();
        const rotation = this.sprite.rotation;
        const angel = 0.5;
        const lengthHypotenuse = Constants.GAME_PLATFORM_SIZE[0] / 2;
        const deltaXLeft = lengthHypotenuse * Math.cos(rotation + angel);
        const deltaYLeft = lengthHypotenuse * Math.sin(rotation + angel);
        const deltaXRight = lengthHypotenuse * Math.cos(rotation - angel);
        const deltaYRight = lengthHypotenuse * Math.sin(rotation - angel);

        const pointLeft = new Point(coord.x - deltaXLeft,
            coord.y - deltaYLeft);
        const pointRight = new Point(coord.x + deltaXRight,
            coord.y + deltaYRight);

        return [pointLeft, pointRight];
    }

    getCircle() {
        return this.circle;
    }

    getRotation() {
        return super.getRotation();
    }

    setRotation(rotation, context) {
        super.setRotation(rotation, context);
        const radius = this.circle.radius - Constants.GAME_PLATFORM_SIZE[0] / 4;
        const rotationRadian = rotation / Constants.GAME_ROTATION_COEFFICIENT;
        const deltaX = radius * Math.sin(rotationRadian);
        const deltaY = radius * Math.cos(rotationRadian);

        const tmp = this.circle.getCoords();
        const newPoint = new Point(tmp.x - deltaX, tmp.y + deltaY);
        this.setCoords(newPoint, context);
    }
}

module.exports = Platform;