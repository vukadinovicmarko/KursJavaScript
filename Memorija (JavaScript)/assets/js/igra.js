var timer,
	pozoviFunkciju,
	pozoviFunkcijuDvaput,
	odbrojavanje,
	tekstZaSat,
	krajVreme,
	krajPoeni,
	krajBonus,
	krajKonacanRezultat,
	glavniProgresBar,
	pokaziKraj,
	krajKonacno;

var	nizKliknutihSlika = new Array(),
	tempVrednost = new Array(),
	prviPutKliknuto = true;

var	putanjaDoSlike = "",
	rezultat = "",
	temp = "",
	id = "";
	
var	sat=30,
	klikNaSliku = 0,
	bonusPosto = 0,
	poeniPosto = 0,
	brojNizaKliknutihSlika= 0,
	tekstRezultat = 0,
	bonus = 0,
	progresRezultat = 0,
	duzinaSvihSlikaIzDiva = sveSlikeIzDiva.length,
	konacniRezultat = 0,
	width = 0;

var	divSat = document.getElementById("sat"),
	divIgra = document.getElementById("igra"),
	divIspisRezultat = document.getElementById("ispisRezultat"),
	divIspisSat = document.getElementById("ispisSata"),
	divLabel = document.getElementById("divLabel"),
	bar = document.getElementById("divBar"),
	divLabelVreme = document.getElementById("divLabelVreme"),
	divBarVreme = document.getElementById("divBarVreme"),
	divLabelPoeni = document.getElementById("divLabelPoeni"),
	divBarPoeni = document.getElementById("divBarPoeni"),
	divLabelBonus = document.getElementById("divLabelBonus"),
	divBarBonus = document.getElementById("divBarBonus"),
	divProgres = document.getElementById("divProgres"),
	divProgresPoeni = document.getElementById("divProgresPoeni"),
	divProgresBonus = document.getElementById("divProgresBonus"),
	divSadrzajOverlay = document.getElementById("poeni"),
	divNazivVreme = document.getElementById("divNazivVreme"),
	divNazivBonus = document.getElementById("divNazivBonus"),
	divOverlay = document.getElementById("divOverlay"),
	divKonacniRezultat = document.getElementById("konacniRezultat"),
	divKraj = document.getElementById("kraj"),
	sveSlike = divIgra.getElementsByTagName("img");
	
function kliknutoNaSliku(vrednost){
	
	var sveSlikeIzDiva = document.getElementsByTagName("img");
	
	
	if(prviPutKliknuto){
		odbrojavanje = setInterval(funkcijaOdbrojavanje,1000);
		prviPutKliknuto = false;
	}
	
	if(2 > klikNaSliku){
		temp += vrednost;
		sveSlikeIzDiva[vrednost].setAttribute("src", sredjenRandomNizSlike[vrednost]);
		pozoviFunkciju = setTimeout(jednomKliknuto,1300);
		klikNaSliku++;
	}
	
	
}

function jednomKliknuto(){
	
	if(2 === klikNaSliku){
		//pozoviFunkcijuDvaput = setTimeout(dvaputKliknuto,50);
		dvaputKliknuto();
	}
	/* else if(3 === klikNaSliku){
		for(var i=0;i<duzinaSvihSlikaIzDiva;i++){
			if(i != temp.slice(2)){
				sveSlikeIzDiva[i].setAttribute("src","assets/images/slika0.jpg");
				klikNaSliku=1;
			}
			
		}	
	} */
	else{
		for(var i=0;i<duzinaSvihSlikaIzDiva;i++){
			sveSlikeIzDiva[i].setAttribute("src","assets/images/slika0.jpg");
		}
		klikNaSliku=0;
		clearTimeout(pozoviFunkciju);
	}
}

function dvaputKliknuto(){
	
	
	
	
	for(var i=0;i<duzinaSvihSlikaIzDiva;i++){
		if(sveSlikeIzDiva[i].getAttribute("src") != "assets/images/slika0.jpg"){
			nizKliknutihSlika.push(sveSlikeIzDiva[i].getAttribute("src"));
		}
	}
	
	brojNizaKliknutihSlika = nizKliknutihSlika.length;
	if(brojNizaKliknutihSlika === 2){
		
		var tekst1 = nizKliknutihSlika.toString().split(",");
		if(tekst1[0] === tekst1[1]){
			
			sat = sat + 5;
			tekstRezultat = tekstRezultat + 5;
			document.getElementById("ispisSata").className="tekstZeleno";
			divIspisRezultat.removeChild(divIspisRezultat.childNodes[0]);
			divIspisRezultat.className="tekstZeleno";
			divIspisRezultat.appendChild(document.createTextNode("Poeni : " + tekstRezultat));
			
			for(var i=0;i<duzinaSvihSlikaIzDiva;i++){
				if(0 === nizKliknutihSlika.length){
					break;
				}
				
				if(sveSlikeIzDiva[i].getAttribute("src").match(tekst1[0])){
					//sveSlikeIzDiva[i].setAttribute("src","assets/images/slika0.jpg");
					sveSlikeIzDiva[i].className="sakrij";
					duzinaSvihSlikaIzDiva= sveSlikeIzDiva.length;
					nizKliknutihSlika.length--;
					i=-1;
					continue;
				}
				else
					sveSlikeIzDiva[i].setAttribute("src","assets/images/slika0.jpg");
					
			}
			if(0 === duzinaSvihSlikaIzDiva){
			
				if(70 < sat + tekstRezultat){
					bonus = 30;
					konacniRezultat = sat + tekstRezultat + bonus;
					progresRezultat = 100;
					
				}
				else if(0 < sat + tekstRezultat){
					bonus = 10;
					progresRezultat = sat + tekstRezultat + bonus;
					konacniRezultat = progresRezultat;
				}
				else{
					konacniRezultat = 0;
					progresRezultat = 0;
				}
				clearInterval(odbrojavanje);
				
				var duzinaSvihSlika = sveSlike.length;
				for(var i=0;i<duzinaSvihSlika;i++){
					divSat.className="sakrij";
					sveSlike[i].setAttribute("src",sredjenRandomNizSlike[i]);
					sveSlike[i].className="prikazi";
				}
				
				pokaziKraj = setTimeout(kraj,1200);
				
			}	
			
			
			
			
			//clearTimeout(pozoviFunkcijuDvaput);
			clearTimeout(pozoviFunkciju);
			klikNaSliku = 0;
			nizKliknutihSlika.length=0;
			return;
			
		}
		else{
			nizKliknutihSlika.length=0;
			klikNaSliku=0;
			//clearTimeout(pozoviFunkcijuDvaput);
			clearTimeout(pozoviFunkciju);
			sat = sat - 2
			tekstRezultat = tekstRezultat - 2;
			divIspisRezultat = document.getElementById("ispisRezultat");
			var proba = divIspisRezultat.innerHTML;
			var proba2 = proba.toString().split(":");
			if(0 < proba2[1]){
				divIspisRezultat.removeChild(divIspisRezultat.childNodes[0]);
				divIspisRezultat.className="tekstCrveno";
				divIspisRezultat.appendChild(document.createTextNode("Poeni : " + tekstRezultat));
				divIspisSat.className="tekstCrveno";
			}
			else{
				divIspisSat.className="tekstCrveno";
				tekstRezultat = 0;
			}
			for(var i=0;i<duzinaSvihSlikaIzDiva;i++){
				sveSlikeIzDiva[i].setAttribute("src","assets/images/slika0.jpg");
			}
			return;
		}
	}
	else{
		for(var i=0;i<duzinaSvihSlikaIzDiva;i++){
			sveSlikeIzDiva[i].setAttribute("src","assets/images/slika0.jpg");
		}
	}
	
		
		klikNaSliku=0;
		nizKliknutihSlika.length=0;
		clearTimeout(pozoviFunkciju);
		
		
}


function funkcijaOdbrojavanje(){
	
	if(0 < sat){
		sat--;
		divIspisSat.className="tekstBelo";
		divIspisRezultat.className="tekstBelo";
		tekstZaSat = "Vreme : " + sat.toFixed(0);
		divIspisSat.removeChild(divIspisSat.childNodes[0]);
		divIspisSat.appendChild(document.createTextNode(tekstZaSat));
		
	}
	else{
		if(0 > sat){
			sat = 0;
		}
		if(0 === sat){
			
			if(0 > tekstRezultat )
				tekstRezultat = 0;
			if(0 === tekstRezultat){
				konacniRezultat = 0;
				progresRezultat = 0;
			}
			else{
				progresRezultat = sat + tekstRezultat;
				konacniRezultat = progresRezultat;
			}
			var duzinaSvihSlika = sveSlike.length;
			for(var i=0;i<duzinaSvihSlika;i++){
				divSat.className="sakrij";
				sveSlike[i].setAttribute("src",sredjenRandomNizSlike[i]);
				sveSlike[i].className="prikazi";
			}
			pokaziKraj = setTimeout(kraj,1200);
		}
		
		
		clearInterval(odbrojavanje);
	}
}

function kraj() {
	
	clearTimeout(pokaziKraj);
	var sadrzajOverlayVreme = "Vreme : " + sat;
	
	var paragraf1 = document.createElement("P");
	paragraf1.appendChild(document.createTextNode(sadrzajOverlayVreme));
	divNazivVreme.appendChild(paragraf1);
	krajVreme = setInterval(funkcijaKrajVreme, 40);
	
	divOverlay.className="prikaziOverlay";
	
}


function funkcijaKrajVreme(){
	divProgresVreme.className="prikazi";
	if (width >= sat) {
		clearInterval(krajVreme);
		var sadrzajOverlayProgres = "Ostvareni poeni : " + tekstRezultat;
		var paragraf1 = document.createElement("P");
		paragraf1.appendChild(document.createTextNode(sadrzajOverlayProgres));
		width=0;
		
		if(0 != tekstRezultat)
			poeniPosto = (tekstRezultat/40) * 100;
		
		divNazivPoeni.appendChild(paragraf1);
		krajPoeni = setInterval(funkcijaKrajPoeni, 40);
	} 
	else {
		if(0 < width && 12.5 >= width)
			divBarVreme.className="tamnoCrveno";
		else if(12.5 < width && 25 >= width)
			divBarVreme.className="crveno";
		else if(25 < width && 37.5 >= width)
			divBarVreme.className = "crvenoNarandzasto";
		else if(37.5 < width && 50 >= width)
			divBarVreme.className = "narandzasto";
		else if(50 < width && 62.5 >= width)
			divBarVreme.className = "narandzastoZuto";
		else if(62.5 < width && 75 >= width)
			divBarVreme.className = "zuto";
		else if(75 < width && 87.5 >= width)
			divBarVreme.className = "zutoZeleno";
		else if(87.5 < width && 100 >= width)
			divBarVreme.className = "zeleno";
		width= width+1; 
		divBarVreme.style.width = width + '%';
//ovde sam morao da ostavim ovako, ne znam na koji drugi nacin
//moze da se podesi sirina div-a dinamicki, osim ovog nacina
		divLabelVreme.removeChild(divLabelVreme.childNodes[0]);
		divLabelVreme.appendChild(document.createTextNode(width  + ' sek'));
	}
}

function funkcijaKrajPoeni(){
	divProgresPoeni.className="prikazi";
	
	if (width >= poeniPosto) {
		clearInterval(krajPoeni);
		width=0;
		var sadrzajOverlayBonus = "Bonus : " + bonus;
		var paragraf3 = document.createElement("P");
		paragraf3.appendChild(document.createTextNode(sadrzajOverlayBonus));
		divNazivBonus.appendChild(paragraf3);
		if(0 != bonus)
			bonusPosto = (bonus/30) * 100;
		
		krajBonus = setInterval(funkcijaKrajBonus, 40);
		
	} 
	else {
		if(0 < width && 12.5 >= width)
			divBarPoeni.className="tamnoCrveno";
		else if(12.5 < width && 25 >= width)
			divBarPoeni.className="crveno";
		else if(25 < width && 37.5 >= width)
			divBarPoeni.className = "crvenoNarandzasto";
		else if(37.5 < width && 50 >= width)
			divBarPoeni.className = "narandzasto";
		else if(50 < width && 62.5 >= width)
			divBarPoeni.className = "narandzastoZuto";
		else if(62.5 < width && 75 >= width)
			divBarPoeni.className = "zuto";
		else if(75 < width && 87.5 >= width)
			divBarPoeni.className = "zutoZeleno";
		else if(87.5 < width && 100 >= width)
			divBarPoeni.className = "zeleno";
		width= width+1; 
		divBarPoeni.style.width = width + '%';
//ovde sam morao da ostavim ovako, ne znam na koji drugi nacin
//moze da se podesi sirina div-a dinamicki, osim ovog nacina
		divLabelPoeni.removeChild(divLabelPoeni.childNodes[0]);
		divLabelPoeni.appendChild(document.createTextNode(width + '%'));
	}
}


function funkcijaKrajBonus(){
	divProgresBonus.className="prikazi";
	if (width >= bonusPosto) {
		clearInterval(krajBonus);
		width = 0;
		setTimeout(funkcijaGlavniBar, 800);
	
	} 
	else {
		if(0 < width && 12.5 >= width)
			divBarBonus.className="tamnoCrveno";
		else if(12.5 < width && 25 >= width)
			divBarBonus.className="crveno";
		else if(25 < width && 37.5 >= width)
			divBarBonus.className = "crvenoNarandzasto";
		else if(37.5 < width && 50 >= width)
			divBarBonus.className = "narandzasto";
		else if(50 < width && 62.5 >= width)
			divBarBonus.className = "narandzastoZuto";
		else if(62.5 < width && 75 >= width)
			divBarBonus.className = "zuto";
		else if(75 < width && 87.5 >= width)
			divBarBonus.className = "zutoZeleno";
		else if(87.5 < width && 100 >= width)
			divBarBonus.className = "zeleno";
		width= width+1; 
		divBarBonus.style.width = width + '%';
//ovde sam morao da ostavim ovako, ne znam na koji drugi nacin
//moze da se podesi sirina div-a dinamicki, osim ovog nacina
		divLabelBonus.removeChild(divLabelBonus.childNodes[0]);
		divLabelBonus.appendChild(document.createTextNode(width + '%'));
	}
}


function funkcijaGlavniBar(){
	clearTimeout(glavniProgresBar);
	id = setInterval(progres,50);
}

function progres(){
	divProgres.className="prikazi";
	
			
	if (width >= progresRezultat) {
		clearInterval(id);
		krajKonacno = setTimeout(funkcijaKrajKonacno, 200);
	} 
	else {
		if(progresRezultat < 12.5){
			
			bar.className="tamnoCrveno tekstCrno";
			width= width+0.05;
			width.toFixed(2);			
			bar.style.width = (width.toFixed(2)*10) + '%'; 
//ovde sam morao da ostavim ovako, ne znam na koji drugi nacin
//moze da se podesi sirina div-a dinamicki, osim ovog nacina
			divLabel.removeChild(divLabel.childNodes[0]);
			divLabel.appendChild(document.createTextNode(width.toFixed(2) + '%'));
		}
		else{
			if(0 < width && 12.5 >= width)
				bar.className="tamnoCrveno";
			else if(12.5 < width && 25 >= width)
				bar.className="crveno";
			else if(25 < width && 37.5 >= width)
				bar.className = "crvenoNarandzasto";
			else if(37.5 < width && 50 >= width)
				bar.className = "narandzasto";
			else if(50 < width && 62.5 >= width)
				bar.className = "narandzastoZuto";
			else if(62.5 < width && 75 >= width)
				bar.className = "zuto";
			else if(75 < width && 87.5 >= width)
				bar.className = "zutoZeleno";
			else if(87.5 < width && 100 >= width)
				bar.className = "zeleno";
			width= width+1; 
			bar.style.width = width + '%';
//ovde sam morao da ostavim ovako, ne znam na koji drugi nacin
//moze da se podesi sirina div-a dinamicki, osim ovog nacina
			divLabel.removeChild(divLabel.childNodes[0]);
			divLabel.appendChild(document.createTextNode(width  + '%'));
		}
	}
	
}

function funkcijaKrajKonacno(){
	divKraj.className="prikazi";
	
	var sadrzajKonacniRezultat = "Konacni rezultat je : " + konacniRezultat;
	var h3 = document.createElement("H3");
	h3.appendChild(document.createTextNode(sadrzajKonacniRezultat));
	divKonacniRezultat.appendChild(h3);
	
	var upis = document.getElementById("upis");
	var igrajPonovo = document.getElementById("igrajPonovo");
	
	if(upis.addEventListener)
		upis.addEventListener("click",prikazTabele);
	else if(upis.atachEvent)//za IE < 8
		upis.atachEvent("onclick",prikazTabele);
	
	if(igrajPonovo.addEventListener)
		igrajPonovo.addEventListener("click",resetujIgru);
	else if(igrajPonovo.atachEvent)//za IE < 8
		igrajPonovo.atachEvent("onclick",resetujIgru);
	
}

function prikazTabele(){
	
	if(typeof localStorage.MarkoVukadinovicIgraciMemorija === "undefined"){
		var objekatNizaObjekataBodova = {
			"igraci":[
				{
					"username":"Marko",
					"vreme":50,
					"ostvareniPoeni":50,
					"bonusPoeni":30,
					"konacniRezultat":130
				},
				{
					"username":"Perica",
					"vreme":10,
					"ostvareniPoeni":14,
					"bonusPoeni":10,
					"konacniRezultat":34
				}
			]
		};
		localStorage.setItem(
			"MarkoVukadinovicIgraciMemorija",
			JSON.stringify(objekatNizaObjekataBodova)
		);
	}
	
	document.getElementById("pregled").className="sakrijKvalitetno";
	document.getElementById("prikazTabele").className="prikazi";
	var tekstTabele = "";
	var skladiste = JSON.parse(localStorage.MarkoVukadinovicIgraciMemorija);
	var nizSkladista = skladiste.igraci;
	
	duzinaNizaSkladista = nizSkladista.length;
	
	var divTabelaPoeniBody = document.getElementById("tabelaPoeniBody").innerHTML;
	var divTabelaPrikaz = document.getElementById("prikazTabele");
	var tabelaBody = document.getElementById("prikazBodija");
	
	/* var tData = document.createElement("TD");
	for(var i=0;i<duzinaNizaSkladista;i++){
		var tRed = 	document.createElement("TR").appendChild(
			document.createElement("TD").appendChild(
				document.createTextNode(divTabelaPoeniBody.replace(
				"{{username}}",nizSkladista[i].username))
			).document.createElement("TD").appendChild(
				document.createTextNode(divTabelaPoeniBody.replace(
				"{{vreme}}",nizSkladista[i].vreme))
			).document.createElement("TD").appendChild(
				document.createTextNode(divTabelaPoeniBody.replace(
				"{{ostvareniPoeni}}",nizSkladista[i].ostvareniPoeni))
			).document.createElement("TD").appendChild(
				document.createTextNode(divTabelaPoeniBody.replace(
				"{{bonusPoeni}}",nizSkladista[i].bonusPoeni))
			).document.createElement("TD").appendChild(
				document.createTextNode(divTabelaPoeniBody.replace(
				"{{konacniRezultat}}",nizSkladista[i].konacniRezultat))
			)
		);
		tabelaBody.appendChild(tRed);
	}
	 */
	for(var i=0;i<duzinaNizaSkladista;i++){
		tekstTabele += divTabelaPoeniBody.replace(
		"{{username}}",nizSkladista[i].username).replace(
		"{{vreme}}",nizSkladista[i].vreme).replace(
		"{{ostvareniPoeni}}",nizSkladista[i].ostvareniPoeni).replace(
		"{{bonusPoeni}}",nizSkladista[i].bonusPoeni).replace(
		"{{konacniRezultat}}",nizSkladista[i].konacniRezultat);
 	}
	
	
	
	tabelaBody.innerHTML = tekstTabele;
	
}


function unosPodataka(){
	var ime = prompt("Molimo, unesite Vase ime","npr. Marko");
	if(ime === ""){
		ime = "Marko";
	}
	var objekatBodova = {
		"username":ime,
		"vreme":sat,
		"ostvareniPoeni":tekstRezultat,
		"bonusPoeni":bonus,
		"konacniRezultat":konacniRezultat
	};
	var skladiste = JSON.parse(localStorage.MarkoVukadinovicIgraciMemorija);
	var nizSkladista = skladiste.igraci;
	duzinaNizaSkladista = nizSkladista.length;
	
	var novo = [];		
	for(var i=0;i<duzinaNizaSkladista;i++){
		novo.push({
			"username":nizSkladista[i].username,
			"vreme":nizSkladista[i].vreme,
			"ostvareniPoeni":nizSkladista[i].ostvareniPoeni,
			"bonusPoeni":nizSkladista[i].bonusPoeni,
			"konacniRezultat":nizSkladista[i].konacniRezultat
		});
	}
		
	novo.push(objekatBodova);
	var objekat = {"igraci":novo};
	localStorage.setItem(
		"MarkoVukadinovicIgraciMemorija",
		JSON.stringify(objekat)
	);
	prikazTabele();
}

function resetujIgru(){
	window.location = "memorija.html";
}


