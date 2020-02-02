#ifndef HELLOMOVE_SCENE_H_
#define HELLOMOVE_SCENE_H_
#include "cocos2d.h"
class HelloMove :public cocos2d::Scene
{
public:
    static cocos2d::Scene* createScene();
    virtual bool init();
    void changScene(cocos2d::Ref* pSender);
    CREATE_FUNC(HelloMove);
};
#endif
