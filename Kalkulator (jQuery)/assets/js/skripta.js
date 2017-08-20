$(function(){
	
	$("#sadrzaj").fadeIn(1000);

	

	
	
	

/*  ovo sto sam pisao iznad, sve to sam mogao da stavim
	u html, ali sam hteo malo da provezbam jQuery */	
	$(".tbPregled[data-tbid=prvi]").addClass("js_sakrij js_plavo");
	$(".tbPregled[data-tbid=drugi]").addClass("js_sakrij js_crveno");
	$(".tbPregled[data-tbid=prvi]").val("");
	$(".tbPregled[data-tbid=drugi]").val("");
	$(".tbPregled[data-tbid=treci]").val("0");
	
	
	
	
/* --------- izgled, pravljenje dugmica  KRAJ ---------- */	


	$(".specijalneOperacije").attr("disabled", true);
	var obicnoDugme="";
	var kliknutoNaNulu= false;
	kliknutoNaTacku=false;
	$(".obicniDugmici").on("click",function(){
		$(".specijalneOperacije").attr("disabled", false);
		$(".jednako").attr("disabled", false);
		obicnoDugme += $(this).attr("value");
		vrednostDrugogTextBoxa = $(".tbPregled[data-tbid=drugi]").val();
		if(vrednostDrugogTextBoxa === ""){
			if($(this).attr("value") === "0" && kliknutoNaNulu === false && obicnoDugme.charAt(0) === "0"){
				kliknutoNaNulu=true;
				obicnoDugme="0";
			}
			else if(obicnoDugme.charAt(0)=== "0"){
				if("0"===obicnoDugme)
					return;
				else
					obicnoDugme = obicnoDugme.slice(1);
			}
			if ($(this).attr("value") === "." && kliknutoNaTacku===true){
				obicnoDugme=obicnoDugme.slice(0,obicnoDugme.length-1);
				return;
			}
			else if(obicnoDugme === "." || $(this).attr("value") === "."){
				kliknutoNaTacku=true;
			}
		}
		else{
			if($(this).attr("value") === "0" && kliknutoNaNulu === false && obicnoDugme.charAt(2) === "0"){
				kliknutoNaNulu=true;
				obicnoDugme=obicnoDugme.slice(0,3);
			}
			else if(obicnoDugme.charAt(2)=== "0"){
				if("0"===obicnoDugme.slice(2,3)){
					obicnoDugme= obicnoDugme.slice(0,2) + $(this).attr("value");
					kliknutoNaNulu=true;
					
					
				}
				
			}
			if ($(this).attr("value") === "." && kliknutoNaTacku===true){
				obicnoDugme=obicnoDugme.slice(0,obicnoDugme.length-1);
				return;
			}
			else if(obicnoDugme === "." || $(this).attr("value") === "."){
				kliknutoNaTacku=true;
			}
		}
		
		$(".tbPregled[data-tbid=treci]").val(obicnoDugme);
	});
	
	var znak="";
	var vrednostDrugogTextBoxa = "";
	var vrednostTrecegTextBoxa = "";
	
	$(".operacije").click(function(){
		$(".specijalneOperacije").attr("disabled", true);
		kliknutoNaTacku=false;
		$(".tbPregled[data-tbid=treci]").removeClass("js_zeleno");
		$(".tbPregled[data-tbid=prvi]").addClass("js_sakrij");
		$(".tbPregled[data-tbid=drugi]").removeClass("js_sakrij");
		vrednostDrugogTextBoxa = $(".tbPregled[data-tbid=drugi]").val();
		vrednostTrecegTextBoxa = $(".tbPregled[data-tbid=treci]").val();
		znak=$(this).attr("value");
		$(".tbPregled[data-tbid=prvi]").val("");

		if(vrednostTrecegTextBoxa != znak){
			$(".obicniDugmici").attr("disabled",false);
			if(vrednostDrugogTextBoxa != ""){
				if(vrednostTrecegTextBoxa.includes("=")){
					vrednostTrecegTextBoxa = vrednostTrecegTextBoxa.slice((vrednostTrecegTextBoxa.indexOf("=")+1));
				}
				else{
					$(".tbPregled[data-tbid=treci]").val(znak);
					obicnoDugme=znak + " ";
					return;
				}
			}
			else{
				if(vrednostTrecegTextBoxa.includes("=")){
					vrednostTrecegTextBoxa = vrednostTrecegTextBoxa.slice((vrednostTrecegTextBoxa.indexOf("=")+1));
					
				}
			}
			if(!proveriDaLiJeZnak(vrednostTrecegTextBoxa)){
				
					$(".tbPregled[data-tbid=drugi]").val(vrednostTrecegTextBoxa);
					$(".tbPregled[data-tbid=treci]").val(znak);
					obicnoDugme=znak + " ";
			}
		} 
	});



	$(".jednako").click(function(){
		$(".tbPregled[data-tbid=prvi]").addClass("js_sakrij");
		$(".tbPregled[data-tbid=treci]").addClass("js_zeleno");
		$(".tbPregled[data-tbid=prvi]").val("");
		vrednostDrugogTextBoxa = $(".tbPregled[data-tbid=drugi]").val();
		vrednostTrecegTextBoxa = $(".tbPregled[data-tbid=treci]").val();
		
		var rezultat = eval(vrednostDrugogTextBoxa  + vrednostTrecegTextBoxa);
		$(".tbPregled[data-tbid=drugi]").val(
			vrednostDrugogTextBoxa + " " + vrednostTrecegTextBoxa
		);
		$(".tbPregled[data-tbid=treci]").val("= " + rezultat);
		$(".obicniDugmici").attr("disabled", true);
		$(".jednako").attr("disabled", true);
		
	});
	
	
	$(".specijalneOperacije[data-specop^=prvi]").click(function(){
		$(".tbPregled[data-tbid=prvi]").removeClass("js_sakrij");
		vrednostDrugogTextBoxa = $(".tbPregled[data-tbid=drugi]").val();
		vrednostTrecegTextBoxa = $(".tbPregled[data-tbid=treci]").val();
		
		znak = vrednostTrecegTextBoxa.slice(0,1);
		
		if(proveriDaLiJeZnak(vrednostTrecegTextBoxa))
			return;
		
		if((vrednostDrugogTextBoxa != "") && (
				(-1!=vrednostDrugogTextBoxa.indexOf("+")) ||
				(-1!=vrednostDrugogTextBoxa.indexOf("-")) || 
				(-1!=vrednostDrugogTextBoxa.indexOf("/")) ||
				(-1!=vrednostDrugogTextBoxa.indexOf("*"))
			)
		){
			$(".tbPregled[data-tbid=drugi]").val("");
			$(".jednako").attr("disabled", true);
			$(".tbPregled[data-tbid=drugi]").addClass("js_sakrij");
			
		}
		if(proveriDaLiJeZnak(znak) || znak.includes("=")){
			vrednostTrecegTextBoxa = vrednostTrecegTextBoxa.slice(1)
			$(".tbPregled[data-tbid=treci]").val(znak + " " + Math.sqrt(vrednostTrecegTextBoxa));
			
		}
		
		
		else{
			$(".tbPregled[data-tbid=treci]").val("= " + Math.sqrt(vrednostTrecegTextBoxa));
			$(".jednako").attr("disabled", true);
			$(".tbPregled[data-tbid=treci]").addClass("js_zeleno");
		}
		$(".tbPregled[data-tbid=prvi]").val(
			"koren od broja (" + vrednostTrecegTextBoxa + 
			" ) je " + $(".tbPregled[data-tbid=treci]").val().slice(2)
		);
		
		$(".obicniDugmici").attr("disabled", true);
	});
	
	
	$(".specijalneOperacije[data-specop^=drugi]").click(function(){
		$(".tbPregled[data-tbid=prvi]").removeClass("js_sakrij");
		vrednostDrugogTextBoxa = $(".tbPregled[data-tbid=drugi]").val();
		vrednostTrecegTextBoxa = $(".tbPregled[data-tbid=treci]").val();
		znak = vrednostTrecegTextBoxa.slice(0,1);


		if(proveriDaLiJeZnak(vrednostTrecegTextBoxa))
			return;
		
		if((vrednostDrugogTextBoxa != "") && (
				(-1!=vrednostDrugogTextBoxa.indexOf("+")) ||
				(-1!=vrednostDrugogTextBoxa.indexOf("-")) || 
				(-1!=vrednostDrugogTextBoxa.indexOf("/")) ||
				(-1!=vrednostDrugogTextBoxa.indexOf("*"))
			)
		){
			$(".tbPregled[data-tbid=drugi]").val("");
			$(".jednako").attr("disabled", true);
			$(".tbPregled[data-tbid=drugi]").addClass("js_sakrij");
		}
		if(proveriDaLiJeZnak(znak) || znak.includes("=")){
			vrednostTrecegTextBoxa = vrednostTrecegTextBoxa.slice(1)
			$(".tbPregled[data-tbid=treci]").val(znak + " " + Math.pow(vrednostTrecegTextBoxa,2));
			
		}
		
		
		else{
			$(".tbPregled[data-tbid=treci]").val("= " + Math.pow(vrednostTrecegTextBoxa,2));
			$(".jednako").attr("disabled", true);
		}
		$(".tbPregled[data-tbid=prvi]").val(
			+ vrednostTrecegTextBoxa + 
			" na kvadrat je " + $(".tbPregled[data-tbid=treci]").val().slice(2)
		);
		
		$(".obicniDugmici").attr("disabled", true);
	});
	
	
	$(".specijalneOperacije[data-specop^=treci]").click(function(){
		$(".tbPregled[data-tbid=prvi]").removeClass("js_sakrij");
		vrednostDrugogTextBoxa = $(".tbPregled[data-tbid=drugi]").val();
		vrednostTrecegTextBoxa = $(".tbPregled[data-tbid=treci]").val();
		znak = vrednostTrecegTextBoxa.slice(0,1);


		if(proveriDaLiJeZnak(vrednostTrecegTextBoxa))
			return;
		
		if((vrednostDrugogTextBoxa != "") && (
				(-1!=vrednostDrugogTextBoxa.indexOf("+")) ||
				(-1!=vrednostDrugogTextBoxa.indexOf("-")) || 
				(-1!=vrednostDrugogTextBoxa.indexOf("/")) ||
				(-1!=vrednostDrugogTextBoxa.indexOf("*"))
			)
		){
			$(".tbPregled[data-tbid=drugi]").val("");
			$(".jednako").attr("disabled", true);
			$(".tbPregled[data-tbid=drugi]").addClass("js_sakrij");
		}
		if(proveriDaLiJeZnak(znak) || znak.includes("=")){
			vrednostTrecegTextBoxa = vrednostTrecegTextBoxa.slice(1)
			$(".tbPregled[data-tbid=treci]").val(znak + " " + Math.pow(vrednostTrecegTextBoxa,3));
			
		}
		
		
		else{
			$(".tbPregled[data-tbid=treci]").val("= " + Math.pow(vrednostTrecegTextBoxa,3));
			$(".jednako").attr("disabled", true);
		}
		$(".tbPregled[data-tbid=prvi]").val(
			+ vrednostTrecegTextBoxa + 
			" na kub je " + $(".tbPregled[data-tbid=treci]").val().slice(2)
		);
		
		$(".obicniDugmici").attr("disabled", true);
	});
	
	
	$(".dugmeCe").click(function(){
		$(".tbPregled[data-tbid=prvi]").val("").addClass("js_sakrij");
		$(".tbPregled[data-tbid=drugi]").val("").addClass("js_sakrij");
		$(".tbPregled[data-tbid=treci]").val("0").removeClass("js_zeleno");
		obicnoDugme="";
		$(".obicniDugmici").attr("disabled", false);
		$(".specijalneOperacije").attr("disabled", true);
		kliknutoNaNulu= false;
		kliknutoNaTacku= false;
		
	});
	
	
	
	
	function proveriDaLiJeZnak(znak){
		switch(znak){
			case "+":
			case "-":
			case "*":
			case "/":
				return true;
				break;
			default:
				return false;
				break;
		}
	}
	
	

	
	
	
	
	
	
});