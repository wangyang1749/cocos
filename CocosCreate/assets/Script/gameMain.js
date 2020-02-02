let playerClass = require("player");
cc.Class({
    extends: cc.Component,

    properties: {
        player:playerClass,

    },

   

    start () {

    },
    onLoad(){
        this.setTouchStart();
    },

    setTouchStart:function(){
        this.node.on(cc.Node.EventType.TOUCH_START,this.GameTouchStart,this);
        this.node.on(cc.Node.EventType.TOUCH_END,this.GameTouch,this);
    },

    disableTouch:function(){
        this.node.targetOff(this);
        console.log("disable");
    },

    GameTouchStart:function(){
        // console.log("touch");
        this.player.readJump();
       
    },
    GameTouch:function(){
        this.player.onJump(this.JumpFinish);
    },
    JumpFinish:function(){
        console.log("JumpFinish");
    }
    
    
});
