var star1 = document.getElementById('star1');
    var star2 = document.getElementById('star2');
    var star3 = document.getElementById('star3');
    var star4 = document.getElementById('star4');
    var star5 = document.getElementById('star5');
    var btnqq = document.getElementsByClassName('btnqq');
    var QQ = document.getElementsByClassName("QQ");
    
    
    star1.addEventListener("click",()=>{
        star1.style.color = "#F9F900";
        star2.style.color = "#F9F900";
        star3.style.color = "#F9F900";
        star4.style.color = "#F9F900";
        star5.style.color = "#F9F900";
    })
    star2.addEventListener("click",()=>{
        star1.style.color = "#ccc";
        star2.style.color = "#F9F900";
        star3.style.color = "#F9F900";
        star4.style.color = "#F9F900";
        star5.style.color = "#F9F900";
    })
    star3.addEventListener("click",()=>{
        star1.style.color = "#ccc";
        star2.style.color = "#ccc";
        star3.style.color = "#F9F900";
        star4.style.color = "#F9F900";
        star5.style.color = "#F9F900";
    })
    star4.addEventListener("click",()=>{
        star1.style.color = "#ccc";
        star2.style.color = "#ccc";
        star3.style.color = "#ccc";
        star4.style.color = "#F9F900";
        star5.style.color = "#F9F900";
    })
    star5.addEventListener("click",()=>{
        star1.style.color = "#ccc";
        star2.style.color = "#ccc";
        star3.style.color = "#ccc";
        star4.style.color = "#ccc";
        star5.style.color = "#F9F900";
    });

    for(var b=0;b<btnqq.length;b++){
        btnqq[b].addEventListener("click",clearstar);
    }
    
    function clearstar(){
        for(var q=0;q<QQ.length;q++){
            QQ[q].value="";
        }
        star1.style.color = "#ccc";
        star2.style.color = "#ccc";
        star3.style.color = "#ccc";
        star4.style.color = "#ccc";
        star5.style.color = "#ccc";
    }