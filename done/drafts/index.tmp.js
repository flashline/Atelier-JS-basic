
	
	document.affich=document.write;
	//document.affich("hello");
	var docu=document;
	docu.affich=document.write;
	//docu.affich("hello");
	var affich=alert;
	//affich ("hello");
	//window.affich ("bonjour");
	//affich=null;
	//alert("tata");
	var eleves=[];
	eleves[0]="Jean-mi";
	eleves[1]="Roberta";
	eleves.push("Josianne");
	eleves.push("Marcel");
	eleves.push("Paul");
	eleves.push("Marie");
	eleves.push("Pierre");
	eleves.push("Eric");
	eleves.push("Monique");	
	eleves.push("Benjamin");
	eleves.push("Nicolas");
	
	alert("nbre d'élèves : "+eleves.length);
	
	for (var i=0;i<eleves.length;i=i+1) {
		document.write(eleves[i]+"<br/>");
	}
	document.write("-----------------<br/>");
	i=0;
	while (eleves[i]!="Marie") {
		document.write(eleves[i]+"<br/>");
		i++;
	}
	document.write("-----------------<br/>");
	for (var i=0;i<eleves.length;i=i+1) {
		var n=eleves[i];  
		if (n.substring(0,1)=="M") {
			document.write("<b>"+eleves[i].toUpperCase()+"</b><br/>");
		}
		else {
			document.write(eleves[i]+"<br/>");			
		}		
	}
	
	var $=function (id) { return document.getElementById(id);	}
	$("header").innerHTML="J'ai modifié cette &lt;div&gt;";
	
	//Object
	var affich=function() {
		document.write	(this.prenom+" "+this.nom+" est agé de "+this.age+" ans."+"<br/>"+
						 "Son adresse mail est "+this.email+".<br/>--------------------------------<br/>");		
	};
	var eleve={};var eleves=[];
	eleve.prenom="Jean-Michel";	
	eleve.nom="Delettre";	
	eleve.age="35";	
	eleve.email="info@pixaline.net";
	eleve.affich=function() {
		document.write	(this.prenom+" "+this.nom+" est agé de "+this.age+" ans."+"<br/>"+
						 "Son adresse mail est "+this.email+".<br/>--------------------------------<br/>");		
	};	
	eleve.suivant=null;
	eleves.push(eleve);
	//
	eleve={};
	eleve.prenom="Marie";	
	eleve.nom="Lombard";	
	eleve.age="18";	
	eleve.email="marie.lombard@laposte.net";	
	eleve.affich=affich;
	eleve.suivant=null;
	eleves.push(eleve);
	//
	eleve={};
	eleve.prenom="Eric";	
	eleve.nom="Enneke";	
	eleve.age="32";	
	eleve.email="e.neke@gmail.com";	
	eleve.affich=affich;
	eleve.suivant=null;
	eleves.push(eleve);
	//
	for (var i=0;i<eleves.length;i=i+1) {
		eleve=eleves[i];
		if (i!=eleves.length-1) eleve.suivant=eleve[i+1];
		eleve.affich();
	}
	
	
	
	//
	var envoi = function () {
	 // par défaut, pas d'envoi
	 document.formu.action="";
	 // recherche de @ dans l'adresse
	 var address=window.document.formu.adr.value;
	 var pos=address.indexOf('@');
	 
	 if (address=="") {
	  alert("Vous devez donner une adresse e-mail.");
	 }
	 else {
	  if (pos==-1 || pos==0 || pos==address.length-1) {
	   alert("Une adresse e-mail a le format nom@domaine");
	  }
	  else // tout va bien, on envoie le formulaire
	   document.formu.action='mailto:info@pixaline.net?subject="Cours JavaScript"';
	 }
} ;
	