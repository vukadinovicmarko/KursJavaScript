
var divTabela = document.getElementById("divTabela"),
	divUnosKorisnika = document.getElementById("divUnosKorisnika"),
	divPretraga = document.getElementById("divPretraga");

	divUnosKorisnika.className="js_sakrij";
	divPretraga.className="js_sakrij";

var nizObjekata = new Array();
var marko = {
	ime:"Marko",
	prezime:"Vukadinovic",
	adresa:"Knez Mihailova 1",
	brKucnog:"011/1234567",
	brojMobilnog:"064/1234567"
};
var pera = {
	ime:"Pera",
	prezime:"Petrovic",
	adresa:"Takovska 20",
	brKucnog:"011/7654321",
	brojMobilnog:"064/7654321"
};
var Milos = {
	ime:"Milos",
	prezime:"Andjelkovic",
	adresa:"Pozeska 204",
	brKucnog:"011/8474721",
	brojMobilnog:"064/914321"
};
var Ana = {
	ime:"Ana",
	prezime:"Maric",
	adresa:"Maksima Gorkog 47",
	brKucnog:"011/6374321",
	brojMobilnog:"064/3744321"
};
nizObjekata.push(pera);
nizObjekata.push(marko);
nizObjekata.push(Milos);
nizObjekata.push(Ana);


prikaziTabelu();

function prikaziTabelu(){
	//Koliko sam razumeo, treba mi biblioteka kako bih
	//napravio script template. možda se varam,
	//ali nikada nisam radio tako nesto, pa ne znam.
	//Zato sam ostavio ovako
	var tekstZaPrikaz="";
	var tabelaBody = document.getElementById("tabelaBody");
	duzinaNiza = nizObjekata.length;
	for(var i=0; i< duzinaNiza; i++){
		
		tekstZaPrikaz += "<tr><td class='kolonaIme'>" + nizObjekata[i].ime 
		+ "</td><td class='kolonaPrezime'>";
		tekstZaPrikaz += nizObjekata[i].prezime + "</td><td class='kolonaAdresa'>";
		tekstZaPrikaz += nizObjekata[i].adresa + "</td><td class='kolonaBrojFiksnogTelefona'>";
		tekstZaPrikaz += nizObjekata[i].brKucnog + "</td><td class='kolonaBrojMobilnogTelefona'>";
		tekstZaPrikaz += nizObjekata[i].brojMobilnog + "</td></tr>";
		tabelaBody.innerHTML = tekstZaPrikaz;
		
	}
	var tBodyRedovi = tabelaBody.getElementsByTagName("tr");
	var duzinaTBodyRedova = tBodyRedovi.length;
	for(var i=0; i < duzinaTBodyRedova; i=i+2){
		tBodyRedovi[i].className="neparniRedovi";
		if(typeof tBodyRedovi[i+1] === "undefined")
			continue;
		else{
			tBodyRedovi[i+1].className="parniRedovi";
		}
	}
	//zakomentarisao sam uradjen stil preko CSS-a
	//da svaki parni red ima jednu boju, a svaki neparni drugu
}
function meni(vrednost){

	switch(vrednost.toString()){
		case "1":
			divTabela.className = "js_prikazi";
			divUnosKorisnika.className="js_sakrij";
			divPretraga.className="js_sakrij";
			prikaziTabelu();
			break;
		case "2":
			divTabela.className = "js_sakrij";
			divUnosKorisnika.className="js_prikazi"
			divPretraga.className="js_sakrij"
			break;
		case "3":
			divPretraga.className="js_prikazi";
			divTabela.className = "js_prikazi";
			divUnosKorisnika.className="js_sakrij"
			break;
	}
}

