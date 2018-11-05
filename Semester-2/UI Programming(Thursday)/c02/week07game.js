//var host = 'http://localhost:3000';
var host = "http://149.28.182.129:3000";

$(document).ready(function () {
    console.log("ready!");
    $.ajax({
        url: host + "/users/",
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                //console.log(result[i]);

                let html = "<option value=" + result[i].id + ">";
                html += result[i].id + ": " + result[i].name;
                html += "</option>";

                $("#user-select").append(html);
            }
        }
    })

    let icons = [
        'fa fa-snowflake-o',
        'fa fa-telegram',
        'fa fa-microchip',
        'fa fa-area-chart',
        'fa fa-battery-full',
        'fa fa-bicycle',
        'fa fa-birthday-cake',
        'fa fa-beer',
        'fa fa-cog',
        'fa fa-users',
        'fa fa-fax'
    ];

    for (i = 0; i < icons.length; i++) {
        let html = "";
        html += "<div class='icon-box'>";
        html += "<i class='" + icons[i] + "'>";
        html += "</div>";
        $("#icons").append(html);
    }

}); // END $(document).ready

$("#icons").on("click", "i", function () {
    console.log(this);
    let id = $("#user-select").val();
    console.log("id : " + id);
    //CHECK IF THIS ICON ALREADY HAS A USER .hasData("userid")
    //IF NOT, LET THEM CLAIM THE ICON - PATCH, user.class
    //IF SO, DONT LET THEM CLAIM THE ICON

    // $.hasData(this) 

    if ($(this).data('userid') > 0) {
        console.log('HAS USER');

    } else {
        console.log('NO USER');
        $(this).data("userid", id);
        $(this).css("color", "blue");

        let userclass = $(this).attr('class');
        console.log("userclass : " + userclass);
        console.log("userid : " + $(this).data("userid"));
        let user = {
            id: id,
            class: userclass
        }
        $.ajax({
            url: host + "/users/" + id,
            method: "PATCH",
            data: user,
            success: function (result) {
                console.log("SUCCESS!");
            }
        });
    }
});

var updateIconsCount = 0;
function updateIcons(){
    console.log("updated icons: " + updateIconsCount);
    updateIconsCount ++;
    $.ajax({
        url: host + "/users/",
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                if ( typeof result[i].class != 'undefined' && typeof result[i].color != 'undefined'){
                    let color = result[i].color;
                    let classes = result[i].class;
                    let mainclass = classes.split(" ")[1];
                    console.log(mainclass);
                    mainclass = "." + mainclass;

                    if ( $(mainclass).length){
                        $(mainclass).css("color", color);
                        $(mainclass).data("userid", result[i].id)
                    }
                    else {
                        //we need to create it & colour it
                        let html = "";
                        html += "<div class='icon-box'>";
                        html += "<i class='" + result[i].class + "' data-userid='" + result[i].id + "'>";
                        html += "</div>";
                        $("#icons").append(html);
                    }
                }
            }
        }
    })
    setTimeout( function(){
        updateIcons();
    }, 5000)
}
updateIcons();


















/*

var host = 'http://149.28.182.129:3000';

$( document ).ready(function() {
    console.log( "ready!" );
    $.ajax({
        url: host + "/users/",
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                //console.log(result[i]);
                let html = "<option value=" + result[i].id + ">"+ result[i].id + ": "+ result[i].name + "</option>";
                $("#user-select").append(html);
            }
        }
    })

    let icons = [
        'fa fa-snowflake-o',
        'fa fa-telegram',
        'fa fa-microchip',
        'fa fa-area-chart',
        'fa fa-battery-full',
        'fa fa-bicycle',
        'fa fa-birthday-cake',
        'fa fa-beer',
        'fa fa-cog',
        'fa fa-users',
        'fa fa-fax'
    ]

    for(i = 0; i < icons.length; i++){
        let html = "";
        html += "<div class='icon-box'>";
        html += "<i class='" + icons[i] + "'>";
        html += "</div>";
        $("#icons").append(html);
    }
});

// A FUNCTION to:
// loop through all users
// color the icons according to the user (bonus: add missing icons)
// add the userid as a data attribute

//149.28.182.129:3000
var timeschecked = 0;
function checkusers(){
    timeschecked ++;
    console.log("Checked for users: " + timeschecked);

    $.ajax({
        url: host + "/users/",
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                console.log( result[i].class );
                if (typeof result[i].class != 'undefined' ){
                    //fa fa-icons
                    //.fa-icons
                    let userclasses = "." + result[i].class.split(" ")[1];
                    $(userclasses).css("color", result[i].color);
                    $(userclasses).data("userid", result[i].id);
                }
            }
        }
    })
    setTimeout(function(){
        checkusers();
    }, 2000);
}
checkusers();

// A check on icon click, to make sure it isn't already owned


var selectedicon;
$("#icons").on("click", "i", function(){
    //console.log(this);
    //console.log( $("#user-select").val() ) ;

    let id = $("#user-select").val();
    selectedicon = this;

    if ( id > 0 ){
        //getting & showing the colour on our icon
        $.ajax({
            url: host + "/users/" + id,
            success: function (result) {
                console.log( result.color );
                $(selectedicon).css("color", result.color);
                $(selectedicon).data("userid", result.id);
            }
        });

        //update our user with the icon class
        let iconclass = $(this).attr('class');
        let user = {
            id: id,
            class: iconclass
        }

        console.log(user);
        $.ajax({
            url: host + "/users/" + id,
            method: "PATCH",
            data: user,
            success: function (result) {
                console.log("SUCCESS!");
                console.log(result);
            }
        });
    } 
});

*/