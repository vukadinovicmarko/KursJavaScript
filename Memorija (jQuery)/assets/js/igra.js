

function kliknutoNaSliku(vrednost){
	
	
var sveSlikeIzDiva = $("#igra img");

	
	
	if(prviPutKliknuto){
		odbrojavanje = setInterval(funkcijaOdbrojavanje,1000);
		prviPutKliknuto = false;
	}
	
	if(2 > klikNaSliku){
		temp += vrednost;
		sveSlikeIzDiva.eq(vrednost).attr("src", sredjenRandomNizSlike[vrednost]);
		pozoviFunkciju = setTimeout(jednomKliknuto,1300);
		klikNaSliku++;
	} 
	
	
}

function jednomKliknuto(){
	
	 if(2 === klikNaSliku){
		//pozoviFunkcijuDvaput = setTimeout(dvaputKliknuto,50);
		dvaputKliknuto();
	}
	 else if(3 === klikNaSliku){
		for(var i=0;i<duzinaSvihSlikaIzDiva;i++){
			if(i != temp.slice(2)){
				sveSlikeIzDiva.eq(i).attr("src","assets/images/slika0.jpg");
				klikNaSliku=1;
			}
			
		}	
	} 
	 else{
		for(var i=0;i<duzinaSvihSlikaIzDiva;i++){
			sveSlikeIzDiva.eq(i).attr("src","assets/images/slika0.jpg");
		}
		klikNaSliku=0;
		clearTimeout(pozoviFunkciju);
	} 
}

function dvaputKliknuto(){
	
	var sveSlikeIzDivaSaKlasom = $("#igra img[class=klasaSlika]");
	var duzinaSlikaSaKlasom = sveSlikeIzDivaSaKlasom.length;
	
	
	for(var i=0;i<duzinaSlikaSaKlasom;i++){
		if(sveSlikeIzDivaSaKlasom.eq(i).attr("src") != "assets/images/slika0.jpg"){
			nizKliknutihSlika.push(sveSlikeIzDivaSaKlasom.eq(i).attr("src"));
		}
	}
	
	brojNizaKliknutihSlika = nizKliknutihSlika.length;
	if(brojNizaKliknutihSlika === 2){
		
		var tekst1 = nizKliknutihSlika.toString().split(",");
		if(tekst1[0] === tekst1[1]){
			
			sat = sat + 5;
			tekstRezultat = tekstRezultat + 5;
			$("#sat").attr("class","").addClass("tekstZeleno");
			divIspisRezultat.html("Poeni : " + tekstRezultat)
			
			for(var i=0;i<duzinaSlikaSaKlasom;i++){
				if(0 === nizKliknutihSlika.length){
					break;
				}
				
				if(sveSlikeIzDivaSaKlasom.eq(i).attr("src").match(tekst1[0])){
					//sveSlikeIzDiva[i].setAttribute("src","assets/images/slika0.jpg");
					sveSlikeIzDivaSaKlasom.eq(i).attr("class","sakrij");
					sveSlikeIzDivaSaKlasom = $("#igra img[class=klasaSlika]");
					duzinaSlikaSaKlasom= sveSlikeIzDivaSaKlasom.length;
					nizKliknutihSlika.length--;
					i=-1;
					continue;
				}
				else
					sveSlikeIzDivaSaKlasom.eq(i).attr("src","assets/images/slika0.jpg");
					
			}
			if(0 === duzinaSlikaSaKlasom){
			
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
				if(cname==="" || cname==="unnamed_player")
					tekstStatus = "Cestitamo, pobedili ste!"
				else
					tekstStatus = "Cestitamo " + cname + ", pobedili ste!"
				statusPobede=true;
				clearInterval(odbrojavanje);
				var sakriveneSlike = $("#igra img");
				var duzinaSakrivenihSlika = sakriveneSlike.length;
				for(var i=0;i<duzinaSakrivenihSlika;i++){
					$("#sat").attr("class","").addClass("sakrij");
					$("#mode").attr("class","").addClass("sakrij");
					sakriveneSlike.eq(i).attr("src",sredjenRandomNizSlike[i]);
					sakriveneSlike.eq(i).attr("class","").addClass("klasaSlika");
				}
				
				pokaziKraj = setTimeout(kraj,1200);
				
			}	
			
			
			
			
			clearTimeout(pozoviFunkciju);
			klikNaSliku = 0;
			nizKliknutihSlika.length=0;
			return;
			
		}
		else{
			nizKliknutihSlika.length=0;
			klikNaSliku=0;
			clearTimeout(pozoviFunkciju);
			sat = sat - 2
			tekstRezultat = tekstRezultat - 2;
			divIspisRezultat = $("#ispisRezultat");
			var proba = divIspisRezultat.html();
			var proba2 = proba.toString().split(":");
			if(0 < proba2[1]){
				$("#sat").attr("class","").addClass("tekstCrveno");
				divIspisRezultat.html("Poeni : " + tekstRezultat);
				
				
			}
			else{
				$("#sat").attr("class","").addClass("tekstCrveno");
				tekstRezultat = 0;
			}
			for(var i=0;i<duzinaSlikaSaKlasom;i++){
				sveSlikeIzDivaSaKlasom.eq(i).attr("src","assets/images/slika0.jpg");
			}
			return;
		}
	}
	else{
		for(var i=0;i<duzinaSlikaSaKlasom;i++){
			sveSlikeIzDivaSaKlasom.eq(i).attr("src","assets/images/slika0.jpg");
		}
	}
	
		
		klikNaSliku=0;
		nizKliknutihSlika.length=0;
		clearTimeout(pozoviFunkciju);
		
		
}

 
function funkcijaOdbrojavanje(){
	
	if(0 < sat){
		sat--;
		$("#sat").attr("class","").addClass("tekstBelo");
		tekstZaSat = "Vreme : " + sat.toFixed(0);
		divIspisSat.html(tekstZaSat);
		
	}
	else{
		if(0 > sat){
			sat = 0;
			bonus=0;
				
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
			var sakriveneSlike = $("#igra img");
			var duzinaSakrivenihSlika = sakriveneSlike.length;
			for(var i=0;i<duzinaSakrivenihSlika;i++){
				$("#sat").attr("class","").addClass("sakrij");
				$("#mode").attr("class","").addClass("sakrij");
				sakriveneSlike.eq(i).attr("src",sredjenRandomNizSlike[i]);
				sakriveneSlike.eq(i).attr("class","").addClass("klasaSlika");
			}
			statusPobede=false;
			if(cname==="" || cname==="unnamed_player")
				tekstStatus = "Zao nam je, isteklo je vreme!"
			else
				tekstStatus = "Zao nam je " + cname + ", isteklo je vreme!"
			pokaziKraj = setTimeout(kraj,1200);
		}
		
		
		clearInterval(odbrojavanje);
	}
}

function kraj() {
	
	clearTimeout(pokaziKraj);
	var sadrzajOverlayVreme = "Vreme : " + sat;
	if(statusPobede){
		$("#status").attr("class","").addClass("zeleno");
	}
	else{
		$("#status").attr("class","").addClass("crveno");
	}
	var paragraf0 = $("<p>",{
		"html":tekstStatus
	});
	var paragraf1 = $("<p>",{
		"html":sadrzajOverlayVreme
	});
	$("#status").html(paragraf0);
	divNazivVreme.html(paragraf1);
	krajVreme = setInterval(funkcijaKrajVreme, 40);
	
	divOverlay.attr("class","").addClass("prikaziOverlay");
	
}


function funkcijaKrajVreme(){
	divProgresVreme.addClass("prikazi");
	if(100 <= sat)
		sat=100;
	if (width >= sat) {
		clearInterval(krajVreme);
		var sadrzajOverlayProgres = "Ostvareni poeni : " + tekstRezultat;
		var paragraf5 = $("<p>",{
			"html":sadrzajOverlayProgres
		});
		width=0;
		
		if(0 != tekstRezultat)
			poeniPosto = (tekstRezultat/40) * 100;
		if(100 <= poeniPosto)
			poeniPosto=100;
		divNazivPoeni.html(paragraf5);
		krajPoeni = setInterval(funkcijaKrajPoeni, 40);
	} 
	else {
		if(0 < width && 12.5 >= width)
			divBarVreme.addClass("tamnoCrveno");
		else if(12.5 < width && 25 >= width)
			divBarVreme.attr("class","").addClass("crveno");
		else if(25 < width && 37.5 >= width)
			divBarVreme.attr("class","").addClass("crvenoNarandzasto");
		else if(37.5 < width && 50 >= width)
			divBarVreme.attr("class","").addClass("narandzasto");
		else if(50 < width && 62.5 >= width)
			divBarVreme.attr("class","").addClass("narandzastoZuto");
		else if(62.5 < width && 75 >= width)
			divBarVreme.attr("class","").addClass("zuto");
		else if(75 < width && 87.5 >= width)
			divBarVreme.attr("class","").addClass("zutoZeleno");
		else if(87.5 < width && 100 >= width)
			divBarVreme.attr("class","").addClass("zeleno");
		width= width+1; 
		$("#divBarVreme").css({"width": width + '%'});
//ovde sam morao da ostavim ovako, ne znam na koji drugi nacin
//moze da se podesi sirina div-a dinamicki, osim ovog nacina
		divLabelVreme.html("");
		divLabelVreme.html(width  + ' sek');
	}
}

function funkcijaKrajPoeni(){
	divProgresPoeni.addClass("prikazi");
	
	if (width >= poeniPosto) {
		clearInterval(krajPoeni);
		width=0;
		var sadrzajOverlayBonus = "Bonus : " + bonus;
		var paragraf3 = $("<p>",{
			"html":sadrzajOverlayBonus
		});
		divNazivBonus.html(paragraf3);
		if(0 != bonus)
			bonusPosto = (bonus/30) * 100;
		
		krajBonus = setInterval(funkcijaKrajBonus, 40);
		
	} 
	else {
		if(0 < width && 12.5 >= width)
			divBarPoeni.addClass("tamnoCrveno");
		else if(12.5 < width && 25 >= width)
			divBarPoeni.attr("class","").addClass("crveno");
		else if(25 < width && 37.5 >= width)
			divBarPoeni.attr("class","").addClass("crvenoNarandzasto");
		else if(37.5 < width && 50 >= width)
			divBarPoeni.attr("class","").addClass("narandzasto");
		else if(50 < width && 62.5 >= width)
			divBarPoeni.attr("class","").addClass("narandzastoZuto");
		else if(62.5 < width && 75 >= width)
			divBarPoeni.attr("class","").addClass("zuto");
		else if(75 < width && 87.5 >= width)
			divBarPoeni.attr("class","").addClass("zutoZeleno");
		else if(87.5 < width && 100 >= width)
			divBarPoeni.attr("class","").addClass("zeleno");
		width= width+1; 
		divBarPoeni.css({"width": width + '%'});
//ovde sam morao da ostavim ovako, ne znam na koji drugi nacin
//moze da se podesi sirina div-a dinamicki, osim ovog nacina
		divLabelPoeni.html("");
		divLabelPoeni.html(width + '%');
	}
}


function funkcijaKrajBonus(){
	divProgresBonus.addClass("prikazi");
	if (width >= bonusPosto) {
		clearInterval(krajBonus);
		width = 0;
		setTimeout(funkcijaGlavniBar, 800);
	
	} 
	else {
		if(0 < width && 12.5 >= width)
			divBarBonus.addClass("tamnoCrveno");
		else if(12.5 < width && 25 >= width)
			divBarBonus.attr("class","").addClass("crveno");
		else if(25 < width && 37.5 >= width)
			divBarBonus.attr("class","").addClass("crvenoNarandzasto");
		else if(37.5 < width && 50 >= width)
			divBarBonus.attr("class","").addClass("narandzasto");
		else if(50 < width && 62.5 >= width)
			divBarBonus.attr("class","").addClass("narandzastoZuto");
		else if(62.5 < width && 75 >= width)
			divBarBonus.attr("class","").addClass("zuto");
		else if(75 < width && 87.5 >= width)
			divBarBonus.attr("class","").addClass("zutoZeleno");
		else if(87.5 < width && 100 >= width)
			divBarBonus.attr("class","").addClass("zeleno");
		width= width+1; 
		divBarBonus.css({"width": width + '%'});
//ovde sam morao da ostavim ovako, ne znam na koji drugi nacin
//moze da se podesi sirina div-a dinamicki, osim ovog nacina
		divLabelBonus.html("");
		divLabelBonus.html(width + '%');
	}
}


function funkcijaGlavniBar(){
	clearTimeout(glavniProgresBar);
	id = setInterval(progres,50);
}

function progres(){
	divProgres.addClass("prikazi");
	
			
	if (width >= progresRezultat) {
		clearInterval(id);
		krajKonacno = setTimeout(funkcijaKrajKonacno, 200);
	} 
	else {
		if(progresRezultat < 12.5){
			
			bar.attr("class","").addClass("tamnoCrveno tekstCrno");
			width= width+0.05;
			width.toFixed(2);			
			bar.css({"width":(width.toFixed(2)*10) + '%'});
//ovde sam morao da ostavim ovako, ne znam na koji drugi nacin
//moze da se podesi sirina div-a dinamicki, osim ovog nacina
			divLabel.html();
			divLabel.html(width.toFixed(2) + '%');
		}
		else{
			if(0 < width && 12.5 >= width)
				bar.addClass("tamnoCrveno");
			else if(12.5 < width && 25 >= width)
				bar.attr("class","").addClass("crveno");
			else if(25 < width && 37.5 >= width)
				bar.attr("class","").addClass("crvenoNarandzasto");
			else if(37.5 < width && 50 >= width)
				bar.attr("class","").addClass("narandzasto");
			else if(50 < width && 62.5 >= width)
				bar.attr("class","").addClass("narandzastoZuto");
			else if(62.5 < width && 75 >= width)
				bar.attr("class","").addClass("zuto");
			else if(75 < width && 87.5 >= width)
				bar.attr("class","").addClass("zutoZeleno");
			else if(87.5 < width && 100 >= width)
				bar.attr("class","").addClass("zeleno");
			width= width+1; 
			bar.css({"width": width + '%'});
//ovde sam morao da ostavim ovako, ne znam na koji drugi nacin
//moze da se podesi sirina div-a dinamicki, osim ovog nacina
		
			divLabel.html(width  + '%');
		}
	}
	
}

function funkcijaKrajKonacno(){
	
	divKraj.attr("class","").addClass("prikazi");
	
	var sadrzajKonacniRezultat = "Konacni rezultat je : " + konacniRezultat;
	var h3 = $("<h3>",{
		"html":sadrzajKonacniRezultat
	});
	divKonacniRezultat.html(h3);
	
	var upis = $("#upis");
	var igrajPonovo = $(".igrajPonovo");
	
	upis.on("click",function(){
		prikazTabele();
	});
	
	igrajPonovo.on("click",function(){
		$("#pregled").show();
		$("#prikazTabele").attr("class","").addClass("sakrij");
		divOverlay.attr("class","").addClass("divOverlay");
		$("#igra").html("");
		ponovoPokrenuto = true;
		sveSlikeIzDiva="";
		sveSlikeIzDivaSaKlasom="";
		
		divLabelPoeni.html("0%");
		divLabelVreme.html("0%");
		divLabelBonus.html("0%");
		divLabel.html("0%");
		tekstRezultat=0;
		bonus=0;
		bonusPosto=0;
		progresRezultat=0;
		konacniRezultat=0;
		width=0;
		poeniPosto=0;
		divBarVreme.attr("class","");
		divBarVreme.css({"width": "0%"});
		divBarPoeni.attr("class","");
		divBarPoeni.css({"width": "0%"});
		divBarBonus.attr("class","");
		divBarBonus.css({"width": "0%"});
		bar.attr("class","");
		bar.css({"width": "0%"});
		$("#konacniRezultat").html("");
		$("#sat").fadeOut(500);
		$("#mode").fadeOut(500);
		$("#sat").attr("class","");
		$("#mode").attr("class","");
		prikaziPocetak();
	});
	
}

function prikazTabele(){
	$("#unosPodataka").show();
	if(typeof localStorage.MarkoVukadinovicIgraciMemorijajQuery === "undefined"){
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
			"MarkoVukadinovicIgraciMemorijajQuery",
			JSON.stringify(objekatNizaObjekataBodova)
		);
	}
	
	$("#pregled").hide();
	$("#prikazTabele").attr("class","").addClass("prikazi");
	var tekstTabele = "";
	var skladiste = JSON.parse(localStorage.MarkoVukadinovicIgraciMemorijajQuery);
	var nizSkladista = skladiste.igraci;
	
	duzinaNizaSkladista = nizSkladista.length;
	
	var divTabelaPoeniBody = $("#tabelaPoeniBody").html();
	var divTabelaPrikaz = $("#prikazTabele");
	var tabelaBody = $("#prikazBodija");

 	for(var i=0;i<duzinaNizaSkladista;i++){
		tekstTabele += divTabelaPoeniBody.replace(
		"{{username}}",nizSkladista[i].username).replace(
		"{{vreme}}",nizSkladista[i].vreme).replace(
		"{{ostvareniPoeni}}",nizSkladista[i].ostvareniPoeni).replace(
		"{{bonusPoeni}}",nizSkladista[i].bonusPoeni).replace(
		"{{konacniRezultat}}",nizSkladista[i].konacniRezultat);
 	}
	
	
	
	tabelaBody.html(tekstTabele);
	
}
$("#unosPodataka").on("click",function(){
		unosPodataka();
		$(this).hide();
	});

function unosPodataka(){
	var ime = cname;
	
	var objekatBodova = {
		"username":ime,
		"vreme":sat,
		"ostvareniPoeni":tekstRezultat,
		"bonusPoeni":bonus,
		"konacniRezultat":konacniRezultat
	};
	var skladiste = JSON.parse(localStorage.MarkoVukadinovicIgraciMemorijajQuery);
	var nizSkladista = skladiste.igraci;
	duzinaNizaSkladista = nizSkladista.length;
	alert(duzinaNizaSkladista);
	var novo = [];	
	if(duzinaNizaSkladista >= 10){
		for(var i=0;i<10;i++){
			novo.push({
				"username":nizSkladista[i].username,
				"vreme":nizSkladista[i].vreme,
				"ostvareniPoeni":nizSkladista[i].ostvareniPoeni,
				"bonusPoeni":nizSkladista[i].bonusPoeni,
				"konacniRezultat":nizSkladista[i].konacniRezultat
			});
		}
	}
	else{
		for(var i=0;i<duzinaNizaSkladista;i++){
			novo.push({
				"username":nizSkladista[i].username,
				"vreme":nizSkladista[i].vreme,
				"ostvareniPoeni":nizSkladista[i].ostvareniPoeni,
				"bonusPoeni":nizSkladista[i].bonusPoeni,
				"konacniRezultat":nizSkladista[i].konacniRezultat
			});
		}
	}
		
	
		
	novo.push(objekatBodova);
	var objekat = {"igraci":novo};
	localStorage.setItem(
		"MarkoVukadinovicIgraciMemorijajQuery",
		JSON.stringify(objekat)
	);
	prikazTabele();
}

function resetujIgru(){
	pokreniIgru();
}
 

