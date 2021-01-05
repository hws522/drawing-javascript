const canvas = document.getElementById("jsCanvas");

let painting = false;

function onMouseMove(event){ //스크린 내에서의 좌표.(offsetX, offsetY)
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    painting = false;
}

function onMouseLeave(event){
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
}

