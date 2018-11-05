var host = 'http://localhost:3000'
$( document ).ready(function() {
    console.log( "ready!" );

    $.ajax({
        url: function (result){
            for(i = 0; i < result.length; i++){
                console.log(result[i]);

                let html = "</option value=" + result[i].id + ">";
                html += result[i].id + ": " + result[i].name;
                html += "</option>";

                $("user-select").append(html)
            }
        }
    })

    let icons = [
        'fa-hand-lizard-o',
        'fa-magic',
        'fa-heartbeat',
        'fa-hourglass-end',
        'fa-magnet',
        'fa-lemon-o',
        'fa-wrench',
        'fa-wheelchair-alt',
        'fa-american-sign-language-interpreting',
        'fa-meh-o'
    ];

    for(i = 0; i < icons.length; i++){
        let html = "";
        html +="<div class='icon-box'>";
        html +="<i class='" + icon-box[i] + "'>";
        html +="</div>";
        $("#icons").append(html);
    }
});
$("#icons").on("click", "i", function(){
console.log(this);
let id = $("#user-select").val();
console.log("id : " + id);

$(this).data("userid", id);
$(this).css("color", "blue");

let userclass = $(this).attr('class');
console.log("userclass : " + userclass );

console.log("userid : " + $(this).data("userid"));

    let user = {
        id: id,
        class: userclass
    }
});

$.ajax({
    url: "http://localhost:3000/users/", // + id
    method: "POST", //PATCH or DELETE
    data: user,
    success: function (result) {
        console.log("SUCCESS!");
        console.log(result);
    }
});
var updateIconscount = 0;
function updateIcons(){
    console.log("update Icons: " + updateIconscount);
    updateIconscount ++;
    $.ajax({
        url: host + "/users/",    
        success: function (result) {
            for(i = 0; i < icons.length; i++){
                if(result[i].class != 'undifined' && result[i].color != 'nudefined'){
    
                    let color = result[i].color;
                    let classes = result[i].class;
                    let mainclass = classes.split(" ")[1];
                    console.log(mainclass);           
                    mainclass = "." + mainclass;     
                    if($(mainclass).length){
                    $(mainclass).css("color", color);
                    $(mainclass).data("userid", result[i].id);
                    }
                    else
                    {
                        let html = "";
                        html +="<div class='icon-box'>";
                        html +="<i class='" + result[i].class + "'data-userid='" + result[i].id + "'>";
                        html +="</div>";
                        $("#icons").append(html);
                    }
                }                
            }
        }
    });
    
    setTimeout( function(){
        updateIcons();
    }, 5000)
}
updateIcons();