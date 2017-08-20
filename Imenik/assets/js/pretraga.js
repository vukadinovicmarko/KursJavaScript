function pretraga(vrednost){
	var tekstZaPrikaz="",
		duzinaNizaObjekata = nizObjekata.length,
		cekirano = "",
		elem = document.getElementsByName("pretragaPo"),
		duzinaCekiranog = elem.length;
	for(var i=0;i<duzinaCekiranog;i++){
		if(elem[i].checked){
			cekirano= elem[i].value;
		}
	}
	var tabela="";
	
	switch(cekirano){
		case "1":
			for(var i=0; i<duzinaNizaObjekata; i++){
				if("" === vrednost){
					tekstZaPrikaz="";
					prikaziTabelu();
				}

				else if(nizObjekata[i].ime.toLowerCase().includes(vrednost)){
					tabela += "<tr><td class='kolonaIme'>" + nizObjekata[i].ime 
					+ "</td><td class='kolonaPrezime'>";
					tabela += nizObjekata[i].prezime + "</td><td class='kolonaAdresa'>";
					tabela += nizObjekata[i].adresa + "</td><td class='kolonaBrojFiksnogTelefona'>";
					tabela += nizObjekata[i].brKucnog + "</td><td class='kolonaBrojMobilnogTelefona'>";
					tabela += nizObjekata[i].brojMobilnog + "</td></tr>";
					document.getElementById("tabelaBody").innerHTML = tabela;
				}

			}
			break;
		case "2":
			for(var i=0; i<duzinaNizaObjekata; i++){
				if("" === vrednost){
					tekstZaPrikaz="";
					prikaziTabelu();
				}
				else if(nizObjekata[i].prezime.toLowerCase().includes(vrednost)){
					tabela += "<tr><td class='kolonaIme'>" + nizObjekata[i].ime 
					+ "</td><td class='kolonaPrezime'>";
					tabela += nizObjekata[i].prezime + "</td><td class='kolonaAdresa'>";
					tabela += nizObjekata[i].adresa + "</td><td class='kolonaBrojFiksnogTelefona'>";
					tabela += nizObjekata[i].brKucnog + "</td><td class='kolonaBrojMobilnogTelefona'>";
					tabela += nizObjekata[i].brojMobilnog + "</td></tr>";
					document.getElementById("tabelaBody").innerHTML = tabela;
				}
				else{
					document.getElementById("tabelaBody").innerHTML = "";
				}
			}
			break;
		case "3":
			for(var i=0; i<duzinaNizaObjekata; i++){
				if("" === vrednost){
					tekstZaPrikaz="";
					prikaziTabelu();
				}
				else if(nizObjekata[i].adresa.toLowerCase().includes(vrednost)){
					tabela += "<tr><td class='kolonaIme'>" + nizObjekata[i].ime 
					+ "</td><td class='kolonaPrezime'>";
					tabela += nizObjekata[i].prezime + "</td><td class='kolonaAdresa'>";
					tabela += nizObjekata[i].adresa + "</td><td class='kolonaBrojFiksnogTelefona'>";
					tabela += nizObjekata[i].brKucnog + "</td><td class='kolonaBrojMobilnogTelefona'>";
					tabela += nizObjekata[i].brojMobilnog + "</td></tr>";
					document.getElementById("tabelaBody").innerHTML = tabela;
				}
			}
			break;
		case "4":
			for(var i=0; i<duzinaNizaObjekata; i++){
				if("" === vrednost){
					tekstZaPrikaz="";
					prikaziTabelu();
				}
				else if(nizObjekata[i].brKucnog.includes(vrednost)){
					tabela += "<tr><td class='kolonaIme'>" + nizObjekata[i].ime 
					+ "</td><td class='kolonaPrezime'>";
					tabela += nizObjekata[i].prezime + "</td><td class='kolonaAdresa'>";
					tabela += nizObjekata[i].adresa + "</td><td class='kolonaBrojFiksnogTelefona'>";
					tabela += nizObjekata[i].brKucnog + "</td><td class='kolonaBrojMobilnogTelefona'>";
					tabela += nizObjekata[i].brojMobilnog + "</td></tr>";
					document.getElementById("tabelaBody").innerHTML = tabela;
				}
			}
			break;
		case "5":
			for(var i=0; i<duzinaNizaObjekata; i++){
				if("" === vrednost){
					tekstZaPrikaz="";
					prikaziTabelu();
				}
				else if(nizObjekata[i].brojMobilnog.includes(vrednost)){
					tabela += "<tr><td class='kolonaIme'>" + nizObjekata[i].ime 
					+ "</td><td class='kolonaPrezime'>";
					tabela += nizObjekata[i].prezime + "</td><td class='kolonaAdresa'>";
					tabela += nizObjekata[i].adresa + "</td><td class='kolonaBrojFiksnogTelefona'>";
					tabela += nizObjekata[i].brKucnog + "</td><td class='kolonaBrojMobilnogTelefona'>";
					tabela += nizObjekata[i].brojMobilnog + "</td></tr>";
					document.getElementById("tabelaBody").innerHTML = tabela;
				}
			}
			break;
	}
	
	
		
		
		
	
}