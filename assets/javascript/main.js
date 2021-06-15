const boton1 = document.getElementById("button1");
const boton2 = document.getElementById("button2");
const boton3 = document.getElementById("button3");
const boton4 = document.getElementById("button4");
const parrafo1 = document.getElementById("parrafo1");
const parrafo2 = document.getElementById("parrafo2");
const parrafo3 = document.getElementById("parrafo3");
const parrafo4 = document.getElementById("parrafo4");

boton1.onmouseover = function () {
	boton1.style.color = "gray";
	boton1.style.backgroundColor = "white"
	boton2.style.color = "black";
	boton2.style.backgroundColor = "rgba(128, 128, 128, 0.514)";
	boton3.style.color = "black";
	boton3.style.backgroundColor = "rgba(128, 128, 128, 0.514)";
	boton4.style.color = "black";
	boton4.style.backgroundColor = "rgba(128, 128, 128, 0.514)";
	parrafo1.style.visibility = "visible";
	parrafo2.style.visibility = "hidden";
	parrafo3.style.visibility = "hidden";
	parrafo4.style.visibility = "hidden";
}
boton2.onmouseover = function () {
	boton1.style.color = "black";
	boton1.style.backgroundColor = "rgba(128, 128, 128, 0.514)";
	boton2.style.color = "gray";
	boton2.style.backgroundColor = "white"
	boton3.style.color = "black";
	boton3.style.backgroundColor = "rgba(128, 128, 128, 0.514)";
	boton4.style.color = "black";
	boton4.style.backgroundColor = "rgba(128, 128, 128, 0.514)";
	parrafo1.style.visibility = "hidden";
	parrafo2.style.visibility = "visible";
	parrafo3.style.visibility = "hidden";
	parrafo4.style.visibility = "hidden";
}
boton3.onmouseover = function () {
	boton1.style.color = "black";
	boton1.style.backgroundColor = "rgba(128, 128, 128, 0.514)";
	boton2.style.color = "black";
	boton2.style.backgroundColor = "rgba(128, 128, 128, 0.514)";
	boton3.style.color = "gray";
	boton3.style.backgroundColor = "white"
	boton4.style.color = "black";
	boton4.style.backgroundColor = "rgba(128, 128, 128, 0.514)";
	parrafo1.style.visibility = "hidden";
	parrafo2.style.visibility = "hidden";
	parrafo3.style.visibility = "visible";
	parrafo4.style.visibility = "hidden";
}
boton4.onmouseover = function () {
	boton1.style.color = "black";
	boton1.style.backgroundColor = "rgba(128, 128, 128, 0.514)";
	boton2.style.color = "black";
	boton2.style.backgroundColor = "rgba(128, 128, 128, 0.514)";
	boton3.style.color = "black";
	boton3.style.backgroundColor = "rgba(128, 128, 128, 0.514)";
	boton4.style.color = "gray";
	boton4.style.backgroundColor = "white"
	parrafo1.style.visibility = "hidden";
	parrafo2.style.visibility = "hidden";
	parrafo3.style.visibility = "hidden";
	parrafo4.style.visibility = "visible";
}


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
