
var nizMeseci = [
			"Januar",
			"Februar",
			"Mart",
			"April",
			"Maj",
			"Jun",
			"Jul",
			"Avgust",
			"Septembar",
			"Oktobar",
			"Novembar",
			"Decembar"
	];
var daniUNedelji = [
			"Ponedeljak",
			"Utorak",
			"Sreda",
			"Cetvrtak",
			"Petak",
			"Subota",
			"Nedelja"
	];
var brojMeseci = nizMeseci.length,
	datum = new Date(),
	godina = datum.getFullYear(),
	tempGodina = godina,	
	dan = datum.getDate(),	
	mesec = datum.getMonth(),
	danUnedelji = datum.getDay(),

	sati = datum.getHours(),
	minuti = datum.getMinutes(),
	sekunde = datum.getSeconds(),


tekstDaniUNedelji = "<tr>",
duzinaNizaDanaUNedelji = daniUNedelji.length;
for(var i=0; i<duzinaNizaDanaUNedelji;i++){
	
		tekstDaniUNedelji +="<th>" + daniUNedelji[i] + "</th>";
	
}
tekstDaniUNedelji += "</tr>";
document.getElementById("daniUNedelji").innerHTML="";
document.getElementById("daniUNedelji").innerHTML=tekstDaniUNedelji;



function kalendar(){
		
		var tekstMesec="";
		for(var i=0;i<brojMeseci;i++){
			if(mesec===i){
				tekstMesec= nizMeseci[i];
			}
		}
		
		prikaziKalendar(tekstMesec,mesec);
		
}
var iso="";
var shortDate="";
var longDate="";
var fullDate="";


function datumIVreme(vrednost){
	
	document.getElementById("prikazSata").innerHTML = "";
				
				switch(vrednost){
					case "1":
						clearInterval(shortDate);
						clearInterval(longDate);
						clearInterval(fullDate);
						iso =  setInterval(function(){vremeIso(vrednost)},1000);
						break;
					case "2":
						clearInterval(iso);
						clearInterval(longDate);
						clearInterval(fullDate);
						shortDate =  setInterval(function(){vremeIso(vrednost)},1000);
						break;
					case "3":
						clearInterval(shortDate);
						clearInterval(iso);
						clearInterval(fullDate);
						longDate =  setInterval(function(){vremeIso(vrednost)},1000);
						break;
					case "4":
						clearInterval(shortDate);
						clearInterval(longDate);
						clearInterval(iso);
						fullDate =  setInterval(function(){vremeIso(vrednost)},1000);
						break;
				}
				
				
			
			
		
}

function vremeIso(vrednost){
	switch(vrednost){
		case "1":
		
			var tekst="";
			if((2===new Date().getMonth().length) && (new Date().getMonth().slice(1) === "1")){
		//ako mesec nema vodecu nulu, u vecini pregledaca ce ISO datum da se 
		//interpretira kao SHORT DATE
				tekst = "ISO Date : " + new Date().getFullYear() + "-" 
						+ new Date().getMonth() + "-" + new Date().getDate()
						+ ", Time : " + new Date().getHours() + ":" 
						+ new Date().getMinutes()+ ":" + new Date().getSeconds();
			}
			else{
				tekst ="ISO Date : " + new Date().getFullYear() + "-" + "0"
						+new Date().getMonth() + "-" +new Date().getDate()
						+ ", Time : " + new Date().getHours() + ":" 
						+ new Date().getMinutes()+ ":" + new Date().getSeconds();
			}
			
			break;
		case "2":
			var tekst="";
			tekst ="Short Date : " + new Date().getDate() + "/" + "0"
					+new Date().getMonth() + "/" + new Date().getFullYear()
					+ ", Time : " + new Date().getHours() + ":" 
					+ new Date().getMinutes()+ ":" + new Date().getSeconds();
			
			break;
		case "3":
			var tekstMesec="";
			for(var i=0;i<brojMeseci;i++){
				if(mesec===i){
					tekstMesec= nizMeseci[i];
				}
			}
//uzima se ime meseca, samo sto je ovde, radi prezentacije, ime meseca
//na sprskom, a kada se kuca komanda new Date("August 15 2016"), trebalo bi da
//se ukuca na engleskom, jer, u suprotnom, nece se vratiti odgovarajuci rezultat.
			if(3<tekstMesec.length){
				tekstMesec = tekstMesec.slice(2);
				alert(tekstMesec);
			}
//moze se pisati new Date("January 15 2016") ili new Date("Jan 15 2016"),
//ali sam ja skratio na 3 slova
			var tekst="";
			tekst ="Long Date : " + new Date().getDate() + " " + tekstMesec + " "
			+ new Date().getFullYear() + ", Time : " + new Date().getHours() + ":" +
			new Date().getMinutes()+ ":" + new Date().getSeconds();
			
			break;
		case "4":
			var tekstMesec="";
			for(var i=0;i<brojMeseci;i++){
				if(mesec===i){
					tekstMesec= nizMeseci[i];
				}
			}

			var tekstDan = "";
			for(var i=0;i<duzinaNizaDanaUNedelji;i++){
				if(danUnedelji===i){
					tekstDan= daniUNedelji[i];
				}
			}
//ime dana vazi kao i za ime meseca - mora biti na engleskom,
//da bi mogao da se dobije trazeni rezultat datuma			
			
			var tekst="";
			tekst ="Full Date : " + tekstDan + " " + tekstMesec + " " 
					+ new Date().getDate() + " " + new Date().getFullYear()
					+ ", Time : " + new Date().getHours() + ":" 
					+ new Date().getMinutes()+ ":" + new Date().getSeconds();
			
			break;
	}		
		var textNod = document.createTextNode(tekst);
		var h3 = document.createElement("H3");
		
		h3.appendChild(textNod);
		document.getElementById("prikazSata").innerHTML = "";
		document.getElementById("prikazSata").appendChild(h3);
	
}
	
	
function prikaziKalendarLevo(){
	
	
			var nazivMeseca = document.getElementById("imeMeseca").innerHTML;
			
			
			for(var i=0; i<brojMeseci;i++){
				if(nizMeseci[i]===nazivMeseca){
					if(nazivMeseca === "Januar"){
						tempGodina--;
						var tekstMesec = nizMeseci[brojMeseci-1];
						var trenutniMesec = brojMeseci-1;
						i=0;
						break;
					}
					else{
						var tekstMesec = nizMeseci[i-1];
						var trenutniMesec = i-1;
					}
				}
			}
			
			prikaziKalendar(tekstMesec,trenutniMesec);
}

function prikaziKalendarDesno(){
			
			var nazivMeseca = document.getElementById("imeMeseca").innerHTML;
			for(var i=0; i<brojMeseci;i++){
				if(nizMeseci[i]===nazivMeseca){
					if(nazivMeseca === "Decembar"){
						tempGodina++;
						var tekstMesec = nizMeseci.slice(0,1);
						var trenutniMesec = 0;
						break;
					}
					else{
						var tekstMesec = nizMeseci[i+1];
						var trenutniMesec = i+1;
					}
				}
			}
			prikaziKalendar(tekstMesec,trenutniMesec);
}

function prikaziKalendar(tekstMesec,trenutniMesec){
			document.getElementById("tempGodina").innerHTML=tempGodina;
			
			
			var tekst = document.createTextNode(tekstMesec);
			document.getElementById("imeMeseca").innerHTML="";
			document.getElementById("imeMeseca").appendChild(tekst);
		
			var prviDanUMesecu = new Date(tempGodina,trenutniMesec,1).getDay();
			if(0===prviDanUMesecu){
				prviDanUMesecu = 6;
				var nultiDanUMesecu = prviDanUMesecu-1;
			}
			else if(1===prviDanUMesecu){
				prviDanUMesecu--;
				var nultiDanUMesecu = 0;
			}
			
			else{
				prviDanUMesecu--;
				var nultiDanUMesecu = prviDanUMesecu-1;
			}
	
			var brojDanaUMesecu = proveriKolikoImaDana(tempGodina,trenutniMesec+1,0);
			var duzinaZaForPetlju = brojDanaUMesecu + prviDanUMesecu;
	
			var tabela="<tr>";
			for(var i=1; i<duzinaZaForPetlju;i++){
				if(1===i){
					for(var j=0; j<prviDanUMesecu;j++){
						
							tabela+="<td></td>";
						if(nultiDanUMesecu===j){
							i=prviDanUMesecu;
							continue;
						}
					}
				}
				if(0===prviDanUMesecu){
					if(1===i){
						tabela+="<td>" + i + "</td>";
						continue;
					}
					else if(0===(i-1)%7){
						tabela+="</tr><tr>";
					}
				}
				else{
					if(0===(i)%7){
						tabela+="</tr><tr>";
					}
				}
				
				if(
					(godina===tempGodina) && 
					(trenutniMesec === mesec)&&
					((i-nultiDanUMesecu)===dan)
				)
					tabela +="<td class='danas'>" + (i-3) + "</td>";
				else
					tabela+="<td>" + (i-nultiDanUMesecu) + "</td>";
				
					
					
				
				
				
			}
			tabela+="</tr>";
			document.getElementById("tabelaDani").innerHTML = tabela;	
		

		
		
}
		

function proveriKolikoImaDana(tempGodina,mesec,dan){
	return new Date(tempGodina,mesec,dan).getDate();
}
