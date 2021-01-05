const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const color = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");



canvas.width = 650; //element에 width, height 를 지정해줘야 됨.
canvas.height = 650;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;



let painting = false;

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function onMouseMove(event){ //스크린 내에서의 좌표.(offsetX, offsetY)
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting){ //클릭 x.
        ctx.beginPath();
        ctx.moveTo(x, y); 
    }
    else{ // 클릭 o.
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColor(event){
    const color = event.target.style.backgroundColor; //target 색상을 color 지정해서 strokestyle 색상으로 바꿈.
    ctx.strokeStyle = color;
}

function handleRange(event){
    const range = event.target.value;
    ctx.lineWidth = range;
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

//array 만들고 forEach로 color(아무이름이나 노상관. array안에 item 이름) 돌려서 click 이벤트 호출
Array.from(color).forEach(color => color.addEventListener("click", handleColor));

if(range){
    range.addEventListener("input", handleRange);
}