#ifndef BUTTON_SCENE_H_
#define BUTTON_SCENE_H_
#include "cocos2d.h"
class ButtonScene :public cocos2d::Scene
{
public:
    static cocos2d::Scene* createScene();
    virtual bool init();
    void changScene(cocos2d::Ref* pSender);
    CREATE_FUNC(ButtonScene);
};
#endif
