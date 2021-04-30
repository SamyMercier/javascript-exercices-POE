var formulaire = document.forms.formulaire;
var nom = document.formulaire.nom;
var prenom = document.formulaire.prenom;
var age = document.formulaire.age;
var sexe = document.formulaire.sexe;
var ville = document.formulaire.ville;

function alertInfo(){
    let confirmation = confirm(
        "Est-ce correcte ?\n"+
        "Nom : "+nom.value+"\n"+
        "Prenom : "+prenom.value+"\n"+
        "Age : "+age.value+"\n"+
        "Sexe : "+sexe.value+"\n"+
        "Ville : "+ville.value+"\n"
    
    )
    if(confirmation){
        alert("Vos informations on été enregistré avec succès !");
        formulaire.submit();
    }else{
        alert("Veuillez corrigez vos informations")
    }
}

