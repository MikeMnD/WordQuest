export class SimpleScene extends Phaser.Scene {
    preload() {
        this.load.image('logo', '../../assets/logo.png');
    }
    create() {


        this.add.text(100, 100, 'Hello Phaser 33!', {fill: '#0f0'});

        var logo = this.add.image(400, 150, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }
}