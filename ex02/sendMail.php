<?php
	if (isset($_POST["recapMail"])) $recapMail = $_POST["recapMail"];
	else if (isset($_GET["recapMail"])) $recapMail = $_GET["recapMail"];
	else $recapMail = "";
	if (isset($_POST["adminMail"])) $adminMail = $_POST["adminMail"];
	else if (isset($_GET["adminMail"])) $adminMail = $_GET["adminMail"];
	else $adminMail = "info@pixaline.net";
	$header = "";
	$header .= "MIME-Version: 1.0"."\r\n";						
	$header .= "Content-type: text/plain; charset=utf8"."\r\n";	
	$header .= "From: info@pixaline.net\r\n";
	$header	.= "Reply-To: info@pixaline.net\r\n";
	$header	.= "X-Mailer: PHP/".phpversion()."\r\n";
	if ($recapMail!="" && $adminMail!="") {
		$er = mail($adminMail, "Cours JavaScript", $recapMail, $header);
		if ($er == 1) echo "<h1>Le mail est bien parti...</h1>";
		else echo "<h1 style='color:red;' >Le mail n'a pas été transmis correctement !!!</h1>";
	}
?>
<br/><br/><button onclick='javascript:history.back()' >Retour </button> 