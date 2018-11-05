$('#build10x10Board').click( function() {
  generateGameBoard(10,10);
});
function generateGameBoard(cells, rows){
let html = "";
   for (y = 0; y < rows; y++) //this loop creates a new number each row
     {
           html += "<tr>";
           for (x = 0; x < cells; x ++ ) //this loop creates a new number each cell
           {
               html += "<td>";
               html += "<i class='fa fa-square board' id='" + y + "-" + x + "' data-player='-1'></i>"
               html += "</td>";
           }
           html += "</tr>";
     }
     $("#myBoard").html(html);
}
var player = 1;
$("#myBoard").on("click", ".fa", function () {
//$('.fa').click( function() {
     if ($(this).hasClass('fa-square')) {
           if (player === 1) {
               $(this).removeClass('fa-square').addClass('fa-times');
               $(this).css('color', '#e89e3e');
               player = 2;
               $("#message").html('Turn: Player Two');
               $(this).data('player', 1);
           } else if (player === 2) {
               $(this).removeClass('fa-square').addClass('fa-circle-o');
               $(this).css('color', '#d11dc8');
               player = 1;
               $("#message").html('Turn: Player One');
               $(this).data('player', 2);
           }
     }
});

function checkWinners() {
  if ($('#1-1').data('player') === 1 && 
    $('#1-2').data('player') === 1 &&
    $('#1-3').data('player') === 1) {

      $("#message").html('Player One, Won!');

  }
}

function newCheckWinners(tile){
       let id = $(tile).attr("id");
       let loc = id.split("-");
       let y = parseInt(loc[0]);
       let x = parseInt(loc[1]);
       //count left to right
       let inarow = 1;
       inarow += countInARow(1, 0, x, y);
       inarow += countInARow(-1, 0, x, y);
       if (inarow > 2)
       {
             console.log("you won horizontal!");
       }
       let inarow = 1;
       inarow += countInARow(0, 1, x, y);
       inarow += countInARow(0, -1, x, y);
       if (inarow > 2)
       {
             console.log("you won vertical!");
       }
       let inarow = 1;
       inarow += countInARow(1, 1, x, y);
       inarow += countInARow(-1, -1, x, y);
       if (inarow > 2)
       {
             console.log("you won diag!");
       }
       let inarow = 1;
       inarow += countInARow(1, -1, x, y);
       inarow += countInARow(-1, 1, x, y);
       if (inarow > 2)
       {
             console.log("you won diag!");
       }
   }
   function countInARow(xstep, ystep, x, y){
       let inarow = 0;
       let startingX = xstep;
       let startingY = ystep;
       let next = "#" + (y + ystep) + "-" + (x + xstep);
       let id = "#" + y + "-" + x;
       while ( $(id).data("player") === $(next).data("player") ){
             xstep += startingX;
             ystep += startingY;
             inarow ++;
             next = "#" + (y + ystep) + "-" + (x + xstep);        
       }
       return inarow;
   }