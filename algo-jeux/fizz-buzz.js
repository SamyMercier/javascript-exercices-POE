var nbrDeLignes = 20;

//boucle
for(let index = 0; index < nbrDeLignes; index++){
    remplacer(index);
}

function remplacer (index) {
    if(index%3 == 0 && index%5 ==0){
        console.log("FIZZ BUZZ");
    }else if(index%3 == 0){
        console.log("FIZZ");
    }else if(index%5 == 0){
        console.log("BUZZ");
    }else{
        console.log(index);
    }

}

