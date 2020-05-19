!function(){
    var duration = 30
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed) {
            case 'slow':
                duration = 60
                break
            case 'normal':
                duration = 30
                break
            case 'fast':
                duration = 10
                break
        }
    })
    function writeCode(prefix,code,fn){
        let container= document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0;
        setTimeout(function run() {
            n += 1
            container.innerHTML =  code.substring(0,n)
            styleTag.innerHTML =  code.substring(0,n)
            container.scrollTop = container.scrollHeight

            if(n < code.length){
                setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        },duration)
    }
    let code = `

    /*
    *面试官你好,我是卢圣勤
	*我将以动画的形式来展示这只皮卡丘
	*只用文字介绍太单调了
	*我就用代码来介绍吧
    *首先，需要准备皮卡丘的皮
    */

    .preview{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fee433;
    }

    .wrapper{
        width: 100%;
        height: 165px;
        position: relative;
    }

    /*
    * 接下来，画皮卡丘的鼻子
    */

    .nose{
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 12px;
        border-color: black transparent transparent;
        border-radius: 19px;
        position: absolute;
        left: 50%;
        top: 30px;
        margin-left: -12px; 
    }

    /*
    * 接下来，画皮卡丘的眼睛
    */

    .eye{
        width: 40px;
        height: 40px;
        background: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border: 2px solid black;
    }

    .eye.left{
        right: 50%;
        margin-right: 70px;
    }

    .eye.right{
        left: 50%;
        margin-left: 70px;
    }

     /*
    * 接下来，画皮卡丘的眼珠
    */

    .eye::before{
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 7px;
        top:-1px;
        border: 2px solid black;
    }

    /*
    * 画皮卡丘的脸
    */

    .face{
        width: 60px;
        height: 60px;
        background-color: #fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top:85px;
    }

    .face.left{
        right: 50%;
        margin-right: 96px;
    }

    .face.right{
        left: 50%;
        margin-left: 96px;
    }

    /*
    * 画皮卡丘的上嘴唇
    */

    .UpperLip {
        height: 20px;
        width: 60px;
        border:2px solid black;
        position: absolute;
        top:52px;
        background: #fee433;
    }

    .UpperLip.left{
        right: 50%;
        border-bottom-left-radius: 40px 20px;
        border-top:none;
        border-right: none;
        transform: rotate(-20deg);
    
    }

    .UpperLip.right{
        left: 50%;
        border-bottom-right-radius: 40px 20px;
        border-top:none;
        border-left: none;
        transform: rotate(20deg);
    }

    /*
    * 画皮卡丘的下嘴唇
    */

    .lowerLip-wrapper{
        bottom: 0;
        position: absolute;
        left: 50%;
        margin-left: -75px;
        height: 105px;
        width: 150px;
        overflow: hidden;
    }
    
    .LowerLip{
        width: 150px;
        height: 1500px;
        background-color: #990513;
        border-radius: 100px/600px;
        position: absolute;
        bottom: 0;
        border:2px solid black;
        overflow: hidden;
    }

    /*
    * 画皮卡丘的舌头
    */

    .LowerLip::after{
        content: "";
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background: #fc4a62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50px;
    }
    /*
    * 这只皮卡丘完成了
    */
    `

    writeCode('', code)

}.call()