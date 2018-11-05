let players;
let servername = "http://localhost:3000"


function generateGameBoard(){
    let html = "";
    var num = 0;
        for (x = 0; x < 10; x++)
        {
    
            html += "<tr>";
            for (y = 0; y < 10; y++)
            {
                num++
                html += "<td>";
                html += "<i class='far fa-square' idNum=" + num + " X=" + x + " Y=" + y + " playerID= player data-player='-1'></i>"
                html += "</td>";
            }
            html += "</tr>";
        }
    $("#myBoard").html(html);
    }

$(document).ready(function () {
    
    $("#select-button").click(function () {
        $.ajax({
            url: servername + "/players/",
            success: function (result) {
                players = result
                $("#playlist").html("")
                $("#playlist").append(`<option value="" disabled selected>Select Player</option>`)
                for (i = 0; i < players.length; i++) {
                    $("#playlist").append(`<option value="${players[i].name}">${players[i].name}</option>`)
                }
                //console.log(players);
            }
        })
    });
    $("#create-button").click(function () {
        let name = prompt("what is your name?")
        let color = prompt("What color do you want?")
        let icon = prompt("choose your icon?")
        let playerId = Math.floor(Math.random() * 10000) + 1;
        let user = {
            "id": playerId,
            "name": name,
            "nukes": "3",
            "color": color,
            "icon": icon
        }
        $.ajax({
            url: servername + "/players/", // + id
            method: "POST", //PATCH or DELETE
            data: user,
            success: function (result) {
                console.log("SUCCESS!");
                console.log(result);
            }
        });
        console.log(user);
    });

    $("#start-button").click(function () {
        generateGameBoard();
    });
    
    $("#test-button").click(function () {
        console.log(players[0].name);
    });
});