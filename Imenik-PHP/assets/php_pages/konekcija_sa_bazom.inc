<?php
	$host = "localhost";
	$user = "root";
	$pass = "";
	$database = "bazaimenik";
	$con = mysql_connect($host,$user,$pass) or die ("Konekcija sa serverom nije uspela!".mysql_error());
	mysql_select_db($database,$con);
	
?>