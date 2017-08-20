<?php
	
	

if(isset($_POST['ajax'])){
	include("konekcija_sa_bazom.inc");
	$ajax = $_POST['ajax'];
	switch($ajax){
		case "pokupi":
			$select = "SELECT * FROM osobe";
			$result = mysql_query($select,$con);
			if(mysql_num_rows($result) > 0){
				
				$niz = array();
				while($red =  mysql_fetch_assoc($result)){
					array_push($niz,$red);
				}
				
				print(json_encode($niz));
			}
			else{
				echo "ne valja";
			}
			break;
			
		case "sortiraj":
			$sortiraj = $_POST["tekst"];
			$sortirajPo = $_POST["tekstSvojstvo"];
			
			$select = "SELECT * FROM osobe ORDER BY $sortirajPo $sortiraj";
			$result = mysql_query($select,$con);
			if(mysql_num_rows($result) > 0){
				
				$niz = array();
				while($red =  mysql_fetch_assoc($result)){
					array_push($niz,$red);
				}
				
				print(json_encode($niz));
			}
			else{
				echo "ne valja";
			}
			break;	
		case "pretraga":
			$podaci = $_POST["podaci"];
			$select = "SELECT * FROM osobe WHERE ime LIKE '%$podaci%' || prezime like '%$podaci%' || adresa like '%$podaci%' || brojKucnog like '%$podaci%' || brojMobilnog like '%$podaci%'";
			$result = mysql_query($select,$con);
			if(mysql_num_rows($result) > 0){
				
				$niz = array();
				while($red =  mysql_fetch_assoc($result)){
					array_push($niz,$red);
				}
				
				print(json_encode($niz));
			}
			else{
				echo "ne valja";
			}
			
			break;
		case "unesi":
			
			$podaci = $_POST["podaci"];
			$sredjeno = json_decode($podaci,true);
			
			$ime = $sredjeno["podaciOsobe"][0]["ime"]; 
			$prezime = $sredjeno["podaciOsobe"][0]["prezime"]; 
			$adresa = $sredjeno["podaciOsobe"][0]["adresa"]; 
			$brKucnog = $sredjeno["podaciOsobe"][0]["brKucnog"]; 
			$brojMobilnog = $sredjeno["podaciOsobe"][0]["brojMobilnog"]; 
			
			$nizGresaka = array();
			
			if(!preg_match('/^[A-z]{2,}$/',$ime)){
				array_push($nizGresaka,"PHP : ime nije u dobrom formatu");
			}
			if(!preg_match('/^[A-z]{3,15}(\s[A-z]{2,15})?$/',$prezime)){
				array_push($nizGresaka,"PHP : prezime nije u dobrom formatu");
				
			}
			if(!preg_match('/^[A-z]{4,15}(\s[A-z]{2,15})?(\s[A-z]{2,15})?\s[1-9][0-9]{0,3}$/',$adresa)){
				array_push($nizGresaka,"PHP : adresa nije u dobrom formatu");
				
			}
			if(!preg_match('/^0[1-5][1-9][\/\-]?([0-9]){6,7}$/',$brKucnog)){
				array_push($nizGresaka,"PHP : broj kucnog nije u dobrom formatu");
				
			}
			if(!preg_match('/^06[01234569][\/\-]?([0-9]){6,7}$/',$brojMobilnog)){
				array_push($nizGresaka,"PHP : broj mobilnog nije u dobrom formatu");
				
			}
			
			if(count($nizGresaka)== 0){
			
				$insertQuery = "INSERT INTO `osobe`(`id_osobe`, `ime`, `prezime`, `adresa`, `brojKucnog`, `brojMobilnog`) VALUES ('','$ime','$prezime','$adresa','$brKucnog','$brojMobilnog')";
				$result = mysql_query($insertQuery,$con);
				if($result)
					print "Uspesno ste dodali osobu!";
				else
					echo "<p class='error_reg'> Doslo je do greske </p>";
			}
			else
				echo json_encode($nizGresaka);
			
			break;

			
	
	}
	
	if($con){
		mysql_close($con);
	}
	
}	
	
	

?>