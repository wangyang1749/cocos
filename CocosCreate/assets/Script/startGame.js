cc.Class({
    extends: cc.Component,

    properties: {
      startButton:cc.Button,
      maskingAnimation:cc.Animation,
      maskingNode:cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        this.startButton.node.on("click",this.ButtonClick,this);
    },

    // called every frame
    update: function (dt) {

    },
    ButtonClick:function(btn){
        this.maskingNode.active = true;
        cc.director.loadScene("gameMain");
    }
});
