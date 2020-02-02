"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'startGame');
// Script/startGame.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        startButton: cc.Button,
        maskingAnimation: cc.Animation,
        maskingNode: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.startButton.node.on("click", this.ButtonClick, this);
    },

    // called every frame
    update: function update(dt) {},
    ButtonClick: function ButtonClick(btn) {
        this.maskingNode.active = true;
        cc.director.loadScene("gameMain");
    }
});

cc._RF.pop();