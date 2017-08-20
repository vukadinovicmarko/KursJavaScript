(function ($) {
    $.fn.slajder = function (options){
		var elem = $(this);
			
		
		podesavanja = $.extend({
			inicijalnoPrikazSlajdera:2000,
            vremeZaSliku: 10000,
			pomerajSlke:2000,
			vremeZaOpisFadeIn:3000,
			vremeZaOpisFadeOut:1500,
            pauseOnHover: false,
            
        }, options);
		
		var brojSlika = jsonPodaci.slike.length;
		var brojacSlika=0;
		
		
		var proba;
		var proba2;
		var proba3;
		var proba4,
		
		kliknuto=true,
		isClicked=false;
		var hover = true;
		ucitajSlike(brojSlika);
		
		izvrsiAnimaciju();

		
		
		
		
		
		
		
		
		
		
		
		
		
		function ucitajSlike(brojSlika){
			
			var divSlider = $("<div>",{
					"id":"slider",
					"html":divOpis
			});
			var divSliderOkvir = $("<div>",{
					"id":"slider-okvir"
			});
			var divThumbOkvir = $("<div>",{
					"id":"thumb-okvir"
			});
			var slikaNavLevo = $("<img>",{
				"src":"assets/images/left_arrow.png"
			});
			var slikaNavDesno = $("<img>",{
				"src":"assets/images/right_arrow.png",
				"class":"slikaDesno"
			});
			var divNavLevo = $("<div>",{
					"id":"div_levo",
					"html":slikaNavLevo,
					"class":"navigacija"
			});
			var divNavDesno = $("<div>",{
					"id":"div_desno",
					"html":slikaNavDesno,
					"class":"navigacija"
			});
			for(var i=0; i<brojSlika;i++){
				var slika = $("<img>",{
					"src":jsonPodaci.slike[i].srcSlideshow,
					"class":"slika"
				});
				var slikaThumb = $("<img>",{
					"src":jsonPodaci.slike[i].srcThumb,
					"class":"thumb",
					"data-imgid":i
				});
				var h3 = $("<h3>",{
					"html":jsonPodaci.slike[i].naslov,
				});
				var p = $("<p>",{
					"html":jsonPodaci.slike[i].opis,
				});
				
				var divOpis = $("<div>",{
					"class":"opis",
					"html":h3
				});
				divOpis.append(p);
				
				divSlider.append(slika);
				divSlider.append(divOpis);
				
				divThumbOkvir.append(slikaThumb);
				
			}
			divSliderOkvir.append(divSlider);
			
			elem.append(divSliderOkvir);
			elem.append(divNavDesno);
			elem.append("<div class='ocisti'></div>");
			elem.append(divThumbOkvir);
			elem.prepend(divNavLevo);
			
		}
		
		function izvrsiAnimaciju(){
			clearTimeout(proba2);
			clearTimeout(proba4);
			clearTimeout(proba3);
			clearTimeout(proba);
			isClicked=true;
				/* $("#thumb-okvir img").removeClass("aktivno"); */
				/* $("#thumb-okvir img[data-imgid="+brojacSlika+"]").addClass("aktivno"); */
				$("#thumb-okvir").fadeIn(podesavanja.inicijalnoPrikazSlajdera);
				fejdTekst();
			
		}
		
		function fejdTekst(){
			isClicked=false;
			proba = setTimeout(fejdInTekst,2000);
		}
		function fejdInTekst(){
			clearTimeout(proba);
			
			$(".opis h3").fadeIn(podesavanja.vremeZaOpisFadeIn);
			$(".opis p").fadeIn(podesavanja.vremeZaOpisFadeIn);
			proba = setTimeout(proveriDaLiJeKraj,podesavanja.vremeZaSliku);
		}
		function proveriDaLiJeKraj(){
			isClicked=false;
			clearTimeout(proba);
			$(".opis h3").fadeOut(podesavanja.vremeZaOpisFadeOut);
			$(".opis p").fadeOut(podesavanja.vremeZaOpisFadeOut);
			
			if(brojacSlika>=brojSlika-1){
				brojacSlika=0;
				proba2 = setTimeout(resetuj,3000);
			}
			else
				proba = setTimeout(pomeriUlevo,3000);
				
		}
		function pomeriUlevo(){
			clearTimeout(proba2);
			
			$("#slider").animate({left:"-=800"},podesavanja.pomerajSlke,function(){
				$("#thumb-okvir img").removeClass("aktivno");
							$("#thumb-okvir img[data-imgid="+brojacSlika+"]").addClass("aktivno");
							$("#thumb-okvir img[data-imgid="+brojacSlika+"]").fadeOut(1).fadeIn();
				
				
				izvrsiAnimaciju();
			});
			
			brojacSlika++;
			
		}
		function pomeriUdesno(){
			clearTimeout(proba2);
			
			$("#slider").animate({left:"+=800"},podesavanja.pomerajSlke,function(){
				$("#thumb-okvir img").removeClass("aktivno");
							$("#thumb-okvir img[data-imgid="+brojacSlika+"]").addClass("aktivno");
							$("#thumb-okvir img[data-imgid="+brojacSlika+"]").fadeOut(1).fadeIn();
				
				
				izvrsiAnimaciju();
			});
			
			brojacSlika--;
			
		}
		
		function resetuj(){
			
			
			clearTimeout(proba);
			isClicked=true;
			$("#slider").animate({left:"+="+((brojSlika-1)*800)},podesavanja.pomerajSlke,function(){
					$("#thumb-okvir img").removeClass("aktivno");
					$("#thumb-okvir img[data-imgid="+brojacSlika+"]").addClass("aktivno");
					izvrsiAnimaciju();
				});
				
			
		}
		
		
		$(".thumb").click(kliknutoNaThumb);
		function kliknutoNaThumb(){
			kliknutaSlika=$(this).attr("data-imgid");
			if(isClicked)
				return;
			else{
				isClicked=true;
				clearTimeout(proba2);
				clearTimeout(proba4);
				clearTimeout(proba3);
				clearTimeout(proba);
				
				console.log("brojac : " + brojacSlika);
					console.log("kliknuta slika: " +kliknutaSlika);
				//console.log(brojacSlika);
				$(".opis h3").stop().fadeOut(200);
				$(".opis p").stop().fadeOut(200);
				var kliknutaSlika = $(this).attr("data-imgid");
				
				if(brojacSlika < kliknutaSlika){
					var pomeriZa = kliknutaSlika - brojacSlika;
					brojacSlika=kliknutaSlika;
					$("#slider").animate({left:"-="+((pomeriZa)*800)},podesavanja.pomerajSlke,function(){
							izvrsiAnimaciju();
					});
					
				}
				else if(brojacSlika > kliknutaSlika){
					var pomeriZa = brojacSlika - kliknutaSlika;
					brojacSlika=kliknutaSlika;
					$("#slider").animate({
						left:"+="+((pomeriZa)*800)
					},podesavanja.pomerajSlke,function(){
							izvrsiAnimaciju();
					});
					
				}
				
				else if(parseInt(brojacSlika) === parseInt(kliknutaSlika)){
					
					isClicked=false;
					return;
				}
				
				$("#thumb-okvir img").removeClass("aktivno");
				$("#thumb-okvir img[data-imgid="+brojacSlika+"]").addClass("aktivno");
				$("#thumb-okvir img[data-imgid="+brojacSlika+"]").fadeOut(1).fadeIn();
				
			}
			
		}
			
			
		
		$(".navigacija").click(kliknutoNav);
		function kliknutoNav(event){
			//event.preventDefault();
			if(isClicked === true){
				console.log(isClicked);
			
				return;
		}
			else{
				isClicked=true;
				clearTimeout(proba2);
				clearTimeout(proba4);
				clearTimeout(proba3);
				clearTimeout(proba);
				$(".opis h3").stop().fadeOut(200);
				$(".opis p").stop().fadeOut(200);
				if ($(this).attr("id")==="div_levo"){
					if(parseInt(brojacSlika) <= 0){
						brojacSlika=brojSlika-1;
						$("#slider").animate({left:"-="+((brojSlika-1)*800)},podesavanja.pomerajSlke,function(){
							
									izvrsiAnimaciju();
						});
					}
					else{
						pomeriUdesno();
						
					}
				}
				else{
					if(parseInt(brojacSlika) === (brojSlika-1)){
						resetuj();
						/* $("#slider").animate({left:"+="+(brojacSlika*800)},podesavanja.pomerajSlke,function(){
									brojacSlika=0;
									izvrsiAnimaciju();
						}); */
					}
					else{
						pomeriUlevo();
						
					}
				}
			}
			
		}
		/* $("#div_levo").click(function(event){
			event.preventDefault();
				
				else if (parseInt(brojacSlika) === 1){
					brojacSlika=0;
					
					$("#slider").animate({left:"+=800"},podesavanja.pomerajSlke,function(){
								izvrsiAnimaciju();
					});
				}
				
			
			
		}); */
		/* $("#div_desno").on("click",function(){
			clearTimeout(proba2);
			clearTimeout(proba4);
			clearTimeout(proba3);
			clearTimeout(proba);
			$(".opis h3").stop().fadeOut(200);
			$(".opis p").stop().fadeOut(200);
			
			
			
		}); */
		
		if(podesavanja.pauseOnHover){
			isClicked=false;
			$("#slider-okvir").on("mouseover",$(".opis"),function(){
				clearTimeout(proba2);
				clearTimeout(proba4);
				clearTimeout(proba3);
				clearTimeout(proba);
				$(".opis h3").stop().fadeOut(200);
				$(".opis p").stop().fadeOut(200);
					
			});
			$("#slider-okvir").on("mouseout",$(".opis"),function(){
					
					$(".opis h3").fadeIn(podesavanja.vremeZaOpisFadeOut);
					$(".opis p").fadeIn(podesavanja.vremeZaOpisFadeOut);
					proba3 = setTimeout(proveriDaLiJeKraj,5000);
					
			});
		} 
		
		
	}
}(jQuery)
);