// main 
var eleves=[]; 	
$("adminMail").value="nospamplease@laposte.net";
//events
$("valide").addEventListener("click",valideListener,false);	
$("termine").addEventListener("click",termineListener,false);	
$("razForm").addEventListener("click",razListener,false);	
$("boxEnvoi").style.display="none";	
// functions
var versAffich=function() {
	affich	(this.prenom+" "+this.nom+" agé(e) de "+this.age+" ans,"+"<br/>"+
			 "email "+this.email+", est inscris en "+this.choix				 
			 );		
};
var razForm=function() {
	$("prenom").value="";	
	$("nom").value="";	
	$("age").value="";	
	$("email").value="";	
	$("choix").value="Java Script.";	
	$("info").value="";	
};
// Les functions listeners
function valideListener (e) {
	efface(); var msg="";
	var inputPrenom=$("prenom").value;
	var inputNom=$("nom").value;
	var inputAge=parseInt($("age").value);
	var inputEmail=$("email").value;
	var inputChoix=$("choix").value;
	var inputInfo=$("info").value;
	//
	if (inputPrenom=="") msg+="Le prénom est manquant"+"<br/>";		
	if (inputNom=="") msg+="Le nom est manquant"+"<br/>";
	if ( Number.isNaN(inputAge) || inputAge<12 || inputAge>120) msg+="L'age est manquant ou invalide"+"<br/>";		
	var re= /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z][A-Z][A-Z]?/i;
	if (!inputEmail.match(re)) msg+="L'email est manquant ou invalide"+"<br/>"; 	
	//msg="";	
	if (msg!="") {
		$("zoneAffich").style.color="red"; 
		affich(msg);
	}
	else {
		var eleve={};
		eleve.prenom=inputPrenom;	
		eleve.nom=inputNom;	
		eleve.age=inputAge;	
		eleve.email=inputEmail;	
		eleve.choix=inputChoix;	
		eleve.info=inputInfo;			
		eleve.versAffich=versAffich;
		eleve.suivant=null;
		eleves.push(eleve);
		affich("<b>inscription bien effectuée : </b>");
		eleve.versAffich();	
		razForm();
	}	 
}
function termineListener (e) {
	efface();
	affich("<b>Récapitulatif de votre saisie : </b>");
	for (var i=0;i<eleves.length;i=i+1) {
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
	var recapMail=$("zoneAffich").innerHTML;
	recapMail=remplace(recapMail,"<br/>","\r\n");
	recapMail=remplace(recapMail,"<br>","\r\n");
	recapMail=remplace(recapMail,"<b>","");
	recapMail=remplace(recapMail,"</b>","");
	//remplace(remplace(remplace(recapMail,"<br/>","\n"),"<b>",""),"</b>","");
	$("recapMail").value=recapMail;	
	$("formMail").submit();
}      

 // Les functions de base
 function $(id) {return document.getElementById(id);} 
 function affich(tx) { $("zoneAffich").innerHTML+=tx+"<br/>";}
 function efface() { $("zoneAffich").innerHTML="";$("zoneAffich").style.color="black";}
 function remplace (dansTexte,cela,parCeci)  {
	var reg = new RegExp('('+cela+')', 'g');
	return dansTexte.replace(reg,parCeci);
}
	