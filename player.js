class Player extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene,config.x,config.y,'player');
        config.scene.add.existing(this);

        this.scene = config.scene;
        this.addToUpdateList();
        this.setInteractive();
        this.scene.physics.world.enable(this);
        //this.scene.setCollideWorldBounds(true);

        //0 - no direction
        //1 - down/right
        //-1 - up/left
        this.Xmove = 0;
        this.Ymove = 0;
		
		this.speed = 15;
		
        this.keyObjects = this.scene.input.keyboard.addKeys({
			W:Phaser.Input.Keyboard.KeyCodes.W,
			A:Phaser.Input.Keyboard.KeyCodes.A,
			S:Phaser.Input.Keyboard.KeyCodes.S,
			D:Phaser.Input.Keyboard.KeyCodes.D,
			SPACE:Phaser.Input.Keyboard.KeyCodes.SPACE
		});

        /*this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: 'turn',
			frames: [ { key: 'dude', frame: 4 } ],
			frameRate: 20
		});

		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1
		});*/
    }
	
    preUpdate(time,delta){
        super.preUpdate(time,delta);
		
        if (this.keyObjects.A.isDown){
            this.Xmove = -1;
        }else if (this.keyObjects.D.isDown){
            this.Xmove = 1;
        }else{
            this.Xmove = 0;
        }
        
        if(this.keyObjects.S.isDown){
            this.Ymove = 1;
        }else if(this.keyObjects.W.isDown){
            this.Ymove = -1;
        }else{
            this.Ymove = 0;
        }
		
		if(this.Xmove != 0 && this.Ymove != 0){
			this.body.setVelocityX(this.Xmove*this.speed*.71*delta);
			this.body.setVelocityY(this.Ymove*this.speed*.71*delta);
		}else{
			console.log(this.Xmove + " " + this.Ymove);
			this.body.setVelocityX(this.Xmove*this.speed*delta);
			this.body.setVelocityY(this.Ymove*this.speed*delta);
		}

        if(Phaser.Input.Keyboard.JustDown(this.keyObjects.SPACE)){
			if(this.Xmove != 0 && this.Ymove != 0){
				this.body.setVelocityX(this.Xmove*this.speed*25*.71*delta);
				this.body.setVelocityY(this.Ymove*this.speed*25*.71*delta);
			}else{
				this.body.setVelocityX(this.Xmove*this.speed*25*delta);
				this.body.setVelocityY(this.Ymove*this.speed*25*delta);
			}
        }
    }
}