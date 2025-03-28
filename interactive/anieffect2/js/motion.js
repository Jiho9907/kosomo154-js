const contentWrap = document.querySelector(".contentWrap");
const disk_inner = document.querySelectorAll(".disk_inner");
const album = document.querySelectorAll(".album");
const pointBtnAll = document.querySelectorAll(".pointWrap li");
let pageNum = 0;
let totalNum = 0;
const bgArray = new Array();
bgArray[0] = ["#0272a4","#f6a564"];
bgArray[1] = ["#b6bfc8","#36595b"];
bgArray[2] = ["#e58e82","#6f569f"];

window.onload = function(){
    const prev_button = document.querySelectorAll("button")[0];
    const next_button = document.querySelectorAll("button")[1];

    totalNum = album.length;

    prev_button.addEventListener("click", function(){
        if(pageNum > 0){
            pageNum --;
        }else{
            pageNum = totalNum -1;
        }
        pageChangeFunc();
    })

    next_button.addEventListener("click", function(){
        if(pageNum < totalNum-1){
            pageNum ++;
        }else{
            pageNum = 0;
        }
        pageChangeFunc();
    })

    for( var i = 0; i < pointBtnAll.length; i++ ){
        (function(idx) {
            pointBtnAll[idx].onclick = function() {
                // alert(idx);
                pageNum = idx;
                pageChangeFunc();
            }
        })(i);
    }

    //최초실행
    // pageNum = 2;
    pageChangeFunc();
}

//여기서 모든 것을 한다.
function pageChangeFunc(){

    contentWrap.style.background = "linear-gradient(120deg,"+ bgArray[pageNum][0] +", "+ bgArray[pageNum][1] + ")";

    for(var i=0; i<totalNum; i++){
        if(pageNum == i){
            //현재 컨텐츠(페이지)
            album[i].classList.add("active");
            pointBtnAll[i].classList.add("active");
        }else{
            album[i].classList.remove("active");
            pointBtnAll[i].classList.remove("active");
        }
    }

    disk_inner[pageNum].style.background = bgArray[pageNum][0];
}


