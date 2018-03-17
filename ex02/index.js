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
	if ($("prenom").value==="") msg+="prenom manquant <br>" ;
}
function razFormListener (e) {
	affich("raz");
}
function termineListener (e) {
	affich("termine");
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
 	