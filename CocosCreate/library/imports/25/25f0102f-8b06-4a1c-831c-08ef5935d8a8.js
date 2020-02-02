"use strict";
cc._RF.push(module, '25f01AviwZKHIMcCO9ZNdio', 'gameMain');
// Script/gameMain.js

"use strict";

var playerClass = require("player");
cc.Class({
    extends: cc.Component,

    properties: {
        player: playerClass

    },

    start: function start() {},
    onLoad: function onLoad() {
        this.setTouchStart();
    },


    setTouchStart: function setTouchStart() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.GameTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.GameTouch, this);
    },

    disableTouch: function disableTouch() {
        this.node.targetOff(this);
        console.log("disable");
    },

    GameTouchStart: function GameTouchStart() {
        // console.log("touch");
        this.player.readJump();
    },
    GameTouch: function GameTouch() {
        this.player.onJump(this.JumpFinish);
    },
    JumpFinish: function JumpFinish() {
        console.log("JumpFinish");
    }

});

cc._RF.pop();