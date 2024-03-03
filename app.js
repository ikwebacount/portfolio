/* 要素を取得 */
var a=document.getElementById("main2Item1Controle");
var b=document.getElementById("main2Item2Controle");
var c=document.getElementById("main2Item3Controle");
var left=document.getElementById("leftBtn");
var right=document.getElementById("rightBtn");



/* 変数、配列の定義 */
var value=[
    ["flex","none","none"],
    ["none","block","none",],
    ["none","none","block"]
];

var i=0;
var x=0;

a.style.display=value[x][0];
b.style.display=value[x][1];
c.style.display=value[x][2];

/* ボタンのファンクション */
leftBtn.onclick=function(){
    i++;

    console.log(i)

    if(3-i>=0){
        x=3-i;
    }else if(3-i<0){
        i=1;
        x=3-i;
    };
    console.log(x)

    a.style.display=value[x][0];
    b.style.display=value[x][1];
    c.style.display=value[x][2];

    console.log(a.style.display=value[x][0]);
    console.log(b.style.display=value[x][1]);
    console.log(c.style.display=value[x][2]);
}

rightBtn.onclick=function(){
    i++;

    console.log(i)
    
    if(i<3){
        x=i;
    }else if(3<=i){
        i=0;
        x=i;
    };
    console.log(x)

    a.style.display=value[x][0];
    b.style.display=value[x][1];
    c.style.display=value[x][2];

    console.log(a.style.display=value[x][0]);
    console.log(b.style.display=value[x][1]);
    console.log(c.style.display=value[x][2]);
}

/* 経過時間で画面が変わる */

setInterval(rightBtn.onclick,5000)
