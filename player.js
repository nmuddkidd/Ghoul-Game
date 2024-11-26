class Player extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene,config.x,config.y,'player');
        config.scene.add.existing(this);
        //console.log("workin");

        this.scene = config.scene;
        this.addToUpdateList();
        this.setInteractive();
        this.scene.physics.world.enable(this);
        //config.scene.setCollideWorldBounds(true);

        //0 - no direction
        //1 - down/right
        //-1 - up/left
        this.Xdash = 0;
        this.Ydash = 0;
        this.keyObjects = this.scene.input.keyboard.addKeys({
			W:Phaser.Input.Keyboard.KeyCodes.W,
			A:Phaser.Input.Keyboard.KeyCodes.A,
			S:Phaser.Input.Keyboard.KeyCodes.S,
			D:Phaser.Input.Keyboard.KeyCodes.D,
			SPACE:Phaser.Input.Keyboard.KeyCodes.SPACE
		});
    }

    preUpdate(time,delta){
        super.preUpdate(time,delta);

        if (this.keyObjects.A.isDown){
            this.body.setVelocityX(-15*delta);
            this.Xdash = -1;
        }else if (this.keyObjects.D.isDown){
            this.body.setVelocityX(15*delta);
            this.Xdash = 1;
        }else{
            this.body.setVelocityX(0);
            this.Xdash = 0;
        }
        
        if(this.keyObjects.S.isDown){
            this.body.setVelocityY(15*delta);
            this.Ydash = 1;
        }else if(this.keyObjects.W.isDown){
            this.body.setVelocityY(-15*delta);
            this.Ydash = -1;
        }else{
            this.body.setVelocityY(0);
            this.Ydash = 0;
        }

        if(Phaser.Input.Keyboard.JustDown(this.keyObjects.SPACE)){
            this.body.setVelocityX(this.Xdash*400*delta);
            this.body.setVelocityY(this.Ydash*400*delta);
        }
    }
}