
var tbIme = document.getElementById("tbIme");
var tbPrezime = document.getElementById("tbPrezime");
var tbAdresa = document.getElementById("tbAdresa");
var tbBrojKucnog = document.getElementById("tbKucniTel");
var tbBrojMobilnog = document.getElementById("tbMobilniTel");

document.getElementById("forma").addEventListener("submit", function(event){
    event.preventDefault()
//morao sam da uradim ovako, jer submit radi refresh strane
// i unistava se objekat koji bi se napravio ako se vrati true
});

function proveraUnosa(){

	var greske = new Array();
	var ime = tbIme.value;
	var prezime = tbPrezime.value;
	var adresa = tbAdresa.value;
	var brojFiksnogTel = tbBrojKucnog.value;
	var brojMobTel= tbBrojMobilnog.value;

	if(!proveriIme(ime)){
		greske.push("polje 'Ime' mora sadrzati barem dva slova");
		duzinaNizaGreske = greske.length;
		for(var i=0;i<duzinaNizaGreske; i++){
			if(greske[i].toString().includes("Ime")){
				var tdImeGreske = document.getElementById("tdImeGreske");
				var tekst = document.createTextNode(greske[i]);
				tdImeGreske.innerHTML="";
				tdImeGreske.appendChild(tekst);
				//koristio sam appendChild
			}
		}
	}

	if(!proveriPrezime(prezime)){
		greske.push("polje 'Prezime' mora sadrzati barem tri slova");
		duzinaNizaGreske = greske.length;
		for(var i=0;i<duzinaNizaGreske; i++){
			if(greske[i].toString().includes("Prezime")){
				var tdPrezimeGreske = document.getElementById("tdPrezimeGreske");
				tdPrezimeGreske.innerHTML = greske[i];
			}
		}
	}

	if(!proveriAdresu(adresa)){
		greske.push("polje 'Adresa' mora sadrzati barem cetiri slova, razmak i broj");
		duzinaNizaGreske = greske.length;
		for(var i=0;i<duzinaNizaGreske; i++){
			if(greske[i].toString().includes("Adresa")){
				var tdAdresaGreske = document.getElementById("tdAdresaGreske");
				var tekst = document.createTextNode(greske[i]);
				tdAdresaGreske.innerHTML="";
				tdAdresaGreske.appendChild(tekst);
				//koristio sam appendChild
			}
		}
	}

	if(!proveriKucniBroj(brojFiksnogTel)){
		greske.push("polje 'Broj kucnog telefona' mora biti u formatu (0xx)(xxxxxx)");
		duzinaNizaGreske = greske.length;
		for(var i=0;i<duzinaNizaGreske; i++){
			if(greske[i].toString().includes("kucnog")){
				var tdBrojKucnogGreske = document.getElementById("tdBrojKucnogGreske");
				tdBrojKucnogGreske.innerHTML= greske[i];
			}
		}
	}

	if(!proveriMobTel(brojMobTel)){
		greske.push("polje 'Broj mobilnog telefona' mora biti u formatu (06x)(xxxxxx)");
		duzinaNizaGreske = greske.length;
		for(var i=0;i<duzinaNizaGreske; i++){
			if(greske[i].toString().includes("mobilnog")){
				var tdBrojMobilnogGreske = document.getElementById("tdBrojMobilnogGreske");
				tdBrojMobilnogGreske.innerHTML = greske[i];
			}
		}
	}

	if(0 === greske.length){

		unesiKorisnika(ime,prezime,adresa,brojFiksnogTel,brojMobTel);
		var klasa = document.getElementById("tabelaUnos").getElementsByTagName("td")[1].className;
		//kupi ime klase za drugi td tag prvog reda u tabeli "tabelaUnos"
		//u tabeli, svaki red ima drugi td tag sa istom klasom
		var ispisGreske = document.getElementsByClassName(klasa);
		var duzinaIspisa = ispisGreske.length;
		for(var i=0;i<duzinaIspisa;i++){
			ispisGreske[i].className = "ispisGreske";
			duzinaIspisa = ispisGreske.length;
			i=-1;
		}
		//menja se ime klase za svaki drugi td tag u svakom redu
		tbIme.value = "";
		tbIme.className = "tdInput";
		tbPrezime.value= "";
		tbPrezime.className = "tdInput";
		tbAdresa.value= "";
		tbAdresa.className = "tdInput";
		tbKucniTel.value= "";
		tbKucniTel.className = "tdInput";
		tbMobilniTel.value= "";
		tbMobilniTel.className = "tdInput";
		//prazne se sva polja
	}
}

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

	var noviKorisnik = {
		ime:ime,
		prezime:prezimeSredjeno,
		adresa:adresaSredjeno,
		brKucnog:kucniSredjeno,
		brojMobilnog:mobilniSredjeno
	};
	nizObjekata.push(noviKorisnik);
	document.getElementById("divTabela").className = "js_prikazi";
	document.getElementById("divUnosKorisnika").className = "js_sakrij";
	prikaziTabelu();
		
}

function otkazi(){
	var tdElementi = document.getElementById("tabelaUnos").getElementsByTagName("td");
	var nizKlasa = new Array();
	duzinaTdElemenata = tdElementi.length;
	for(var i=1;i<duzinaTdElemenata;i=i+2){
		nizKlasa.push(tdElementi[i].className);
	}
	//kupi ime klase za drugi td tag svih redova u tabeli "tabelaUnos"
	//u tabeli, svaki red treba ima drugi td tag sa istom klasom
	duzinaNizaKlasa = nizKlasa.length;
	for(var i=0;i<duzinaNizaKlasa;i++){//za svaku klasu koju ima svaki td element
		var ispisGreske = document.getElementsByClassName(nizKlasa[i]);
		var duzinaIspisa = ispisGreske.length;
		for(var j=0;j<duzinaIspisa;j++){//menja ime klase
			ispisGreske[j].className = "ispisGreske";
			if(duzinaIspisa === ispisGreske.length)
				continue;
			else if(duzinaIspisa > ispisGreske.length){
				//postavlja se nova duzina i kreće se od početka
				//drugog for-a
				duzinaIspisa = ispisGreske.length;
				j=-1;
			}
		}
	}
	//menja se ime klase za svaki drugi td tag u svakom redu
	tbIme.value = "";
	tbIme.className = "tdInput";
	tbPrezime.value= "";
	tbPrezime.className = "tdInput";
	tbAdresa.value= "";
	tbAdresa.className = "tdInput";
	tbKucniTel.value= "";
	tbKucniTel.className = "tdInput";
	tbMobilniTel.value= "";
	tbMobilniTel.className = "tdInput";
	divTabela.className = "js_prikazi";
	divUnosKorisnika.className="js_sakrij";
	//prazne se sva polja i menja se prikaz tabela

}


function proveriIme(vrednost){
	var tdImeGreske = document.getElementById("tdImeGreske");
	var slikaKreirano = document.createElement("img");
	var regIme = /^[A-z]{2,}$/;
	if(!regIme.test(vrednost)){
		tbIme.className = "tdInput js_neuspesnaValidacija";
		tdImeGreske.className = "js_greskeCrveno";
		slikaKreirano.setAttribute("src", "assets/images/error.png");
		slikaKreirano.setAttribute("width",'25');
		slikaKreirano.setAttribute("height",'25');
		slikaKreirano.setAttribute("title","polje 'Ime' nije u dobrom formatu");
		tdImeGreske.innerHTML="";
		tdImeGreske.appendChild(slikaKreirano);
		return false;
	}
	else{
		trIme.className = "";
		document.getElementById("tbIme").className = "js_uspesnaValidacija";
		tdImeGreske.className = "js_greskeZeleno";
		slikaKreirano.setAttribute("src", "assets/images/stiklirano.png");
		slikaKreirano.setAttribute("width",'30');
		slikaKreirano.setAttribute("height",'30');
		tdImeGreske.innerHTML="";
		tdImeGreske.appendChild(slikaKreirano);
		return true;
	}
}

function proveriPrezime(vrednost){
	var tdPrezimeGreske = document.getElementById("tdPrezimeGreske");
	var slikaKreirano = document.createElement("img");
	var regPrezime = /^[A-z]{3,15}(\s[A-z]{2,15})?$/;
	if(!regPrezime.test(vrednost)){
		tbPrezime.className = "tdInput js_neuspesnaValidacija";
		tdPrezimeGreske.className = "js_greskeCrveno";
		slikaKreirano.setAttribute("src", "assets/images/error.png");
		slikaKreirano.setAttribute("width",'25');
		slikaKreirano.setAttribute("height",'25');
		slikaKreirano.setAttribute("title","polje 'Prezime' nije u dobrom formatu");
		tdPrezimeGreske.innerHTML="";
		tdPrezimeGreske.appendChild(slikaKreirano);
		return false;
	}
	else{
		trPrezime.className = "";
		document.getElementById("tbPrezime").className = "js_uspesnaValidacija";
		tdPrezimeGreske.className = "js_greskeZeleno";
		slikaKreirano.setAttribute("src", "assets/images/stiklirano.png");
		slikaKreirano.setAttribute("width",'30');
		slikaKreirano.setAttribute("height",'30');
		tdPrezimeGreske.innerHTML="";
		tdPrezimeGreske.appendChild(slikaKreirano);
		return true;
	}
}

function proveriAdresu(vrednost){
	var tdAdresaGreske = document.getElementById("tdAdresaGreske");
	var slikaKreirano = document.createElement("img");
	var regAdresa = /^[A-z]{4,15}(\s[A-z]{2,15})?(\s[A-z]{2,15})?\s[1-9][0-9]{0,3}$/;
	if(!regAdresa.test(vrednost)){
		tbAdresa.className = "tdInput js_neuspesnaValidacija";
		tdAdresaGreske.className = "js_greskeCrveno";
		slikaKreirano.setAttribute("src", "assets/images/error.png");
		slikaKreirano.setAttribute("width",'25');
		slikaKreirano.setAttribute("height",'25');
		slikaKreirano.setAttribute("title","polje 'Adresa' nije u dobrom formatu");
		tdAdresaGreske.innerHTML="";
		tdAdresaGreske.appendChild(slikaKreirano);
		return false;
	}
	else{
		trAdresa.className = "";
		document.getElementById("tbAdresa").className = "js_uspesnaValidacija";
		tdAdresaGreske.className = "js_greskeZeleno";
		slikaKreirano = document.createElement("img");
		slikaKreirano.setAttribute("src", "assets/images/stiklirano.png");
		slikaKreirano.setAttribute("width",'30');
		slikaKreirano.setAttribute("height",'30');
		tdAdresaGreske.innerHTML="";
		tdAdresaGreske.appendChild(slikaKreirano);
		return true;
	}
}

function proveriKucniBroj(vrednost){
	var tdBrojKucnogGreske = document.getElementById("tdBrojKucnogGreske");
	var slikaKreirano = document.createElement("img");
	var regbrojFiksnogTel = /^0[1-5][1-9][\/\-]?([0-9]){6,7}$/;
	if(!regbrojFiksnogTel.test(vrednost)){
		tbBrojKucnog.className = "tdInput js_neuspesnaValidacija";
		tdBrojKucnogGreske.className = "js_greskeCrveno";
		slikaKreirano.setAttribute("src", "assets/images/error.png");
		slikaKreirano.setAttribute("width",'25');
		slikaKreirano.setAttribute("height",'25');
		slikaKreirano.setAttribute("title","polje 'Broj kucnog telefona' nije u dobrom formatu");
		tdBrojKucnogGreske.innerHTML="";
		tdBrojKucnogGreske.appendChild(slikaKreirano);
		return false;
	}
	else{
		trBrojKucnog.className = "";
		document.getElementById("tbKucniTel").className = "js_uspesnaValidacija";
		tdBrojKucnogGreske.className = "js_greskeZeleno";
		slikaKreirano.setAttribute("src", "assets/images/stiklirano.png");
		slikaKreirano.setAttribute("width",'30');
		slikaKreirano.setAttribute("height",'30');
		tdBrojKucnogGreske.innerHTML="";
		tdBrojKucnogGreske.appendChild(slikaKreirano);
		return true;
	}
}

function proveriMobTel(vrednost){
	var tdBrojMobilnogGreske = document.getElementById("tdBrojMobilnogGreske");
	var slikaKreirano = document.createElement("img");
	var regbrojMobilnogTel = /^06[01234569][\/\-]?([0-9]){6,7}$/;
	if(!regbrojMobilnogTel.test(vrednost)){
		tbBrojMobilnog.className = "tdInput js_neuspesnaValidacija";
		tdBrojMobilnogGreske.className = "js_greskeCrveno";
		slikaKreirano.setAttribute("src", "assets/images/error.png");
		slikaKreirano.setAttribute("width",'25');
		slikaKreirano.setAttribute("height",'25');
		slikaKreirano.setAttribute("title","polje 'broj mobilnog telefona' nije u dobrom formatu");
		tdBrojMobilnogGreske.innerHTML="";
		tdBrojMobilnogGreske.appendChild(slikaKreirano);
		return false;
	}
	else{
		trBrojMobilnog.className = "";
		document.getElementById("tbMobilniTel").className = "js_uspesnaValidacija";
		tdBrojMobilnogGreske.className = "js_greskeZeleno";
		slikaKreirano.setAttribute("src", "assets/images/stiklirano.png");
		slikaKreirano.setAttribute("width",'30');
		slikaKreirano.setAttribute("height",'30');
		tdBrojMobilnogGreske.innerHTML="";
		tdBrojMobilnogGreske.appendChild(slikaKreirano);
		return true;
	}
}

function prvoSlovoVeliko(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}
