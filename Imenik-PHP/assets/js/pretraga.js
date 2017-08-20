$(function(){
	$("#pretraga").on("keyup",function(){
		pretraga($(this).val());
	});
});
function pretraga(vrednost){
	
	$.ajax({
		type:"post",
		url:"assets/php_pages/imenikKupiIzBaze.php",
		data:"ajax=pretraga&podaci="+vrednost,
		success:function(response){
			var tabelaBody = $("#tabelaBody");
			var tekstZaPrikaz="";
			if(response === "ne valja"){
				tabelaBody.html("<td colspan='5'>Nema trazenih rezultata!</td>");
				return;
			}
			var izBaze = JSON.parse(response);
			var duzinaNizaIzBaze = izBaze.length;
			
			
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