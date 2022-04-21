function soumettre() {
  var j = 0
  var langage = document.getElementById("selLang").value;
  if (langage == "css") {
    j = j + 1
  } else {
    var wrongSel = document.getElementById("wrongSel");
    wrongSel.innerHTML = "La bonne réponse est CSS.";
  }
  var caracteres = document.getElementsByName("caracteres");
  if ((caracteres[0].checked)&&(caracteres[1].checked)&&(!caracteres[2].checked)&&(!caracteres[3].checked)){
    j = j + 1
  } else {
    var wrongChar = document.getElementById("wrongChar");
    wrongChar.innerHTML = "Les bonnes réponses sont // et /*.";
  }

  var radiosTorF = document.getElementsByName("tORf");
  if (radiosTorF[1].checked) {
    j = j + 1
  } else {
    var wrongTorF = document.getElementById("wrongTorF");
    wrongTorF.innerHTML = "La bonne réponse est faux.";
  }
  var nom = document.getElementById("txtNom").value;
  var affiche = document.getElementById("divAffiche");
  if (j > 0) {
    affiche.innerHTML = "Bravo " + nom + "! " + j + "/3";
  } else {
    affiche.innerHTML = "Désolé " + nom + "... " + j + "/3";
  }
}