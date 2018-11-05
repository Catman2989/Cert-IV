var host = 'http://localhost:3000';

$("#user-save").click(function () {
    let randnumb = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

    let id = $("#user-id").val();
    let name = $("#user-name").val();
    let color = $("#user-color").val();
    let icon = $("#user-icon").val();

    console.log("user id: " + id);
    console.log("user name: " + name);

    let user = {
        "id": randnumb,
        "name": name,
        "nukes": "3",
        "color": color,
        "icon": icon
    }
    console.log(user);
    $.ajax({
        url: host + "/players/", // + id
        method: "POST", //PATCH or DELETE
        data: user,
        success: function (result) {
            console.log("SUCCESS!");
            console.log(result);
        }
    });

    $("#getUsers").click();
});

$("#myTable").on("click","tr", function(){
    let id = $(this).find(".showUserDetails").data("userid");
    console.log(id);
    updateUser(id);
});

$("#myTable").on("click",".showUserDetails", function(){
    let id = $(this).data("userid");
    console.log(this);
    console.log("you clicked me: " + id);
    updateUser(id);
});

$("#getUsers").click(function () {
    $("#myTable").html("");

    $.ajax({
        url: host + "/players/",
        success: function (result) {

            let header = "";
            for (i = 0; i < result.length; i++) {
                let html = "<tr>";
                html += "<td>";
                html += "<button type='button' class='showUserDetails' data-userid='" + result[i].id + "'> Select Player </button>";
                html += "</td>";

                for (var key in result[i]) {
                    if (result[i].hasOwnProperty(key)) {

                        if (i === 0) {
                            header += "<th>";
                            header += key;
                            header += "</th>";
                        }

                        html += "<td>";
                        html += result[i][key];
                        html += "</td>";
                    }
                }
                html += "</tr>";
                $("#myTable").append(html);
            }
            $("#myTable").prepend("<thead><tr><th></th>" + header + "</tr></thead>");
        }
    })
});

function updateUser(id){
    $.ajax({
        url: host + "/players/" + id,
        success: function (result) {
            console.log("AJAX LOG");
            console.log(result);

            $("#user-id").val( result.id );
            $("#user-name").val( result.name );
            $("#user-nukes").val( result.nukes );
            $("#user-icon").val( result.icon );
            $("#user-color").val( result.color );
        }
    });
}

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


$(document).ready(function(){
    $("button").click(function(){
        $("createUser", "myTable").hide();
    });
});

$(".far fa-square").click(function () {
    
    $(this).removeClass('far fa-square').addClass('far ' + icon);	
    $(this).removeClass('playerID').addClass(id);
    let playerID = $("#user-id").val();

    let user = {
        "playerID": -1
    }
    $.ajax({
        url: host + "/tiles/",
        method: "POST",
        data: user,
        success: function (result) {
            console.log("SUCCESS!");
            console.log(result);
        }
    });
});