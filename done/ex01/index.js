// les variables
// création 
var prenomEleve ;
// assign
prenomEleve = "Jean-Michel" ;
// créa + assign
var ageEleve = 26 ;
var codePostal ;
codePostal="03120" ; 
// codePostal=3120 ; 

document.write("<br/>Mon prénom est "+prenomEleve+" ") ;
document.write("et j'ai "+ageEleve+" ans.<br>Mon codePostal postal est "+codePostal) ;


//autres manip avec les vars
document.write("<br/><br/>--- Concaténation avec signe +");
var nomEleve = "Delettre";
var nomComplet = prenomEleve+" "+nomEleve;
document.write("<br>Nom complet "+nomComplet) ;
//
var ageEleve1 = 26 ;
var ageEleve2 = 56 ;
var ageEleve3 = 12 ;
var ageEleve4 = 32 ;
var ageEleve5 = 18 ;
var ageMoyen=  (ageEleve1+ageEleve2+ageEleve3+ageEleve4+ageEleve5)/5;

document.write("<br/><br/>--- Addition avec signe + puis division");
document.write("<br>Moyenne des ages "+ageMoyen+" ans ") ;
ageMoyen=parseInt(ageMoyen);
document.write("<br>Moyenne des ages "+ageMoyen+" ans ") ;
//
document.write("<br/><br/>--- Calcul avec les 4 opérateurs");
var ht=200; var acompte=80; var tva=20;
var aPayer=ht+ht*tva/100-acompte ;
// aPayer=ht*(tva/100+1)-acompte ;
aPayer=ht*(tva*Math.pow(10,-2)+1)-acompte ;
document.write("<br>Net à payer "+aPayer+" €" ) ;
//
// Les tableaux soit les vars de type Array (variables indicées)
// création array vide
var eleves = [] ;
eleves[0] = "jeanmi";
eleves[1] = "martine";
eleves[2] = "camel";
eleves[4] = "robert";
eleves[3] = "nicolas";
document.write("<br><br>--- Les tableaux (type js Array) :<br>");
for (var i=0;i<eleves.length;i++) document.write(eleves[i]+"<br/>");
// variante
eleves.push("Joëlle");
eleves.push("René");
eleves.push("Ginette");
eleves.push("Fernande");
document.write("<br>Variante :<br>");
for (var i=0;i<eleves.length;i++) document.write(eleves[i]+"<br/>");
document.write("Nombre d'élèves : "+eleves.length);
// les fonctions
// appel de fonctions fournies par js
// 		un nom (similaire à un nom de vars mais choisi par JS) suivi de (liste de paramètres)
alert("bonjour "+eleves[3]);
document.write("<br/><br/>--- Les fonctions (type JS Function) ");
document.write("<br>je suis aussi une fonction");
window.alert("je suis une fonction associée à l'objet window (le plus élevé dans la hiérarchie) ");
window.confirm("êtes vous d'accord ?");
window.document.write("<br>je suis une fonction associé à l'objet document de l'objet window");
document.write("<br/>window.ageEleve : "+window.ageEleve);
document.write("<br/>ageEleve : "+ageEleve);
//
document.write("<br/><br>--- Fonctions String.substr() et String.substring() ");
var chaineCaractere="0123456789" ;
var sousChaine=chaineCaractere.substr(0,3);
document.write("<br>"+sousChaine);
sousChaine=chaineCaractere.substr(5);
document.write("<br>"+sousChaine);
sousChaine=chaineCaractere.substr(7,1);
document.write("<br>"+sousChaine);
sousChaine=chaineCaractere.substr(0,9);
document.write("<br>"+sousChaine);
// Assez similaire String.substring() extrait à partir d'une position début jusqu'à une position fin-1
sousChaine=chaineCaractere.substring(2,3);
document.write("<br>"+sousChaine);
sousChaine=chaineCaractere.substring(9,10);
document.write("<br>"+sousChaine);
// length de String fonctionne différemment de length de Array
document.write("<br>longueur de chaineCaractere = "+chaineCaractere.length);
//
var dernier=eleves.pop();
document.write("<br/><br/>--- Fonction Array.pop() ");
document.write("<br>"+dernier);
dernier=eleves.pop();
document.write("<br>"+dernier);
// 
// A noter que Les fonctions sont des variables comme les autres (de type JS Function)
var affich= alert;
affich("J'ai mis alert() dans une variable 'affich'. Je  l'exécute par affich() ");
//
// Créer ses propres fonctions
// Une fonction est un bout de code avec un nombre d'instructions plus ou moins important.
// Exemple de petite fonction très pratique.
// Voir dans index.html le <div id="header" >
// Pour récupérer un élément html (div,button,etc) la syntaxe de la function est un peu longue :
// document.getElementById(id de l'élément).
// On va donc créer une fonction qui aura comme nom un simple $ par exemple. (exemple qui confirme la règle)
// Cette function recevra 1 seul argument (paramètre, var en entrée) : l'id de l'élément html
// Nous allons le faire avec les 2 syntaxes possibles.
// // OU BIEN 2ème syntaxe
// var $ = function (id) { return document.getElementById(id) } ;
// on teste
$("header").innerHTML="Je mets ce que je veux dans le sous-titre";
$("header").style.color="red";
$("header").innerHTML+="<br>avec la couleur qui me plait.";
// 1ère syntaxe
function $ (id) { 
	return document.getElementById(id);
}
// détail :
// 		function est le mot-clé imposé par JS
//		$ est le nom qui nous permettra d'appeler (d'exécuter) la fonction
// 		Entre les () on a 0 ou plusieurs arguments, séparés par des virgules, pour passer des valeurs à la fonction.
//			Exemple $("id_de_mon_element"); mettra auto la valeur "id_de_mon_element" dans la var id.
//			A noter qu'il y a pas besoin d'initialiser les vars arguments par 'var' etc. 
//		Le corps de la function est entre des {}
//		Si la fonction doit retourner un résultat le mot clé return est necessaire
//
// 2ème exemple :
affich = function (msg) {document.write("<br>"+msg)};
affich ("<br>--- Exemple de ma fonction affich()");
affich ("Hello, dear taxes payers");
// Dans la partie développement d'un vrai programme fera d'autres fonctions plus longues.
//
/**/
//
// Les boucles et exécution conditionnelle 
// 	le for 		=> 	répétition de n fois, un block d'instructions
//	le while	=> 	exécution d'un même block tant que la condition est vraie
//	le if 		=> 	éxécution d'un block 1 seul fois SI la condition est vraie 
//					; sinon exécuter le block suivant (facultatif)
// 
// syntaxe du for :
var max=5;
affich ("<br>--- le block FOR");
affich ("affiche les "+max+" 1ers élèves :");
for (var i=0;i<max;i=i+1) { 
	affich ( eleves[i]+" est la n° "+(i+1));
}	
// Détail
//	for		=>  mot clé
// 	var  	=>  si la var existe déjà le var n'est pas nécessaire
//	i=0;	=>	i démarera avec 0 comme valeur
//	i=i+1	=>	à chaque fin de block (entre {}) i sera incrémenté d'un pas de 1
//	i<max	=>  si Cette condition est devient fausse, JS sort de la boucle.
//				les opérateurs de comparaison sont <,>,==,!=
// Si je voulais afficher les multiples de 3 de 6 à 30 j'écrirais  :
affich ( "Les multiples de 3, de 6 à 30 avec FOR ");
for (var i=6;i<=30;i=i+3) { 
	affich ( ""+i);
}
// 
// Syntaxe du while
var i=6;
affich ( "<br>--- Les multiples de 3, de 6 à 30 avec WHILE ");
while (i<31) {
	affich ( ""+i);
	i+=3; // i=i+3
}
//
// Syntaxe du if ... else 
affich ( "<br>--- Les branchements conditionnels avec IF ELSE ");
i=10;
while (i<30) {
	if (i%5==0) {
		affich ( ""+i+" est un multible de 5.");
	}                                     
	else  {
		affich ( ""+i+" N'est PAS un multible de 5.");
	}
	i++; // i=i+1
}
// Note: 	IF... else 	n'est pas obligé d'être couplé à un WHILE. C'est même rare !
//			IF 			n'est pas obligé d'être couplé à un ELSE. Assez fréquent.
//
// Les vars de type Object qu'on appelle des objets (object en english)
// Déf simple :
//	Un objet est une variable qui regroupe en sont sein :
//		de 0 à plusieurs variables (propriétés, attributs)
//		de 0 à plusieurs fonctions
//		de 0 à plusieurs autres objets.
//		un objet peut aussi être vide (comme un tableau)
//		
//		De même qu'un tableau regroupait plusieurs éléments en leur donnant un indice différent,
//		un objet regroupe plusieurs éléments (membres) en leur donnant un nom.
//
// Syntaxe
affich ( "<br>--- Les vars de type Object ");

var eleve={}; // C'est tout ! objet crée à vide 
// Je remplis mon objet : <nom de l'objet>.<nom la variable>
eleve.prenom="Jean-Michel";	
eleve.nom="Delettre";	
eleve.age=45;
eleve.email="info@pixaline.net";
// on teste
affich (eleve.prenom+" "+eleve.nom+" est agé de "+eleve.age+" ans."+"<br/>"+
					 "Son adresse mail est "+eleve.email+".<br/><br/>");		
//
// Nous allons créer une function que nous ajouteront à chaque objet 'eleve'
var affichCetEleve = function() {
	affich	("<br>"+this.prenom+" "+this.nom+" est agé de "+this.age+" ans."+"<br/>"+
					 "Son adresse mail est "+this.email+".<br/>--------------------------------<br/>");	
};	
eleve.affich=affichCetEleve;
// le mot-clé 'this' contiendra (ou pointera vers) automatiquement l'objet dans lequel la function 'affich' se trouve à l'éxécution.
// attendre exemple à venir !
eleves=[];
eleves.push(eleve);
//
eleve={};
// Attention cette syntaxe très simple fait bcp de choses. Elle dit à JS met y un nouvel Object, ne touche 
// plus à l'objet que j'y avait mis précdemment. En d'autres termes eleves[0] n'est pas affecté.
// Si par contre je faisais directement eleve.prenom="Marie"; eleve.nom="Lombard"; etc 
// alors l'objet avec jean-michel etc, serait écrasé.
eleve.prenom="Marie";	
eleve.nom="Lombard";	
eleve.age="18";	
eleve.email="marie.lombard@laposte.net";	
eleve.affich=affichCetEleve;;
eleves.push(eleve);
//
eleve={};
eleve.prenom="Eric";	
eleve.nom="Enneke";	
eleve.age="32";	
eleve.email="e.neke@gmail.com";	
eleve.affich=affichCetEleve;;
eleves.push(eleve);
//
// on teste//
affich("Boucle de tous mes objets 'eleve'");
for (var i=0;i<eleves.length;i=i+1) {
	eleves[i].affich();
}
//
// Les interets d'avoir une structure d'objet sont entres autres :
//		1/  Toutes les propriétés et functions sont BIEN regroupées et donc isolées dans chaque objet. 
//			chacun ses affaires ! (Les objets de catégorie différente ont chacun leurs propriétés ; 
//			des objets de même nature (comme notre exemple tous les 'eleve') ont au moins des contenus différents.
//		2/  Si une appli a besoin de plusieurs catégories d'objet exemple les 'eleve', 'professeur', 'proviseur', etc ;
//			Ces différentes catégories d'objet auront vraisemblablement des variables commune comme prenom et nom 
//			mais par exemple, 'appreciation', 'niveau', etc appartiendront à 'eleve' mais pas à 'professeur' ni 'proviseur'.
//			Par contre tous ces objets pourront avoir une function de même nom (affich) mais qui se comportera
//			complètement différemment selon la catégorie. (en POO orthodoxe cela s'appelle le polymorphisme)