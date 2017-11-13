// main 
var eleves=[]; 	
$("valide").addEventListener("click",valideListener,false);	
$("termine").addEventListener("click",termineListener,false);	
$("envoi").style.display="none";	

// functions
var versAffich=function() {
	affich	(this.prenom+" "+this.nom+" agé(e) de "+this.age+" ans,"+"\r\n"+
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
	if (inputPrenom=="") msg+="Le prénom est manquant"+"\r\n";		
	if (inputNom=="") msg+="Le nom est manquant"+"\r\n";
	if ( Number.isNaN(inputAge) || inputAge<12 || inputAge>120) msg+="L'age est manquant ou invalide"+"\r\n";		
	var re= /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z][A-Z][A-Z]?/i;
	if (!inputEmail.match(re)) msg+="L'email est manquant ou invalide"+"\r\n"; 
	
	msg="";
	
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
		affich("inscription bien effectuée : ");
		eleve.versAffich();	
		razForm();
	}	 
}
function termineListener (e) {
	efface();
	affich("Récapitulatif de votre saisie : \r\n");
	for (var i=0;i<eleves.length;i=i+1) {
		eleves[i].versAffich();
		if (eleves[i].info!="") affich(" info particulière : \r\n"+eleves[i].info);
		affich("------------");			
	}
	$("envoi").style.display="inline";	// or ...style.visibility="visible" ;
	$("envoi").addEventListener("click",envoiListener,false);	
}      
function envoiListener (e) {
	$("formMail").submit();
}      

 // Les functions de base
 function $(id) {return document.getElementById(id);} 
 function affich(tx) { $("zoneAffich").value+=tx+"\r\n";}
 function efface() { $("zoneAffich").value="";$("zoneAffich").style.color="black";}

	