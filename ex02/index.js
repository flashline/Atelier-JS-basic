// main 

// fonctions

/// Les fonctions écouteur d'événement

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
 	