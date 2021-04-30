var bouton = document.getElementById("bouton");
const widthButon = 194;
const heightButon = 34;


bouton.addEventListener("mouseover",function(){
    let screenWidth = giveScreenWidth();
    let screenHeight = giveScreenHeight();
    let newCoordinateWidth = Math.random()*screenWidth;
    let newCoordinateHeight = Math.random()*screenHeight;
    bouton.style.left = newCoordinateWidth+"px";
    bouton.style.top = newCoordinateHeight+"px";
});

function giveScreenWidth(){
    let screenWidth = document.documentElement.scrollWidth;
    return (screenWidth-widthButon);
}

function giveScreenHeight(){
    let screenHeight = document.documentElement.scrollHeight;
    let headerHeight = giveHeaderHeight();
    return (screenHeight-heightButon-headerHeight);
}

function giveHeaderHeight(){
    let headerHeight = document.getElementById("header").offsetHeight;
    return headerHeight;
}

function clicked(){
    alert("CHEATERRRRRRRRRR");
}