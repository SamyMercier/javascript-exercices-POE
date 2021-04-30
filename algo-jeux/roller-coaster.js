var group = [2,3,5,4];
var places = 5;
var tours = 3;
var profit = 0;

function faireLesTours(tours){
    for(let index = 0; index < tours; index++){
        console.log("Tour actuel : " + (index+1));
        fairePasserLesGroupes();
        console.log("-----------------------------------------");
    }
    console.log("Profit : " + profit + " euros");
}

function fairePasserLesGroupes(){
    for(let index = 0; index < places; index += group[group.length-1]){
        console.log("taille du groupe en attente : " + group[0]);
        console.log("places restantes : " +(places-index));
        if(verifierRestePlace((places-index), group[0])){
            fairePayerLeGroupe(group[0]);
            deplacerGroupeEnFinDeFil(group[0]);
            console.log("Le groupe est passé")
        }else{
            console.log("Le groupe n'est pas passé")
        }
    }
}

function fairePayerLeGroupe(tailleDuGroupe){
    console.log("Le groupe paye " + tailleDuGroupe + " euros");
    profit+=tailleDuGroupe;
}

function verifierRestePlace(nombreDePlacePrises, tailleDuGroupe){
    if(nombreDePlacePrises >= tailleDuGroupe){
        console.log("Il reste de la place pour le groupe");
        return true;
    }
    else{
        console.log("Il ne reste plus de place pour le groupe");
        return false;

    }
}

function deplacerGroupeEnFinDeFil(groupeADeplacer){
    console.log("groupe avant de le déplacer :");
    console.log(group);
    let groupeADeplacerALaFin = groupeADeplacer;
    group.shift(1);
    group.push(groupeADeplacerALaFin);
    console.log("groupe après le déplacement :");
    console.log(group);
}

console.log("-----------------------------------------");
faireLesTours(tours);