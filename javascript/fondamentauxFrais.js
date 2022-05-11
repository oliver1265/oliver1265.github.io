// Tableay pour le prix de chaque items pour l'acces rapide
var tableauPrix = [14.99,19.99,49.99,29.99,4.99];
// Déclaration des variables pour l'utilisation dans le future
var prixTotal = 0;
var check100 = 0;
var check50 = 0;
var check20 = 0;
var check10 = 0;
var check5 = 0;
var check2 = 0;
var check1 = 0;
var check25c = 0;
var check10c = 0;
var check5c = 0;
var items = " ";
var taxe = 0;
var prixL = 0;

// Fonction pour finaliser l'achat
function finalise() {
// Déclare des variables pour réinitialiser les données
  a = false;
  b = false;
  c = false;
  d = false;
  e = false;
  prixTotal = 0 
  prixTotalTaxes = 0
  prixTotal2 = 0
// Vérifie si l'item est choisi
  var choix1 = document.getElementById("choix1");
  if (choix1.checked){
// Vérifie la quantité choisi
    var quantite1 = document.getElementById("quantite1").value;
// Calcul le pric total
    prixTotal = prixTotal + tableauPrix[0]*quantite1
    a = true;
  }
// Vérifie si l'item est choisi
  var choix2 = document.getElementById("choix2");
  if (choix2.checked){
// Vérifie la quantité choisi
    var quantite2 = document.getElementById("quantite2").value;
// Calcul le pric total
    prixTotal = prixTotal + tableauPrix[1]*quantite2
    b = true;
  }
// Vérifie si l'item est choisi
  var choix3 = document.getElementById("choix3");
  if (choix3.checked){
// Vérifie la quantité choisi
    var quantite3 = document.getElementById("quantite3").value;
// Calcul le pric total
    prixTotal = prixTotal + tableauPrix[2]*quantite3
    c = true;
  }
// Vérifie si l'item est choisi
  var choix4 = document.getElementById("choix4");
  if (choix4.checked){
// Vérifie la quantité choisi
    var quantite4 = document.getElementById("quantite4").value;
// Calcul le pric total
    prixTotal = prixTotal + tableauPrix[3]*quantite4
    d = true;
  }
// Vérifie si l'item est choisi
  var choix5 = document.getElementById("choix5");
  if (choix5.checked){
// Vérifie la quantité choisi
    var quantite5 = document.getElementById("quantite5").value;
// Calcul le pric total
    prixTotal = prixTotal + tableauPrix[4]*quantite5
    e = true;
  }
// Vérifie si il y a même un item choisi 
  if (prixTotal==0) {
// Si non, message d'erreur
    var prix = document.getElementById("prixTotal");
    prix.innerHTML = "Vous n'avez rien choisi.";
  } else {
// Si oui, calcul le total avec le choix de taxe
      var taxes = document.getElementsByName("location");
    if (taxes[1].checked) {
// Taxes du Québec
      prixTotalTaxes = prixTotal*1.15;
      taxe = "QC 15%";
    } else {
// Taxes d'Ontario
      prixTotalTaxes = prixTotal*1.13;
      taxe = "ON 13%"
    }
// Vérifie la mode de livraison
    var livraison = document.getElementsByName("livraison");
    if (livraison[1].checked) {
// Calculs pour la livraison rapide
      prixTotal2 = prixTotalTaxes + 40;
      prixL = 40
    } else if (livraison[0].checked) {
// Calculs pour la livraison normale
      prixTotal2 = prixTotalTaxes + 15;
      prixL = 15
    }
  }
// Cherche le div pour affiche le prix total
  var prix = document.getElementById("prixTotal");
  prix.innerHTML = "Prix Total: " + prixTotal2.toFixed(2) + "$";
}

// Fonction pour payer
function pay() {
    items = " "
// Vérifie si le montant reçu est assez pour payer
  var montantRecu = document.getElementById("montantRecu").value;
  if (montantRecu >= prixTotal2) {
// Si oui, calcul le montant restant et affiche dans le div 
    montant = montantRecu - prixTotal2
    var recu = document.getElementById("afficheMontantBesoin");
    recu.innerHTML = "Le montant à vous rendre est " + montant.toFixed(2) + "$";
// Vérifie si on rend des pièces de 100$
    if (montant/100 != 0) {
      check100 = Math.floor(montant/100);
      montant = montant - Math.floor(montant/100)*100;
    }
// Vérifie si on rend des pièces de 50$
    if (montant/50 != 0) {
      check50 = Math.floor(montant/50);
      montant = montant - Math.floor(montant/50)*50;
    }
// Vérifie si on rend des pièces de 20$
    if (montant/20 != 0) {
      check20 = Math.floor(montant/20);
      montant = montant - Math.floor(montant/20)*20;
    }
// Vérifie si on rend des pièces de 10$
    if (montant/10 != 0) {
      check10 = Math.floor(montant/10);
      montant = montant - Math.floor(montant/10)*10;
    }
// Vérifie si on rend des pièces de 5$
    if (montant/5 != 0) {
      check5 = Math.floor(montant/5);
      montant = montant - Math.floor(montant/5)*5;
    }
// Vérifie si on rend des pièces de 2$
    if (montant/2 != 0) {
      check2 = Math.floor(montant/2);
      montant = montant - Math.floor(montant/2)*2;
    }
// Vérifie si on rend des pièces de 1$
    if (montant/1 != 0) {
      check1 = Math.floor(montant/1);
      montant = montant - Math.floor(montant/1)*1;
    }
// Vérifie si on rend des pièces de 25 cents
    if (montant/.25 != 0) {
      check25c = Math.floor(montant/.25);
      montant = montant - Math.floor(montant/.25)*.25;
    }
// Vérifie si on rend des pièces de 10 cents
    if (montant/.10 != 0) {
      check10c = Math.floor(montant/.10);
      montant = montant - Math.floor(montant/.10)*.10;
    }
// Vérifie si on rend des pièces de 5 cents
    if (montant/.05 != 0) {
      check5c = Math.floor(montant/.05);
      montant = montant - Math.floor(montant/.05)*.05;
    }
// Si il y reste moins que 5 cents mais plus que zero, on rend un 5 cent d'extra
    if (montant>0) {
      check5c = check5c + 1
    }
// Affiche touts les pièces d'argent nécessaire
    var monaie = document.getElementById("afficheMonaie");
    monaie.innerHTML = "À retourner:<br><br>Pièce(s) de 100$: " + check100 + "<br>" + "Pièce(s) de 50$: " + check50 + "<br>" + "Pièce(s) de 20$: " + check20 + "<br>" + "Pièce(s) de 10$: " + check10 + "<br>" + "Pièce(s) de 5$: " + check5 + "<br>" + "Pièce(s) de 2$: " + check2 + "<br>" + "Pièce(s) de 1$: " + check1 + "<br>" + "Pièce(s) de 25c: " + check25c + "<br>" + "Pièce(s) de 10c: " + check10c + "<br>" + "Pièce(s) de 5c: " + check5c;
// Affiche les items sur le reçu
// Vérifie si l'item 1 est choisi
    if (a == true) {
// Si oui, on affiche l'item, la quantité et le prix sans taxe
      items = "Chapeau x" + document.getElementById("quantite1").value + " " + tableauPrix[0] + "<br>";
    }
// Vérifie si l'item 2 est choisi
    if (b == true) {
// Si oui, on affiche l'item, la quantité et le prix sans taxe
      items = items + "Chandail x" + document.getElementById("quantite2").value + " " + tableauPrix[1] + "<br>";
    }
// Vérifie si l'item 3 est choisi
    if (c == true) {
// Si oui, on affiche l'item, la quantité et le prix sans taxe
      items = items + "Hoodie x" + document.getElementById("quantite3").value + " " + tableauPrix[2] + "<br>";
    }
// Vérifie si l'item 4 est choisi
    if (d == true) {
// Si oui, on affiche l'item, la quantité et le prix sans taxe
      items = items + "Pantalon x" + document.getElementById("quantite4").value + " " + tableauPrix[3] + "<br>";
    }
// Vérifie si l'item 5 est choisi
    if (e == true) {
// Si oui, on affiche l'item, la quantité et le prix sans taxe
      items = items + "Bas x" + document.getElementById("quantite5").value + " " + tableauPrix[4] + "<br>";
    }
// Ceci affiche le reçu au complet avec les items, la quantité, les taxes, le sous-total, la livraison et le total final
    var recuComplet = document.getElementById("recuComplet");
    recuComplet.innerHTML = "***************************<br>* REÇU - Fondamentaux Frais *<br>***************************<br>"
 + items + "<br>***************************<br>" + "Sous-total des items: " + prixTotal + "<br>Taxes (" + taxe + "): " + (prixTotalTaxes- prixTotal).toFixed(2) + "<br>Sous-total: " + prixTotalTaxes.toFixed(2) + "<br>Livraison: " + prixL + "$" + "<br>TOTAL: " + prixTotal2.toFixed(2) + "$" + "<br>***************************<br>* REÇU - Fondamentaux Frais *<br>***************************";
    
// Si le montant rendu n'est pas assez
  } else if (montantRecu < prixTotal2) {
// Affiche message d'erreur
    var recu = document.getElementById("afficheMontantBesoin");
    recu.innerHTML = "Vouz n'avez pas entré assez d'argent." 
// Si rien n'est entré
  } else {
// Affiche message d'erreur
    var recu = document.getElementById("afficheMontantBesoin");
    recu.innerHTML = "Vouz n'avez pas entré une somme d'argent."
  }
}
