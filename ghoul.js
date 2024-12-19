class Ghoul extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene,config.x,config.y,'ghoul');
        config.scene.add.existing(this);

        this.scene = config.scene;
        this.addToUpdateList();
        this.setInteractive();
        this.scene.physics.world.enable(this);
        //this.setCollideWorldBounds(true);
    }
}