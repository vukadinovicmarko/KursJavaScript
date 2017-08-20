var kliknutoDvaputIme = false,
	kliknutoDvaputPrezime = false,
	kliknutoDvaputAdresa = false,
	kliknutoDvaputKucniBroj = false,
	kliknutoDvaputMobilniBroj = false,
	strelica = $("<i>",{
		"aria-hidden":"true"
	});
	
var tekst="";
var tekstSvojstvo="";
function sortiraj(value){
	//duzinaNizaObjekata = nizObjekata.length;
	
	
	switch(value.toString()){
		case "1":
			var thImeGlavnaTabela = $("#thImeGlavnaTabela");
			if(kliknutoDvaputIme){
				tekst="desc";
				tekstSvojstvo="ime";
				kliknutoDvaputIme = false;
				strelica.attr("class","").addClass("fa fa-sort-asc");
				thImeGlavnaTabela.prepend(strelica);
			}
			else{
				tekst="asc";
				tekstSvojstvo="ime";
				//nizObjekata.sort(function (a,b) {return a.ime > b.ime});
				kliknutoDvaputIme = true,
				kliknutoDvaputPrezime = false,
				kliknutoDvaputAdresa = false,
				kliknutoDvaputKucniBroj = false,
				kliknutoDvaputMobilniBroj = false;
				strelica.attr("class","").addClass("fa fa-sort-desc");
				thImeGlavnaTabela.append(strelica);
			}

			prikaziTabeluSortirano();
			var kolonaIme = $(".kolonaIme");
			kolonaIme.attr("class","").addClass("kolonaIme sortirano");
			
			break;
		case "2":
			var thPrezimeGlavnaTabela = $("#thPrezimeGlavnaTabela");
			if(kliknutoDvaputPrezime){
				tekst="desc";
				tekstSvojstvo="prezime";
				kliknutoDvaputPrezime = false;
				strelica.attr("class","").addClass("fa fa-sort-asc");
				thPrezimeGlavnaTabela.prepend(strelica);
			}
			else{
				tekst="asc";
				tekstSvojstvo="prezime";
				kliknutoDvaputPrezime = true;
				strelica.attr("class","").addClass("fa fa-sort-desc");
				thPrezimeGlavnaTabela.append(strelica);
				kliknutoDvaputIme = false,
				kliknutoDvaputPrezime = true,
				kliknutoDvaputAdresa = false,
				kliknutoDvaputKucniBroj = false,
				kliknutoDvaputMobilniBroj = false;
			}

			prikaziTabeluSortirano();
			var kolonaIme = $(".kolonaPrezime");
			kolonaIme.attr("class","").addClass("kolonaPrezime sortirano");
			
			break;
		case "3":
			var thAdresaGlavnaTabela = $("#thAdresaGlavnaTabela");
			if(kliknutoDvaputAdresa){
				tekst="desc";
				tekstSvojstvo="adresa";
				nizObjekata.sort(function (a,b) {return a.adresa < b.adresa});
				kliknutoDvaputAdresa = false;
				strelica.attr("class","").addClass("fa fa-sort-asc");
				thAdresaGlavnaTabela.prepend(strelica);

			}
			else{
				tekst="asc";
				tekstSvojstvo="adresa";
				//nizObjekata.sort(function (a,b) {return a.adresa > b.adresa});
				kliknutoDvaputAdresa = true;
				strelica.attr("class","").addClass("fa fa-sort-desc");
				thAdresaGlavnaTabela.append(strelica);
				kliknutoDvaputIme = false,
				kliknutoDvaputPrezime = false,
				kliknutoDvaputAdresa = true,
				kliknutoDvaputKucniBroj = false,
				kliknutoDvaputMobilniBroj = false;
			}

			prikaziTabeluSortirano();
			var kolonaIme = $(".kolonaAdresa");
			kolonaIme.attr("class","").addClass("kolonaAdresa sortirano");
				
			break;
		case "4":
			var thKucniBrojGlavnaTabela = $("#thKucniBrojGlavnaTabela");
			if(kliknutoDvaputKucniBroj){
				tekst="desc";
				tekstSvojstvo="brojKucnog";
				//nizObjekata.sort(function (a, b) {return a.brKucnog<b.brKucnog});
				kliknutoDvaputKucniBroj = false;
				strelica.attr("class","").addClass("fa fa-sort-asc");
				thKucniBrojGlavnaTabela.prepend(strelica);
			}
			else{
				tekst="asc";
				tekstSvojstvo="brojKucnog";
				kliknutoDvaputKucniBroj = true;
				strelica.attr("class","").addClass("fa fa-sort-desc");
				thKucniBrojGlavnaTabela.append(strelica);
				kliknutoDvaputIme = false,
				kliknutoDvaputPrezime = false,
				kliknutoDvaputAdresa = false,
				kliknutoDvaputKucniBroj = true,
				kliknutoDvaputMobilniBroj = false;
			}

			prikaziTabeluSortirano();
			var kolonaIme = $(".kolonaBrojFiksnogTelefona");
			kolonaIme.attr("class","").addClass("kolonaBrojFiksnogTelefona sortirano");
			
			break;	
		case "5":

			var thMobilniBrojGlavnaTabela = $("#thMobilniBrojGlavnaTabela");
			if(kliknutoDvaputMobilniBroj){
				tekst="desc";
				tekstSvojstvo="brojMobilnog";
				kliknutoDvaputMobilniBroj = false;
				strelica.attr("class","").addClass("fa fa-sort-asc");
				thMobilniBrojGlavnaTabela.prepend(strelica);
			}
			else{
				tekst="asc";
				tekstSvojstvo="brojMobilnog";
				kliknutoDvaputMobilniBroj = true;
				strelica.attr("class","").addClass("fa fa-sort-desc");
				thMobilniBrojGlavnaTabela.append(strelica);
				kliknutoDvaputIme = false,
				kliknutoDvaputPrezime = false,
				kliknutoDvaputAdresa = false,
				kliknutoDvaputKucniBroj = false,
				kliknutoDvaputMobilniBroj = true;
			}

			prikaziTabeluSortirano();
			var kolonaIme = $(".kolonaBrojMobilnogTelefona");
			kolonaIme.attr("class","").addClass("kolonaBrojMobilnogTelefona sortirano");
			
			break;

		default:break;

	}
}

function prikaziTabeluSortirano(){
	$.ajax({
		type:"post",
		url: "assets/php_pages/imenikKupiIzBaze.php",
		data:"ajax=sortiraj&tekst="+tekst+"&tekstSvojstvo="+tekstSvojstvo,
		success:function(response){
			var izBaze = JSON.parse(response);
			var duzinaNizaIzBaze = izBaze.length;
			
			var tekstZaPrikaz="";
			var tabelaBody = $("#tabelaBody");
			//duzinaNiza = nizObjekata.length;
			for(var i=0; i< duzinaNizaIzBaze; i++){
				
				tekstZaPrikaz += "<tr><td class='kolonaIme'>" + izBaze[i].ime 
				+ "</td><td class='kolonaPrezime'>";
				tekstZaPrikaz += izBaze[i].prezime + "</td><td class='kolonaAdresa'>";
				tekstZaPrikaz += izBaze[i].adresa + "</td><td class='kolonaBrojFiksnogTelefona'>";
				tekstZaPrikaz += izBaze[i].brojKucnog + "</td><td class='kolonaBrojMobilnogTelefona'>";
				tekstZaPrikaz += izBaze[i].brojMobilnog + "</td></tr>";
				tabelaBody.html(tekstZaPrikaz);
				
			}
			$("#tabelaBody tr:odd").addClass("parniRedovi");
			$("#tabelaBody tr:even").addClass("neparniRedovi");
		}
		
	
	});
}