//Abrir Menu
function funcmenu() {
    var menu = document.getElementById("menu");
    if (menu.style.left === "0px") {
        menu.style.left = "-200px";
    } else {
        menu.style.left = "0px";
    }
}
//Abrir Menu_Sobre
function funcsobre() {
    var menusobre = document.getElementById("menu_lista_sobre");
    var contato = document.getElementById("contato");
    var alturamenu = menusobre.clientHeight;
    var alturacontato = contato.clientHeight;
    var distancia = alturamenu + alturamenu;
    menusobre.classList.toggle("abrir");
}
//Fechar Menu se clicar forar
function fecharMenu(event) {
    var menu = document.getElementById("menu");
    if (menu.style.left === "0px" && !menu.contains(event.target) && event.target.id !== "menu_botao") {
        menu.style.left = "-200px";
    }
}

//Passar Slider

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextimage();
}, 5000);

function nextimage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}
//Fechar o Menu Lateral caso a largura da pagina seja maior que 1010px
window.addEventListener("resize", function () {
    var menu = document.getElementById("menu");
    var larguraPagina = window.innerWidth;
    if (larguraPagina > 1010 && menu.style.left === "0px") {
        menu.style.left = "-200px";
    }
});
