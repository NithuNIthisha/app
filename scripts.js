
for(var i =0; i<document.querySelectorAll(".choice").length ;i++){
       let myParam = i
       document.querySelectorAll(".choice")[i].addEventListener("click",function(){
                 let doc = document.querySelectorAll(".choice")[myParam].className.split(" ")[0]
                 window.open(doc+".html")
                 })
    };
