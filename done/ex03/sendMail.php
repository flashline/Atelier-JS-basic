<?php
	if (isset($_POST["recapMail"])) $recapMail = $_POST["recapMail"];
	else if (isset($_GET["recapMail"])) $recapMail = $_GET["recapMail"];
	else $recapMail = "vide";
	if (isset($_POST["adminMail"])) $adminMail = $_POST["adminMail"];
	else if (isset($_GET["adminMail"])) $adminMail = $_GET["adminMail"];
	else $adminMail = "info@pixaline.net";	
	$header = "";
	$header .= "MIME-Version: 1.0"."\r\n";						
	$header .= "Content-type: text/plain; charset=utf8"."\r\n";	
	$er = mail("info@pixaline.net", "Cours JavaScript", $recapMail, $header);
	if ($er == 1) echo "Le mail est bien parti...";
	else echo "Le mail n'a pas été transmis correctement !!!";
?>