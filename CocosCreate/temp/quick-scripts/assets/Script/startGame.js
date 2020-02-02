(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/startGame.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'startGame', __filename);
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
        //# sourceMappingURL=startGame.js.map
        