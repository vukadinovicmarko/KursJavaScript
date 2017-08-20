var tekst="";
var nizSlika = [];
var nizVrednostiSlika = [];
var random = [];
var slikaZaDiv ="";


// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
    // At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;


if(isFirefox){
	var request = new XMLHttpRequest();
	request.overrideMimeType("application/json");
	request.open("GET", "JSONFajl.json", false);
	request.send(null);
	var slike = JSON.parse(request.responseText);
	brojSlika = slike.slike.length;
}
else {
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
}


	
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
	var sredjenRandomNizSlike = new Array();
	var sredjenRandomNizVrednosti = new Array();
	for(var i=0;i<brojRandomSlika;i++){
		sredjenRandomNizSlike.push(random[i].slice(0,(random[i].length)-1));
		sredjenRandomNizVrednosti.push(random[i].slice((random[i].length)-1,random[i].length));
	}
	
	
	var brojNizaSlikaZaDiv = sredjenRandomNizSlike.length;
	for(var i=0;i<brojNizaSlikaZaDiv;i++){
		slikaZaDiv+= document.getElementById("slika").innerHTML.replace("{{src}}", sredjenRandomNizSlike[i]).replace("{{vrednost}}",i);
		document.getElementById("igra").innerHTML=slikaZaDiv;
	}
	
	var putanjaDoSlike = "";
	var sveSlikeIzDiva = document.getElementsByClassName("klasaSlika");
	var duzinaSvihSlikaIzDiva = sveSlikeIzDiva.length;
	var sakrijOriginalneSlike= setTimeout(funkcijaSakrij,3500);
	
	
	function funkcijaSakrij(){
		
	
		for(var i=0;i<duzinaSvihSlikaIzDiva;i++){
			sveSlikeIzDiva[i].setAttribute("src", "assets/images/slika0.jpg");
		}
	}	
	
	
	
	
	
	
	