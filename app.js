/* 要素を取得と変数への格納*/
var main2Item1Controle=document.getElementById("main2Item1Controle");
var main2Item2Controle=document.getElementById("main2Item2Controle");
var main2Item3Controle=document.getElementById("main2Item3Controle");
var left=document.getElementById("leftBtn");
var right=document.getElementById("rightBtn");

/* 変数の定義 */
var i=0

/* 関数の定義 */
 /* SNSの塊にクラスとｃｓｓを追加 */


function main2Item1ControlLeftTranslate(){
    main2Item1Controle.classList.add("main2Item1AddClass")
}


function main2Item1ControlRihgtTranslate(){
    main2Item1Controle.classList.add("main2Item1AddClassRev")
}

function main2Item1ControleOpasi(){
    main2Item1Controle.classList.add("main2Item1AddClass2")
}

function main2Item1ControleReset(){
    main2Item1Controle.classList.remove("main2Item1AddClass")
    main2Item1Controle.classList.remove("main2Item1AddClassRev")
    main2Item1Controle.classList.remove("main2Item1AddClass2")
}



 /* 依頼をしてみる */
function main2Item2ControlLeftTranslate(){
    main2Item2Controle.classList.add("main2Item2AddClass")
}


function main2Item2ControlRihgtTranslate(){
    main2Item2Controle.classList.add("main2Item2AddClassRev")
}

function main2Item2ControleOpasi(){
    main2Item2Controle.classList.add("main2Item2AddClass2")
}

function main2Item2ControleReset(){
    main2Item2Controle.classList.remove("main2Item2AddClass")
    main2Item2Controle.classList.remove("main2Item2AddClassRev")
    main2Item2Controle.classList.remove("main2Item2AddClass2")
}

 /* 3つめのコンテンツ */
function main2Item3ControlLeftTranslate(){
    main2Item3Controle.classList.add("main2Item3AddClass")
}


function main2Item3ControlRihgtTranslate(){
    main2Item3Controle.classList.add("main2Item3AddClassRev")
}

function main2Item3ControleOpasi(){
    main2Item3Controle.classList.add("main2Item3AddClass2")
}

function main2Item3ControleReset(){
    main2Item3Controle.classList.remove("main2Item3AddClass")
    main2Item3Controle.classList.remove("main2Item3AddClassRev")
    main2Item3Controle.classList.remove("main2Item3AddClass2")
}

/* 左の操作の関数 */
function leftAction(){
    i++

    switch(i%3){
        case 1:
            main2Item1ControlLeftTranslate()
            main2Item2ControleOpasi()
            main2Item3ControleReset()
            setTimeout(main2Item1ControleReset,500)
            break
        case 2:
            main2Item2ControlLeftTranslate()
            main2Item3ControleOpasi()
            main2Item1ControleReset()
            setTimeout(main2Item2ControleReset,500)
            break
        case 0:
            main2Item3ControlLeftTranslate()
            main2Item1ControleOpasi()
            main2Item2ControleReset()
            setTimeout(main2Item3ControleReset,500)
            break
    }
}

/* 右の操作の関数 */
function rightAction(){
    if(i<=0){
        i=98
    }else{i--}

    switch(i%3){
        case 1:  
            main2Item3ControlRihgtTranslate()  
            main2Item2ControleOpasi()  
            main2Item1ControleReset()
            setTimeout(main2Item3ControleReset,500)
            break
        case 2:
            main2Item1ControlRihgtTranslate()          
            main2Item3ControleOpasi() 
            main2Item2ControleReset()  
            setTimeout(main2Item1ControleReset,500)
            break
        case 0:
            main2Item2ControlRihgtTranslate()  
            main2Item1ControleOpasi()
            main2Item3ControleReset()  
            setTimeout(main2Item2ControleReset,500)              
            break
    }    
}


/* 初期値 */
switch(i%3){
    case 1:
        main2Item1ControlLeftTranslate()
        main2Item2ControleOpasi()
        main2Item3ControleReset()
        setTimeout(main2Item1ControleReset,500)
        break
    case 2:
        main2Item2ControlLeftTranslate()
        main2Item3ControleOpasi()
        main2Item1ControleReset()
        setTimeout(main2Item2ControleReset,500)
        break
    case 0:
        main2Item3ControlLeftTranslate()
        main2Item1ControleOpasi()
        main2Item2ControleReset()
        setTimeout(main2Item3ControleReset,500)
        break

}

/* インターバル設定 */
var interval=setInterval(leftAction,5000)

/* 左の操作 */
left.onclick=function(){
    leftAction()
    clearInterval(interval)
    interval=setInterval(leftAction,5000)
}

/* 右の操作 */
right.onclick=function(){
    rightAction()
    clearInterval(interval)
    interval=setInterval(leftAction,5000)

}
