$(function(){

var tbIme =$("#tbIme");
var tbPrezime = $("#tbPrezime");
var tbAdresa = $("#tbAdresa");
var tbBrojKucnog = $("#tbKucniTel");
var tbBrojMobilnog = $("#tbMobilniTel");

$("#forma").on("submit", function(event){
    event.preventDefault()
//morao sam da uradim ovako, jer submit radi refresh strane
// i unistava se objekat koji bi se napravio ako se vrati true

	


	var greske = new Array();
	var ime = tbIme.val();
	var prezime = tbPrezime.val();
	var adresa = tbAdresa.val();
	var brojFiksnogTel = tbBrojKucnog.val();
	var brojMobTel= tbBrojMobilnog.val();

	if(!proveriIme(ime)){
		greske.push("polje 'Ime' mora sadrzati barem dva slova");
		duzinaNizaGreske = greske.length;
		for(var i=0;i<duzinaNizaGreske; i++){
			if(greske[i].toString().includes("Ime")){
				var tdImeGreske = $("#tdImeGreske");
				var tekst = greske[i];
				tdImeGreske.html(tekst);
			}
		}
	}

	if(!proveriPrezime(prezime)){
		greske.push("polje 'Prezime' mora sadrzati barem tri slova");
		duzinaNizaGreske = greske.length;
		for(var i=0;i<duzinaNizaGreske; i++){
			if(greske[i].toString().includes("Prezime")){
				var tdPrezimeGreske = $("#tdPrezimeGreske");
				tdPrezimeGreske.html(greske[i]);
			}
		}
	}

	if(!proveriAdresu(adresa)){
		greske.push("polje 'Adresa' mora sadrzati barem cetiri slova, razmak i broj");
		duzinaNizaGreske = greske.length;
		for(var i=0;i<duzinaNizaGreske; i++){
			if(greske[i].toString().includes("Adresa")){
				var tdAdresaGreske = $("#tdAdresaGreske");
				var tekst = greske[i];
				tdAdresaGreske.html(tekst);
			}
		}
	}

	if(!proveriKucniBroj(brojFiksnogTel)){
		greske.push("polje 'Broj kucnog telefona' mora biti u formatu (0xx)(xxxxxx)");
		duzinaNizaGreske = greske.length;
		for(var i=0;i<duzinaNizaGreske; i++){
			if(greske[i].toString().includes("kucnog")){
				var tdBrojKucnogGreske = $("#tdBrojKucnogGreske");
				tdBrojKucnogGreske.html(greske[i]);
			}
		}
	}

	if(!proveriMobTel(brojMobTel)){
		greske.push("polje 'Broj mobilnog telefona' mora biti u formatu (06x)(xxxxxx)");
		duzinaNizaGreske = greske.length;
		for(var i=0;i<duzinaNizaGreske; i++){
			if(greske[i].toString().includes("mobilnog")){
				var tdBrojMobilnogGreske = $("#tdBrojMobilnogGreske");
				tdBrojMobilnogGreske.html(greske[i]);
			}
		}
	}
	
	if(0 === greske.length){

		unesiKorisnika(ime,prezime,adresa,brojFiksnogTel,brojMobTel);
		
		
		$(".js_greskeZeleno").attr("class","").addClass("ispisGreske");
		
		
		tbIme.val("");
		tbIme.removeClass(tbIme.attr("class")).addClass("tdInput");
		tbPrezime.val("");
		tbPrezime.removeClass(tbPrezime.attr("class")).addClass("tdInput");
		tbAdresa.val("");
		tbAdresa.removeClass(tbAdresa.attr("class")).addClass("tdInput");
		tbBrojKucnog.val("");
		tbBrojKucnog.removeClass(tbBrojKucnog.attr("class")).addClass("tdInput");
		tbBrojMobilnog.val("");
		tbBrojMobilnog.removeClass(tbBrojMobilnog.attr("class")).addClass("tdInput");
		//prazne se sva polja
	}
});

function unesiKorisnika(ime,prezime,adresa,brojFiksnogTel,brojMobTel){

	var prezimeSredjeno="",
		adresaSredjeno="",
		kucniSredjeno="",
		mobilniSredjeno = "";
	
	ime = prvoSlovoVeliko(ime);

/* prezime, prvo veliko slovo za oba prezimena, ako ih ima  */

	var prezimeSplitovano = prezime.split(" ");
	if(1 < prezimeSplitovano.length){
		prezimeSredjeno = prvoSlovoVeliko(prezimeSplitovano[0])
							+ " " + prvoSlovoVeliko(prezimeSplitovano[1]);

	}
	else{
		prezimeSredjeno = prvoSlovoVeliko(prezimeSplitovano[0]);
	}

/* adresa, prvo veliko slovo za tri, dve, ili jednu rec  */

	adresa.trim();
	var adresaSplitovano = adresa.split(" ");
	if(3 < adresaSplitovano.length){
		adresaSredjeno = prvoSlovoVeliko(adresaSplitovano[0])
							+ " " + prvoSlovoVeliko(adresaSplitovano[1])
							+ " " + prvoSlovoVeliko(adresaSplitovano[2])
							+ " " + adresaSplitovano[3];
	}
	else if(2 < adresaSplitovano.length){
		adresaSredjeno = prvoSlovoVeliko(adresaSplitovano[0])
							+ " " + prvoSlovoVeliko(adresaSplitovano[1])
							+ " " + adresaSplitovano[2];
	}
	else{
		adresaSredjeno = prvoSlovoVeliko(adresaSplitovano[0])
							+ " " + adresaSplitovano[1];
	}

/* broj fiksnog, mora se uneti u formatu 000/000000, iako nije tako napisano  */

	if(brojFiksnogTel.includes("/"))
		kucniSredjeno = brojFiksnogTel;
	else if(brojFiksnogTel.includes("-")){
		var kucniSplitovano = brojFiksnogTel.split("-");
		kucniSredjeno = kucniSplitovano[0] + "/" + kucniSplitovano[1];
	}
	else kucniSredjeno = brojFiksnogTel.slice(0,3) + "/" + brojFiksnogTel.slice(3);

/* broj mobilnog, mora se uneti u formatu 06x/000000, iako nije tako napisano  */	

	if(brojMobTel.includes("/"))
		mobilniSredjeno = brojMobTel;
	else if(brojMobTel.includes("-")){
		var mobilniSplitovano = brojMobTel.split("-");
		mobilniSredjeno = mobilniSplitovano[0] + "/" + mobilniSplitovano[1];
	}
	else mobilniSredjeno = brojMobTel.slice(0,3) + "/" + brojMobTel.slice(3);

	
	$("#divTabela").attr("class","").addClass("js_prikazi");
	$("#divUnosKorisnika").attr("class","").addClass("js_sakrij");
	
	saljiNaServer(ime,prezimeSredjeno,adresaSredjeno,kucniSredjeno,mobilniSredjeno);
		
}
$("#tabelaUnos .dugmici[data-id=otkazi]").on("click",function(){
	otkazi();
});
function otkazi(){
	$(".js_greskeCrveno").removeClass("js_greskeCrveno").addClass("ispisGreske");
	$(".js_greskeZeleno").removeClass("js_greskeZeleno").addClass("ispisGreske");
	
	//menja se ime klase za svaki drugi td tag u svakom redu
	tbIme.val("");
	tbIme.removeClass(tbIme.attr("class")).addClass("tdInput");
	tbPrezime.val("");
	tbPrezime.removeClass(tbPrezime.attr("class")).addClass("tdInput");
	tbAdresa.val("");
	tbAdresa.removeClass(tbAdresa.attr("class")).addClass("tdInput");
	tbBrojKucnog.val("");
	tbBrojKucnog.removeClass(tbBrojKucnog.attr("class")).addClass("tdInput");
	tbBrojMobilnog.val("");
	tbBrojMobilnog.removeClass(tbBrojMobilnog.attr("class")).addClass("tdInput");
	$("#divTabela").attr("class","").addClass("js_prikazi");
	$("#divUnosKorisnika").attr("class","").addClass("js_sakrij");
	//prazne se sva polja i menja se prikaz tabela

}

$("#tbIme").on("blur keyup",function(){
	proveriIme($(this).val());
});
$("#tbPrezime").on("blur keyup",function(){
	proveriPrezime($(this).val());
});
$("#tbAdresa").on("blur keyup",function(){
	proveriAdresu($(this).val());
});
$("#tbKucniTel").on("blur keyup",function(){
	proveriKucniBroj($(this).val());
});
$("#tbMobilniTel").on("blur keyup",function(){
	proveriMobTel($(this).val());
});

function proveriIme(vrednost){
	var tdImeGreske = $("#tdImeGreske");
	var slikaKreirano = $("<img>",{
		"src": "assets/images/error.png",
		"width":'25',
		"height":'25',
		"title":"polje 'Ime' nije u dobrom formatu"
		
	});
	var regIme = /^[A-z]{2,}$/;
	if(!regIme.test(vrednost)){
		tbIme.addClass("tdInput js_neuspesnaValidacija");
		tdImeGreske.removeClass("js_greskeZeleno").addClass("js_greskeCrveno");
		tdImeGreske.html("");
		tdImeGreske.html(slikaKreirano);
		return false;
	}
	else{
		trIme.className = "";
		$("#tbIme").addClass("js_uspesnaValidacija");
		tdImeGreske.removeClass("js_greskeCrveno").addClass("js_greskeZeleno");
		slikaKreirano.attr("src", "assets/images/stiklirano.png");
		slikaKreirano.attr("width",'30');
		slikaKreirano.attr("height",'30');
		tdImeGreske.html("");
		tdImeGreske.html(slikaKreirano);
		return true;
	}
}

function proveriPrezime(vrednost){
	var tdPrezimeGreske = $("#tdPrezimeGreske");
	var slikaKreirano = $("<img>",{
		"src": "assets/images/error.png",
		"width":'25',
		"height":'25',
		"title":"polje 'Prezime' nije u dobrom formatu"
		
	});
	var regPrezime = /^[A-z]{3,15}(\s[A-z]{2,15})?$/;
	if(!regPrezime.test(vrednost)){
		tbPrezime.addClass("tdInput js_neuspesnaValidacija");
		tdPrezimeGreske.removeClass("js_greskeZeleno").addClass("js_greskeCrveno");
		tdPrezimeGreske.html("");
		tdPrezimeGreske.append(slikaKreirano);
		return false;
	}
	else{
		trPrezime.className = "";
		$("#tbPrezime").addClass("js_uspesnaValidacija");
		tdPrezimeGreske.removeClass("js_greskeCrveno").addClass("js_greskeZeleno");
		slikaKreirano.attr("src", "assets/images/stiklirano.png");
		slikaKreirano.attr("width",'30');
		slikaKreirano.attr("height",'30');
		tdPrezimeGreske.html("");
		tdPrezimeGreske.html(slikaKreirano);
		return true;
	}
}

function proveriAdresu(vrednost){
	var tdAdresaGreske = $("#tdAdresaGreske");
	var slikaKreirano = $("<img>",{
		"src": "assets/images/error.png",
		"width":'25',
		"height":'25',
		"title":"polje 'Adresa' nije u dobrom formatu"
	});
	var regAdresa = /^[A-z]{4,15}(\s[A-z]{2,15})?(\s[A-z]{2,15})?\s[1-9][0-9]{0,3}$/;
	if(!regAdresa.test(vrednost)){
		tbAdresa.addClass("tdInput js_neuspesnaValidacija");
		tdAdresaGreske.removeClass("js_greskeZeleno").addClass("js_greskeCrveno");
		tdAdresaGreske.html("");
		tdAdresaGreske.html(slikaKreirano);
		return false;
	}
	else{
		trAdresa.className = "";
		$("#tbAdresa").addClass("js_uspesnaValidacija");
		tdAdresaGreske.removeClass("js_greskeCrveno").addClass("js_greskeZeleno");
		slikaKreirano.attr("src", "assets/images/stiklirano.png");
		slikaKreirano.attr("width",'30');
		slikaKreirano.attr("height",'30');
		tdAdresaGreske.html("");
		tdAdresaGreske.html(slikaKreirano);
		return true;
	}
}

function proveriKucniBroj(vrednost){
	var tdBrojKucnogGreske = $("#tdBrojKucnogGreske");
	var slikaKreirano = $("<img>",{
		"src": "assets/images/error.png",
		"width":'25',
		"height":'25',
		"title":"polje 'broj kucnog telefona' nije u dobrom formatu"
	});
	var regbrojFiksnogTel = /^0[1-5][1-9][\/\-]?([0-9]){6,7}$/;
	if(!regbrojFiksnogTel.test(vrednost)){
		tbBrojKucnog.addClass("tdInput js_neuspesnaValidacija");
		tdBrojKucnogGreske.removeClass("js_greskeZeleno").addClass("js_greskeCrveno");
		tdBrojKucnogGreske.html("");
		tdBrojKucnogGreske.html(slikaKreirano);
		return false;
	}
	else{
		trBrojKucnog.className = "";
		$("#tbKucniTel").addClass("js_uspesnaValidacija");
		tdBrojKucnogGreske.removeClass("js_greskeCrveno").addClass("js_greskeZeleno");
		slikaKreirano.attr("src", "assets/images/stiklirano.png");
		slikaKreirano.attr("width",'30');
		slikaKreirano.attr("height",'30');
		tdBrojKucnogGreske.html("");
		tdBrojKucnogGreske.html(slikaKreirano);
		return true;
	}
}

function proveriMobTel(vrednost){
	var tdBrojMobilnogGreske = $("#tdBrojMobilnogGreske");
	var slikaKreirano = $("<img>",{
		"src": "assets/images/error.png",
		"width":'25',
		"height":'25',
		"title":"polje 'broj mobilnog telefona' nije u dobrom formatu"
	});
	var regbrojMobilnogTel = /^06[01234569][\/\-]?([0-9]){6,7}$/;
	if(!regbrojMobilnogTel.test(vrednost)){
		tbBrojMobilnog.addClass("tdInput js_neuspesnaValidacija");
		tdBrojMobilnogGreske.removeClass("js_greskeZeleno").addClass("js_greskeCrveno");
		tdBrojMobilnogGreske.html("");
		tdBrojMobilnogGreske.html(slikaKreirano);
		return false;
	}
	else{
		trBrojMobilnog.className = "";
		$("#tbMobilniTel").addClass("js_uspesnaValidacija");
		tdBrojMobilnogGreske.removeClass("js_greskeCrveno").addClass("js_greskeZeleno");
		slikaKreirano.attr("src", "assets/images/stiklirano.png");
		slikaKreirano.attr("width",'30');
		slikaKreirano.attr("height",'30');
		tdBrojMobilnogGreske.html("");
		tdBrojMobilnogGreske.html(slikaKreirano);
		return true;
	}
}

function prvoSlovoVeliko(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function saljiNaServer(ime,prezime,adresa,brKucnog,brojMobilnog){
	var zaUnos = {"podaciOsobe":[{
		"ime":ime,
		"prezime":prezime,
		"adresa":adresa,
		"brKucnog":brKucnog,
		"brojMobilnog":brojMobilnog
	}]}
	
	$.ajax({
		
		 url: "assets/php_pages/imenikKupiIzBaze.php",
		 type: "post",
		 data: "ajax=unesi&podaci="+JSON.stringify(zaUnos),
		 success: function (data) {
			alert(data);
			prikaziTabelu();
		 }
		 
		
		
	});
}

});