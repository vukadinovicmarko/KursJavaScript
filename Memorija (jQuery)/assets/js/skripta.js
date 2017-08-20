
	
	
	
	var stepeni=0,
		sat=0,
		tempSat="",
		brzinaSakrivanja = 0,
		prviPutPokrenuto = false,
		drugiPutPokrenuto = false,
		ponovoPokrenuto=false,
		cname="",
		proba = "",
		proba2 = "",
		tezinaIgre ="",
		putanjaDoSlike="",
		sveSlikeIzDiva="",
		sveSlikeIzDivaSaKlasom="",
		duzinaSvihSlikaIzDiva ="",
		sakrijOriginalneSlike= "",
		tekstStatus="",
		statusPobede=false,
		divOverlayPocetak = $("#divOverlayPocetak"),
		divOverlay= $("#divOverlay"),
		sadrzajOverlayPocetak = $("#sadrzajOverlayPocetak");
	var sredjenRandomNizSlike = new Array();
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

	var	klikNaSliku = 0,
		bonusPosto = 0,
		poeniPosto = 0,
		brojNizaKliknutihSlika= 0,
		tekstRezultat = 0,
		bonus = 0,
		progresRezultat = 0,
		duzinaSvihSlikaIzDiva = sveSlikeIzDiva.length,
		konacniRezultat = 0,
		width = 0;

	var	divSat = $("#sat"),
		divIgra = $("#igra"),
		divIspisRezultat = $("#ispisRezultat"),
		divIspisSat = $("#ispisSata"),
		divLabel = $("#divLabel"),
		bar = $("#divBar"),
		divNazivPoeni = $("#divNazivPoeni"),
		divLabelVreme = $("#divLabelVreme"),
		divBarVreme = $("#divBarVreme"),
		divLabelPoeni = $("#divLabelPoeni"),
		divBarPoeni = $("#divBarPoeni"),
		divLabelBonus = $("#divLabelBonus"),
		divBarBonus = $("#divBarBonus"),
		divProgres = $("#divProgres"),
		divProgresVreme = $("#divProgresVreme"),
		divProgresPoeni = $("#divProgresPoeni"),
		divProgresBonus = $("#divProgresBonus"),
		divSadrzajOverlay = $("#poeni"),
		divNazivVreme = $("#divNazivVreme"),
		divNazivBonus = $("#divNazivBonus"),
		
		divKonacniRezultat = $("#konacniRezultat"),
		divKraj = $("#kraj"),
		sveSlike = $("#igra img");
	
	$(function(){
	
	$("#plej").fadeIn(1500);
	$("#plej").on("click",function(){
		proba = setInterval(progresbarCircle,10);
		$("#ovajDiv").fadeIn(1500);
		$("#plej").off("click");
		
		
		
		
		
	});
	
	
	function progresbarCircle(){
		if(stepeni>=360){
			clearInterval(proba);
			$("#ovajDiv").fadeOut(1500,function(){
				if(document.cookie==="" || !document.cookie.includes("-MarkoMemorija"))
					napraviKolacic();
				else{
					var kolacic = document.cookie;
					cname = kolacic.slice(kolacic.indexOf("=")+1, kolacic.indexOf("-"))
				}
				$("#plej").fadeOut(500,function(){
					proba2 = setTimeout(prikaziPocetak,500);
				});
			});
		}
		else{
			stepeni=stepeni+1;
			$("#ovajDiv").css({
				transform:"rotate("+stepeni+"deg)"
			});
		}
	}
	
	function napraviKolacic(){
		
		var istice = new Date();
		istice.setTime(istice.getTime() + istice.setTime(2*24*60*60*1000));
		
		cname = prompt("unesite vase ime : ");
		if(typeof cname === "object")
			cname="unnamed_player";
		else
			cname = cname.trim();
		if(cname==="" || cname===" ")
			cname="unnamed_player";
		document.cookie = "cname=" + cname + "-MarkoMemorija;expires=" + istice; 
	}
	
	
});
	function prikaziPocetak(){
		
		clearTimeout(proba2);
		
		divOverlayPocetak.removeClass("divOverlay");
		divOverlayPocetak.addClass("prikaziOverlay");
		
		var imeIgraca = "Igrac : " + cname;
		var elem = $("<h3>",{
			'html':imeIgraca,
			'class':'crno'
		}),
		liElement = $("<li>",{
			'html':"nastavi sa igrom",
			'class':'tamnoCrveno',
			'data-idodustani':'odustani'
		});
		if(ponovoPokrenuto)
		{
			$("#lista li[data-idodustani]").remove();
			prviPutPokrenuto = false;
			drugiPutPokrenuto = false;
			ponovoPokrenuto=false;
		}
		else if(prviPutPokrenuto && !drugiPutPokrenuto){
			$("#lista").append(liElement);
			drugiPutPokrenuto = true;
		}
		
		if(!sadrzajOverlayPocetak.html().toString().includes("h3"))
			sadrzajOverlayPocetak.prepend(elem);
			prviPutPokrenuto = true;
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	function pokreniIgru(){
		
		
prviPutKliknuto = true;
		
$("#igra").html("");	
sveSlikeIzDiva="";
duzinaSvihSlikaIzDiva="";
sveSlikeIzDivaSaKlasom="";
brojSlika="";
brojRandomSlika="";
brojNizaSlikaZaDiv="";
sredjenRandomNizSlike=[];
var tekst="";
var nizSlika = [];
var nizVrednostiSlika = [];
var random = [];
var slikaZaDiv ="";

	var slike={"slike":[
	{"putanjaDoSlike":"assets/images/slika1.jpg","vrednostSlike":"1"},
	{"putanjaDoSlike":"assets/images/slika1.jpg","vrednostSlike":"2"},
	{"putanjaDoSlike":"assets/images/slika2.jpg","vrednostSlike":"1"},
	{"putanjaDoSlike":"assets/images/slika2.jpg","vrednostSlike":"2"},
	{"putanjaDoSlike":"assets/images/slika3.jpg","vrednostSlike":"1"},
	{"putanjaDoSlike":"assets/images/slika3.jpg","vrednostSlike":"2"},
	{"putanjaDoSlike":"assets/images/slika4.jpg","vrednostSlike":"1"},
	{"putanjaDoSlike":"assets/images/slika4.jpg","vrednostSlike":"2"},
	{"putanjaDoSlike":"assets/images/slika5.jpg","vrednostSlike":"1"},
	{"putanjaDoSlike":"assets/images/slika5.jpg","vrednostSlike":"2"},
	{"putanjaDoSlike":"assets/images/slika6.jpg","vrednostSlike":"1"},
	{"putanjaDoSlike":"assets/images/slika6.jpg","vrednostSlike":"2"},
	{"putanjaDoSlike":"assets/images/slika7.jpg","vrednostSlike":"1"},
	{"putanjaDoSlike":"assets/images/slika7.jpg","vrednostSlike":"2"},
	{"putanjaDoSlike":"assets/images/slika8.jpg","vrednostSlike":"1"},
	{"putanjaDoSlike":"assets/images/slika8.jpg","vrednostSlike":"2"}
	]}
	
	brojSlika = slike.slike.length;

	for(var i=0;i<16;i++){
		nizSlika.push(slike.slike[i].putanjaDoSlike + slike.slike[i].vrednostSlike);
	}
	
	var brojNizaSlika = nizSlika.length;
	var brojRandomSlika = random.length;
	for(var i=0;i<brojNizaSlika;i++){
		
		random.push(nizSlika[Math.floor(Math.random() * brojNizaSlika)]);
		brojRandomSlika = random.length;
		
		if(1 < brojRandomSlika){
			for(var j=0;j<brojRandomSlika;j++){
				for(var k=j+1;k<brojRandomSlika;k++){
					if(random[j].match(random[k])){
						random.pop();
						brojRandomSlika = random.length;
						j=brojRandomSlika-1;
						i--;
						break;
					}
					else
						continue;
				}
				
			}
		}
	}
	
	var brojRandomSlika = random.length;
	
	var sredjenRandomNizVrednosti = new Array();
	for(var i=0;i<brojRandomSlika;i++){
		sredjenRandomNizSlike.push(random[i].slice(0,(random[i].length)-1));
		sredjenRandomNizVrednosti.push(random[i].slice((random[i].length)-1,random[i].length));
	}
	
	var brojNizaSlikaZaDiv = sredjenRandomNizSlike.length;
	for(var i=0;i<brojNizaSlikaZaDiv;i++){
		slikaZaDiv+= $("#slika").html().replace("{{src}}", sredjenRandomNizSlike[i]).replace("{{vrednost}}",i);
		$("#igra").html(slikaZaDiv);
	}
	
	if(tezinaIgre.toLowerCase() === "jednostavan"){
		brzinaSakrivanja = 4000;
		sat = 60;
	}
	else if(tezinaIgre.toLowerCase() === "srednji"){
		brzinaSakrivanja = 3000;
		sat = 30;
	}
	else if(tezinaIgre.toLowerCase() === "tezi"){
		brzinaSakrivanja = 2000;
		sat = 15;
	}
	$("#ispisRezultat").html("").html("Poeni : 0");
	$("#ispisSata").html("VREME : " + sat);
	divSat.fadeIn(2000,function(){
		var ispisTezineIgre = $("<span>",{
			'html':'Nivo : ' + tezinaIgre
		});
		$("#mode").html(ispisTezineIgre).slideDown(1000,function(){
			$("#igra").fadeIn(3000,function(){
				putanjaDoSlike= "";
				sveSlikeIzDiva= $(".klasaSlika");
				duzinaSvihSlikaIzDiva = sveSlikeIzDiva.length;
				if(tezinaIgre.toLowerCase() === "jednostavan")
					sakrijOriginalneSlike= setTimeout(funkcijaSakrij,brzinaSakrivanja);
				else if(tezinaIgre.toLowerCase() === "srednji")
					sakrijOriginalneSlike= setTimeout(funkcijaSakrij,brzinaSakrivanja);
				else if(tezinaIgre.toLowerCase() === "tezi")
					sakrijOriginalneSlike= setTimeout(funkcijaSakrij,brzinaSakrivanja);
			});
		});
	});
	
	
	
	
	
	
	}
	$("#sadrzajOverlayPocetak").on("click", "li",function(){
		prviPutKliknuto = true;
			if($(this).html().toString().toLowerCase() != "nastavi sa igrom"){
				tezinaIgre = $(this).html();
				divSat.fadeOut(500);
				$("#mode").fadeOut(500);
				$("#igra").fadeOut(500);
				
				pokreniIgru();
			}
			else if($(this).html().toString().toLowerCase() === "nastavi sa igrom")
				
			divOverlayPocetak.removeClass("prikaziOverlay");
			divOverlayPocetak.addClass("divOverlay");
	});
	$("#mode").on("click",function(){
		
		clearInterval(odbrojavanje);
		prikaziPocetak();
	});
	
	$("#lista").on("click","li[data-idodustani=odustani]",function(){
		divOverlayPocetak.removeClass("prikaziOverlay");
		divOverlayPocetak.addClass("divOverlay");
	});
	
	function funkcijaSakrij(){
		for(var i=0;i<duzinaSvihSlikaIzDiva;i++){
			sveSlikeIzDiva[i].setAttribute("src", "assets/images/slika0.jpg");
		}
	}	
	
	
	
	
	