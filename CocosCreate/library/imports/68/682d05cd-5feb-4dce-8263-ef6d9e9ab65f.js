"use strict";
cc._RF.push(module, '682d0XNX+tNzoJj722emrZf', 'player');
// Script/player.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        readJumpAudio: {
            type: cc.AudioClip,
            default: null
        }, jumpAudio: {
            type: cc.AudioClip,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.usersprite = cc.find("rotateNode/user", this.node, false, 1);
        this.readJumpAudioID = -1;

        this.rotateNode = cc.find("rotateNode", this.node);
        this.JumpAudioID = -1;

        this.isReadJump = false;
        //定义旋转方向
        this.direction = 1; //1 顺时针， -1 逆时针

        this.power = 120;

        this.speed = 200;

        this.distance = 0; //距离

        this.proportion = 0.55;
    },
    start: function start() {},

    readJump: function readJump() {
        this.isReadJump = true;
        this.readJumpAudioID = cc.audioEngine.play(this.readJumpAudio);

        this.usersprite.runAction(cc.scaleTo(1.5, 1, 0.5));
    },
    jumpToBlock: function jumpToBlock(targetPos, callback) {
        var _this = this;

        cc.audioEngine.stop(this.readJumpAudio);
        this.jumpAudioID = cc.audioEngine.play(this.jumpAudio, false, 1);
        this.usersprite.stopAllActions();
        var resetAction = cc.scaleTo(1, 1, 1);
        var jumpAction = cc.jumpTo(0.5, targetPos, 158, 1);
        var roatteAction = cc.rotateBy(0.5, this.direction * 360);
        var finishFunc = cc.callFunc(function () {
            _this.rotateNode.rotation = 0;
            _this.direction = Math.random() < 0.5 ? 1 : -1;
            _this.distance = 0;
            _this.speed = 0;
            callback(); //调用回调函数  
        });
        this.usersprite.runAction(resetAction);
        this.rotateNode.runAction(roatteAction);
        this.node.runAction(cc.sequence(jumpAction, finishFunc));
    },
    update: function update(dt) {
        if (this.isReadJump) {
            //计算距离
            this.speed += dt * this.power;

            this.distance = this.speed + 600 * dt;
        }
    },

    onJump: function onJump(callback) {
        var targetPos = cc.v2(this.node.x + this.distance * this.direction, this.node.y + this.distance * this.proportion);
        this.jumpToBlock(targetPos, callback);
    }

});

cc._RF.pop();