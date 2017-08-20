$(function(){
	var imenikModel = Backbone.Model.extend({
		initialize : function(){
			this.on("invalid",function(model,error){
				greskeValidacija = error;
			});
		},
		validate : function(objekat,opcije){
			var greske = new Array(),
				regIme = /^[A-z]{2,}$/,
				regPrezime = /^[A-z]{3,15}(\s[A-z]{2,15})?$/,
				regAdresa = /^[A-z]{4,15}(\s[A-z]{2,15})?(\s[A-z]{2,15})?\s[1-9][0-9]{0,3}$/,
				regbrojFiksnogTel = /^0[1-5][1-9][\/\-]?([0-9]){6,7}$/,
				regbrojMobilnogTel = /^06[01234569][\/\-]?([0-9]){6,7}$/;

			if(!regIme.test(objekat.ime)){
				greske.push("polje 'Ime' mora sadrzati barem dva slova");
			}
			if(!regPrezime.test(objekat.prezime)){
				greske.push("polje 'Prezime' mora sadrzati barem tri slova");
			}
			if(!regAdresa.test(objekat.adresa)){
				greske.push("polje 'Adresa' mora sadrzati barem cetiri slova, razmak i broj");
			}
			if(!regbrojFiksnogTel.test(objekat.brojKucnog)){
				greske.push("polje 'Broj kucnog telefona' mora biti u formatu (0xx)(xxxxxx)");
			}
			if(!regbrojMobilnogTel.test(objekat.brojMobilnog)){
				greske.push("polje 'Broj mobilnog telefona' mora biti u formatu (06x)(xxxxxx)");
			}

			if(0 < greske.length ){
				return greske;
			}
		}
	});
	var greskeValidacija = new Array();
	var Osobe = Backbone.Collection.extend({
		model:imenikModel
	});
var kolekcijaOsoba = new Osobe();
	if(typeof localStorage.MarkoVukadinovicImenik === "undefined"){
		kolekcijaOsoba = new Osobe([
			new imenikModel({
				ime:"Marko",
				prezime:"Vukadinovic",
				adresa:"Markova 1",
				brojKucnog:"011/000000",
				brojMobilnog:"064/111111"
				}),
			new imenikModel({
				ime:"Petar",
				prezime:"Petrovic",
				adresa:"Petrova 1",
				brojKucnog:"011/111222",
				brojMobilnog:"064/222333"
				}),
			new imenikModel({
				ime:"Laza",
				prezime:"Lazarevic",
				adresa:"Lazina 1",
				brojKucnog:"011/9876543",
				brojMobilnog:"064/1234567"
				}),
			new imenikModel({
				ime:"Milka",
				prezime:"Canic",
				adresa:"Milkina 1",
				brojKucnog:"011/3493954",
				brojMobilnog:"064/8474673"
				})
		]);

	} else {
		var niz = JSON.parse(localStorage.MarkoVukadinovicImenik).kolekcija;
		var duzina = niz.length;
		for(var i=0;i<duzina;i++){
			kolekcijaOsoba.push(new imenikModel({
				ime : niz[i].ime,
				prezime : niz[i].prezime,
				adresa : niz[i].adresa,
				brojKucnog : niz[i].brojKucnog,
				brojMobilnog : niz[i].brojMobilnog
			}));
		}
		//alert(JSON.stringify(kolekcijaOsoba.toJSON()));
	}


var kliknutoDvaput = false;

	var pogled = Backbone.View.extend({
		events : {
			"click th" : "sortiraj"
		},
		initialize:function(){
			this.render();
		},
		render:function(){
			var template = _.template($("#template_table").html());
			var tableHtml = template({collection:this.collection.toJSON()});
			this.$el.html(tableHtml);
			$("#tableImenik tBody tr:even").addClass("parno");
			$("#tableImenik tBody tr:even td").addClass("parnoBorderi");
			$("#tableImenik tBody tr:odd").addClass("neparno");
			var duzinaTdova = $("#tableImenik tBody tr:odd td").length;
			for(var i= 0; i<duzinaTdova;i++){
				if((i+1)%5 != 0){
					$("#tableImenik tBody tr:odd td").eq(i).addClass("neparnoBorderi");
				}
			}
			return this;
		},
		sortiraj : function(e){
			var sortirajPo = $(e.currentTarget).data("sortiraj-po");
			switch(sortirajPo){
				case "ime":
					this.collection.comparator = function (osoba1,osoba2){
						var porediOsobu1 = osoba1.get("ime") + "-" + osoba1.get("prezime");
						var porediOsobu2 =  osoba2.get("ime") + "-" + osoba2.get("prezime");
						if(kliknutoDvaput){
							return - porediOsobu1.localeCompare(porediOsobu2);
						} else {
							return porediOsobu1.localeCompare(porediOsobu2);
						}
					}
				break;
				case "prezime":
					this.collection.comparator = function (osoba1,osoba2){
						var porediOsobu1 = osoba1.get("prezime") + "-" + osoba1.get("ime");
						var porediOsobu2 =  osoba2.get("prezime") + "-" + osoba2.get("ime");
						if(kliknutoDvaput){
							return - porediOsobu1.localeCompare(porediOsobu2);
						} else {
							return porediOsobu1.localeCompare(porediOsobu2);
						}
					}
				break;
				case "adresa":
					this.collection.comparator = function (osoba1,osoba2){
						var porediOsobu1 = osoba1.get("adresa") + "-" + osoba1.get("brojKucnog");
						var porediOsobu2 =  osoba2.get("adresa") + "-" + osoba2.get("brojKucnog");
						if(kliknutoDvaput){
							return - porediOsobu1.localeCompare(porediOsobu2);
						} else {
							return porediOsobu1.localeCompare(porediOsobu2);
						}
					}
				break;
				case "brojKucnog":
					this.collection.comparator = function (osoba1,osoba2){
						var porediOsobu1 = osoba1.get("brojKucnog") + "-" + osoba1.get("brojMobilnog");
						var porediOsobu2 =  osoba2.get("brojKucnog") + "-" + osoba2.get("brojMobilnog");
						if(kliknutoDvaput){
							return - porediOsobu1.localeCompare(porediOsobu2);
						} else {
							return porediOsobu1.localeCompare(porediOsobu2);
						}
					}
				break;
				case "brojMobilnog":
					this.collection.comparator = function (osoba1,osoba2){
						var porediOsobu1 = osoba1.get("brojMobilnog") + "-" + osoba1.get("brojKucnog");
						var porediOsobu2 =  osoba2.get("brojMobilnog") + "-" + osoba2.get("brojKucnog");
						if(kliknutoDvaput){
							return - porediOsobu1.localeCompare(porediOsobu2);
						} else {
							return porediOsobu1.localeCompare(porediOsobu2);
						}
					}
				break;
			}
			this.collection.sort();
			if(kliknutoDvaput){
				kliknutoDvaput = false;
			} else{
				kliknutoDvaput = true;
			}
			this.render();
		}
	});

var pogledNoviUnos = Backbone.View.extend({
	events:{
		'submit' : 'imenikUnos'
	},
	initialize:function(){
		this.render();
	},
	render: function(){
		var formaPrikaz= '<div id="divUnosKorisnika">';
		formaPrikaz+='    <form id="forma">';
		formaPrikaz+='		<table id="tabelaUnos" >                                               ';
		formaPrikaz+='			<tr id="trIme" >                                                   ';
		formaPrikaz+='				<th align="center" id="thIme" >                                ';
		formaPrikaz+='					Ime                                                        ';
		formaPrikaz+='				</th>                                                          ';
		formaPrikaz+='				<td align="center" id="tdIme" >                                ';
		formaPrikaz+='					<input type="text" id="tbIme" class="tdInput"/>            ';
		formaPrikaz+='				</td>                                                          ';
		formaPrikaz+='				<td align="center" id="tdImeGreske" class="ispisGreske"        ';
		formaPrikaz+='				style="width:200px;">                                          ';
		formaPrikaz+='				</td>                                                          ';
		formaPrikaz+='			</tr>                                                              ';
		formaPrikaz+='			<tr id="trPrezime">                                                ';
		formaPrikaz+='				<th align="center" >                                           ';
		formaPrikaz+='					Prezime                                                    ';
		formaPrikaz+='				</th>                                                          ';
		formaPrikaz+='				<td align="center" id="tdPrezime" >                            ';
		formaPrikaz+='					<input type="text" id="tbPrezime" class="tdInput"/>        ';
		formaPrikaz+='				</td>                                                          ';
		formaPrikaz+='				<td align="center" id="tdPrezimeGreske" class="ispisGreske"    ';
		formaPrikaz+='				style="width:200px;">                                          ';
        formaPrikaz+='                                                                             ';
		formaPrikaz+='				</td>                                                          ';
		formaPrikaz+='			</tr>                                                              ';
		formaPrikaz+='			<tr id="trAdresa">                                                 ';
		formaPrikaz+='				<th align="center" >                                           ';
		formaPrikaz+='					Adresa                                                     ';
		formaPrikaz+='				</th>                                                          ';
		formaPrikaz+='				<td align="center"  >                                          ';
		formaPrikaz+='					<input type="text" id="tbAdresa" class="tdInput"/>         ';
		formaPrikaz+='				</td>                                                          ';
		formaPrikaz+='				<td align="center"  id="tdAdresaGreske" class="ispisGreske"    ';
		formaPrikaz+='				style="width:200px;">                                          ';
        formaPrikaz+='                                                                             ';
		formaPrikaz+='				</td>                                                          ';
		formaPrikaz+='			</tr>                                                              ';
		formaPrikaz+='			<tr id="trBrojKucnog">                                             ';
		formaPrikaz+='				<th align="center"  >                                          ';
		formaPrikaz+='					Broj kucnog telefona                                       ';
		formaPrikaz+='				</th>                                                          ';
		formaPrikaz+='				<td align="center"  >                                          ';
		formaPrikaz+='					<input type="text" id="tbKucniTel"                         ';
		formaPrikaz+='					class="tdInput"/>                                          ';
		formaPrikaz+='				</td>                                                          ';
		formaPrikaz+='				<td align="center"  id="tdBrojKucnogGreske" class="ispisGreske"';
		formaPrikaz+='				style="width:200px;">                                          ';
        formaPrikaz+='                                                                             ';
		formaPrikaz+='				</td>                                                          ';
		formaPrikaz+='			</tr>                                                              ';
        formaPrikaz+='                                                                             ';
		formaPrikaz+='			<tr id="trBrojMobilnog">                                           ';
		formaPrikaz+='				<th align="center"  id="thMobTel">                             ';
		formaPrikaz+='					Broj mobilnog telefona                                     ';
		formaPrikaz+='				</th>                                                          ';
		formaPrikaz+='				<td align="center"  >                                          ';
		formaPrikaz+='					<input type="text" id="tbMobilniTel"                       ';
		formaPrikaz+='					class="tdInput" />                                         ';
		formaPrikaz+='				</td>                                                          ';
		formaPrikaz+='				<td align="center"  id="tdBrojMobilnogGreske"                  ';
		formaPrikaz+='				class="ispisGreske" style="width:200px;">                      ';
		formaPrikaz+='				</td>                                                          ';
		formaPrikaz+='			</tr>                                                              ';
		formaPrikaz+='			<tr>                                                               ';
		formaPrikaz+='				<td></td>                                                      ';
		formaPrikaz+='				<td  align="center" ><input type="submit" class="dugmici"      ';
		formaPrikaz+='				value="Unesi korisnika" >                                      ';
		formaPrikaz+='				</td>                                					       ';
		formaPrikaz+='				<td></td>                                                      ';
		formaPrikaz+='			</tr>                                                              ';
		formaPrikaz+='		</table>                                                               ';
		formaPrikaz+='		</form>                                                                ';
		formaPrikaz+='		<div class="ocisti"></div>                                             ';
		formaPrikaz+=' </div>                                                                      ';
		this.$el.html(formaPrikaz);
		return this;
	},
	imenikUnos : function(event){
		event.preventDefault();
		var ime =          $("#tbIme").val();
		var prezime =      $("#tbPrezime").val();
		var adresa =       $("#tbAdresa").val();
		var brojKucnog =   $("#tbKucniTel").val();
		var brojMobilnog = $("#tbMobilniTel").val();



		var noviKorisnik = new imenikModel({
			ime:ime,
			prezime:prezime,
			adresa:adresa,
			brojKucnog:brojKucnog,
			brojMobilnog:brojMobilnog
		});

		if(noviKorisnik.isValid()){
			kolekcijaOsoba.push(noviKorisnik);
			var jsonKolekcija = kolekcijaOsoba.toJSON();
			var upisJson = {"kolekcija": jsonKolekcija};
			localStorage.setItem("MarkoVukadinovicImenik",JSON.stringify(upisJson));
			noviPogled.render();
			alert("uspesno unesen korisnik");
		} else{
			var duzina = greskeValidacija.length;
			var greskeIspis = "";
			for(var i = 0; i < duzina; i++){
				greskeIspis += greskeValidacija[i] +", ";
			}
			alert(greskeIspis);
		}
	}
});

var pogledZaPretragu = Backbone.View.extend({
	events:{
		'keyup #pretraga' : 'pretraga'
	},
	initialize:function(){
		this.render();
	},
	render: function(){
		var tbPretraga = $("<input>",{
			"type" : "text",
			"id" : "pretraga",
			"class": "inputPretraga",
			"placeholder":"pretrazi..."
		});
		$("#divPretraga").html(tbPretraga);
		return this;
	},
	pretraga : function(event){
		var trazi = $(event.currentTarget).val().trim().toUpperCase();
		var duzinaNiza =kolekcijaOsoba.length;
		var pretragaRezultat = new Osobe();
		for(var i =0; i< duzinaNiza;i++){
			if(-1 !== kolekcijaOsoba.at(i).get("ime").toUpperCase().indexOf(trazi)
				|| -1 !== kolekcijaOsoba.at(i).get("prezime").toUpperCase().indexOf(trazi)
				|| -1 !== kolekcijaOsoba.at(i).get("adresa").toUpperCase().indexOf(trazi)
				|| -1 !== kolekcijaOsoba.at(i).get("brojKucnog").indexOf(trazi)
				|| -1 !== kolekcijaOsoba.at(i).get("brojMobilnog").indexOf(trazi)){
				pretragaRezultat.push(kolekcijaOsoba.at(i));
			}
		}
		var imenikNakonPretrage = new pogled({el:'#sadrzaj',collection:pretragaRezultat});
		imenikNakonPretrage.render();
	}
});
	var unosPogled = new pogledNoviUnos({el:("#divUnosKorisnika"), collection:kolekcijaOsoba});
	var noviPogled = new pogled({el:("#sadrzaj"), collection:kolekcijaOsoba});
	var pretragaPogled = new pogledZaPretragu({el:("#divPretraga"), collection:kolekcijaOsoba});
});