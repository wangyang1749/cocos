#include "HelloMove.h"
//#include "HelloWorldScene.h"
USING_NS_CC;
using namespace cocos2d::ui;
Scene *HelloMove::createScene(){
    return HelloMove::create();
}

bool HelloMove::init(){
    bool bRed = false;
    do{

        bRed = true;
    }while(0);
    return bRed;
}
// 切换场景
void HelloMove::changScene(Ref* pSender)
{
    printf("Button was clicked");
    Director::getInstance()->end();

}
