
var divTabela = $("#divTabela"),
	divUnosKorisnika = $("#divUnosKorisnika"),
	divPretraga = $("#divPretraga");

	divUnosKorisnika.addClass("js_sakrij");
	divPretraga.addClass("js_sakrij");

var nizObjekata = new Array();

	$(function(){

		prikaziTabelu();
	});
function prikaziTabelu(){
	
	
	$.ajax({
		type:"post",
		data:"ajax=pokupi",
		url: "assets/php_pages/imenikKupiIzBaze.php",
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
$("#meni li").on("click",function(){
	meni($(this).attr("value"));

function meni(vrednost){
	

	switch(vrednost.toString()){
		case "1":
			divTabela.attr("class","").addClass("js_prikazi");
			divUnosKorisnika.attr("class","").addClass("js_sakrij");
			divPretraga.attr("class","").addClass("js_sakrij");
			prikaziTabelu();
			break;
		case "2":
			divTabela.attr("class","").addClass("js_sakrij");
			divUnosKorisnika.attr("class","").addClass("js_prikazi");
			divPretraga.attr("class","").addClass("js_sakrij");
			break;
		case "3":
			divPretraga.attr("class","").addClass("js_prikazi");
			divTabela.attr("class","").addClass("js_prikazi");
			divUnosKorisnika.attr("class","").addClass("js_sakrij");
			break;
	}
}

});