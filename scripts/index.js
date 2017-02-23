var ball = document.querySelector(".discoball");

function goDisco() {
	//do your disco magic here !
ball.setAttribute("style" , "background: linear-gradient(to left, #FF512F , #DD2476); ")
}
function goToDisco(){
	ball.setAttribute("style", "background: linear-gradient(to left, #E55D87 , #5FC3E4);")
}
function goOur(){
	ball.setAttribute("style", "background: linear-gradient(to left, #3494E6 , #EC6EAD);")
}
function awesome(){
	ball.setAttribute("style", "background: linear-gradient(to left, #3494E6 , #EC6EAD; ")
}
function disco(){
	ball.setAttribute("style"," background: linear-gradient(to left, #00c3ff , #ffff1c)")
}
function finishDisco(){
	ball.setAttribute("style","background: linear-gradient(to left, #de6161 , #2657eb);  ")
}

setInterval(goDisco,300);
setInterval(goToDisco,600)
setInterval(goOur,900)
setInterval(awesome,1200)
setInterval(disco,1500)
setInterval(finishDisco,1800);
