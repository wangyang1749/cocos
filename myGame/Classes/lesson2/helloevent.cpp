#include "helloevent.h"
#include "ui/CocosGUI.h"
#include <iostream>
#include "AudioEngine.h"

using namespace cocos2d;
bool HelloEvent::init(){
    bool bRet = false;
    do{
        // music once
//        auto soundEffectID = AudioEngine::play2d("02.mp3", false);
        //create button
        auto button = ui::Button::create("Button_Normal.png", "Button_Press.png", "Button_Disable.png");
        // set position
        button->setPosition(Vec2(200,200));
        //set text
        button->setTitleText("Button Text");
        //create label
        auto label = Label::createWithTTF("Hello World", "fonts/Marker Felt.ttf", 24);

        /************Button event start****************/
        button->addTouchEventListener([&](Ref* sender, ui::Widget::TouchEventType type){
            switch (type){
               case ui::Widget::TouchEventType::BEGAN:
                       break;
               case ui::Widget::TouchEventType::ENDED:
                       std::cout << "Button 1 clicked" << std::endl;
                       break;
               default:
                       break;
            }
        });
        /************Button event end****************/

        // add to screen
        this->addChild(button);
        //create normal Scale9Sprite
        auto nineGirl = ui::Scale9Sprite::create("Button_Normal.png");
        //set content size
        nineGirl->setContentSize(Size(100,100));
        //set position
        nineGirl->setPosition(Vec2(10,10));

        /*****************mouse event strat********************/
        auto _mouseListener = EventListenerMouse::create();
        _mouseListener->onMouseMove= CC_CALLBACK_1(HelloEvent::onMouseMove, this);

        _eventDispatcher->addEventListenerWithSceneGraphPriority(_mouseListener, this);
        /*****************mouse event end********************/



        //add to screen
        this->addChild(nineGirl);

        //create normal button
        auto normalBtn = ui::Scale9Sprite::create("Button_Normal.png");
        //create button press
        auto downBtn = ui::Scale9Sprite::create("Button_Press.png");
        // button title
        auto title = Label::createWithTTF("Touch me","fonts/Marker Felt.ttf",30);
        // -----can't create controlButton

        /**********keyboard event start****************/
        auto listener = EventListenerKeyboard::create();
        listener->onKeyPressed = CC_CALLBACK_2(HelloEvent::onKeyPressed, this);
        listener->onKeyReleased = CC_CALLBACK_2(HelloEvent::onKeyReleased, this);

        _eventDispatcher->addEventListenerWithSceneGraphPriority(listener, this);
        /**********keyboard event end****************/


        bRet = true;
    }while(0);
    return bRet;
}

Scene* HelloEvent::createScene(){
    return HelloEvent::create();
}

void HelloEvent::onMouseMove(Event *event){
    // to illustrate the event....
      EventMouse* e = (EventMouse*)event;
      std::string str = "MousePosition X:";
      str = str + std::to_string(e->getCursorX()) + " Y:" + std::to_string(e->getCursorY());
      std::cout<<str<<std::endl;
}

/*Implementation of the keyboard event callback function prototype*/
void HelloEvent::onKeyPressed(EventKeyboard::KeyCode keyCode, Event* event)
{
        log("Key with keycode %d pressed", keyCode);
        AudioEngine::play2d("02.mp3", false);
}

void HelloEvent::onKeyReleased(EventKeyboard::KeyCode keyCode, Event* event)
{
        log("Key with keycode %d released", keyCode);
}
/*Implementation of the keyboard event callback function prototype*/

