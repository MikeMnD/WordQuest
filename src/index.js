import 'phaser';

import { SimpleScene } from './scenes/simple-scene';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: SimpleScene
};

var game = new Phaser.Game(config);

if (game.sound.usingWebAudio &&
    game.sound.context.state === 'suspended')
{
    game.input.onTap.addOnce(game.sound.context.resume, game.sound.context);
}