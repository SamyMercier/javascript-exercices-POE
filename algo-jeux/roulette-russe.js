var nombreDeBalles = 2;
var barillet= [];

function rechargerPistolet(){
    for(let index = 0; index < nombreDeBalles; index++){
        barillet[index] = true;
    }
    for(let index=nombreDeBalles; index<8; index++){
        barillet[index] = false;
    }
}

function TirerUneBalleAuHasard(){
    let balleAuHasard = Math.round(Math.random()*7);
    let balleTire = barillet[balleAuHasard];
    barillet.splice(balleAuHasard, 1);
    return balleTire;
}

function personnageTire(){
    rechargerPistolet();
    if(TirerUneBalleAuHasard()){
        console.log("PAN t'es mort noob")
        return(true);
    }else{
        console.log("KLING t'as de la chatte")
        return(false);
    }
}

function jouer(){
    let joueursEnVie = true;
    while(joueursEnVie){
        console.log("Le joueur 1 tire...");
        if(personnageTire()){
            joueursEnVie=false;
        }
        if(joueursEnVie){
            console.log("Le joueur 2 tire...");
            if(personnageTire()){
                joueursEnVie=false;
            }
        }
    }
}

jouer();
