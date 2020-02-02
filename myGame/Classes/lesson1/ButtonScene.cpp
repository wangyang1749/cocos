#include "ButtonScene.h"
//#include "HelloWorldScene.h"
USING_NS_CC;
using namespace cocos2d::ui;
Scene *ButtonScene::createScene(){
    return ButtonScene::create();
}

bool ButtonScene::init(){
    bool bRed = false;
    do{
        //get screen size
        auto visibleSize = Director::getInstance()->getVisibleSize();
        //create picture item
        auto closeItem = MenuItemImage::create(
                                               "CloseNormal.png",
                                               "CloseSelected.png",
                                               CC_CALLBACK_1(ButtonScene::changScene, this));
        //create label
        auto label = Label::createWithTTF("Hello World", "fonts/Marker Felt.ttf", 24);

        //Turn into menu item
        auto labelItem = MenuItemLabel::create(label);

        //create menu
        auto menu = Menu::create(closeItem,labelItem,NULL);

        // All Vertically aligned
        menu->alignItemsVertically();

        // set position
        menu->setPosition(Vec2(visibleSize.width/2,visibleSize.height/2));

        //add to scence
        this->addChild(menu,1);
        bRed = true;
    }while(0);
    return bRed;
}
// 切换场景
void ButtonScene::changScene(Ref* pSender)
{
    printf("Button was clicked");
    Director::getInstance()->end();

}
