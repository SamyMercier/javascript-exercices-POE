var ordreDesImages = [0,1,2,3];
var zoneDeJeu = document.getElementById("play-area");
var image0 = document.getElementById("image0");
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");

zoneDeJeu.addEventListener('click', function(){
    mettreAJourImages();
    changerOrdreImage();
});

function changerOrdreImage(){
    image0Position = ordreDesImages[0];
    image1Position = ordreDesImages[1];
    image2Position = ordreDesImages[2];
    image3Position = ordreDesImages[3];

    ordreDesImages[0] = image2Position;
    ordreDesImages[1] = image0Position;
    ordreDesImages[2] = image3Position;
    ordreDesImages[3] = image1Position;
}

function mettreAJourImages(){
    image0.setAttribute("src",("../assets/"+ordreDesImages[2]+".png"));
    image1.setAttribute("src",("../assets/"+ordreDesImages[0]+".png"));
    image2.setAttribute("src",("../assets/"+ordreDesImages[3]+".png"));
    image3.setAttribute("src",("../assets/"+ordreDesImages[1]+".png"));
}


