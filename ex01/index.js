// les valeurs, variables, calcul et opérateurs
var prenomEleve ; 
prenomEleve="Jean-Michel";
var ageEleve=26;
//var cp=03270;
var cp="18270"
document.write("Mon prénom est "+prenomEleve+" j'ai "+ageEleve+"ans. cp: "+cp);
// Autres manip avec les vars
var ageEleve1 = 26;
var ageEleve2 = 51;
var ageEleve3 = 35;
var ageEleve4 = 12;
var ageEleve5 = 89;
var ageMoyen= (ageEleve1+ageEleve2+ageEleve3+ageEleve4+ageEleve5)/5 ;
document.write("Moyenne<br/>");
document.write("age Moyenne = "+ageMoyen);
//
document.write("<br/>calcul 4 opé.<br/>");
var ht=200;var tva=20;acompte=60;
var aPayer=ht+ht*tva/100-acompte ;
aPayer = ht *(1+tva/100)-acompte ;
document.write("à payer = "+aPayer);
// Les tableaux (type js Array)
var eleves=[];

eleves[0] = "jeanmi" ;
eleves[1] = "susy" ;
eleves[2] = "hector" ;
eleves[4] = "berthe" ;
eleves[3] = "simon" ;
document.write("<br/>liste description éleves<br/>");
for (var i=0;i<eleves.length;i++) {
	document.write(eleves[i]+"<br/>");
}
document.write("<br/>liste description éleves après push<br/>");
eleves.push("Joëlle");
eleves.push("Arnaud");
eleves.push("Emilie");
for (var i=0;i<eleves.length;i++) {
	document.write(eleves[i]+"<br/>");
}
 

// les fonctions
//
// 		appel de fonctions fournies par js
//
//window.alert("bonjour");
window.document.write("je suis la fonctions write de window.document<br/>");
document.write("window.ageEleve = "+window.ageEleve+"<br/>");
//
var chaine = "abcdefghij";
var sousChaine=chaine.substr(3,2); // 'de'

document.write("eleves.pop() = "+eleves.pop()+"<br/>");
document.write("eleves.pop() = "+eleves.pop()+"<br/>");

var affich=window.alert;
//affich("alert mis dans affich");

// 		Créer ses propres fonctions

function $ (id) {
	return document.getElementById(id);
}
$("header").innerHTML="J'écris ce que je veux en rouge";
$("header").style.color="red";
affich = function (tx) {
	document.write(tx+"<br/>");
}

// Les boucles et exécution conditionnelle 
var max=5;
for (var i=0;i<5;i=i+1) {
	affich(eleves[i]+" a le n° "+(i+1));
}
affich("---- multiple de 3 avec for ----");
for (var i=6;i<31;i+=3) {
	affich(""+i+" est multiple de 3");
}
affich("---- multiple de 3 avec while ----");
var i=6;
while (i<31) {
	affich(""+i+" est multiple de 3");
	i+=3;
}
affich("---- tests conditionnels ----");
i=10;
while (i<31) {
	if (i%5===0) {
		affich (""+i+" est un multiple de 5");
	}
	else {
		affich (""+i+" n'est pas un multiple de 5");
	}
	i++;
}
// Les objets (type js Object)
affich ("Les objets (Type Object) ");
function affichMoi () {
	affich (""+this.prenom+" "+this.nom+" est agé de "+this.age+" ans");
}
eleves=[];
//
var eleve={};
eleve.nom="Delettre";
eleve.prenom="Jean-Michel";
eleve.age=45;
eleve.email="info@pixaline.net";
eleve.affich=affichMoi;
eleves.push(eleve);
//
eleve={};
eleve.nom="Dupont";
eleve.prenom="Hector";
eleve.age=38;
eleve.email="hd@gmail.net";
eleve.affich=affichMoi;
eleves.push(eleve);
//
eleve={};
eleve.nom="Técheur";
eleve.prenom="Claudine";
eleve.age=22;
eleve.email="cc@gmail.com";
eleve.affich=affichMoi;
eleves.push(eleve);
//
for (var i=0;i<eleves.length;i++) {
	eleves[i].affich();
}
