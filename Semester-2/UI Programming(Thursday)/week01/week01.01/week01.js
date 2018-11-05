var entries = {
  'john': 20,
  'jenny': 77,
  'jack': 13,
}
var winners = {
  'john': 0,
  'jenny': 0,
  'jack': 0,
};

function addplayer(){
  let mynumber = document.getElementById("mynumber").value;
  let myname = document.getElementById("myname").value;
  mynumber = parseInt(mynumber);

  entries[myname] = mynumber;
  winners[myname] = 0;
  console.log(entries);
}

function rolldice() {

  //DELETE: console.log("your number is: " + mynumber);
  document.getElementById("results").innerHTML = "Your Results Are: <br>";

  for (i = 0; i < 100; i++) {

    let rand = Math.random() * 100;
    rand = Math.floor(rand);
    let notfound = true;

    for (let key in entries) {
      if (entries.hasOwnProperty(key)) {
        if (rand === entries[key]){
          //we have a match
          document.getElementById("results").innerHTML += key + " Wins: " + rand + "<br>";
          notfound = false;
          winners[key] ++;
        }
      }
    }

    if (notfound) {
      document.getElementById("results").innerHTML += rand + "<br>";
    }
  }

  document.getElementById("winners").innerHTML = "Our Winners: <br>";

  for (let key in winners) {
    if (winners.hasOwnProperty(key)) {
      if (winners[key] > 0){
        document.getElementById("winners").innerHTML += key + " with " + winners[key] + " wins! <br>";
      }
    }
  }

}