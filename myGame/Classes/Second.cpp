#include "Second.h"

USING_NS_CC;

Scene *Second::createScene()
{
    return Second::create();
}
bool Second::init()
{
    if (!Scene::init())
    {
        return false;
    }
    auto visibleSize = Director::getInstance()->getVisibleSize();
    Vec2 origin = Director::getInstance()->getVisibleOrigin();
    // auto label = Label::createWithTTF("Hello World", "fonts/Marker Felt.ttf", 24);
    // label->setPosition(Vec2(origin.x + visibleSize.width / 2,
    //                         origin.y + visibleSize.height - label->getContentSize().height));
    // this->addChild(label, 1);


    //创建精灵
    auto mySprite = Sprite::create("HelloWorld.png");
    mySprite->setPosition(Vec2(200,200));
    this->addChild(mySprite);

    auto closeItem = MenuItemImage::create(
        "CloseNormal.png",
        "CloseSelected.png",
        CC_CALLBACK_1(Second::menuCloseCallback, this));

    float x = origin.x + visibleSize.width - closeItem->getContentSize().width / 2;
    float y = origin.y + closeItem->getContentSize().height / 2;
    closeItem->setPosition(Vec2(x, y));
    auto menu = Menu::create(closeItem, NULL);
    menu->setPosition(Vec2::ZERO);
    this->addChild(menu, 1);


    return true;
}
void Second::menuCloseCallback(cocos2d::Ref *pSender)
{
    Director::getInstance()->popScene();
}
