var kliknutoDvaputIme = false,
	kliknutoDvaputPrezime = false,
	kliknutoDvaputAdresa = false,
	kliknutoDvaputKucniBroj = false,
	kliknutoDvaputMobilniBroj = false,
	strelica = document.createElement("i");
	strelica.setAttribute("aria-hidden","true");

function sortiraj(value){
	duzinaNizaObjekata = nizObjekata.length;

	switch(value.toString()){
		case "1":
			var thImeGlavnaTabela = document.getElementById("thImeGlavnaTabela");
			if(kliknutoDvaputIme){
				nizObjekata.sort(function (a,b) {return a.ime < b.ime});
				kliknutoDvaputIme = false;
				strelica.className = "fa fa-sort-asc";
				thImeGlavnaTabela.insertBefore(strelica,thImeGlavnaTabela.firstChild);
			}
			else{
				nizObjekata.sort(function (a,b) {return a.ime > b.ime});
				kliknutoDvaputIme = true,
				kliknutoDvaputPrezime = false,
				kliknutoDvaputAdresa = false,
				kliknutoDvaputKucniBroj = false,
				kliknutoDvaputMobilniBroj = false;
				strelica.className = "fa fa-sort-desc";
				thImeGlavnaTabela.appendChild(strelica);
			}

			prikaziTabelu();
			var kolonaIme = document.getElementsByClassName("kolonaIme");
			duzinaKoloneIme = kolonaIme.length;
			for(var i=0;i< duzinaKoloneIme; i++){
				kolonaIme[i].className = "kolonaIme sortirano";
			}

			break;
		case "2":
			var thPrezimeGlavnaTabela = document.getElementById("thPrezimeGlavnaTabela");
			if(kliknutoDvaputPrezime){
				nizObjekata.sort(function (a,b) {return a.prezime < b.prezime});
				kliknutoDvaputPrezime = false;
				strelica.className = "fa fa-sort-asc";
				thPrezimeGlavnaTabela.insertBefore(strelica,thPrezimeGlavnaTabela.firstChild);
			}
			else{
				nizObjekata.sort(function (a,b) {return a.prezime > b.prezime});
				kliknutoDvaputPrezime = true;
				strelica.className = "fa fa-sort-desc";
				thPrezimeGlavnaTabela.appendChild(strelica);
				kliknutoDvaputIme = false,
				kliknutoDvaputPrezime = true,
				kliknutoDvaputAdresa = false,
				kliknutoDvaputKucniBroj = false,
				kliknutoDvaputMobilniBroj = false;
			}

			prikaziTabelu();
			var kolonaIme = document.getElementsByClassName("kolonaPrezime");
			duzinaKoloneIme = kolonaIme.length;
			for(var i=0;i< duzinaKoloneIme; i++){
				kolonaIme[i].className = "kolonaPrezime sortirano";
			}
			break;
		case "3":
			var thAdresaGlavnaTabela = document.getElementById("thAdresaGlavnaTabela");
			if(kliknutoDvaputAdresa){
				nizObjekata.sort(function (a,b) {return a.adresa < b.adresa});
				kliknutoDvaputAdresa = false;
				strelica.className = "fa fa-sort-asc";
				thAdresaGlavnaTabela.insertBefore(strelica,thAdresaGlavnaTabela.firstChild);

			}
			else{
				nizObjekata.sort(function (a,b) {return a.adresa > b.adresa});
				kliknutoDvaputAdresa = true;
				strelica.className = "fa fa-sort-desc";
				thAdresaGlavnaTabela.appendChild(strelica);
				kliknutoDvaputIme = false,
				kliknutoDvaputPrezime = false,
				kliknutoDvaputAdresa = true,
				kliknutoDvaputKucniBroj = false,
				kliknutoDvaputMobilniBroj = false;
			}

			prikaziTabelu();
			var kolonaIme = document.getElementsByClassName("kolonaAdresa");
				duzinaKoloneIme = kolonaIme.length;
				for(var i=0;i< duzinaKoloneIme; i++){
					kolonaIme[i].className = "kolonaAdresa sortirano";
				}
			break;
		case "4":
			var thKucniBrojGlavnaTabela = document.getElementById("thKucniBrojGlavnaTabela");
			if(kliknutoDvaputKucniBroj){
				nizObjekata.sort(function (a, b) {return a.brKucnog<b.brKucnog});
				kliknutoDvaputKucniBroj = false;
				strelica.className = "fa fa-sort-asc";
				thKucniBrojGlavnaTabela.insertBefore(strelica,thKucniBrojGlavnaTabela.firstChild);
			}
			else{
				nizObjekata.sort(function (a, b) {return a.brKucnog>b.brKucnog});
				kliknutoDvaputKucniBroj = true;
				strelica.className = "fa fa-sort-desc";
				thKucniBrojGlavnaTabela.appendChild(strelica);
				kliknutoDvaputIme = false,
				kliknutoDvaputPrezime = false,
				kliknutoDvaputAdresa = false,
				kliknutoDvaputKucniBroj = true,
				kliknutoDvaputMobilniBroj = false;
			}

			prikaziTabelu();
			var kolonaIme = document.getElementsByClassName("kolonaBrojFiksnogTelefona");
			duzinaKoloneIme = kolonaIme.length;
			for(var i=0;i< duzinaKoloneIme; i++){
				kolonaIme[i].className = "kolonaBrojFiksnogTelefona sortirano";
			}
			break;	
		case "5":

			var thMobilniBrojGlavnaTabela = document.getElementById("thMobilniBrojGlavnaTabela");
			if(kliknutoDvaputMobilniBroj){
				nizObjekata.sort(function (a,b) {return a.brojMobilnog < b.brojMobilnog});
				kliknutoDvaputMobilniBroj = false;
				strelica.className = "fa fa-sort-asc";
				thMobilniBrojGlavnaTabela.insertBefore(strelica,thMobilniBrojGlavnaTabela.firstChild);
			}
			else{
				nizObjekata.sort(function (a,b) {return a.brojMobilnog > b.brojMobilnog});
				kliknutoDvaputMobilniBroj = true;
				strelica.className = "fa fa-sort-desc";
				thMobilniBrojGlavnaTabela.appendChild(strelica);
				kliknutoDvaputIme = false,
				kliknutoDvaputPrezime = false,
				kliknutoDvaputAdresa = false,
				kliknutoDvaputKucniBroj = false,
				kliknutoDvaputMobilniBroj = true;
			}

			prikaziTabelu();
			var kolonaIme = document.getElementsByClassName("kolonaBrojMobilnogTelefona");
			duzinaKoloneIme = kolonaIme.length;
			for(var i=0;i< duzinaKoloneIme; i++){
				kolonaIme[i].className = "kolonaBrojMobilnogTelefona sortirano";
			}
			break;

		default:break;

	}
}