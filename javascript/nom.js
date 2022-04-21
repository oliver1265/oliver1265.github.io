function afficheInitiales() {
  var prenom = document.getElementById("txtNom").value;
  var nomM = document.getElementById("txtNomM").value;
  var nomF = document.getElementById("txtNomF").value;
  var initiales = prenom.charAt(0).toUpperCase() + "." + nomM.charAt(0).toUpperCase() + "." + nomF.charAt(0).toUpperCase();
  var afficheI = document.getElementById("afficheInitiales");
  afficheI.innerHTML = initiales;
}
function afficheNomComplet() {
  var prenom = document.getElementById("txtNom").value;
  var nomM = document.getElementById("txtNomM").value;
  var nomF = document.getElementById("txtNomF").value;
  var nomComplet = prenom.charAt(0).toUpperCase() + prenom.slice(1).toLowerCase() + " " + nomM.charAt(0).toUpperCase() + nomM.slice(1).toLowerCase() + " " + nomF.charAt(0).toUpperCase() + nomF.slice(1).toLowerCase();
  var afficheNC = document.getElementById("afficheNomComplet");
  afficheNC.innerHTML = nomComplet;
}
function afficheNomUtilisateur() {
  var prenom = document.getElementById("txtNom").value;
  var nomM = document.getElementById("txtNomM").value;
  var nomF = document.getElementById("txtNomF").value;
  var nomUtilisateur = prenom.charAt(0).toLowerCase() + nomM.charAt(0).toLowerCase() + nomF.charAt(0).toUpperCase() + nomF.slice(1).toLowerCase();
  var afficheNU = document.getElementById("afficheNomUtilisateur");
  afficheNU.innerHTML = nomUtilisateur;
}