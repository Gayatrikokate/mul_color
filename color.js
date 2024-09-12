let ColorcontEl=document.getElementById("Colorcont");

let colorarry=["red","yellow","grey","green","pink","purple","orange","black","aqua","peach","maroon","violet"];




function onchangeColor(){
    let randomNumber=Math.ceil(Math.random()*(colorarry.length-1));
    ColorcontEl.style.backgroundColor=colorarry[randomNumber];
    


}