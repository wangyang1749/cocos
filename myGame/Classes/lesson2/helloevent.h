#ifndef HELLOEVENT_H
#define HELLOEVENT_H
#include "cocos2d.h"
using namespace cocos2d;
class HelloEvent : public cocos2d::Scene
{
public:
    static Scene* createScene();
    bool init();
    CREATE_FUNC(HelloEvent);
    void onMouseMove(Event *event);
    void onKeyPressed(EventKeyboard::KeyCode keyCode, Event* event);
    void onKeyReleased(EventKeyboard::KeyCode keyCode, Event* event);
};

#endif // HELLOEVENT_H
