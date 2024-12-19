class Player extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene,config.x,config.y,'ghoul');

        this.scene = config.scene;
        this.addToUpdateList();
        this.setInteractive();
        this.scene.physics.world.enable(this);
        this.setCollideWorldBounds(true);
    }
}