class Ghoul extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene,config.x,config.y,'ghoul');
        config.scene.add.existing(this);

        this.scene = config.scene;
        this.addToUpdateList();
        this.setInteractive();
        this.scene.physics.world.enable(this);

        this.linkPosition = 0;
        this.linkDistance = 0;
    }

    preUpdate(time,delta){
        super.preUpdate(time,delta);
        this.updateDistance();
        //console.log(this.x+" "+this.y+" "+this.linkDistance);
        while(this.linkDistance>100){
            this.moveToLink(this.linkPosition);
            this.updateDistance();
        }
    }

    updateLink(position){
        this.linkPosition = position;
    }

    updateDistance(){
        this.linkDistance = Math.sqrt(Math.pow(this.linkPosition.x - this.x,2)+Math.pow(this.linkPosition.y - this.y,2));
    }

    moveToLink(position){
        this.th=Math.atan((this.x-position.x)/(this.y-position.y));
        if((this.y-position.y)<0){
            this.x+=Math.sin(this.th);
            this.y+=Math.cos(this.th);
        }else{
            this.x+=-1*Math.sin(this.th);
            this.y+=-1*Math.cos(this.th);
        }
    }

    getPos () {
		return {x:this.x,y:this.y};
	}
}