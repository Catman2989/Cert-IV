var player = 1;
var playerscore = 0;
var AIscore = 0;
var Rownum = 0;
var Colnum = 0;

function myFunctionp1() {
    var x = document.getElementById("myText1").value;
    document.getElementById("player1").innerHTML = x;
}

function myFunctionp2() {
    var x = document.getElementById("myText2").value;
    document.getElementById("player2").innerHTML = x;
}

function generateGameBoard(){
let html = "";
	for (x = 0; x < 10; x++)
	{
		html += "<tr>";
		for (y = 0; y < 10; y++)
		{
			//document.getElementById("match").innerHTML =
			//Math.floor(Math.random() * 9)+1;
			html += "<td>";
			html += "<i class='fa fa-bullseye' id=" + y + '-' + x + " data-player='-1'></i>"
			html += "</td>";
		}
		html += "</tr>";
	}
$("#myBoard").html(html);
}

//clear button
$("#clsBtn").click(function(){
	playerscore = 0;
	AIscore = 0;
	Rownum = 0;
	Colnum = 0;
	generateGameBoard();
});

//Fight me button
$("#FightMe").click(function(){
	Rownum = Math.floor((Math.random() * 10) + 1);
	console.log(Rownum)
	Colnum = Math.floor((Math.random() * 10) + 1);
	$("#Rownum").html('Row:' + Rownum);
	$("#Colnum").html('Colnum:' + Colnum);
    if ($('#' + Rownum + '-' + Colnum).hasClass('fa-fighter-jet')) {
		$('#' + Rownum + '-' + Colnum).removeClass('fa-fighter-jet').addClass('fa-times');
		AIscore += 10;
	}

});

$("#myBoard").on("click", ".fa", function () {
    if ($(this).hasClass('fa-bullseye')) {
		$(this).removeClass('fa-bullseye').addClass('fa-fighter-jet');		
	}
});