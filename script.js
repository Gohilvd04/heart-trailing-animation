const bodyEle = document.querySelector("body");

bodyEle.addEventListener("mousemove",(event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    const spanEle = document.createElement("span");

    spanEle.style.left = xPos +"px";
    spanEle.style.top = yPos +"px";

    const size = Math.random()*100;

    spanEle.style.width = size +"px";
    spanEle.style.height = size+ "px";

    bodyEle.appendChild(spanEle);

    setTimeout(()=>{
        spanEle.remove();
    },3000)
})