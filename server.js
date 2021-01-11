const yourUserId = ""; // put your user id here
const robloSecurity = ""; // put roblosecurity token here

const whitelist = ""; // whitelist of user ids separated by a comma; none of the users in the list will be unfriended. example is 0000,0000,0000

const noblox = require("noblox.js");

let whitelistArray = whitelist.split(",");

function loop(f, number) {
  setTimeout(function() {
    console.log(number);
    if (whitelistArray[0] == "") {
      noblox.removeFriend(f[number].id);
    } else if (whitelistArray.indexOf(f[number].id) == -1) {
      noblox.removeFriend(f[number].id);
    }
    loop(f, number + 1);
  }, 500);
}

async function run() {
  await noblox.setCookie(robloSecurity);
  console.log("Bot is up");
  var friends = noblox.getFriends(yourUserId).then(friends => {
    loop(friends.data, 0);
  });
}

run();
