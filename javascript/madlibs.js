function madlibs() {
  var vetements = document.getElementById("txtvetements").value;
  var nourriture1 = document.getElementById("txtNourriture1").value;
  var action1 = document.getElementById("txtAction1").value;
  var nom = document.getElementById("txtnom").value;
  var nourriture2 = document.getElementById("txtNourriture2").value;
  var adjectif1 = document.getElementById("txtAdjectif1").value;
  var action2 = document.getElementById("txtAction2").value;
  var adverbe = document.getElementById("adverbe").value;
  var nourriture3 = document.getElementById("txtNourriture3").value;
  var objet = document.getElementById("txtObjet").value;
  var adjectif2 = document.getElementById("txtAdjectif2").value;
  
  var madlibs = "J’adore l’été!  Chaque jour, quand je suis en vacances, je me réveille, je mets mes " + vetements + ",<br> je me rend à la cuisine et je mange " + nourriture1 + " pour déjeuner. Ensuite, mon activité préféré est de " + action1 + " avec mon ami " + nom + ".<br>  À 14h, je dîne. Je mange des " + nourriture2 + " " + adjectif1 + ".  Durant l’après-midi, j’aime me rendre au parc et de " + action2 + " " + adverbe + ".<br>  En soirée, je mange toujours " + nourriture3 + " pour le souper. Finalement, je me couche et je rêve de " + objet + ".<br>  Quel été " + adjectif2 + "!";
  
  var afficheMadLibs = document.getElementById("divMadLibs");
  afficheMadLibs.innerHTML = madlibs;
}