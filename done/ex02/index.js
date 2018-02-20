// main 
var eleves=[]; 	
$("adminMail").value="info@pixaline.net";
// $("adminMail").value="nospamplease@laposte.net";
//events
$("valide").addEventListener("click",valideListener,false);	
$("termine").addEventListener("click",termineListener,false);	
$("razForm").addEventListener("click",razListener,false);	
$("boxEnvoi").style.display="none";	
// functions
var versAffich = function  () {
	affich	(this.prenom+" "+this.nom+" agé(e) de "+this.age+" ans,"+"<br/>"+
			 "email "+this.email+", est inscris en "+this.choix				 
			 );		
}
function razForm () {
	$("prenom").value="";	
	$("nom").value="";	
	$("age").value="";	
	$("email").value="";	
	//$("choix").value="Java Script.";	
	$("info").value="";	
}
// Les functions listeners
function valideListener (e) {
	efface(); var msg="";
	var inputAge=parseInt($("age").value);
	//
	if ($("prenom").value=="") msg+="Le prénom est manquant"+"<br/>";		
	if ($("nom").value=="") msg+="Le nom est manquant"+"<br/>";
	if ( Number.isNaN(inputAge) || inputAge<12 || inputAge>120) msg+="L'age est manquant ou invalide"+"<br/>";		
	var re= /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z][A-Z][A-Z]?/i;
	if (!$("email").value.match(re)) msg+="L'email est manquant ou invalide"+"<br/>"; 	
	//	
	if (msg!="") {
		$("zoneAffich").style.color="red"; 
		affich(msg);
	}
	else {
		var eleve={};
		eleve.prenom=$("prenom").value;	
		eleve.nom=$("nom").value;	
		eleve.age=inputAge;	
		eleve.email=$("email").value;	
		eleve.choix=$("choix").value;	
		eleve.info=$("info").value;			
		eleve.versAffich=versAffich;
		eleves.push(eleve);
		affich("<b>inscription bien effectuée : </b>");
		eleve.versAffich();	
		razForm();
	}	 
}
function termineListener (e) {
	efface();
	affich("<b>Récapitulatif de votre saisie : </b>");
	for (var i=0;i<eleves.length;i++) {
		eleves[i].versAffich();
		if (eleves[i].info!="") affich("info particulière : <br/>"+eleves[i].info);
		affich(" -------------------------------------------------");			
	}	
	$("boxEnvoi").style.display="block";	// or ...style.visibility="visible" ;
	$("envoi").addEventListener("click",envoiListener,false);	
}      
function razListener (e) {
	razForm();
}      
function envoiListener (e) {
	$("recapMail").value=$("zoneAffich").innerHTML;	
	$("formMail").submit();
}      

 // Les functions de base
 function $(id) { return document.getElementById(id);} 
 function affich(tx) { $("zoneAffich").innerHTML+=tx+"<br/>";}
 function efface() { $("zoneAffich").innerHTML=""; $("zoneAffich").style.color="black"; }
