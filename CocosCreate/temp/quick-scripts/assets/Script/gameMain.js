(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/gameMain.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '25f01AviwZKHIMcCO9ZNdio', 'gameMain', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=gameMain.js.map
        