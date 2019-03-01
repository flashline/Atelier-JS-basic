// main
addons ();
$("valide").addEventListener("click",valideListener);
$("termine").addEventListener("click",termineListener);
$("razForm").addEventListener("click",razFormListener);
var eleves=[];
var adminMail="info@pixaline.net";
$("boxEnvoi").style.display="none";
// fonctions

/// Les fonctions écouteur d'événement
function valideListener (e) {
	var msg="";  
	if ($("prenom").value=="") msg+="prenom manquant <br>" ;
	if ($("nom").value=="") msg+="nom manquant <br>" ;
	var inputAge=parseInt($("age").value);
	if (Number.isNaN(inputAge) || inputAge<12 || inputAge>120) msg+="age invalide <br>" ;
	//
	var re=/[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z][A-Z][A-Z]?/i;
	if (!$("email").value.match(re)) msg+="email invalide <br>";
	efface();
	if (msg!="") {
		$("zoneAffich").style.color="#ff0000"; // "red";
		affich(msg);
	}
	else {
		var eleve={};
		eleve.prenom=$("prenom").value;
		eleve.nom=$("nom").value;
		eleve.age=inputAge;
		eleve.mail=$("email").value;
		eleve.choix=$("choix").value;
		eleve.versAffich=versAffich;
		// 
		eleves.push(eleve);
		affich("<b>inscription bien effectuée</b>");
		eleve.versAffich();	
		razForm();
	}
	
}
function versAfffich () {
	affich(this.prenom+" "+this.nom+" agé(e) de "+this.age+" ans est inscris en "+ this.choix);
}
function razForm () {
	$("prenom").value="";
	$("nom").value="";
	$("age").value="";
	$("email").value="";
	//$("choix").value="JavaScript";
	$("info").value="";
}
function razFormListener (e) {
	razForm();
}
function termineListener (e) {
	efface();
	affich("<b>Récapitulatif de saisie</b>");
	for (i=0;i<eleves.length;i++) {
		eleves[i].versAffich();
		affich("----------------------------");
	}
	//
	$("boxEnvoi").style.display="block";
	$("envoi").addEventListener("click",envoiListener);
}
function envoiListener (e) {
	$("recapMail").value=$("zoneAffich").innerHTML ;
	$("forMail").submit();
}
/// Les fonctions utilitaires
function $(id) 		{ return document.getElementById(id);} 
function affich(tx) { $("zoneAffich").innerHTML+=tx+"<br/>";}
function efface() 	{ $("zoneAffich").innerHTML=""; $("zoneAffich").style.color="black"; }
function addons () 	{
	if (!Element.prototype.on)  Element.prototype.on=Element.prototype.addEventListener;
	if (!Element.prototype.off) Element.prototype.off=Element.prototype.removeEventListener;	
} 
/* 
	/[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z][A-Z][A-Z]?/i; 
 */
 	